"use client"

import { useState } from "react";
import { SearchForm } from "../components/SearchForm";
import JobsCarousel from "../components/Carousel";
import ThemeSwitcher from "../components/ThemeSwitcher";

export default function Home() {
  const [keywords, setKeywords] = useState("");
  const [searchBy, setSearchBy] = useState<"country" | "city">("country");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setResults([]);

    let location = "";
    if (searchBy === "country") {
      location = country;
    } else if (searchBy === "city") {
      location = city;
    }

    try {
      const res = await fetch("/api/scrape", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ keywords, location }),
      });

      const data = await res.json();
      setResults(data.jobs || []);
    } catch (error) {
      console.error("Erro ao buscar vagas:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-900">
      <main className="flex-1 max-w-3xl mx-auto py-12 px-4 w-full">
        <div className="flex justify-between items-center mb-6 relative">
          <h1 className="text-3xl font-bold text-center w-full">🔎 Buscador de Vagas no LinkedIn</h1>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <ThemeSwitcher />
          </div>
        </div>

        <SearchForm
          keywords={keywords}
          setKeywords={setKeywords}
          searchBy={searchBy}
          setSearchBy={setSearchBy}
          country={country}
          setCountry={setCountry}
          city={city}
          setCity={setCity}
          loading={loading}
          handleSearch={handleSearch}
        />

        <div className="flex justify-center mt-8">
          <JobsCarousel jobs={results} />
        </div>
      </main>

      <footer className="text-center text-sm text-gray-500 dark:text-gray-400 py-4 border-t border-gray-200 dark:border-gray-700">
        © {new Date().getFullYear()} Maria Eduarda Nobre
      </footer>
    </div>
  );
}
