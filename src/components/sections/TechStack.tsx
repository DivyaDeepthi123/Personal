import React from 'react';
import { 
  Triangle, 
  Github, 
  Send, 
  MousePointer2, 
  Hexagon, 
  Flame, 
  Database, 
  Leaf, 
  Zap, 
  Boxes, 
  Atom, 
  RefreshCw, 
  Wind, 
  Code2
} from 'lucide-react';

interface TechItem {
  name: string;
  Icon: React.ElementType;
  iconColor?: string;
}

const techStack: TechItem[] = [
  { name: 'Python', Icon: Triangle, iconColor: 'text-white' },
  { name: 'C', Icon: Github, iconColor: 'text-white' },
  { name: 'SQL', Icon: Database, iconColor: 'text-blue-400' },
  { name: 'LangChain', Icon: Send, iconColor: 'text-orange-500' },
  { name: 'Langgraph', Icon: MousePointer2, iconColor: 'text-sky-400' },
  { name: 'JavaScript', Icon: Atom, iconColor: 'text-cyan-400' },
  { name: 'AWS', Icon: Hexagon, iconColor: 'text-green-500' },
  { name: 'Docker', Icon: Flame, iconColor: 'text-orange-600' },
  { name: 'GCP', Icon: Code2, iconColor: 'text-yellow-400' },
  { name: 'Pandas', Icon: Code2, iconColor: 'text-blue-500' },
  { name: 'Large Language Models', Icon: Leaf, iconColor: 'text-green-600' },
  { name: 'Linux', Icon: Zap, iconColor: 'text-red-500' },
  { name: 'RAG', Icon: Boxes, iconColor: 'text-orange-400' },
  { name: 'Cursor', Icon: Triangle, iconColor: 'text-white' },
  { name: 'VSCode', Icon: RefreshCw, iconColor: 'text-red-400' },
  { name: 'Kiro', Icon: Wind, iconColor: 'text-sky-400' },
];

const TechStack: React.FC = () => {
  return (
    <section className="flex flex-col gap-8 max-w-2xl mx-auto px-4 pb-10">
      <h2 className="text-[#A1A1AA] text-base font-mono uppercase tracking-wider">Technology & Tools I Use</h2>
      <div className="space-y-2">
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <div
              key={tech.name}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
