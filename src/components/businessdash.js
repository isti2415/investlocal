import React from 'react';
import Image from "next/image";

export default function MyBusiness() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-700 dark:text-gray-100">My Business</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-500"
          >
            <div className="relative h-40">
              <Image
                src={project.logo}
                alt={project.businessName}
                className="object-cover w-full h-full"
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div className="p-4 text-black dark:text-white">
              <h2 className="text-lg font-bold mb-2">
                {project.businessName}
              </h2>
              <div className="flex justify-between">
                <p className="text-gray-700 dark:text-gray-300">
                  Project Budget: ${project.projectBudget}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Profit Earned: ${project.profitEarned}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const projects = [
  {
    id: 1,
    businessName: "ABC Inc.",
    logo: "/Asset 1.png",
    profitEarned: 3500,
    projectBudget: 10000,
  },
  {
    id: 2,
    businessName: "XYZ Corp.",
    logo: "/Asset 2.png",
    profitEarned: 5400,
    projectBudget: 20000,
  },
  {
    id: 3,
    businessName: "PQR Ltd.",
    logo: "/Asset 5.png",
    profitEarned: 1200,
    projectBudget: 5000,
  },
  // Add more projects here
];
