"use client";

import { useState } from "react";
import { jsPDF } from "jspdf";
import { Loader2, FileDown, Check, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import html2canvas from "html2canvas";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface PdfGeneratorProps {
  buttonText?: string;
  buttonVariant?: "default" | "outline" | "secondary" | "ghost" | "link";
  buttonSize?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

export function PdfGenerator({
  buttonText = "Download Report",
  buttonVariant = "default",
  buttonSize = "default",
  className,
}: PdfGeneratorProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [showPreviewDialog, setShowPreviewDialog] = useState(false);

  const generatePdf = async (preview: boolean = false) => {
    setIsGenerating(true);
    setIsComplete(false);
    setPdfUrl(null);
    
    toast.info("Starting PDF generation...");

    try {
      // Create a new PDF document
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      // Set document properties
      doc.setProperties({
        title: "MonoMind Business Review: Rising-X",
        author: "MonoMind",
        subject: "Business Review",
        keywords: "Rising-X, cryptocurrency, blockchain, business review",
      });

      toast.info("Creating cover page...");
      
      // Cover Page
      try {
        const img = new Image();
        img.src = "/monomind_visionhead_m_color_blackbg_1920.jpg";
        
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = () => {
            console.error("Error loading cover image");
            reject(new Error("Failed to load cover image"));
          };
          // Set a timeout to prevent hanging if image loading takes too long
          setTimeout(() => reject(new Error("Image loading timeout")), 5000);
        });
        
        doc.addImage(img, "JPEG", 0, 0, 210, 70);
      } catch (error) {
        console.error("Error adding cover image:", error);
        // Continue without the image
        doc.setFillColor(41, 98, 255);
        doc.rect(0, 0, 210, 70, "F");
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(24);
        doc.text("MonoMind", 105, 40, { align: "center" });
      }
      
      doc.setFontSize(24);
      doc.setTextColor(0, 0, 0);
      doc.text("Business Review", 105, 100, { align: "center" });
      doc.setFontSize(32);
      doc.setTextColor(41, 98, 255);
      doc.text("Rising-X", 105, 115, { align: "center" });
      doc.setFontSize(12);
      doc.setTextColor(100, 100, 100);
      doc.text(`Generated on ${format(new Date(), "MMMM d, yyyy")}`, 105, 130, { align: "center" });
      doc.text("Prepared by MonoMind", 105, 140, { align: "center" });
      doc.text("hello@monomind.one", 105, 150, { align: "center" });
      doc.text("https://www.monomind.one", 105, 160, { align: "center" });

      toast.info("Creating table of contents...");
      
      // Table of Contents
      doc.addPage();
      doc.setFontSize(20);
      doc.setTextColor(0, 0, 0);
      doc.text("Table of Contents", 20, 30);
      
      const tocItems = [
        { title: "Executive Summary", page: 3 },
        { title: "Company Overview", page: 4 },
        { title: "Products and Services", page: 6 },
        { title: "Online Presence Analysis", page: 8 },
        { title: "Competitive Landscape", page: 10 },
        { title: "SWOT Analysis", page: 12 },
        { title: "Key Recommendations", page: 14 },
      ];
      
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);
      
      tocItems.forEach((item, index) => {
        doc.text(item.title, 20, 50 + (index * 10));
        doc.text(item.page.toString(), 180, 50 + (index * 10));
        doc.setDrawColor(200, 200, 200);
        doc.line(20, 52 + (index * 10), 180, 52 + (index * 10));
      });

      // Capture sections from the page
      const sections = [
        "executive-summary",
        "company-overview",
        "products-services",
        "online-presence",
        "competitive-landscape",
        "swot-analysis",
      ];

      let currentPage = 3; // Starting page after TOC

      for (const section of sections) {
        toast.info(`Processing ${section.replace('-', ' ')} section...`);
        
        const element = document.getElementById(section);
        if (element) {
          try {
            // Add a new page for each section
            doc.addPage();
            
            // Capture the section as an image
            const canvas = await html2canvas(element, {
              scale: 1.5, // Lower scale for better performance
              useCORS: true,
              logging: false,
              allowTaint: true,
              backgroundColor: "#ffffff",
              windowWidth: 1200, // Fixed width for consistency
              onclone: (clonedDoc) => {
                // Modify the cloned document to optimize for PDF
                const clonedElement = clonedDoc.getElementById(section);
                if (clonedElement) {
                  // Remove any fixed positioning or overflow issues
                  const elements = clonedElement.querySelectorAll('*');
                  elements.forEach(el => {
                    if (el instanceof HTMLElement) {
                      el.style.overflow = 'visible';
                      el.style.position = 'relative';
                      el.style.maxHeight = 'none';
                    }
                  });
                }
              }
            });
            
            const imgData = canvas.toDataURL("image/jpeg", 0.7); // Lower quality for better performance
            
            // Get section title
            const titleElement = element.querySelector("h2");
            const title = titleElement ? titleElement.textContent || section : section;
            
            // Add section title
            doc.setFontSize(20);
            doc.setTextColor(41, 98, 255);
            doc.text(title, 20, 20);
            
            // Add section content as image
            const imgWidth = 170;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            
            // Split into multiple pages if needed
            if (imgHeight > 240) {
              const pageCount = Math.ceil(imgHeight / 240);
              for (let i = 0; i < pageCount; i++) {
                if (i > 0) {
                  doc.addPage();
                  currentPage++;
                }
                
                const sourceY = i * (canvas.height / pageCount);
                const sourceHeight = canvas.height / pageCount;
                
                const tempCanvas = document.createElement("canvas");
                tempCanvas.width = canvas.width;
                tempCanvas.height = sourceHeight;
                
                const ctx = tempCanvas.getContext("2d");
                if (ctx) {
                  ctx.drawImage(
                    canvas, 
                    0, sourceY, canvas.width, sourceHeight,
                    0, 0, tempCanvas.width, tempCanvas.height
                  );
                  
                  const pageImgData = tempCanvas.toDataURL("image/jpeg", 0.7);
                  const pageImgHeight = (sourceHeight * imgWidth) / canvas.width;
                  
                  doc.addImage(pageImgData, "JPEG", 20, 30, imgWidth, pageImgHeight);
                  
                  // Add page number
                  doc.setFontSize(10);
                  doc.setTextColor(100, 100, 100);
                  doc.text(`Page ${currentPage}`, 105, 290, { align: "center" });
                }
              }
            } else {
              doc.addImage(imgData, "JPEG", 20, 30, imgWidth, imgHeight);
              
              // Add page number
              doc.setFontSize(10);
              doc.setTextColor(100, 100, 100);
              doc.text(`Page ${currentPage}`, 105, 290, { align: "center" });
              currentPage++;
            }
          } catch (error) {
            console.error(`Error processing section ${section}:`, error);
            toast.error(`Error processing ${section.replace('-', ' ')} section`);
            // Continue with next section
            currentPage++;
          }
        } else {
          console.warn(`Section ${section} not found in the document`);
          toast.warning(`Section ${section.replace('-', ' ')} not found`);
        }
      }

      toast.info("Adding recommendations page...");
      
      // Key Recommendations page
      doc.addPage();
      doc.setFontSize(20);
      doc.setTextColor(41, 98, 255);
      doc.text("Key Recommendations", 20, 20);
      
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);
      
      const recommendations = [
        "Enhance transparency about team, technology, and success stories",
        "Leverage dual business model to create unique synergies",
        "Develop specialized offerings for target regions in Asia and MENA",
        "Build strategic partnerships with exchanges and ecosystem players",
        "Continue AI innovation to maintain differentiation",
        "Expand educational content to build user base and trust",
      ];
      
      recommendations.forEach((rec, index) => {
        doc.setFontSize(14);
        doc.setTextColor(41, 98, 255);
        doc.text(`${index + 1}. `, 20, 40 + (index * 20));
        
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text(rec, 30, 40 + (index * 20), { maxWidth: 160 });
      });
      
      // Add page number
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(`Page ${currentPage}`, 105, 290, { align: "center" });
      currentPage++;

      toast.info("Finalizing PDF...");
      
      // Contact page
      doc.addPage();
      
      try {
        const img = new Image();
        img.src = "/monomind_visionhead_m_color_blackbg_1920.jpg";
        
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = () => {
            console.error("Error loading contact page image");
            reject(new Error("Failed to load contact page image"));
          };
          // Set a timeout to prevent hanging if image loading takes too long
          setTimeout(() => reject(new Error("Image loading timeout")), 5000);
        });
        
        doc.addImage(img, "JPEG", 65, 30, 80, 30);
      } catch (error) {
        console.error("Error adding contact page image:", error);
        // Continue without the image
        doc.setFillColor(41, 98, 255);
        doc.rect(65, 30, 80, 30, "F");
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(18);
        doc.text("MonoMind", 105, 50, { align: "center" });
      }
      
      doc.setFontSize(16);
      doc.setTextColor(0, 0, 0);
      doc.text("For more information about our services, please contact:", 105, 80, { align: "center" });
      
      doc.setFontSize(14);
      doc.setTextColor(41, 98, 255);
      doc.text("hello@monomind.one", 105, 100, { align: "center" });
      
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);
      doc.text("Visit our website:", 105, 120, { align: "center" });
      
      doc.setFontSize(14);
      doc.setTextColor(41, 98, 255);
      doc.text("https://www.monomind.one", 105, 130, { align: "center" });
      
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text("© MonoMind. All rights reserved.", 105, 280, { align: "center" });
      doc.text(`Page ${currentPage}`, 105, 290, { align: "center" });

      const fileName = `MonoMind_Business_Review_Rising-X_${format(new Date(), "yyyy-MM-dd")}.pdf`;
      
      // Generate PDF blob and URL for preview or download
      const pdfBlob = doc.output('blob');
      const pdfObjectUrl = URL.createObjectURL(pdfBlob);
      setPdfUrl(pdfObjectUrl);
      
      if (preview) {
        // Open preview dialog
        setShowPreviewDialog(true);
        toast.success("PDF generated successfully! Preview ready.");
      } else {
        // Create a download link and trigger it
        const downloadLink = document.createElement('a');
        downloadLink.href = pdfObjectUrl;
        downloadLink.download = fileName;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        
        toast.success("PDF generated and downloaded successfully!");
      }
      
      setIsComplete(true);
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast.error("There was an error generating the PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-2">
        <Button
          variant={buttonVariant}
          size={buttonSize}
          className={className}
          onClick={() => generatePdf(false)}
          disabled={isGenerating}
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating PDF...
            </>
          ) : isComplete ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              {buttonText}
            </>
          ) : (
            <>
              <FileDown className="mr-2 h-4 w-4" />
              {buttonText}
            </>
          )}
        </Button>
        
        <Button
          variant="outline"
          size={buttonSize}
          className={className}
          onClick={() => generatePdf(true)}
          disabled={isGenerating}
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating Preview...
            </>
          ) : (
            <>
              <Eye className="mr-2 h-4 w-4" />
              Preview
            </>
          )}
        </Button>
      </div>
      
      <Dialog open={showPreviewDialog} onOpenChange={setShowPreviewDialog}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle>PDF Preview</DialogTitle>
            <DialogDescription>
              Review the generated PDF before downloading
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex-1 overflow-auto min-h-[500px] border rounded-md">
            {pdfUrl && (
              <iframe 
                src={pdfUrl} 
                className="w-full h-full"
                title="PDF Preview"
              />
            )}
          </div>
          
          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={() => setShowPreviewDialog(false)}>
              Close
            </Button>
            {pdfUrl && (
              <Button 
                onClick={() => {
                  const downloadLink = document.createElement('a');
                  downloadLink.href = pdfUrl;
                  downloadLink.download = `MonoMind_Business_Review_Rising-X_${format(new Date(), "yyyy-MM-dd")}.pdf`;
                  document.body.appendChild(downloadLink);
                  downloadLink.click();
                  document.body.removeChild(downloadLink);
                  toast.success("PDF downloaded successfully!");
                }}
              >
                <FileDown className="mr-2 h-4 w-4" />
                Download
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}