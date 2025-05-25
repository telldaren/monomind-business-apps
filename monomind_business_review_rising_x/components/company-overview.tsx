"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Building, Globe, Target, Users, Calendar } from "lucide-react";

export default function CompanyOverview() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="section-container bg-muted/50" id="company-overview">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="section-title">Company Overview</h2>
        <Separator className="max-w-md mx-auto my-4" />
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Rising X is a multifaceted company operating primarily in the cryptocurrency and blockchain space with a dual business model.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="animate-on-scroll animate-fade-right">
          <Card className="h-full card-hover">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building className="mr-2 h-6 w-6 text-primary" />
                Corporate Structure
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <Calendar className="mr-3 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Founded</p>
                  <p className="text-muted-foreground">RisingX Limited, incorporated in Hong Kong on September 13, 2023</p>
                </div>
              </div>
              <div className="flex items-start">
                <Building className="mr-3 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Parent Entity</p>
                  <p className="text-muted-foreground">Youth Meta, a South Korean firm founded in 2016 specializing in blockchain and AI technologies</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="mr-3 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Associated Entities</p>
                  <ul className="text-muted-foreground list-disc ml-5">
                    <li>BlockSquare Seoul (virtual currency trading assistant service)</li>
                    <li>ReTri (marketing)</li>
                    <li>VOB (crypto foundation)</li>
                    <li>Block Square Investment (finance and investment)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="animate-on-scroll animate-fade-left">
          <Card className="h-full card-hover">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="mr-2 h-6 w-6 text-primary" />
                Global Presence & Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <Globe className="mr-3 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Global Offices</p>
                  <ul className="text-muted-foreground list-disc ml-5">
                    <li>Headquarters: South Korea</li>
                    <li>Dubai (recently opened)</li>
                    <li>Potential presence in Singapore, Hong Kong, US, and UK through parent company</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start">
                <Target className="mr-3 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Mission</p>
                  <p className="text-muted-foreground">To democratize cryptocurrency trading and investment through AI-powered tools and insights</p>
                </div>
              </div>
              <div className="flex items-start">
                <Target className="mr-3 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Vision</p>
                  <p className="text-muted-foreground">Creating an accessible platform that helps both novice and experienced traders navigate the crypto market with data-driven strategies</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="animate-on-scroll animate-fade-up">
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2 h-6 w-6 text-primary" />
              Key Partnerships
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold mb-2">Kukbo Design</h3>
                <p className="text-sm text-muted-foreground">
                  Collaboration for the RISING X acceleration program, focusing on space-related startups and metaverse technologies
                </p>
              </div>
              <div className="bg-card rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold mb-2">The Invention Lab</h3>
                <p className="text-sm text-muted-foreground">
                  Partnership for global acceleration programs and startup mentorship
                </p>
              </div>
              <div className="bg-card rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold mb-2">Exchange Integrations</h3>
                <p className="text-sm text-muted-foreground">
                  Integration with major cryptocurrency exchanges via API, including Binance
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}