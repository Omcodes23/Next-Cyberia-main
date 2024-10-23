import React from "react";
import { Cover } from "@/components/ui/cover";

export function CoverDemo() {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold max-w-full text-center relative z-20  bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        <Cover>Unleash the Geek Within You With Magical CYBERIA</Cover>
      </h1>
    </div>
  );
}

export default CoverDemo;
