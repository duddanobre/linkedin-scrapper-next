"use client";

import React from "react";

type Job = {
  title: string;
  company: string;
  location: string;
  link: string;
};

type Props = {
  job: Job;
};

const JobCard = ({ job }: Props) => {
  return (
    <a
      href={job.link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-[300px] h-[200px] flex flex-col justify-between rounded-2xl border border-gray-200 dark:border-zinc-700 p-4 shadow-md transition hover:shadow-lg hover:border-blue-500"
    >
      <div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white truncate">
          {job.title}
        </h3>
        <p className="text-gray-600 dark:text-zinc-300 truncate">{job.company}</p>
      </div>
      <p className="text-sm text-gray-500 dark:text-zinc-400 truncate">{job.location}</p>
    </a>
  );
};

export default JobCard;
