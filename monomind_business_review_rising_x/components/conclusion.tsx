"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  ArrowRight, 
  Target, 
  TrendingUp, 
  Globe, 
  Users, 
  Lightbulb,
  FileDown,
  ExternalLink
} from "lucide-react";

export default function Conclusion() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="section-container bg-background" id="conclusion">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="section-title">Conclusion</h2>
        <Separator className="max-w-md mx-auto my-4" />
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Rising X operates in two highly competitive but rapidly growing segments of the Web3 ecosystem, with unique opportunities for growth and differentiation.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 mb-12">
        <div className="animate-on-scroll animate-fade-up">
          <Card className="card-hover">
            <CardContent className="p-8">
              <p className="text-lg mb-6">
                Rising X operates in two highly competitive but rapidly growing segments of the Web3 ecosystem. In the cryptocurrency analytics space, it faces established competitors with strong feature sets and user bases, but can differentiate through its AI-driven approach and regional expertise. In the startup acceleration space, it competes with well-funded programs with strong track records, but can carve out a niche through its dual business model and geographic focus.
              </p>
              <p className="text-lg mb-6">
                The company&apos;s recent expansion to Dubai represents a strategic opportunity to capitalize on the growing MENA cryptocurrency market and position itself as a bridge between Asian and Middle Eastern Web3 ecosystems.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="animate-on-scroll animate-fade-up">
        <Card className="card-hover bg-primary/5 dark:bg-primary/10">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="mr-2 h-6 w-6 text-primary" />
              Key Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card rounded-lg p-5 shadow-sm">
                <h3 className="font-semibold mb-3 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                  Enhance Transparency
                </h3>
                <p className="text-muted-foreground mb-4">
                  Improve public information about team, technology, and success stories to build credibility.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-5 shadow-sm">
                <h3 className="font-semibold mb-3 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                  Leverage Dual Business Model
                </h3>
                <p className="text-muted-foreground mb-4">
                  Create unique synergies between the analytics platform and acceleration program.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-5 shadow-sm">
                <h3 className="font-semibold mb-3 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                  Develop Regional Expertise
                </h3>
                <p className="text-muted-foreground mb-4">
                  Create specialized offerings for target regions in Asia and MENA.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-5 shadow-sm">
                <h3 className="font-semibold mb-3 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                  Build Strategic Partnerships
                </h3>
                <p className="text-muted-foreground mb-4">
                  Form alliances with exchanges, corporations, and other ecosystem players.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-5 shadow-sm">
                <h3 className="font-semibold mb-3 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                  Continue AI Innovation
                </h3>
                <p className="text-muted-foreground mb-4">
                  Maintain differentiation through ongoing innovation in AI-driven analytics.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-5 shadow-sm">
                <h3 className="font-semibold mb-3 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                  Expand Educational Content
                </h3>
                <p className="text-muted-foreground mb-4">
                  Develop more resources for crypto beginners to build user base and trust.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="animate-on-scroll animate-fade-up mt-12 mb-12">
        <Card className="card-hover overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 relative h-60 md:h-auto">
              <Image 
                src="/CleanShot 2025-05-24 at 00.43.09.png"
                alt="MonoMind Services" 
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">How MonoMind Can Help</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Based on our comprehensive analysis, MonoMind offers tailored services to address Rising X&apos;s specific needs 
                  and help them achieve their strategic goals in the cryptocurrency and blockchain space.
                </p>
                <p className="mb-6">
                  Our core services include building strategic influencer networks, developing comprehensive marketing strategies, 
                  and creating engaging educational content to enhance Rising X&apos;s market presence and user acquisition.
                </p>
                <Link href="/how-monomind-can-help">
                  <Button className="w-full md:w-auto">
                    Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-12 text-center animate-on-scroll animate-fade-up">
        <p className="text-lg font-medium mb-6">
          By addressing these areas while capitalizing on current market trends, Rising X can strengthen its position in both the cryptocurrency analytics and startup acceleration segments of the Web3 ecosystem.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button 
            size="lg" 
            className="rounded-full px-8"
            onClick={() => document.getElementById('download-report-dialog')?.click()}
          >
            Download Full Report <FileDown className="ml-2 h-5 w-5" />
          </Button>
          <Link href="https://share.monomind.one/monomind-our-services" target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              variant="outline"
              className="rounded-full px-8"
            >
              MonoMind Services <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}