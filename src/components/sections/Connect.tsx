import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

/**
 * Connect component for the social links and footer section.
 * Clones the "Connect with Me" section and the page footer with 
 * pixel-perfect accuracy to the provided design.
 */
const Connect = () => {
  return (
    <>
      <section className="max-w-2xl mx-auto px-4 pb-10 flex flex-col gap-4">
        <h2 className="text-[#A1A1AA] text-sm font-mono font-normal">Connect with Me</h2>
        
        <div className="flex gap-2 flex-wrap">
          {/* LinkedIn Badge */}
          <a 
            href="https://www.linkedin.com/in/nikhilnigamnik/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border rounded-lg text-xs text-[#A1A1AA] bg-[#1A1A1A] flex border-[#27272A] items-center gap-2 w-fit px-4 py-1 hover:border-[#F43F5E]/75 transition-all duration-300 hover:cursor-pointer font-mono"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#0077B5">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span className="text-[#EDEDED]" data-track="social-LinkedIn">LinkedIn</span>
          </a>

          {/* GitHub Badge */}
          <a 
            href="https://github.com/nikhilnigamnik" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border rounded-lg text-xs text-[#A1A1AA] bg-[#1A1A1A] flex border-[#27272A] items-center gap-2 w-fit px-4 py-1 hover:border-[#F43F5E]/75 transition-all duration-300 hover:cursor-pointer font-mono"
          >
            <Github size={12} className="text-[#EDEDED]" />
            <span className="text-[#EDEDED]" data-track="social-GitHub">GitHub</span>
          </a>

          {/* Twitter / X Badge */}
          <a 
            href="https://x.com/nikhilnigamnik" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border rounded-lg text-xs text-[#A1A1AA] bg-[#1A1A1A] flex border-[#27272A] items-center gap-2 w-fit px-4 py-1 hover:border-[#F43F5E]/75 transition-all duration-300 hover:cursor-pointer font-mono"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <span className="text-[#EDEDED]" data-track="social-Twitter">Twitter</span>
          </a>

          {/* Email Badge */}
          <a 
            href="mailto:nikhilnigamnik@gmail.com" 
            className="border rounded-lg text-xs text-[#A1A1AA] bg-[#1A1A1A] flex border-[#27272A] items-center gap-2 w-fit px-4 py-1 hover:border-[#F43F5E]/75 transition-all duration-300 hover:cursor-pointer font-mono"
          >
            <svg width="12" height="12" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.573l8.073-6.08c1.618-1.214 3.927-.059 3.927 1.964z"/>
            </svg>
            <span className="text-[#EDEDED]" data-track="social-Email">Email</span>
          </a>

          {/* Peerlist Badge */}
          <a 
            href="https://peerlist.io/nikhilnigamnik" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border rounded-lg text-xs text-[#A1A1AA] bg-[#1A1A1A] flex border-[#27272A] items-center gap-2 w-fit px-4 py-1 hover:border-[#F43F5E]/75 transition-all duration-300 hover:cursor-pointer font-mono"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="5.5" stroke="#00AA45" strokeWidth="1"/>
              <path d="M4.5 3.5V8.5" stroke="white" strokeWidth="1" strokeLinecap="round"/>
              <path d="M4.5 3.5H6.5C7.32843 3.5 8 4.17157 8 5C8 5.82843 7.32843 6.5 6.5 6.5H4.5" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[#EDEDED]" data-track="social-Peerlist">Peerlist</span>
          </a>
        </div>
      </section>

      <footer className="max-w-2xl mx-auto px-4 pt-2 pb-20">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-[#A1A1AA] text-xs font-mono">Thu, Dec 18, 2025</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#A1A1AA] text-sm font-mono">America/Chicago</span>
          </div>
        </div>
      </footer>

      {/* Footer background blur as defined in globals.css */}
      <div className="footer-blur" />
    </>
  );
};

export default Connect;