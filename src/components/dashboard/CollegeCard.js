import { motion } from "framer-motion";
import { calculateProbability } from "@/lib/normalization";

export default function CollegeCard({ college }) {
  const probability = calculateProbability(college.rank, college.cutoff);
  
  // Probability color mapping
  const getColor = (prob) => {
    if (prob > 0.8) return "from-green-500 to-emerald-600";
    if (prob > 0.5) return "from-cyan-500 to-blue-600";
    if (prob > 0.3) return "from-yellow-500 to-amber-600";
    return "from-red-500 to-rose-600";
  };

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="glass-card p-6 mb-6 overflow-hidden"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold">{college.name}</h3>
          <p className="text-purple-300">{college.branch}</p>
        </div>
        
        <div className={`bg-gradient-to-r ${getColor(probability)} px-4 py-1 rounded-full`}>
          <span className="font-bold text-white">
            {(probability * 100).toFixed(1)}%
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <p className="text-sm text-gray-300">Expected Cutoff</p>
          <p className="font-mono">~{college.cutoff.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-sm text-gray-300">Annual Fees</p>
          <p className="font-mono">?{college.fee.toLocaleString()}</p>
        </div>
      </div>
      
      <div className="mt-4">
        <div className="flex justify-between text-sm mb-1">
          <span>Admission Chance</span>
          <span>{(probability * 100).toFixed(0)}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div 
            className={`h-2.5 rounded-full ${getColor(probability).replace('from-', 'bg-').split(' ')[0]}`}
            style={{ width: `${probability * 100}%` }}
          ></div>
        </div>
      </div>
    </motion.div>
  );
}
