"use client";
import React, { useState, useEffect } from "react";
import { MultiStepLoader as Loader } from "./ui/multi-step-loader";
import { RxCross2 } from "react-icons/rx";

const loadingStates = [
  { text: "Bulidng Cache" },
  { text: "Looking for Changes" },
  { text: "Commiting Changes" },
  { text: "Pushing the final Code" },
  { text: "Deploying..." },
  { text: "Completed" }, 
];

export function MultiStepLoaderDemo() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if loading is true and the loadingStates sequence is complete
    if (loading) {
      const timer = setTimeout(() => {
        // Redirect to the specified URL once loading completes
        window.location.href = "https://msudcacyberia.in";
      }, loadingStates.length * 2000); // duration * number of loadingStates
      
      return () => clearTimeout(timer); // Clear timer on component unmount
    }
  }, [loading]);

  return (
    <div className="w-full h-[60vh] flex items-center justify-center">
      {/* Core Loader Modal */}
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />
      
      {/* Demo button */}
      <button
        onClick={() => setLoading(true)}
        className="bg-[#39C3EF] hover:bg-[#39C3EF]/90 text-black mx-auto text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 flex items-center justify-center"
        style={{
          boxShadow:
            "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
        }}
      >
        Click to Launch
      </button>

      {loading && (
        <button
          className="fixed top-4 right-4 text-black dark:text-white z-[120]"
          onClick={() => setLoading(false)}
        >
          <RxCross2 className="h-10 w-10" />
        </button>
      )}
    </div>
  );
}