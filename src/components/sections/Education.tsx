import React from 'react';
import { ChevronRight } from 'lucide-react';

const education = [
  {
    institution: "mumbai university",
    institutionUrl: "https://mu.ac.in",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e24247ae-cc7c-44c7-be34-358bb1d13606-nikhilnigam-in/assets/images/Xy4Q4Q4Q4Q4Q4Q4Q4Q4Q4Q4Q4Q4Q4Q4Q4Q4Q4Q4Q-1.png",
    degree: "electronics & telecommunication",
    duration: "2022 - 2025 (dropped out)"
  }
];

const Education = () => {
  return (
    <section className="flex flex-col gap-8 max-w-2xl mx-auto px-4 pb-10 w-full">
      <h2 className="text-muted-foreground text-sm font-mono">education</h2>
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
                  className="w-10 h-10 object-contain rounded-full border border-border bg-white"
                  src={edu.institutionUrl === "https://mu.ac.in" ? "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/University_of_Mumbai_logo.png/220px-University_of_Mumbai_logo.png" : edu.logo}
                  loading="lazy"
                />
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <h3 className="font-medium text-sm font-mono text-foreground group-hover:text-foreground/80 transition-colors">
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
