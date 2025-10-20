import React from "react";
import { motion } from "framer-motion";

export default function BenefitCard({ benefit, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="text-center"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#004C97] to-[#00A9E0] rounded-2xl flex items-center justify-center shadow-lg"
      >
        <benefit.icon className="w-8 h-8 text-white" />
      </motion.div>
      <h3 className="text-lg font-bold text-[#00A9E0] mb-2">
        {benefit.title}
      </h3>
      <p className="text-gray-400 text-sm">
        {benefit.description}
      </p>
    </motion.div>
  );
}