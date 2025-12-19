import React from "react";

const About = () => {
  return (
    <section className="max-w-2xl mx-auto px-4 flex flex-col gap-3">
      <h2 className="text-[13px] font-bold lowercase tracking-tight">about</h2>
      <div className="flex flex-col gap-2 text-[13px] text-muted-foreground leading-snug tracking-tight">
        <p>tldr; learnt by hacking around on the internet.</p>
        <p>i like technology and deep science. they make a dent in the universe.</p>
        <p>i write code and make zero mrr apps.</p>
        <p>
          if you want to know more about me,{" "}
          <a
            href="#"
            className="text-foreground underline underline-offset-4 decoration-muted-foreground/60 hover:decoration-foreground transition-colors"
          >
            here are somethings i believe in.
          </a>
        </p>
      </div>
    </section>
  );
};

export default About;
