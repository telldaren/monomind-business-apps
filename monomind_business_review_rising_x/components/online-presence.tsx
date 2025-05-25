"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Linkedin, 
  Instagram, 
  Twitter, 
  Youtube, 
  Globe, 
  Users, 
  MessageSquare,
  AlertTriangle
} from "lucide-react";

export default function OnlinePresence() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="section-container bg-muted/50" id="online-presence">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="section-title">Online Presence Analysis</h2>
        <Separator className="max-w-md mx-auto my-4" />
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Rising X maintains a modest but growing presence across several social media platforms, with LinkedIn being their most active and professional channel.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 animate-on-scroll animate-fade-right">
          <Card className="card-hover h-full">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="mr-2 h-6 w-6 text-primary" />
                Social Media Presence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Platform</TableHead>
                    <TableHead>Profile</TableHead>
                    <TableHead>Followers</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="flex items-center">
                      <Linkedin className="mr-2 h-4 w-4 text-blue-600" />
                      LinkedIn
                    </TableCell>
                    <TableCell>RisingX</TableCell>
                    <TableCell>3+</TableCell>
                    <TableCell>
                      <Badge variant="default">Active</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="flex items-center">
                      <Instagram className="mr-2 h-4 w-4 text-pink-600" />
                      Instagram
                    </TableCell>
                    <TableCell>@risingxofficial</TableCell>
                    <TableCell>1,508</TableCell>
                    <TableCell>
                      <Badge variant="default">Active</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="flex items-center">
                      <Twitter className="mr-2 h-4 w-4 text-blue-400" />
                      Twitter/X
                    </TableCell>
                    <TableCell>@risingxofficial</TableCell>
                    <TableCell>Not confirmed</TableCell>
                    <TableCell>
                      <Badge variant="default">Active</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="flex items-center">
                      <Youtube className="mr-2 h-4 w-4 text-red-600" />
                      YouTube
                    </TableCell>
                    <TableCell>@RisingX_official_</TableCell>
                    <TableCell>Not confirmed</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Limited content</Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <div className="animate-on-scroll animate-fade-left">
          <Card className="card-hover h-full">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="mr-2 h-6 w-6 text-primary" />
                Content Themes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-card rounded-lg p-4 shadow-sm">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Linkedin className="mr-2 h-4 w-4 text-blue-600" />
                    LinkedIn
                  </h3>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Cryptocurrency market insights and analysis</li>
                    <li>• Company announcements (e.g., Dubai office opening)</li>
                    <li>• Fintech innovation and AI applications</li>
                    <li>• Regional crypto market developments in MENA</li>
                  </ul>
                </div>
                
                <div className="bg-card rounded-lg p-4 shadow-sm">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Instagram className="mr-2 h-4 w-4 text-pink-600" />
                    Instagram
                  </h3>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Visual content related to cryptocurrency</li>
                    <li>• Company branding and culture</li>
                    <li>• Market trends and educational content</li>
                  </ul>
                </div>
                
                <div className="bg-card rounded-lg p-4 shadow-sm">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Youtube className="mr-2 h-4 w-4 text-red-600" />
                    YouTube
                  </h3>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Educational content about cryptocurrency trading</li>
                    <li>• Market analysis and predictions</li>
                    <li>• Simplifying cryptocurrency investments</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="animate-on-scroll animate-fade-right">
          <Card className="card-hover h-full">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="mr-2 h-6 w-6 text-primary" />
                Recent Announcements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-card rounded-lg p-5 shadow-sm">
                <h3 className="font-semibold mb-3">Dubai Office Opening</h3>
                <p className="text-muted-foreground mb-4">
                  The most significant recent announcement from Rising X was the opening of their new office in Dubai, 
                  positioned as a strategic expansion into the Middle East and North Africa (MENA) region.
                </p>
                <div className="bg-muted p-4 rounded-md border-l-4 border-primary">
                  <p className="italic text-sm">
                    "🚀 Exciting News! 🚀 Thrilled to announce that RisingX has officially opened its new office in Dubai! 
                    As a global leader in cryptocurrency predictive analytics, we are now expanding our reach into the 
                    Middle East and North Africa (MENA) region."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="animate-on-scroll animate-fade-left">
          <Card className="card-hover h-full">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="mr-2 h-6 w-6 text-primary" />
                Areas for Improvement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Users className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">More consistent posting frequency</p>
                    <p className="text-sm text-muted-foreground">Maintain regular activity across all platforms</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Greater transparency</p>
                    <p className="text-sm text-muted-foreground">About team members and leadership</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MessageSquare className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">More educational content</p>
                    <p className="text-sm text-muted-foreground">To demonstrate expertise and build credibility</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Increased community engagement</p>
                    <p className="text-sm text-muted-foreground">More interaction with followers and the crypto community</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MessageSquare className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Customer testimonials</p>
                    <p className="text-sm text-muted-foreground">Share success stories and case studies</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}