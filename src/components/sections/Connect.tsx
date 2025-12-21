"use client"

import React, { useState, useEffect } from 'react';
import { Github, Mail } from 'lucide-react';
import { useTheme } from "next-themes";
import { Dock, DockIcon, DockSeparator } from "../ui/dock";

const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const Connect = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [day, setDay] = useState<string>("");

  useEffect(() => {
    setMounted(true);
    const now = new Date();
    setDay(new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(now));
  }, []);

  return (
    <>
      <section className="max-w-2xl mx-auto px-4 flex flex-col gap-2 !mt-12">

        <h2 className="text-center text-muted-foreground mb-0">
          If you’re up late and curious too, hmu.
        </h2>

        <div className="flex justify-center w-full !mt-0">
          <Dock className="pointer-events-auto">
            <a href="https://github.com/divyadeepthi123" target="_blank" rel="noopener noreferrer">
              <DockIcon tooltip="GitHub">
                <Github className="size-6 text-white" />
              </DockIcon>
            </a>
            <a href="https://www.linkedin.com/in/divya-deepthi-paruchuri-7683172ba/" target="_blank" rel="noopener noreferrer">
              <DockIcon tooltip="LinkedIn">
                <LinkedinIcon />
              </DockIcon>
            </a>
            <a href="https://x.com/DivyaDeepthi824" target="_blank" rel="noopener noreferrer">
              <DockIcon tooltip="X">
                <XIcon />
              </DockIcon>
            </a>
            <a href="mailto:divyadeepthiparuchuri@gmail.com">
              <DockIcon tooltip="Email">
                <Mail className="size-6 text-white" />
              </DockIcon>
            </a>
          </Dock>
        </div>

        <div className="flex justify-center w-full mt-4">
          <p className="text-muted-foreground flex items-center gap-1.5">
            Press{" "}
            <kbd className="text-foreground text-[10px] border border-border px-1.5 py-0.5 rounded bg-secondary hover:bg-foreground/10 transition-colors cursor-pointer min-w-[1.5rem] text-center shadow-sm">
              C
            </kbd>{" "}
            to copy my email
          </p>
        </div>
        {mounted && (
          <p className="text-muted-foreground font-normal tracking-tight text-2xl font-bold !mt-12">
            BTW,, How&apos;s your {day}?
          </p>
        )}
      </section>

      <footer className="max-w-2xl mx-auto px-4 pt-1 pb-8">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-[#A1A1AA]">
              {new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#A1A1AA]">Andhra Pradesh, India</span>
          </div>
        </div>
      </footer>
      <div className="footer-blur" />
    </>
  );
};

export default Connect;
