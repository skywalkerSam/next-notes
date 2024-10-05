"use client";

import React from "react";

interface SciFiButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export function GrayscaleSciFiButton(
  { children, onClick }: SciFiButtonProps = { children: "➡️" }
) {
  return (
    <button
      className="relative px-6 py-3 text-3xl sm:text-base md:text-lg font-mono text-gray-300 transition-all duration-500 ease-out 
                 bg-transparent border border-gray-500 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)]
                 hover:text-white hover:border-transparent hover:bg-gray-700 hover:shadow-[0_0_20px_rgba(255,255,255,0.7)]
                 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900
                 group overflow-hidden w-full sm:w-auto float-end mt-3"
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 z-0 bg-gray-600 opacity-0 group-hover:opacity-20"></span>
      <span className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100">
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gray-400 rounded-full blur-2xl animate-pulse"></span>
      </span>
    </button>
  );
}
