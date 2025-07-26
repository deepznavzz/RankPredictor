import "./globals.css";
import ParticleBG from "@/components/dashboard/ParticleBG";

export const metadata = {
  title: "CollegeRank AI Predictor",
  description: "TS/AP EAMCET Rank Prediction Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 min-h-screen">
        <ParticleBG />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
