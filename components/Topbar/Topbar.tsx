"use client";

import { cn } from "@/lib/utils";
import AnimatedGradientText from "../ui/animated-gradient-text";
import { ChevronRight } from "lucide-react";

export default function Topbar() {
  return (
    <div className="fixed top-10 w-full flex justify-between items-center px-10 z-10">
      <div className="text-xl font-medium">Portfolio</div>
      <div>Home About Contact Services Projects</div>
      <div className=" font-sans">
        <AnimatedGradientText>
          🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />
          <span
            className={cn(
              `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
            )}
          >
            Let's collaborate
          </span>
          <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedGradientText>
      </div>
    </div>
  );
}
