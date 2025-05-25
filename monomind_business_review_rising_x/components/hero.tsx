"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToContent = () => {
    const element = document.getElementById("executive-summary");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1932&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            MonoMind Business Review: <span className="text-primary">Rising-X</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8">
            A comprehensive analysis of Rising-X's cryptocurrency analytics platform and startup acceleration program
          </p>
          <Button
            onClick={scrollToContent}
            className="rounded-full px-8 py-6"
            size="lg"
          >
            Explore the Analysis
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToContent}
          className="rounded-full border border-white/20 bg-background/20 backdrop-blur-sm"
        >
          <ChevronDown className="h-6 w-6 text-white" />
        </Button>
      </motion.div>
    </div>
  );
}