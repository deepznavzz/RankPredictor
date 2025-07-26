import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(
      JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)
    ),
  });
}

const db = admin.firestore();
db.settings({ ignoreUndefinedProperties: true });

export const getCutoffData = async (district, examType) => {
  const snapshot = await db.collection("cutoffs")
    .where("district", "==", district)
    .where("exam", "==", examType)
    .orderBy("year", "desc")
    .limit(5)
    .get();

  return snapshot.docs.map(doc => doc.data());
};

export const getCollegeData = async (collegeIds) => {
  // Implementation
};
