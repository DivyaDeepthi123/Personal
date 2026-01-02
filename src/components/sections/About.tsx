import React from "react";

const About = () => {
  return (
    <section className="max-w-2xl mx-auto px-4 flex flex-col gap-3 !mt-12">
      <h2 className="text-muted-foreground text-base tracking-wider">Currently</h2>
      <div className="flex flex-col gap-3 text-sm md:text-base text-muted-foreground leading-relaxed tracking-tight">
        <p>~ learning the concepts and tools needed to build practical LLM-based apps..</p>
        <p>~ making things better with hard work, patience, and relentless debugging until things work the right way..</p>
        <p>~ usually, spend my time exploring the groundbreaking truths of AI..</p>
      </div>
    </section>
  );
};

export default About;
