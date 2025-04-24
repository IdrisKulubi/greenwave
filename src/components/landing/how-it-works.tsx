"use client";

import { motion } from "framer-motion";
import { FileText, Headphones, Upload, Sparkles, ArrowRight } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <Upload className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: "Submit Your Article",
      description: "Share your environmental insights or research by submitting your article through our simple form."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: "Professional Production",
      description: "Our team transforms selected articles into engaging audio content with high-quality narration and sound design."
    },
    {
      icon: <Headphones className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: "Listen & Share",
      description: "Access your podcast episode on GreenWave and share it with the world to inspire environmental action."
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const iconContainerVariants = {
    hover: { scale: 1.1, rotate: 5 }
  };
  
  const arrowVariants = {
     hidden: { opacity: 0, x: -20 },
     visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={cardVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 dark:text-emerald-300 mb-4">
            How GreenWave Works
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Our simple three-step process transforms written environmental content into engaging audio podcasts
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 12px 30px -8px rgba(16, 185, 129, 0.25), 0 8px 15px -8px rgba(16, 185, 129, 0.2)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="bg-emerald-50 dark:bg-slate-800/60 rounded-xl p-8 h-full border border-emerald-100 dark:border-slate-700/50 shadow-lg dark:shadow-slate-800/30 flex flex-col items-start"
            >
              <motion.div 
                variants={iconContainerVariants}
                whileHover="hover"
                className="w-16 h-16 flex items-center justify-center bg-white dark:bg-slate-700 rounded-full mb-6 shadow-md border border-emerald-100 dark:border-slate-600"
              >
                {step.icon}
              </motion.div>
              
              <h3 className="text-xl font-semibold text-emerald-700 dark:text-emerald-300 mb-3">
                {step.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 flex-grow">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <motion.div 
                  variants={arrowVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: (index * 0.2) + 0.4 }}
                  className="hidden md:block absolute top-1/2 left-full transform -translate-y-1/2 ml-2 text-emerald-300 dark:text-slate-600"
                  aria-hidden="true"
                 >
                  <ArrowRight size={32} strokeWidth={1.5} />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          whileHover={{
             scale: 1.02,
             boxShadow: "0 8px 25px -5px rgba(16, 185, 129, 0.15), 0 5px 10px -6px rgba(16, 185, 129, 0.1)",
             transition: { duration: 0.25, ease: "easeOut" }
          }}
          className="mt-20 bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/40 dark:to-green-900/40 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center border border-emerald-200 dark:border-emerald-800/50 shadow-lg"
        >
          <motion.div
             animate={{ scale: [1, 1.05, 1] }}
             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
             <FileText className="h-10 w-10 text-emerald-600 dark:text-emerald-400 mx-auto mb-5" />
          </motion.div>
          <h3 className="text-2xl font-semibold text-emerald-800 dark:text-emerald-200 mb-3">
            Ready to Get Started?
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-xl mx-auto">
            Submit your article today and let us transform your environmental narrative into an immersive audio experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 