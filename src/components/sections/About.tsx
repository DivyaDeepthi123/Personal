import React from "react";

const About = () => {
  return (
    <section className="max-w-2xl mx-auto px-4 flex flex-col gap-3">
      <div className="flex flex-col gap-3 text-base md:text-lg text-muted-foreground leading-relaxed tracking-tight">
        <p>-- I make things better with hard work, patience, and relentless debugging until things work the right way..</p>
        <p>-- I learnt by exploring the internet and building things. Love contributing to open source.</p>
        <p>-- when boredom hits, I usually spend my time reading books and exploring the Groundbreakind truths of AI..</p>
      </div>
      <div>
        <p className="text-muted-foreground text-sm flex items-center gap-1.5">
          (Press{" "}
          <kbd className="text-foreground text-[10px] border border-border px-1.5 py-0.5 rounded bg-secondary hover:bg-foreground/10 transition-colors cursor-pointer font-mono min-w-[1.5rem] text-center shadow-sm">
            C
          </kbd>{" "}
          to copy my email)
        </p>
      </div>
    </section>
  );
};

export default About;
