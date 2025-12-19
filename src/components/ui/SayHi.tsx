'use client';

import React from 'react';

export function SayHi() {
  return (
    <a
      href="mailto:nikhilnigamnik@gmail.com"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-2 bg-[#1A1A1A] border border-[#27272A] rounded-2xl hover:bg-[#27272A] transition-all duration-300 shadow-lg group hover:scale-105"
    >
      <span className="text-xl">✌️</span>
      <span className="text-white font-medium text-sm">Say Hi!</span>
    </a>
  );
}
