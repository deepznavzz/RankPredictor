export default function GlassCard({ children, className = "" }) {
  return (
    <div className={`glass-card bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl ${className}`}>
      {children}
    </div>
  );
}
