"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { resumeType } from "@/types/resume";

export function useResume() {
  const [data, setData] = useState<resumeType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchResume() {
      try {
        const res = await axios.get("/api/resume");
        // ensure backend sends { data: { resume: "url" } }
        setData(res.data.data || null);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchResume();
  }, []);

  return { data, loading, error };
}
