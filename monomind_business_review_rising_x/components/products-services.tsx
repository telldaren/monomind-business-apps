"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  LineChart, 
  BarChart, 
  Bot, 
  TrendingUp, 
  Rocket, 
  Globe, 
  Users, 
  DollarSign,
  Lightbulb,
  Briefcase
} from "lucide-react";

export default function ProductsServices() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="section-container bg-background" id="products-services">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="section-title">Products & Services</h2>
        <Separator className="max-w-md mx-auto my-4" />
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Rising X offers a comprehensive suite of products and services across its two main business lines.
        </p>
      </motion.div>

      <Tabs defaultValue="crypto" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
          <TabsTrigger value="crypto">Cryptocurrency Platform</TabsTrigger>
          <TabsTrigger value="startup">Startup Acceleration</TabsTrigger>
        </TabsList>
        
        <TabsContent value="crypto" className="animate-on-scroll animate-fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <LineChart className="mr-2 h-6 w-6 text-primary" />
                  AI-Based Price Prediction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <TrendingUp className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Integrates on-chain data and real-time market information from various exchanges</span>
                  </li>
                  <li className="flex items-start">
                    <BarChart className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Analyzes large-scale transaction data, wallet movements, and liquidation levels</span>
                  </li>
                  <li className="flex items-start">
                    <Lightbulb className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Generates buy and sell signals with higher accuracy than traditional technical analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart className="mr-2 h-6 w-6 text-primary" />
                  Advanced Charting Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <LineChart className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>MetaCharts displaying buy and sell signals visually</span>
                  </li>
                  <li className="flex items-start">
                    <BarChart className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Customizable charts supporting multiple technical indicators</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Trend analysis over various time periods (2 days, 1 week, 2 weeks, 1 month)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bot className="mr-2 h-6 w-6 text-primary" />
                  Automated Trading Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Bot className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Grid trading bots that automatically execute buy and sell orders based on predefined parameters</span>
                  </li>
                  <li className="flex items-start">
                    <Lightbulb className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Optimization tools for trading strategies</span>
                  </li>
                  <li className="flex items-start">
                    <Globe className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>API integration with major exchanges for seamless data flow and trading execution</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lightbulb className="mr-2 h-6 w-6 text-primary" />
                  Market Analysis & Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <TrendingUp className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Real-time market insights and trend analysis</span>
                  </li>
                  <li className="flex items-start">
                    <Bot className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>AI-generated briefing reports</span>
                  </li>
                  <li className="flex items-start">
                    <Lightbulb className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Educational content on cryptocurrency trading and investment strategies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="startup" className="animate-on-scroll animate-fade-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="mr-2 h-6 w-6 text-primary" />
                  Funding & Investment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <DollarSign className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Seed investment up to 50 million KRW</span>
                  </li>
                  <li className="flex items-start">
                    <Rocket className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Metaverse-dedicated seed fund (in collaboration with Kukbo Design)</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Connections to additional investment opportunities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="mr-2 h-6 w-6 text-primary" />
                  Global Market Entry
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Globe className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Programs for expansion into Vietnam, Thailand, USA, Indonesia</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Local partnerships, IR, demo days, and mentoring</span>
                  </li>
                  <li className="flex items-start">
                    <Rocket className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Global networking opportunities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Briefcase className="mr-2 h-6 w-6 text-primary" />
                  Mentoring & Consulting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Briefcase className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Business consulting</span>
                  </li>
                  <li className="flex items-start">
                    <Lightbulb className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Pitching consultation</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Global mentoring from industry experts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}