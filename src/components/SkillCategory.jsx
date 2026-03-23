import React from "react";
import { motion } from "framer-motion";

const SkillCategory = ({ title, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <h2
        className="text-2xl md:text-3xl font-semibold mb-8 text-balance"
        style={{ letterSpacing: "-0.02em" }}
      >
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>
    </motion.div>
  );
};

export default SkillCategory;
