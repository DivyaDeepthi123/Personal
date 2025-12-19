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
  Cable, 
  Server, 
  CloudRain, 
  Activity,
  Code2
} from 'lucide-react';

interface TechItem {
  name: string;
  Icon: React.ElementType;
  iconColor?: string;
}

const techStack: TechItem[] = [
  { name: 'Vercel', Icon: Triangle, iconColor: 'text-white' },
  { name: 'Github', Icon: Github, iconColor: 'text-white' },
  { name: 'Postman', Icon: Send, iconColor: 'text-orange-500' },
  { name: 'Cursor', Icon: MousePointer2, iconColor: 'text-sky-400' },
  { name: 'NodeJs', Icon: Hexagon, iconColor: 'text-green-500' },
  { name: 'Hono', Icon: Flame, iconColor: 'text-orange-600' },
  { name: 'JavaScript', Icon: Code2, iconColor: 'text-yellow-400' },
  { name: 'TypeScript', Icon: Code2, iconColor: 'text-blue-500' },
  { name: 'PostgreSQL', Icon: Database, iconColor: 'text-blue-400' },
  { name: 'MongoDB', Icon: Leaf, iconColor: 'text-green-600' },
  { name: 'Redis', Icon: Zap, iconColor: 'text-red-500' },
  { name: 'Convex', Icon: Boxes, iconColor: 'text-orange-400' },
  { name: 'React', Icon: Atom, iconColor: 'text-cyan-400' },
  { name: 'NextJs', Icon: Triangle, iconColor: 'text-white' },
  { name: 'React Query', Icon: RefreshCw, iconColor: 'text-red-400' },
  { name: 'Tailwind', Icon: Wind, iconColor: 'text-sky-400' },
  { name: 'tRPC', Icon: Cable, iconColor: 'text-blue-500' },
  { name: 'Express', Icon: Server, iconColor: 'text-white' },
  { name: 'Drizzle', Icon: CloudRain, iconColor: 'text-yellow-200' },
  { name: 'Motion', Icon: Activity, iconColor: 'text-purple-400' },
];

const TechStack: React.FC = () => {
  return (
    <section className="flex flex-col gap-8 max-w-2xl mx-auto px-4 pb-10">
      <h2 className="text-[#A1A1AA] text-sm font-mono">Technology & Tools I Use</h2>
      <div className="space-y-2">
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="border rounded-lg text-xs text-[#EDEDED] bg-[#1A1A1A] flex border-[#27272A] items-center gap-2 w-fit px-4 py-1 hover:border-[#F43F5E]/75 transition-all duration-300 hover:cursor-pointer font-mono"
            >
              <div className="flex-shrink-0">
                <tech.Icon 
                  size={12} 
                  className={tech.iconColor || 'text-[#EDEDED]'} 
                  strokeWidth={2.5}
                />
              </div>
              <span className="text-xs text-[#EDEDED]">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;