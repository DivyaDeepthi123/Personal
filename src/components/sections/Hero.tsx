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
        timeZone: "Asia/Kolkata",
        timeZoneName: "short",
      };
      const timeString = new Intl.DateTimeFormat("en-US", options).format(now);
      setTime(timeString.replace("GMT+5:30", "IST"));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const currentDay = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(new Date());

  return (
    <section className="max-w-2xl mx-auto px-4 py-10 flex flex-col gap-8">
      {/* Header Metadata */}
      <div className="flex justify-between items-center">
        <h2 className="text-xs font-mono text-muted-foreground tracking-wider leading-6 uppercase">
          EST. 2024
        </h2>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock size={14} className="stroke-[1.5]" />
          <span className="text-xs font-mono tracking-wider uppercase">
            {time || "00:00:00 IST"}
          </span>
        </div>
      </div>

      {/* Profile Info */}
      <div className="flex flex-col gap-6">
        <div className="relative w-fit">
           <Image
              alt="Saumya"
              width={80}
              height={80}
              className="w-20 h-20 rounded-full object-cover grayscale border border-white/10"
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1766133007779.png?width=8000&height=8000&resize=contain"
              priority
            />
          
          {/* Status Indicator */}
          <div className="absolute bottom-1 right-1 group">
            <span className="w-3.5 h-3.5 bg-background rounded-full flex items-center justify-center cursor-pointer border-[1.5px] border-background">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></span>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Hey, Saumya here
          </h1>
          <p className="text-muted-foreground text-lg">
            How&apos;s your {currentDay} ?
          </p>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="flex flex-col gap-4 w-full text-lg leading-relaxed text-muted-foreground">
        <p>
          I&apos;m your friendly neighborhood CAD wizard from the mystical land of Haridwar (yep, the place considered as a gateway to lord). With 5+ years of doodling... uh, I mean designing, I turn &ldquo;wait, how?&rdquo; ideas into &ldquo;wow, that&rsquo;s slick!&rdquo; reality.
        </p>
        <p>
          Whether I&apos;m jamming with a team of quirky geniuses or flying solo like a design ninja, I bring a mix of creativity, precision, and just enough magic to make projects shine.
        </p>
      </div>

      {/* Email Hint */}
      <div>
        <p className="text-muted-foreground text-sm flex items-center gap-1.5 opacity-50">
          Press{" "}
          <kbd className="text-foreground text-[10px] border border-border px-1.5 py-0.5 rounded bg-secondary font-mono">
            C
          </kbd>{" "}
          to copy my email
        </p>
      </div>
    </section>
  );
};

export default HeroSection;