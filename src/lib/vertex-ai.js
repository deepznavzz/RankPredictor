import { PredictionServiceClient } from "@google-cloud/aiplatform";
import { getCutoffData } from "./firestore";

const client = new PredictionServiceClient({
  apiEndpoint: "asia-south1-aiplatform.googleapis.com",
});

export const predictCollege = async (normalizedRank, district, examType) => {
  const historicalData = await getCutoffData(district, examType);
  
  const instance = {
    normalized_rank: normalizedRank,
    historical_cutoffs: historicalData.map(d => d.cutoff),
    district,
    exam_type: examType
  };

  const [response] = await client.predict({
    endpoint: `projects/${process.env.GOOGLE_CLOUD_PROJECT}/locations/asia-south1/publishers/google/models/rank_predictor`,
    instances: [instance],
  });

  return response.predictions[0].map(pred => ({
    college: pred.college_name,
    branch: pred.branch,
    probability: pred.probability,
    fee: pred.fee_structure,
    cutoff: pred.expected_cutoff
  }));
};
