import React from 'react';
import { ChevronRight } from 'lucide-react';

const education = [
  {
    institution: "Rajiv Gandhi University of Knowledge Technologies",
    institutionUrl: "https://rguktn.ac.in/",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1766135888298.png?width=8000&height=8000&resize=contain",
    degree: "Bachelor of Technology(Computer Science Dept)",
    duration: "2022 - 2026"
  }
];

const Education = () => {
  return (
    <section className="flex flex-col gap-8 max-w-2xl mx-auto px-4 pb-0 w-full">
      <h2 className="text-muted-foreground text-base tracking-wider uppercase">Education</h2>
      <div className="flex flex-col gap-4">
        {education.map((edu, index) => (
          <a
            key={index}
            href={edu.institutionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group transition-all block"
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
                    <h3 className="font-medium text-base text-foreground group-hover:text-foreground/80 transition-colors uppercase tracking-tight">
                      {edu.institution}
                    </h3>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {edu.degree}
                  </p>
                </div>
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                {edu.duration}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Education;
