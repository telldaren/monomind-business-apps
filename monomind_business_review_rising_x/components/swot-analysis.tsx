"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  TrendingUp, 
  AlertTriangle, 
  Lightbulb, 
  Shield,
  CheckCircle,
  XCircle,
  Zap,
  ShieldAlert
} from "lucide-react";

export default function SwotAnalysis() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="section-container bg-muted/50" id="swot-analysis">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="section-title">SWOT Analysis</h2>
        <Separator className="max-w-md mx-auto my-4" />
        <p className="text-muted-foreground max-w-3xl mx-auto">
          A comprehensive analysis of Rising X&apos;s Strengths, Weaknesses, Opportunities, and Threats.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="animate-on-scroll animate-fade-right">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800 card-hover h-full">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-700 dark:text-blue-300">
                <CheckCircle className="mr-2 h-6 w-6" />
                Strengths
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white/80 dark:bg-blue-950/50 p-4 rounded-md shadow-sm">
                <h3 className="font-semibold mb-2 flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                  Dual Business Model
                </h3>
                <p className="text-muted-foreground">
                  Operation in both cryptocurrency analytics and startup acceleration creates potential synergies and diversified revenue streams.
                </p>
              </div>
              
              <div className="bg-white/80 dark:bg-blue-950/50 p-4 rounded-md shadow-sm">
                <h3 className="font-semibold mb-2 flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                  Geographic Expansion
                </h3>
                <p className="text-muted-foreground">
                  Recent expansion to Dubai positions Rising X to capitalize on the growing MENA cryptocurrency market, which benefits from regulatory clarity and tax incentives.
                </p>
              </div>
              
              <div className="bg-white/80 dark:bg-blue-950/50 p-4 rounded-md shadow-sm">
                <h3 className="font-semibold mb-2 flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                  AI-Driven Analytics
                </h3>
                <p className="text-muted-foreground">
                  Focus on AI-powered predictions differentiates Rising X in a market increasingly valuing advanced analytics.
                </p>
              </div>
              
              <div className="bg-white/80 dark:bg-blue-950/50 p-4 rounded-md shadow-sm">
                <h3 className="font-semibold mb-2 flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                  Asian Market Presence
                </h3>
                <p className="text-muted-foreground">
                  Strong presence in South Korea and expansion into Indonesia provides access to high-growth crypto markets.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="animate-on-scroll animate-fade-left">
          <Card className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950 dark:to-red-900 border-red-200 dark:border-red-800 card-hover h-full">
            <CardHeader>
              <CardTitle className="flex items-center text-red-700 dark:text-red-300">
                <XCircle className="mr-2 h-6 w-6" />
                Weaknesses
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white/80 dark:bg-red-950/50 p-4 rounded-md shadow-sm">
                <h3 className="font-semibold mb-2 flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5 text-red-600 dark:text-red-400" />
                  Limited Online Presence
                </h3>
                <p className="text-muted-foreground">
                  Modest social media engagement and limited customer testimonials may hamper brand recognition and trust.
                </p>
              </div>
              
              <div className="bg-white/80 dark:bg-red-950/50 p-4 rounded-md shadow-sm">
                <h3 className="font-semibold mb-2 flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5 text-red-600 dark:text-red-400" />
                  Competitive Analytics Market
                </h3>
                <p className="text-muted-foreground">
                  Faces established competitors like Glassnode, Santiment, and TradingView with strong user bases and feature sets.
                </p>
              </div>
              
              <div className="bg-white/80 dark:bg-red-950/50 p-4 rounded-md shadow-sm">
                <h3 className="font-semibold mb-2 flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5 text-red-600 dark:text-red-400" />
                  Transparency Concerns
                </h3>
                <p className="text-muted-foreground">
                  Limited public information about team members and company structure could affect credibility.
                </p>
              </div>
              
              <div className="bg-white/80 dark:bg-red-950/50 p-4 rounded-md shadow-sm">
                <h3 className="font-semibold mb-2 flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5 text-red-600 dark:text-red-400" />
                  Pricing Positioning
                </h3>
                <p className="text-muted-foreground">
                  At $99/month, Rising X&apos;s analytics platform is priced higher than some competitors&apos; entry-level plans, potentially limiting mass adoption.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="animate-on-scroll animate-fade-right">
          <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800 card-hover h-full">
            <CardHeader>
              <CardTitle className="flex items-center text-green-700 dark:text-green-300">
                <Lightbulb className="mr-2 h-6 w-6" />
                Opportunities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white/80 dark:bg-green-950/50 p-4 rounded-md shadow-sm">
                <h3 className="font-semibold mb-2 flex items-center">
                  <Zap className="mr-2 h-5 w-5 text-green-600 dark:text-green-400" />
                  AI Differentiation
                </h3>
                <p className="text-muted-foreground">
                  Further develop and market AI capabilities as a key differentiator in an increasingly crowded market.
                </p>
              </div>
              
              <div className="bg-white/80 dark:bg-green-950/50 p-4 rounded-md shadow-sm">
                <h3 className="font-semibold mb-2 flex items-center">
                  <Zap className="mr-2 h-5 w-5 text-green-600 dark:text-green-400" />
                  Educational Focus
                </h3>
                <p className="text-muted-foreground">
                  Expand educational content to capture the growing segment of crypto beginners.
                </p>
              </div>
              
              <div className="bg-white/80 dark:bg-green-950/50 p-4 rounded-md shadow-sm">
                <h3 className="font-semibold mb-2 flex items-center">
                  <Zap className="mr-2 h-5 w-5 text-green-600 dark:text-green-400" />
                  Regional Specialization
                </h3>
                <p className="text-muted-foreground">
                  Leverage presence in Asia and MENA to provide region-specific insights not available from Western competitors.
                </p>
              </div>
              
              <div className="bg-white/80 dark:bg-green-950/50 p-4 rounded-md shadow-sm">
                <h3 className="font-semibold mb-2 flex items-center">
                  <Zap className="mr-2 h-5 w-5 text-green-600 dark:text-green-400" />
                  Cross-Program Synergy
                </h3>
                <p className="text-muted-foreground">
                  Create pathways for accelerated startups to utilize the analytics platform and vice versa.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="animate-on-scroll animate-fade-left">
          <Card className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900 border-amber-200 dark:border-amber-800 card-hover h-full">
            <CardHeader>
              <CardTitle className="flex items-center text-amber-700 dark:text-amber-300">
                <Shield className="mr-2 h-6 w-6" />
                Threats
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white/80 dark:bg-amber-950/50 p-4 rounded-md shadow-sm">
                <h3 className="font-semibold mb-2 flex items-center">
                  <ShieldAlert className="mr-2 h-5 w-5 text-amber-600 dark:text-amber-400" />
                  Intense Competition
                </h3>
                <p className="text-muted-foreground">
                  Both the crypto analytics and accelerator spaces are becoming increasingly crowded with well-funded competitors.
                </p>
              </div>
              
              <div className="bg-white/80 dark:bg-amber-950/50 p-4 rounded-md shadow-sm">
                <h3 className="font-semibold mb-2 flex items-center">
                  <ShieldAlert className="mr-2 h-5 w-5 text-amber-600 dark:text-amber-400" />
                  Regulatory Uncertainty
                </h3>
                <p className="text-muted-foreground">
                  Evolving cryptocurrency regulations across different jurisdictions could impact business operations.
                </p>
              </div>
              
              <div className="bg-white/80 dark:bg-amber-950/50 p-4 rounded-md shadow-sm">
                <h3 className="font-semibold mb-2 flex items-center">
                  <ShieldAlert className="mr-2 h-5 w-5 text-amber-600 dark:text-amber-400" />
                  Market Volatility
                </h3>
                <p className="text-muted-foreground">
                  Cryptocurrency market downturns could reduce demand for analytics services and impact startup funding.
                </p>
              </div>
              
              <div className="bg-white/80 dark:bg-amber-950/50 p-4 rounded-md shadow-sm">
                <h3 className="font-semibold mb-2 flex items-center">
                  <ShieldAlert className="mr-2 h-5 w-5 text-amber-600 dark:text-amber-400" />
                  Technological Disruption
                </h3>
                <p className="text-muted-foreground">
                  Rapid advancements in AI and analytics technology could quickly outpace Rising X&apos;s offerings if not continuously updated.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12 text-center animate-on-scroll animate-fade-up">
        <p className="text-lg font-medium mb-6">
          By addressing these areas while capitalizing on current market trends, Rising X can strengthen its position in both the cryptocurrency analytics and startup acceleration segments of the Web3 ecosystem.
        </p>
      </div>
    </div>
  );
}