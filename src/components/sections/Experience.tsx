import React from 'react';

const experiences = [
  {
    title: "Frontend Developer",
    company: "Dodo Payments",
    companyUrl: "https://dodopayments.com",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e24247ae-cc7c-44c7-be34-358bb1d13606-nikhilnigam-in/assets/svgs/P46988q8vD9Do5OUQC5sR4hFZgs-1.svg",
    duration: "Dec 2025 - Present"
  },
  {
    title: "Software Developer",
    company: "Skeontech",
    companyUrl: "https://skeon.tech",
    logo: "https://skeontech.com/favicon.ico",
    duration: "Apr 2024 - Nov 2025"
  }
];

const Experience = () => {
  return (
    <div className="flex flex-col gap-8 max-w-2xl mx-auto px-4 pb-10 w-full">
      <h2 className="text-muted-foreground text-sm font-mono">Experience</h2>
      <div className="flex flex-col gap-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border border-border rounded-lg border-dashed hover:bg-secondary/50 transition-all group"
          >
            <div className="flex flex-col gap-2 p-4">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                  <h3 className="font-medium text-sm font-mono text-foreground group-hover:text-foreground/80 transition-colors">
                    {exp.title}
                  </h3>
                    <div className="flex items-center gap-4">
                    <img
                      alt={exp.company}
                      className="w-3 h-3 object-contain"
                      src={exp.logo}
                      loading="lazy"
                    />
                    <a
                      href={exp.companyUrl}
                      className="text-xs text-muted-foreground font-mono hover:text-foreground transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {exp.company}
                    </a>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap font-mono">
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