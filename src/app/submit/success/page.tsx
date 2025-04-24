"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, Home } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function SubmissionSuccessPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-slate-50 dark:bg-slate-950 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl mx-auto px-4 py-16 text-center"
        >
          <div className="mb-8 flex justify-center">
            <CheckCircle className="h-24 w-24 text-emerald-500 dark:text-emerald-400" />
          </div>
          <h1 className="text-3xl font-bold text-emerald-800 dark:text-emerald-300 mb-4">
            Submission Successful!
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
            Thank you for submitting your article. Our editorial team will review it and get back to you within 5-7 business days.
          </p>
          
          <div className="space-y-4">
            <p className="text-sm text-slate-500 dark:text-slate-500 max-w-md mx-auto">
              If your article is selected, we&apos;ll work with you to transform it into an immersive podcast episode on GreenWave.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button 
                className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600"
                onClick={() => router.push("/")}
              >
                <Home size={16} className="mr-2" /> Back to Home
              </Button>
              <Button 
                variant="outline" 
                className="border-emerald-600 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-300 dark:hover:bg-emerald-900/50"
                onClick={() => router.push("/submit")}
              >
                <ArrowLeft size={16} className="mr-2" /> Submit Another Article
              </Button>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
} 