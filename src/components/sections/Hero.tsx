"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Clock } from "lucide-react";

const HeroSection = () => {
    const [time, setTime] = useState<string>("");
    const [day, setDay] = useState<string>("");
    const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
      setMounted(true);
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
        
        setDay(new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(now));
      };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "c") {
        navigator.clipboard.writeText("divyadeepthiparuchuri@gmail.com");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="max-w-2xl mx-auto px-4 pt-10 pb-2 flex flex-col gap-8">
      {/* Header Metadata */}
      <div className="flex justify-end items-center">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock size={14} className="stroke-[1.5]" />
          <span className="text-xs font-mono tracking-wider uppercase">
            {mounted ? time : "00:00:00 IST"}
          </span>
        </div>
      </div>

      {/* Profile Info */}
      <div className="flex flex-row items-center gap-10">
        <div className="relative w-fit">
           <Image
              alt="Profile"
              width={64}
              height={64}
              className="w-16 h-16 rounded-full object-cover"
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/_-1766130699563.jpeg?width=8000&height=8000&resize=contain"
              priority
            />
          
          {/* Status Indicator */}
          <div className="absolute bottom-0 right-0 group">
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
            <h1 className="text-2xl md:text-3xl font-normal tracking-wider leading-tight text-foreground mb-1">
              Hey!!! I am Deepthi 
            </h1>
              <p className="text-muted-foreground text-base md:text-lg font-mono">
                Applied AI Researcher (Deep Learning & LLMs)
              </p>
              {mounted && (
                <p className="text-muted-foreground/60 text-xs md:text-sm font-mono mt-2 lowercase">
                  how&apos;s your {day}?
                </p>
              )}
            </div>
      </div>
    </section>
  );
};

export default HeroSection;