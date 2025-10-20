import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function SolutionCard({ solution, index, onLearnMore }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group h-full hover:shadow-2xl transition-all duration-300 border-2 border-[#00A9E0]/20 hover:border-[#00A9E0] overflow-hidden bg-[#1a1f35]">
        <CardContent className="p-6 relative">
          <div 
            className="absolute top-0 left-0 w-full h-1 transition-all duration-300 group-hover:h-2"
            style={{ backgroundColor: solution.color }}
          />

          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-16 h-16 rounded-xl mb-4 flex items-center justify-center"
            style={{ backgroundColor: solution.color + '20' }}
          >
            <solution.icon 
              className="w-8 h-8"
              style={{ color: solution.color }}
            />
          </motion.div>

          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#00A9E0] transition-colors">
            {solution.title}
          </h3>
          <p className="text-gray-400 mb-6 line-clamp-2">
            {solution.subtitle}
          </p>

          <Button
            variant="ghost"
            className="group/btn p-0 h-auto font-semibold text-[#00A9E0] hover:text-white transition-colors"
            onClick={onLearnMore}
          >
            Saiba Mais
            <ChevronRight className="w-5 h-5 ml-1 group-hover/btn:translate-x-1 transition-transform" />
          </Button>

          <div 
            className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500"
            style={{ backgroundColor: solution.color }}
          />
        </CardContent>
      </Card>
    </motion.div>
  );
}