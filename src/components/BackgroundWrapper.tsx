"use client";
import React from "react";
import { BackgroundBoxesDemo } from "./Background";

export function BackgroundWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full overflow-hidden relative">
      <div className="fixed inset-0 z-0">
        <BackgroundBoxesDemo />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
export default BackgroundWrapper;
