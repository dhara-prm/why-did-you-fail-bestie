"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { runAnalysis } from "../utils/api";


export default function Home() {

  const router = useRouter();

  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleAnalyze() {

    if (!file) {
      alert("Upload a CSV first bestie 💅");
      return;
    }

    try {

      setLoading(true);

      const result = await runAnalysis(file);

      localStorage.setItem("analysis_result", JSON.stringify(result));

      router.push("/results");

    } catch (error) {

      console.error(error);

      alert("Something went wrong bestie 😭");

      setLoading(false);
    }
  }

  return (
    <main 
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/gingham.jpg')",
        backgroundSize: "300px",
      }}
    >

      {/* Bow Pattern Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[url('/bows.svg')] bg-repeat" />
      </div>

      {/* Card */}
      <div className="bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-xl max-w-md w-full text-center border border-pink-200">

        <h1 className="text-3xl font-bold text-pink-500 mb-2">
          Why Did You Fail, Bestie? 💅
        </h1>

        <p className="text-gray-500 mb-6">
          Upload your model predictions and let AI diagnose the problem.
        </p>

        {/* Upload */}
        <input
          type="file"
          accept=".csv"
          onChange={(e) => {
            if (e.target.files) {
              setFile(e.target.files[0]);
            }
          }}
          className="mb-6 block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-pink-100 file:text-pink-600
          hover:file:bg-pink-200"
        />

        {/* Button */}
        <button
          onClick={handleAnalyze}
          className="w-full py-3 w-full py-3 rounded-xl bg-gradient-to-r from-pink-400 to-rose-400 text-white font-semibold shadow-md hover:from-pink-500 hover:to-rose-500 transition flex items-center justify-center gap-2-xl bg-pink-500 text-white font-semibold hover:bg-pink-600 transition shadow-md"
        >

          {loading ? (
            <>
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Analyzing bestie...
            </>
          ) : ("Analyze Bestie 🎀"

          )}

        </button>

      </div>

    </main>
  );
}