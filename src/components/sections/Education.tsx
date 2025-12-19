import React from 'react';
import { ChevronRight } from 'lucide-react';

const education = [
  {
    institution: "Rajiv Gandhi University of Knowledge Technologies",
    institutionUrl: "https://www.rgukt.ac.in/",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1766135888298.png?width=8000&height=8000&resize=contain",
    degree: "Bachelor of Technology",
    duration: "2021 - 2025"
  }
];

const Education = () => {
  return (
    <section className="flex flex-col gap-8 max-w-2xl mx-auto px-4 pb-10 w-full">
      <h2 className="text-muted-foreground text-sm font-mono uppercase tracking-wider">education</h2>
      <div className="flex flex-col gap-4">
        {education.map((edu, index) => (
          <div
            key={index}
            className="group transition-all"
          >
            <div className="flex justify-between items-start">
              <div className="flex gap-4">
                <img
                  alt={edu.institution}
                  className="w-10 h-10 object-contain rounded-lg border border-border bg-white p-1"
                  src={edu.logo}
                  loading="lazy"
                />
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <h3 className="font-medium text-sm font-mono text-foreground group-hover:text-foreground/80 transition-colors uppercase tracking-tight">
                      {edu.institution}
                    </h3>
                    <ChevronRight className="w-3 h-3 text-muted-foreground" />
                  </div>
                  <p className="text-xs text-muted-foreground font-mono">
                    {edu.degree}
                  </p>
                </div>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap font-mono">
                {edu.duration}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
