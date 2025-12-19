"use client"

import React from 'react';
import { Github, Linkedin, Mail, Home, Notebook, Sun, Moon } from 'lucide-react';
import { useTheme } from "next-themes";
import { Dock, DockIcon, DockSeparator } from "@/components/ui/dock";

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const Connect = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <section className="max-w-2xl mx-auto px-4 pb-10 flex flex-col gap-4">
        
        <div className="flex justify-center w-full">
          <Dock className="pointer-events-auto">
            <a href="https://github.com/divyadeepthi123" target="_blank" rel="noopener noreferrer">
              <DockIcon tooltip="GitHub">
                <Github className="size-5 text-white" />
              </DockIcon>
            </a>
            <a href="https://www.linkedin.com/in/divya-deepthi-paruchuri-7683172ba/" target="_blank" rel="noopener noreferrer">
              <DockIcon tooltip="LinkedIn">
                <Linkedin className="size-5 text-white" />
              </DockIcon>
            </a>
            <a href="https://x.com/DivyaDeepthi824" target="_blank" rel="noopener noreferrer">
              <DockIcon tooltip="X">
                <XIcon />
              </DockIcon>
            </a>
            <a href="mailto:nikhilnigamnik@gmail.com">
              <DockIcon tooltip="Email">
                <Mail className="size-5 text-white" />
              </DockIcon>
            </a>
          </Dock>
        </div>
      </section>

      <footer className="max-w-2xl mx-auto px-4 pt-2 pb-20">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-[#A1A1AA] text-xs font-mono">
              {new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#A1A1AA] text-sm font-mono">Andhra Pradesh, India</span>
          </div>
        </div>
      </footer>

      <div className="footer-blur" />
    </>
  );
};

export default Connect;
