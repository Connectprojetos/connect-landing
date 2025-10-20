import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full bg-[#1a1f35] hover:shadow-xl transition-all duration-300 border-2 border-[#00A9E0]/20 hover:border-[#00A9E0]">
        <CardContent className="p-6">
          <div className="flex gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 fill-[#FFB800] text-[#FFB800]" />
            ))}
          </div>

          <p className="text-gray-300 mb-6 italic leading-relaxed">
            "{testimonial.text}"
          </p>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#004C97] to-[#00A9E0] flex items-center justify-center text-white font-bold text-lg">
              {testimonial.avatar}
            </div>
            <div>
              <div className="font-bold text-white">{testimonial.name}</div>
              <div className="text-sm text-gray-400">{testimonial.role}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}