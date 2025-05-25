"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Mail, Lightbulb, TrendingUp, BarChart } from "lucide-react";

export default function MonomindCta() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="section-container bg-gradient-to-b from-background to-muted/30" id="monomind-cta">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="section-title">Discover How MonoMind Can Empower Your Business</h2>
        <Separator className="max-w-md mx-auto my-4" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="animate-on-scroll animate-fade-right">
          <Card className="card-hover h-full overflow-hidden">
            <div className="relative h-64 lg:h-full">
              <Image 
                src="/monomind_visionhead_m_color_blackbg_1920.jpg"
                alt="MonoMind" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Innovative Solutions for Modern Challenges</h3>
                <p className="text-white/80">Transforming data into actionable insights</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="animate-on-scroll animate-fade-left">
          <Card className="card-hover h-full">
            <CardContent className="p-8">
              <p className="text-lg mb-6">
                At MonoMind, we&apos;re dedicated to transforming challenges into opportunities. Our innovative solutions are designed to streamline your operations, enhance your strategic decision-making, and unlock new avenues for growth. Whether you&apos;re looking to optimize processes, gain deeper insights from your data, or build a more resilient future, MonoMind provides the expertise and tools to help you achieve your goals.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Lightbulb className="mr-2 h-5 w-5 text-primary" />
                    Strategic Insights
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Data-driven analysis to inform your most critical business decisions
                  </p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                    Growth Acceleration
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Targeted strategies to expand your market presence and customer base
                  </p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <BarChart className="mr-2 h-5 w-5 text-primary" />
                    Performance Optimization
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Streamlined processes to maximize efficiency and resource utilization
                  </p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Mail className="mr-2 h-5 w-5 text-primary" />
                    Tailored Solutions
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Customized approaches that address your unique business challenges
                  </p>
                </div>
              </div>
              
              <p className="text-lg font-medium mb-6">
                Ready to explore how we can tailor our capabilities to your unique needs?
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://share.monomind.one/monomind-our-services" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto">
                    View Our Service Deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="mailto:hello@monomind.one">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Contact Us <Mail className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="text-center animate-on-scroll animate-fade-up">
        <p className="text-muted-foreground">
          For direct inquiries, feel free to reach out to us: <Link href="mailto:hello@monomind.one" className="text-primary hover:underline">hello@monomind.one</Link>
        </p>
      </div>
    </div>
  );
}