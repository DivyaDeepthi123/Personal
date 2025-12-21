import React from 'react';

const experiences = [
  {
    title: "Video Editor",
    duration: "Mar 2023- Feb 2025"
  }
];

const Experience = () => {
  return (
    <div className="flex flex-col gap-8 max-w-2xl mx-auto px-4 pb-0 w-full">
      <h2 className="text-muted-foreground text-base uppercase tracking-wider">Experience</h2>
      <div className="flex flex-col gap-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border border-border rounded-lg border-dashed hover:bg-secondary/50 transition-all group"
          >
            <div className="flex flex-col gap-2 p-4">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                  <h3 className="font-medium text-base text-foreground group-hover:text-foreground/80 transition-colors">
                    {exp.title}
                  </h3>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {exp.duration}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;