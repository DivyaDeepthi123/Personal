"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  shortDescription: string;
  extendedDescription: string[];
  //link: string;
}

const projects: ProjectItem[] = [
  {
    id: "kitchen-renovation-ai",
    title: "AI Agent for Kitchen Renovation",
    shortDescription:
      "Modular, cloud-native AI system using Google’s Agent Development Kit (ADK) to automate kitchen renovation planning.",
    extendedDescription: [
      "Built single-agent and multi-agent workflows with agents for proposal generation, compliance checks, and order tracking.",
      "Integrated Gemini LLM for natural language inputs and Cloud Run for serverless deployment.",
      "Used AlloyDB for real-time data access and GCS-based PDF storage.",
      "Implemented secure IAM-based backend access.",
    ],
    //link: "https://github.com",
  },
  {
    id: "ai-website-agent",
    title: "AI-Powered Website Agent",
    shortDescription:
      "Automated meeting scheduling system using n8n, Docker, and Gemini LLM.",
    extendedDescription: [
      "Collects user details and discussion topics directly from the website interface.",
      "Verifies slot availability through Google Calendar and logs appointments in Google Sheets.",
      "Ensures bookings are made with at least 48 hours’ notice.",
      "Containerized using Docker for seamless deployment and scalability.",
    ],
    //link: "https://github.com",
  },
  {
    id: "slm-development",
    title: "Language Model Development(SLM training)",
    shortDescription:
      "Development and pre-training of a Gemma 3 270M-like Small Language Model (SLM) in PyTorch.",
    extendedDescription: [
      "Applied techniques for efficient training and model optimization in PyTorch.",
      "Implemented data processing and tokenization pipelines for large text datasets.",
      "Focused on pre-training and architectural efficiency.",
    ],
    //link: "https://github.com",
  },
];

const ProjectCard = ({ project }: { project: ProjectItem }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-border rounded-lg border-dashed hover:bg-secondary/50 transition-all group">
      <div className="flex flex-col gap-2 p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-base font-mono text-foreground group-hover:text-foreground/100 transition-colors">
              {project.title}
            </h3>
          </div>
          <div className="text-sm">
            <p className="leading-relaxed text-sm font-mono tracking-wider text-muted-foreground">
              {project.shortDescription}
            </p>
          </div>
        <div className="flex justify-between items-center mt-1">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 text-xs hover:text-foreground transition-colors cursor-pointer text-muted-foreground"
          >
            <span className="font-mono">Know More</span>
            <ChevronDown
              className={`w-3 h-3 transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </button>

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
                  className="leading-relaxed text-sm font-mono tracking-wider text-muted-foreground"
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
      <h2 className="text-base font-mono uppercase tracking-wider font-bold">Projects I&apos;ve Built</h2>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
