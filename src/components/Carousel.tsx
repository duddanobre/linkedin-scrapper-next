
"use client";
import { useState } from "react";
import JobCard from "./JobCard";

type Job = {
  title: string;
  company: string;
  location: string;
  link: string;
};

export default function JobsCarousel({ jobs }: { jobs: Job[] }) {
  const [page, setPage] = useState(0);
  const itemsPerPage = 3;

  const startIndex = page * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleJobs = jobs.slice(startIndex, endIndex);

  const totalPages = Math.ceil(jobs.length / itemsPerPage);

  return (
    <div>
      <div className="flex justify-center space-x-4 items-stretch">
        {visibleJobs.map((job, idx) => (
          <JobCard key={idx} job={job} />
        ))}
      </div>

      <div className="mt-6 flex justify-center space-x-4">
        <button
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Anterior
        </button>
        <button
          disabled={page >= totalPages - 1}
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Próximo
        </button>
      </div>
    </div>
  );
}
