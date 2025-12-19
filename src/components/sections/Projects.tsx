"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  shortDescription: string;
  extendedDescription: string[];
  link: string;
}

const projects: ProjectItem[] = [
  {
    id: "feon",
    title: "Feon",
    shortDescription:
      "Feon helps you track spending, scan receipts, and understand your expenses by simply chatting on WhatsApp.",
    extendedDescription: [
      "Everything works where you already are—no downloads, no new apps, no confusing screens.",
      "Feon quietly organizes your expenses in the background so you don’t have to think about it.",
      "You get clear weekly summaries that show where your money goes, without charts or jargon.",
    ],
    link: "https://feon.ai",
  },
];

const ProjectCard = ({ project }: { project: ProjectItem }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-border rounded-lg border-dashed hover:bg-secondary/50 transition-all group">
      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-sm font-mono text-foreground group-hover:text-foreground/80 transition-colors">
            {project.title}
          </h3>
        </div>
        <div className="text-sm text-muted">
          <p className="leading-relaxed text-xs font-mono tracking-wider">
            {project.shortDescription}
          </p>
        </div>
        <div className="flex justify-between items-center mt-1">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 text-xs text-muted hover:text-foreground transition-colors cursor-pointer"
          >
            <span className="font-mono">Know More</span>
            <ChevronDown
              className={`w-3 h-3 transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </button>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted hover:text-foreground transition-colors font-mono"
          >
            Visit &rarr;
          </a>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 border-t border-border/50">
          <div className="pt-4 space-y-3">
            {project.extendedDescription.map((desc, index) => (
              <p
                key={index}
                className="leading-relaxed text-xs font-mono tracking-wider text-muted"
              >
                {desc}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <section className="flex flex-col gap-8 max-w-2xl mx-auto px-4 pb-10">
      <h2 className="text-muted text-sm font-mono">Projects I&apos;ve Built</h2>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}