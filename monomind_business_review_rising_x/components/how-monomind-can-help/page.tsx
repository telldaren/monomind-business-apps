"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Globe, 
  MessageSquare, 
  Megaphone,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  ExternalLink
} from "lucide-react";

export default function HowMonoMindCanHelp() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="pt-24 min-h-screen">
      <div className="section-container bg-background">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How MonoMind Can Help Rising X</h1>
          <Separator className="max-w-md mx-auto my-4" />
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Based on our comprehensive analysis, MonoMind offers tailored services to address Rising X's specific needs 
            and help them achieve their strategic goals in the cryptocurrency and blockchain space.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 mb-16">
          <div className="animate-on-scroll animate-fade-up">
            <Card className="card-hover overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 relative h-60 md:h-auto">
                  <Image 
                    src="/CleanShot 2025-05-23 at 23.02.36.png"
                    alt="MonoMind Influencer Network" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-2/3">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl font-bold">Core Service: Influencer Network</CardTitle>
                      <Badge className="ml-2">Recommended</Badge>
                    </div>
                    <CardDescription>
                      Identify key influencers and establish an affiliate network to boost Rising X's visibility and credibility
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Our analysis identified limited online presence as one of Rising X's key weaknesses. MonoMind specializes in 
                      building strategic influencer networks that can rapidly enhance brand visibility and credibility in the 
                      cryptocurrency space.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-muted/30 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2 flex items-center">
                          <Users className="mr-2 h-5 w-5 text-primary" />
                          Targeted Influencer Identification
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          We'll identify and engage crypto influencers specifically relevant to Rising X's AI-driven analytics 
                          platform and startup acceleration program.
                        </p>
                      </div>
                      <div className="bg-muted/30 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2 flex items-center">
                          <Globe className="mr-2 h-5 w-5 text-primary" />
                          Regional Network Development
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Specialized focus on influencers in South Korea, MENA region, and Indonesia to support Rising X's 
                          geographic strategy.
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Custom affiliate program design with performance tracking</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Content creation support for influencer partnerships</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Campaign management and performance optimization</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full md:w-auto">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Star className="mr-2 h-6 w-6 text-primary" />
          Optional Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="animate-on-scroll animate-fade-right">
            <Card className="card-hover h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="mr-2 h-6 w-6 text-primary" />
                  Global Marketing Strategy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Develop a comprehensive global marketing strategy that leverages Rising X's unique dual business model 
                  and geographic presence.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Zap className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Competitive positioning strategy</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Regional marketing plans for key markets</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Cross-business synergy optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Brand messaging and positioning refinement</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Request Details
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="animate-on-scroll animate-fade-up">
            <Card className="card-hover h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="mr-2 h-6 w-6 text-primary" />
                  Social Media Content Strategy & Operation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive social media management to address Rising X's limited online presence and engagement.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Zap className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Platform-specific content calendars</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Educational content development</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Team and leadership spotlights</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Performance analytics and optimization</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Request Details
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="animate-on-scroll animate-fade-left">
            <Card className="card-hover h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Megaphone className="mr-2 h-6 w-6 text-primary" />
                  Community Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Build and nurture an engaged community around Rising X's platform and accelerator program.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Zap className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Community platform setup and management</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>User engagement strategies and implementation</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Customer testimonial collection and showcasing</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Community-driven content and events</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Request Details
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="animate-on-scroll animate-fade-up">
          <div className="bg-primary/10 rounded-lg p-8 border border-primary/20">
            <div className="md:flex items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-2xl font-bold mb-2">Ready to take Rising X to the next level?</h2>
                <p className="text-muted-foreground">
                  Download our complete services kit to learn more about how MonoMind can help Rising X achieve its strategic goals.
                </p>
              </div>
              <Link href="https://share.monomind.one/monomind-our-services" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full md:w-auto">
                  Download Sales Kit <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}