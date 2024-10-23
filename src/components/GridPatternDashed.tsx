"use client";

import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";
import { AnimatedBeamDemo } from "@/components/Sponsorbeam";


export function GridPatternDashed() {
  return (
    <div className="relative w-full flex size-full items-center justify-center overflow-hidden dark:bg-black  bg-background p-20 md:shadow-xl">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
        {/* <AnimatedBeamDemo> */}
      </p>
      <GridPattern
        width={32}
        height={32}
        x={-1}
        y={-1}
        strokeDasharray={""}
        className={cn(
          "[mask-image:radial-gradient(1000px,#121212,transparent)]",
        )}
      />
    </div>
  );
}
