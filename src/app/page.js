"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import PredictionForm from "@/components/dashboard/PredictionForm";
import CollegeCard from "@/components/dashboard/CollegeCard";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Home() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handlePredict = async (formData) => {
    setLoading(true);
    setResults([]);
    
    try {
      const response = await fetch("/api/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Prediction error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <AnimatedSection delay={0.1}>
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 mb-4"
          >
            CollegeRank AI Predictor
          </motion.h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Real-time engineering college predictions for TS/AP EAMCET based on AI analysis of 5-year cutoff trends
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <PredictionForm onSubmit={handlePredict} />
        </div>
        
        <div className="lg:col-span-2">
          <GlassCard className="p-6 min-h-[500px]">
            <h2 className="text-2xl font-bold mb-6">Prediction Results</h2>
            
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
              </div>
            ) : results.length > 0 ? (
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-4">
                {results.map((college, index) => (
                  <CollegeCard 
                    key={index} 
                    college={college} 
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center py-16 text-gray-400">
                <div className="bg-gradient-to-r from-purple-900 to-blue-900 border border-white/10 p-8 rounded-2xl w-full max-w-md">
                  <h3 className="text-xl font-bold mb-2">No Predictions Yet</h3>
                  <p>Enter your rank and district to see AI-powered college predictions</p>
                  <div className="mt-4 h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
                </div>
              </div>
            )}
          </GlassCard>
          
          <div className="mt-8 text-center text-sm text-gray-400">
            <p>Results based on historical cutoffs from 2019-2023. Actual admission may vary.</p>
            <p className="mt-2">© {new Date().getFullYear()} CollegeRank AI Predictor | NEP 2020 Compliant</p>
          </div>
        </div>
      </div>
    </div>
  );
}
