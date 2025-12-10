import MainLayout from "@/components/Layout/MainLayout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Configure PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MainLayout>
      <section className="min-h-screen py-20 px-4 sm:px-8 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Resume</span>
          </h1>
          
          <a href="/images/CV_Alaeddine_Hammouda.pdf" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="group gap-2">
              <Download className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              Download CV
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-4xl bg-card border border-border rounded-xl shadow-2xl overflow-hidden p-4 md:p-8 flex justify-center relative"
        >
          {/* Loading State / Fallback */}
          <div className="absolute inset-0 flex items-center justify-center bg-muted/50 -z-10">
            <div className="flex flex-col items-center gap-4 text-muted-foreground">
              <FileText className="w-12 h-12 animate-pulse" />
              <p>Loading Resume...</p>
            </div>
          </div>

          <Document
            file="/images/CV_Alaeddine_Hammouda.pdf"
            className="flex justify-center shadow-lg"
            loading={
              <div className="flex flex-col items-center gap-4 py-20">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                <p>Loading PDF...</p>
              </div>
            }
            error={
              <div className="text-destructive py-20 text-center">
                <p>Failed to load PDF.</p>
                <a href="/images/CV_Alaeddine_Hammouda.pdf" className="underline mt-2 block">
                  Click here to view directly
                </a>
              </div>
            }
          >
            <Page 
              pageNumber={1} 
              scale={width > 786 ? 1.2 : 0.6} 
              renderTextLayer={false}
              renderAnnotationLayer={false}
              className="shadow-xl border border-border/20"
            />
          </Document>
        </motion.div>
      </section>
    </MainLayout>
  );
}
