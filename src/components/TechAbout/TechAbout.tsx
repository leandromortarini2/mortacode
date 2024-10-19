"use client";
import React, { useState, useEffect } from "react";
import { MultiStepLoader as Loader } from "../ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";

const loadingStates = [
  { text: "JavaScript" },
  { text: "TypeScript" },
  { text: "React" },
  { text: "Redux Toolkit - RTK Query" },
  { text: "Next.js" },
  { text: "Axios" },
  { text: "Tailwind CSS" },
  { text: "Shadcn UI" },
  { text: "Styled Components" },
];

export function TechAbout({ triggerLoading }) {
  // Recibe la prop
  const [loading, setLoading] = useState(triggerLoading);

  useEffect(() => {
    if (triggerLoading) {
      setLoading(true); // Inicia el loader si se activa la prop
    }
  }, [triggerLoading]);

  return (
    <div className="w-full h-[60vh] flex items-center justify-center">
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />

      {loading && (
        <button
          className="fixed top-4 right-4 text-primary dark:text-white z-[120]"
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
    </div>
  );
}
