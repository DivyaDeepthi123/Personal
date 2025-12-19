import React from 'react';
import {
  Code2,
  Code,
  Database,
  Link,
  Share2,
  Braces,
  Cloud,
  CloudCog,
  Boxes,
  Table,
  Brain,
  Terminal,
  Layers,
  MousePointer2,
  CodeSquare,
  Zap
} from 'lucide-react';

interface TechItem {
  name: string;
  Icon: React.ElementType;
  iconColor?: string;
}

const techStack: TechItem[] = [
  { name: 'Python', Icon: Code2, iconColor: 'text-yellow-400' },
  { name: 'C', Icon: Code, iconColor: 'text-blue-400' },
  { name: 'SQL', Icon: Database, iconColor: 'text-sky-400' },
  { name: 'JavaScript', Icon: Braces, iconColor: 'text-yellow-300' },
  { name: 'Large Language Models', Icon: Brain, iconColor: 'text-pink-400'},
  { name: 'LangChain', Icon: Link, iconColor: 'text-orange-500' },
  { name: 'LangGraph', Icon: Share2, iconColor: 'text-sky-400' },
  { name: 'RAG', Icon: Layers, iconColor: 'text-orange-400' },
  { name: 'AWS', Icon: Cloud, iconColor: 'text-orange-400' },
  { name: 'Docker', Icon: Boxes, iconColor: 'text-blue-500' },
  { name: 'GCP', Icon: CloudCog, iconColor: 'text-green-400' },
  { name: 'Linux', Icon: Terminal, iconColor: 'text-white' },
  { name: 'Cursor', Icon: MousePointer2, iconColor: 'text-white' },
  { name: 'VSCode', Icon: CodeSquare, iconColor: 'text-blue-400' },
  { name: 'Kiro', Icon: Zap, iconColor: 'text-purple-400' },
];


const TechStack: React.FC = () => {
  return (
    <section className="flex flex-col gap-8 max-w-2xl mx-auto px-4 pb-10">
      <h2 className="text-[#A1A1AA] text-base font-mono uppercase tracking-wider">Technology & Tools I Use</h2>
      <div className="space-y-2">
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <React.Fragment key={tech.name}>
                <div
                  className="border rounded-lg text-sm text-[#EDEDED] bg-[#1A1A1A] flex border-[#27272A] items-center gap-2 w-fit px-4 py-1.5 hover:border-[#F43F5E]/75 transition-all duration-300 hover:cursor-pointer font-mono"
                >
                  <div className="flex-shrink-0">
                    <tech.Icon 
                      size={14} 
                      className={tech.iconColor || 'text-[#EDEDED]'} 
                      strokeWidth={2.5}
                    />
                  </div>
                  <span className="text-sm text-[#EDEDED]">{tech.name}</span>
                </div>
                {tech.name === 'Linux' && <div className="basis-full h-0" />}
              </React.Fragment>
            ))}
          </div>
      </div>
    </section>
  );
};

export default TechStack;