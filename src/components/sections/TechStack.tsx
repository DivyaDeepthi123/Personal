"use client";

import React, { useState, useEffect } from 'react';
import {
  SiPython,
  SiJavascript,
  SiAmazon,
  SiDocker,
  SiGooglecloud,
  SiLinux,
  SiVsco,
  SiGit,
  SiGithub,
} from 'react-icons/si';
import {
  Brain,
  Link,
  Share2,
  Layers,
  MousePointer2,
  Zap,
  Code,
  Database,
} from 'lucide-react';

interface TechItem {
  name: string;
  Icon: React.ElementType;
  iconColor?: string;
  isBrand?: boolean;
}

const languages: TechItem[] = [
  { name: 'Python', Icon: SiPython, iconColor: 'text-yellow-400', isBrand: true },
  { name: 'C', Icon: Code, iconColor: 'text-blue-400', isBrand: false },
  { name: 'SQL', Icon: Database, iconColor: 'text-sky-400', isBrand: false },
  { name: 'JavaScript', Icon: SiJavascript, iconColor: 'text-yellow-300', isBrand: true },
];

const frameworks: TechItem[] = [
  { name: 'Large Language Models', Icon: Brain, iconColor: 'text-pink-400', isBrand: false },
  { name: 'LangChain', Icon: Link, iconColor: 'text-orange-500', isBrand: false },
  { name: 'LangGraph', Icon: Share2, iconColor: 'text-sky-400', isBrand: false },
  { name: 'RAG', Icon: Layers, iconColor: 'text-orange-400', isBrand: false },
  { name: 'AWS', Icon: SiAmazon, iconColor: 'text-orange-400', isBrand: true },
  { name: 'Docker', Icon: SiDocker, iconColor: 'text-blue-500', isBrand: true },
  { name: 'Git', Icon: SiGit, iconColor: 'text-red-500', isBrand: true },
  { name: 'GitHub', Icon: SiGithub, iconColor: 'text-white', isBrand: true },
  { name: 'GCP', Icon: SiGooglecloud, iconColor: 'text-green-400', isBrand: true },
  { name: 'Linux', Icon: SiLinux, iconColor: 'text-white', isBrand: true },
];

const tools: TechItem[] = [
  { name: 'Cursor', Icon: MousePointer2, iconColor: 'text-white', isBrand: false },
  { name: 'VSCode', Icon: SiVsco, iconColor: 'text-blue-400', isBrand: true },
  { name: 'Kiro', Icon: Zap, iconColor: 'text-purple-400', isBrand: false },
];

const TechStack: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [day, setDay] = useState<string>("");

  useEffect(() => {
    setMounted(true);
    const now = new Date();
    setDay(new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(now));
  }, []);

  const renderTechGroup = (items: TechItem[]) => (
    <div className="flex flex-wrap gap-3">
      {items.map((tech) => (
        <div
          key={tech.name}
          className="border rounded-lg text-sm text-[#EDEDED] bg-[#1A1A1A] flex border-[#27272A] items-center gap-2 w-fit px-4 py-1.5 hover:border-[#3B82F6]/75 transition-all duration-300 hover:cursor-pointer"
        >
          <div className="flex-shrink-0">
            {tech.isBrand ? (
              <tech.Icon
                size={16}
                className={tech.iconColor || 'text-[#EDEDED]'}
              />
            ) : (
              <tech.Icon
                size={10}
                className={tech.iconColor || 'text-[#EDEDED]'}
                strokeWidth={1.5}
              />
            )}
          </div>
          <span className="text-sm text-[#EDEDED]">{tech.name}</span>
        </div>
      ))}
    </div>
  );

  return (
    <section className="flex flex-col gap-8 max-w-2xl mx-auto px-4 pb-0">
      <h2 className="text-[#A1A1AA] text-base uppercase tracking-wider">Technology & Tools I Use</h2>
      <div className="space-y-4">
        {renderTechGroup(languages)}
        {renderTechGroup(frameworks)}
        {renderTechGroup(tools)}
      </div>
    </section>
  );
};

export default TechStack;
