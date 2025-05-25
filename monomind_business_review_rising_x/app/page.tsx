"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Hero from "@/components/hero";
import ExecutiveSummary from "@/components/executive-summary";
import CompanyOverview from "@/components/company-overview";
import ProductsServices from "@/components/products-services";
import OnlinePresence from "@/components/online-presence";
import CompetitiveLandscape from "@/components/competitive-landscape";
import SwotAnalysis from "@/components/swot-analysis";
import MonomindCta from "@/components/monomind-cta";
import Image from "next/image";

export default function Home() {
  // Function to handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((element) => {
        const position = element.getBoundingClientRect();
        // If element is in viewport
        if (position.top < window.innerHeight * 0.8) {
          element.classList.add("is-visible");
        }
      });
    };

    // Initial check
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      
      <section id="executive-summary">
        <ExecutiveSummary />
      </section>
      
      <section id="company-overview">
        <CompanyOverview />
      </section>
      
      <section id="products-services">
        <ProductsServices />
      </section>
      
      <section id="online-presence">
        <OnlinePresence />
      </section>
      
      <section id="competitive-landscape">
        <CompetitiveLandscape />
      </section>
      
      <section id="swot-analysis">
        <SwotAnalysis />
      </section>
      
      <section id="monomind-cta">
        <MonomindCta />
      </section>

      <div className="hidden">
        <Image 
          src="/CleanShot 2025-05-24 at 01.05.50.png"
          alt="Hidden image" 
          width={500}
          height={300}
        />
        <Image 
          src="/CleanShot 2025-05-24 at 01.06.49.png"
          alt="Hidden image" 
          width={500}
          height={300}
        />
        <Image 
          src="/CleanShot 2025-05-24 at 00.43.09.png"
          alt="Hidden image" 
          width={500}
          height={300}
        />
        <Image 
          src="/CleanShot 2025-05-23 at 23.02.36.png"
          alt="Hidden image" 
          width={500}
          height={300}
        />
      </div>
    </div>
  );
}