"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  BarChart, 
  LineChart, 
  TrendingUp, 
  Rocket, 
  Users, 
  DollarSign,
  Award,
  Target,
  Globe
} from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import chart components with SSR disabled
const BarChart2 = dynamic(
  () => import("react-chartjs-2").then((mod) => mod.Bar),
  { ssr: false, loading: () => <div className="h-80 flex items-center justify-center">Loading chart...</div> }
);

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function CompetitiveLandscape() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Chart data for crypto analytics platforms
  const cryptoChartData = {
    labels: ["Rising X", "Glassnode", "Santiment", "TradingView", "3Commas", "Cryptohopper"],
    datasets: [
      {
        label: "Monthly Pricing ($)",
        data: [99, 26.10, 49, 28.29, 37, 49],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        borderColor: "rgba(53, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Monthly Pricing Comparison",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="section-container bg-background" id="competitive-landscape">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="section-title">Competitive Landscape</h2>
        <Separator className="max-w-md mx-auto my-4" />
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Rising X operates in two highly competitive but rapidly growing segments of the Web3 ecosystem.
        </p>
      </motion.div>

      <Tabs defaultValue="crypto" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
          <TabsTrigger value="crypto">Crypto Analytics Platforms</TabsTrigger>
          <TabsTrigger value="accelerator">Startup Accelerators</TabsTrigger>
        </TabsList>
        
        <TabsContent value="crypto" className="animate-on-scroll animate-fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <Card className="card-hover h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart className="mr-2 h-6 w-6 text-primary" />
                    Top Competitors in Cryptocurrency Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Platform</TableHead>
                        <TableHead>Key Features</TableHead>
                        <TableHead>Pricing</TableHead>
                        <TableHead>Target Audience</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Glassnode</TableCell>
                        <TableCell>On-chain metrics, Interactive dashboards, Expert insights</TableCell>
                        <TableCell>$26.10/month (Standard)</TableCell>
                        <TableCell>Institutional traders, On-chain analysts</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Santiment</TableCell>
                        <TableCell>Social sentiment, Development tracking, Market signals</TableCell>
                        <TableCell>$49/month (Pro)</TableCell>
                        <TableCell>Traders focused on market psychology</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">TradingView</TableCell>
                        <TableCell>Advanced charting, Custom scripts, Community sharing</TableCell>
                        <TableCell>$13.99-$56.49/month</TableCell>
                        <TableCell>Technical traders, Chart analysts</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">3Commas</TableCell>
                        <TableCell>Trading bots, Smart Trading Terminal, Portfolio management</TableCell>
                        <TableCell>$37-$374/month</TableCell>
                        <TableCell>Automated traders, Portfolio managers</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Cryptohopper</TableCell>
                        <TableCell>Automated trading, AI algorithms, Copy trading</TableCell>
                        <TableCell>Free-$99/month</TableCell>
                        <TableCell>Bot traders, Strategy copiers</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="card-hover h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="mr-2 h-6 w-6 text-primary" />
                    Pricing Comparison
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <BarChart2 data={cryptoChartData} options={chartOptions} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="animate-on-scroll animate-fade-up">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="mr-2 h-6 w-6 text-primary" />
                  Rising X's Competitive Position
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card rounded-lg p-5 shadow-sm">
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Target className="mr-2 h-5 w-5 text-primary" />
                      Strengths
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <TrendingUp className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>AI-driven predictions differentiate from competitors</span>
                      </li>
                      <li className="flex items-start">
                        <Globe className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Multi-country presence with focus on Asian markets</span>
                      </li>
                      <li className="flex items-start">
                        <Users className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Focus on making crypto accessible to beginners</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-card rounded-lg p-5 shadow-sm">
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Target className="mr-2 h-5 w-5 text-destructive" />
                      Challenges
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <Users className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Limited online presence compared to competitors</span>
                      </li>
                      <li className="flex items-start">
                        <DollarSign className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Higher price point than some competitors' entry-level plans</span>
                      </li>
                      <li className="flex items-start">
                        <Users className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Limited transparency about team and company structure</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="accelerator" className="animate-on-scroll animate-fade-up">
          <div className="grid grid-cols-1 gap-8 mb-8">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Rocket className="mr-2 h-6 w-6 text-primary" />
                  Top Competitors in Startup Acceleration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Program</TableHead>
                      <TableHead>Structure</TableHead>
                      <TableHead>Investment Terms</TableHead>
                      <TableHead>Focus Areas</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Binance Labs</TableCell>
                      <TableCell>4+ week program, Demo Day</TableCell>
                      <TableCell>Undisclosed investment</TableCell>
                      <TableCell>DeFi, Infrastructure, AI</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">ConsenSys Mesh</TableCell>
                      <TableCell>12-week program, Fellowship</TableCell>
                      <TableCell>$150-250K funding, No initial equity in Fellowship</TableCell>
                      <TableCell>Ethereum ecosystem, Layer-2</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Outlier Ventures</TableCell>
                      <TableCell>12-week remote program</TableCell>
                      <TableCell>6% equity, Future token allocation, $100K+ funding</TableCell>
                      <TableCell>Crypto X AI, DePIN, DeFi, RWA</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">DeFi Alliance</TableCell>
                      <TableCell>3-month program</TableCell>
                      <TableCell>Undisclosed</TableCell>
                      <TableCell>DeFi startups</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Tribe Accelerator</TableCell>
                      <TableCell>Product-centric approach</TableCell>
                      <TableCell>Undisclosed</TableCell>
                      <TableCell>Pre-Series A blockchain</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          <div className="animate-on-scroll animate-fade-up">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="mr-2 h-6 w-6 text-primary" />
                  Rising X's Accelerator Positioning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card rounded-lg p-5 shadow-sm">
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Target className="mr-2 h-5 w-5 text-primary" />
                      Strengths
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <Rocket className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Dual business model creates potential synergies</span>
                      </li>
                      <li className="flex items-start">
                        <Globe className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Strong presence in South Korea and expansion into Indonesia</span>
                      </li>
                      <li className="flex items-start">
                        <Users className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Focus on space design and metaverse technologies</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-card rounded-lg p-5 shadow-sm">
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Target className="mr-2 h-5 w-5 text-destructive" />
                      Challenges
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <Users className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Limited public information about successful startups</span>
                      </li>
                      <li className="flex items-start">
                        <DollarSign className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Lower funding amounts compared to some competitors</span>
                      </li>
                      <li className="flex items-start">
                        <Globe className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Competing with well-established accelerators with strong track records</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}