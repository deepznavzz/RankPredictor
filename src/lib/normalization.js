// JEE/EAMCET normalization algorithms
export const normalizeRank = (rawRank, examType, year, category) => {
  // Base normalization factors
  let factor = 1.0;
  
  // Exam-specific adjustments
  if (examType === 'TS_EAMCET') factor *= 0.92;
  if (examType === 'AP_EAMCET') factor *= 0.89;
  
  // Year-based difficulty adjustment
  const yearDiffs = {
    2022: 0.95,
    2023: 1.02,
    2024: 1.05
  };
  
  // Category-based normalization
  const categoryFactors = {
    'OPEN': 1.0,
    'OBC': 0.92,
    'SC': 0.85,
    'ST': 0.82
  };
  
  return Math.round(rawRank * factor * yearDiffs[year] * categoryFactors[category]);
};

// Additional utilities
export const calculateProbability = (rank, cutoff) => {
  const diff = cutoff - rank;
  return diff > 0 ? Math.min(0.99, 0.7 + (diff / cutoff * 0.3)) : 0.01;
};
