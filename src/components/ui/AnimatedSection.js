import { motion } from "framer-motion";

export default function AnimatedSection({ 
  children, 
  delay = 0.2,
  className = "" 
}) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
