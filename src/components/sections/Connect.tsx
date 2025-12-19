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
        <h2 className="text-[#A1A1AA] text-sm font-mono font-normal">Connect with Me</h2>
        
        <div className="flex justify-center w-full">
          <Dock className="pointer-events-auto">
            <a href="/">
              <DockIcon tooltip="Home">
                <Home className="size-5 text-white" />
              </DockIcon>
            </a>
            <a href="/blog">
              <DockIcon tooltip="Notebook">
                <Notebook className="size-5 text-white" />
              </DockIcon>
            </a>
            <DockSeparator />
            <a href="https://github.com/nikhilnigamnik" target="_blank" rel="noopener noreferrer">
              <DockIcon tooltip="GitHub">
                <Github className="size-5 text-white" />
              </DockIcon>
            </a>
            <a href="https://www.linkedin.com/in/nikhilnigamnik/" target="_blank" rel="noopener noreferrer">
              <DockIcon tooltip="LinkedIn">
                <Linkedin className="size-5 text-white" />
              </DockIcon>
            </a>
            <a href="https://x.com/nikhilnigamnik" target="_blank" rel="noopener noreferrer">
              <DockIcon tooltip="X">
                <XIcon />
              </DockIcon>
            </a>
            <a href="mailto:nikhilnigamnik@gmail.com">
              <DockIcon tooltip="Email">
                <Mail className="size-5 text-white" />
              </DockIcon>
            </a>
            <DockSeparator />
            <DockIcon 
              tooltip="Theme" 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-white" />
              <Moon className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-white" />
            </DockIcon>
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
            <span className="text-[#A1A1AA] text-sm font-mono">America/Chicago</span>
          </div>
        </div>
      </footer>

      <div className="footer-blur" />
    </>
  );
};

export default Connect;
