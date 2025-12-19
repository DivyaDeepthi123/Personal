"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Clock } from "lucide-react";

const HeroSection = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata", // Matching the general location from content
        timeZoneName: "short",
      };
      const timeString = new Intl.DateTimeFormat("en-US", options).format(now);
      // Format to match screenshot: 23:37:26 CST (example)
      // We'll simplify to just HH:MM:SS IST/CST based on current local or specific zone
      setTime(timeString.replace("GMT+5:30", "IST"));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "c") {
        navigator.clipboard.writeText("nikhilnigamnik@gmail.com");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="max-w-2xl mx-auto px-4 py-10 flex flex-col gap-4">
      {/* Header Metadata */}
      <div className="flex justify-between items-center">
        <h2 className="text-xs font-mono text-muted-foreground tracking-wider leading-6 uppercase">
          EST. 2004
        </h2>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock size={14} className="stroke-[1.5]" />
          <span className="text-xs font-mono tracking-wider uppercase">
            {time || "00:00:00 IST"}
          </span>
        </div>
      </div>

      {/* Profile Info */}
      <div className="flex flex-col gap-4">
        <div className="relative w-fit">
            <Image
              alt="Profile"
              width={64}
              height={64}
              className="w-16 h-16 rounded-2xl object-cover"
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/_-1766130699563.jpeg?width=8000&height=8000&resize=contain"
              priority
            />
          
          {/* Status Indicator */}
          <div className="absolute bottom-0 left-14 group">
            <span className="w-3.5 h-3.5 bg-background rounded-full flex items-center justify-center cursor-pointer border-[1.5px] border-background">
              <span className="w-2.5 h-2.5 bg-success rounded-full"></span>
            </span>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
              <div className="bg-secondary/80 backdrop-blur-xl border border-border rounded-xl px-2.5 py-1.5 flex items-center gap-2 whitespace-nowrap shadow-lg">
                <span className="w-2 h-2 bg-success rounded-full"></span>
                <span className="text-foreground text-[10px] uppercase font-mono tracking-tight">
                  Available for work
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-lg font-normal tracking-wider leading-6 text-foreground">
            Nikhil Nigam
          </h1>
          <a
            className="text-muted-foreground text-sm hover:text-foreground transition-colors font-mono"
            href="https://x.com/nikhilnigamnik"
            target="_blank"
            rel="noopener noreferrer"
          >
            Developer & Designer
          </a>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="flex flex-col gap-2 w-full tracking-wider leading-6">
        <p className="text-muted-foreground text-sm">
          I&apos;m Nikhil Nigam. I design and make things. I arrange everything so
          it&apos;s easy to understand. I aim for things to be straightforward and
          reliable.
        </p>
        <div>
          <p className="text-muted-foreground text-sm">
            Right now I spend my days at{" "}
            <a
              className="text-foreground text-xs border border-border px-1.5 py-0.5 rounded-md bg-secondary hover:bg-foreground/10 transition-colors cursor-pointer inline-flex items-center gap-1.5 align-middle"
              href="https://dodopayments.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="12" height="12" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
                <path d="M60 0C26.8629 0 0 26.8629 0 60C0 93.1371 26.8629 120 60 120C93.1371 120 120 93.1371 120 60C120 26.8629 93.1371 0 60 0ZM88.5 60C88.5 75.7401 75.7401 88.5 60 88.5C44.2599 88.5 31.5 75.7401 31.5 60C31.5 44.2599 44.2599 31.5 60 31.5C75.7401 31.5 88.5 44.2599 88.5 60Z" fill="currentColor"/>
                <path d="M60 45C51.7157 45 45 51.7157 45 60C45 68.2843 51.7157 75 60 75C68.2843 75 75 68.2843 75 60C75 51.7157 68.2843 45 60 45Z" fill="#22C55E"/>
              </svg>
              Dodo Payments.
            </a>
          </p>
        </div>
        <p className="text-muted-foreground text-sm">
          I like solving problems. When something is broken or confusing, I want
          to fix it. When something could be better, I want to make it better.
        </p>
        <p className="text-muted-foreground text-sm">
          When I&apos;m done for the day, I get on my{" "}
          <span className="text-foreground">bike</span> and ride through
          different places in India.
        </p>
      </div>

      {/* Email Hint */}
      <div>
        <p className="text-muted-foreground text-sm flex items-center gap-1.5">
          Press{" "}
          <kbd className="text-foreground text-[10px] border border-border px-1.5 py-0.5 rounded bg-secondary hover:bg-foreground/10 transition-colors cursor-pointer font-mono min-w-[1.5rem] text-center shadow-sm">
            C
          </kbd>{" "}
          to copy my email
        </p>
      </div>
    </section>
  );
};

export default HeroSection;