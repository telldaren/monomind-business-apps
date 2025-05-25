"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BarChart, LineChart, Rocket, Globe, Users, TrendingUp } from "lucide-react";

export default function ExecutiveSummary() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="section-container bg-background" id="executive-summary">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="section-title">Executive Summary</h2>
        <Separator className="max-w-md mx-auto my-4" />
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Rising X operates in two distinct but complementary business segments within the Web3 ecosystem, 
          providing AI-powered cryptocurrency analytics and a global startup acceleration program.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="animate-on-scroll animate-fade-right">
          <Card className="h-full card-hover">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart className="mr-2 h-6 w-6 text-primary" />
                Cryptocurrency Analytics Platform
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Rising X offers an AI-powered cryptocurrency analytics platform providing real-time market insights, 
                trend analysis, and trading signals to simplify cryptocurrency trading.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <TrendingUp className="mr-2 h-5 w-5 text-primary mt-0.5" />
                  <span>Subscription-based service ($99/month or 13,000 KRW/day)</span>
                </li>
                <li className="flex items-start">
                  <Globe className="mr-2 h-5 w-5 text-primary mt-0.5" />
                  <span>Serving over 30,000 users across 27 countries</span>
                </li>
                <li className="flex items-start">
                  <Users className="mr-2 h-5 w-5 text-primary mt-0.5" />
                  <span>Recently expanded to Dubai to serve the MENA region</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="animate-on-scroll animate-fade-left">
          <Card className="h-full card-hover">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Rocket className="mr-2 h-6 w-6 text-primary" />
                Startup Acceleration Program
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                The "RISING X" global acceleration program focuses on technology-based startups, 
                particularly those combining space design and metaverse with technologies like AI, 
                Big Data, Cloud, AR/VR, and IoT.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <LineChart className="mr-2 h-5 w-5 text-primary mt-0.5" />
                  <span>Seed investment up to 50 million KRW</span>
                </li>
                <li className="flex items-start">
                  <Globe className="mr-2 h-5 w-5 text-primary mt-0.5" />
                  <span>Global market entry support for startups</span>
                </li>
                <li className="flex items-start">
                  <Users className="mr-2 h-5 w-5 text-primary mt-0.5" />
                  <span>Mentoring and consulting from industry experts</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}