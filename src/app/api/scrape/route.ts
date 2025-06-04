import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import * as cheerio from "cheerio";

const baseUrl = "https://www.linkedin.com/jobs-guest/jobs/api/seeMoreJobPostings/search";

function buildSearchUrl(keywords: string, location: string, start = 0) {
  const encodedKeywords = encodeURIComponent(keywords);
  const encodedLocation = encodeURIComponent(location);
  return `${baseUrl}?keywords=${encodedKeywords}&location=${encodedLocation}&start=${start}`;
}

async function scrapeJobs(keywords: string, location: string, pages = 2) {
  const allJobs: unknown[] = [];

  for (let i = 0; i < pages; i++) {
    const start = i * 25;
    const url = buildSearchUrl(keywords, location, start);

    try {
      const { data } = await axios.get(url, {
        headers: { "User-Agent": "Mozilla/5.0" },
      });

      const $ = cheerio.load(data);

      $("li").each((_, el) => {
        const title = $(el).find("h3").text().trim();
        const company = $(el).find(".base-search-card__subtitle").text().trim();
        const jobLocation = $(el).find(".job-search-card__location").text().trim();
        const link = $(el).find("a").attr("href");

        if (title && company && link) {
          allJobs.push({ title, company, location: jobLocation, link });
        }
      });
    } catch (error) {
      console.error(`Erro ao buscar página ${i + 1}:`, (error as Error).message);
    }
  }

  return allJobs;
}

export async function POST(req: NextRequest) {
  const { keywords, location } = await req.json();

  if (!keywords || !location) {
    return NextResponse.json({ error: "Parâmetros inválidos" }, { status: 400 });
  }

  let searchLocation = location.trim();

  if (searchLocation.toLowerCase() === "brasil") {
    searchLocation = "Brazil";
  }

  const jobs = await scrapeJobs(keywords, searchLocation);
  return NextResponse.json({ jobs });
}
