import { useState } from "react";
import { motion } from "framer-motion";
import districts from "@/data/districts";

export default function PredictionForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    examType: "TS_EAMCET",
    rank: "",
    district: "HYDERABAD",
    category: "OPEN"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <motion.form 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-8 space-y-6"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold text-center mb-6">AI Rank Predictor</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Exam Type</label>
          <select 
            name="examType"
            value={formData.examType}
            onChange={handleChange}
            className="w-full bg-black/30 border border-white/20 rounded-lg px-4 py-3"
          >
            <option value="TS_EAMCET">TS EAMCET</option>
            <option value="AP_EAMCET">AP EAMCET</option>
            <option value="JEE_MAIN">JEE Main</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Your Rank</label>
          <input
            type="number"
            name="rank"
            value={formData.rank}
            onChange={handleChange}
            className="w-full bg-black/30 border border-white/20 rounded-lg px-4 py-3"
            placeholder="Enter your rank"
            min="1"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">District</label>
          <select 
            name="district"
            value={formData.district}
            onChange={handleChange}
            className="w-full bg-black/30 border border-white/20 rounded-lg px-4 py-3"
          >
            {districts.map(district => (
              <option key={district} value={district}>{district}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Category</label>
          <select 
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full bg-black/30 border border-white/20 rounded-lg px-4 py-3"
          >
            <option value="OPEN">OPEN</option>
            <option value="OBC">OBC</option>
            <option value="SC">SC</option>
            <option value="ST">ST</option>
          </select>
        </div>
      </div>
      
      <button 
        type="submit"
        className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 py-3 rounded-lg font-semibold mt-4 transition-all duration-300"
      >
        Predict Colleges
      </button>
      
      <p className="text-xs text-center text-gray-300 mt-6">
        AI predictions are indicative only. Actual admissions may vary based on official cutoffs.
      </p>
    </motion.form>
  );
}
