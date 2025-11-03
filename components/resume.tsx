"use client";

import { useResume } from "@/hooks/useResume";

export default function Resume() {
  const { data, loading, error } = useResume();

  if (loading) return null; // or a small spinner if you like
  if (error) console.error("Resume fetch error:", error);
  if (!data?.resume) return null;

  return (
    <div className="fixed top-4 md:right-32 right-4 z-10">
      <a
        href={data.resume}
        download
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>
          Download CV
        </button>
      </a>
    </div>
  );
}
