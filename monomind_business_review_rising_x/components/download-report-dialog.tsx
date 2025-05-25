"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { FileDown, Check, Loader2 } from "lucide-react";
import { PdfGenerator } from "@/components/ui/pdf-generator";

export function DownloadReportDialog() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button id="download-report-dialog" className="hidden">Open Download Dialog</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Download Full Report</DialogTitle>
          <DialogDescription>
            Get the complete MonoMind Business Review for Rising-X as a professionally designed PDF.
          </DialogDescription>
        </DialogHeader>
        {!isSuccess ? (
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="col-span-3"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="col-span-3"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="company" className="text-right">
                  Company
                </Label>
                <Input
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="flex items-center space-x-2 ml-auto">
                <Checkbox
                  id="marketing"
                  checked={marketingConsent}
                  onCheckedChange={(checked) => 
                    setMarketingConsent(checked as boolean)
                  }
                />
                <label
                  htmlFor="marketing"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to receive marketing communications from MonoMind
                </label>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing
                  </>
                ) : (
                  <>
                    <FileDown className="mr-2 h-4 w-4" />
                    Continue
                  </>
                )}
              </Button>
            </DialogFooter>
          </form>
        ) : (
          <div className="py-6 flex flex-col items-center justify-center">
            <div className="rounded-full bg-green-100 dark:bg-green-900 p-3 mb-4">
              <Check className="h-6 w-6 text-green-600 dark:text-green-300" />
            </div>
            <h3 className="text-lg font-medium mb-2">Thank You!</h3>
            <p className="text-center text-muted-foreground mb-4">
              Your report is ready to download. Click the button below to generate your PDF.
            </p>
            <PdfGenerator 
              buttonText="Generate PDF Report"
              buttonSize="lg"
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}