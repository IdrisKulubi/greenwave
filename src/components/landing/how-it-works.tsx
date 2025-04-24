"use client";

import { motion } from "framer-motion";
import { FileText, Headphones, Upload, Sparkles } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <Upload className="h-8 w-8 text-emerald-500 dark:text-emerald-400" />,
      title: "Submit Your Article",
      description: "Share your environmental insights or research by submitting your article through our simple form."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-emerald-500 dark:text-emerald-400" />,
      title: "Professional Production",
      description: "Our team transforms selected articles into engaging audio content with high-quality narration and sound design."
    },
    {
      icon: <Headphones className="h-8 w-8 text-emerald-500 dark:text-emerald-400" />,
      title: "Listen & Share",
      description: "Access your podcast episode on GreenWave and share it with the world to inspire environmental action."
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 dark:text-emerald-300 mb-4">
            How GreenWave Works
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Our simple three-step process transforms written environmental content into engaging audio podcasts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-8 h-full border border-emerald-100 dark:border-emerald-800/50 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 rounded-full mb-6 shadow-sm">
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-emerald-700 dark:text-emerald-400 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400">
                  {step.description}
                </p>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-emerald-300 dark:text-emerald-800">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl p-8 max-w-3xl mx-auto text-center border border-emerald-200 dark:border-emerald-800/50"
        >
          <FileText className="h-10 w-10 text-emerald-600 dark:text-emerald-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-emerald-800 dark:text-emerald-300 mb-2">
            Ready to Get Started?
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-0">
            Submit your article today and be part of the environmental audio revolution.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 