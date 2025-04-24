"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Leaf, Headphones, ArrowRight } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      {/* Background gradient & patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-green-100 dark:from-emerald-950 dark:to-green-900 -z-10" />
      <div className="absolute inset-0 opacity-20 dark:opacity-10 -z-10">
        <svg className="h-full w-full" viewBox="0 0 900 900" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h900v900H0z" fill="none" />
          <path
            d="M450 0C201.5 0 0 201.5 0 450s201.5 450 450 450 450-201.5 450-450S698.5 0 450 0zm0 750c-166.4 0-301.5-135.1-301.5-301.5S283.6 147 450 147s301.5 135.1 301.5 301.5S616.4 750 450 750z"
            className="fill-emerald-600/10 dark:fill-emerald-400/10"
          />
          <circle cx="450" cy="450" r="300" className="fill-none stroke-emerald-500/20 dark:stroke-emerald-300/10" />
          <circle cx="450" cy="450" r="200" className="fill-none stroke-emerald-500/30 dark:stroke-emerald-300/20" />
          <circle cx="450" cy="450" r="100" className="fill-none stroke-emerald-500/40 dark:stroke-emerald-300/30" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/50 px-4 py-2 rounded-full text-emerald-700 dark:text-emerald-300 mb-6">
              <Leaf size={16} className="animate-pulse" />
              <span className="text-sm font-medium">Eco-Conscious Audio Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-900 dark:text-emerald-50 mb-6 leading-tight">
              Turn Environmental <span className="text-emerald-600 dark:text-emerald-400">Stories</span> Into Immersive Audio
            </h1>
            
            <p className="text-lg md:text-xl text-emerald-800/80 dark:text-emerald-300/90 mb-8 leading-relaxed">
              GreenWave transforms environmental articles into engaging podcasts. Learn about sustainability solutions while on the go, and share your own insights with our community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-700 dark:hover:bg-emerald-600 px-6 py-6 rounded-full h-auto font-medium shadow-lg shadow-emerald-600/20 dark:shadow-emerald-900/30 group"
                onClick={() => router.push("/podcasts")}
              >
                <Headphones size={18} className="mr-2 group-hover:animate-pulse" />
                Browse All Podcasts
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                className="border-emerald-600 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-300 dark:hover:bg-emerald-900/50 px-6 py-6 rounded-full h-auto font-medium"
                onClick={() => router.push("/submit")}
              >
                Submit an Article
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative h-[450px] md:h-[550px] flex items-center justify-center perspective-[1000px]"
          >
            {/* Background elements are kept as they were */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              animate={{ 
                rotateZ: [0, 2, 0, -2, 0],
                scale: [1, 1.03, 1, 1.02, 1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 20,
                ease: "easeInOut"
              }}
            >
              <div className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full bg-emerald-200/50 dark:bg-emerald-800/30 animate-pulse-slow blur-lg" />
            </motion.div>
            
            {/* Floating circles with enhanced animations */}
            <motion.div 
              className="absolute w-12 h-12 rounded-full bg-emerald-300/30 dark:bg-emerald-700/30 top-[20%] right-[15%] blur-sm z-0"
              animate={{ 
                y: [-10, 10, -10], 
                x: [5, -5, 5],
                scale: [1, 1.1, 0.9, 1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 8, 
                ease: "easeInOut" 
              }}
            />
            <motion.div 
              className="absolute w-8 h-8 rounded-full bg-emerald-400/30 dark:bg-emerald-600/30 bottom-[25%] left-[20%] blur-sm z-0"
              animate={{ 
                y: [10, -10, 10], 
                x: [-5, 5, -5],
                scale: [0.9, 1.1, 0.9]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 10, 
                ease: "easeInOut" 
              }}
            />
            
            {/* Additional floating element */}
            <motion.div 
              className="absolute w-10 h-10 rounded-full bg-emerald-500/20 dark:bg-emerald-500/20 bottom-[40%] right-[25%] blur-sm z-0"
              animate={{ 
                y: [-8, 8, -8], 
                x: [4, -4, 4],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 12, 
                ease: "easeInOut" 
              }}
            />
            
            {/* Image Layout Container - Using absolute positioning for precise control */}
            <div className="absolute w-full h-full transform-style-3d">
            
              {/* Left Image (podcast3.jpg) */}
              <motion.div
                className="absolute top-1/2 left-[calc(50%-180px)] md:left-[calc(50%-200px)] w-[280px] h-[280px] md:w-[340px] md:h-[340px] rounded-xl overflow-hidden shadow-lg origin-center z-10"
                style={{ transformStyle: "preserve-3d" }}
                initial={{ x: "-50%", y: "-50%", rotate: -15, opacity: 0 }}
                animate={{ x: "-40%", y: "-55%", rotate: -12, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="relative w-full h-full">
                  <Image 
                    src="/images/podcast3.jpg" 
                    alt="Podcast visual 3" 
                    fill
                    sizes="(max-width: 768px) 280px, 340px"
                    style={{ objectFit: "cover" }}
                    className="rounded-xl opacity-95"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent" 
                    animate={{ opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>

              {/* Right Image (podcast2.jpg) */}
              <motion.div
                className="absolute top-1/2 left-[calc(50%+180px)] md:left-[calc(50%+200px)] w-[280px] h-[280px] md:w-[340px] md:h-[340px] rounded-xl overflow-hidden shadow-lg origin-center z-10"
                style={{ transformStyle: "preserve-3d" }}
                initial={{ x: "-50%", y: "-50%", rotate: 15, opacity: 0 }}
                animate={{ x: "-60%", y: "-45%", rotate: 12, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="relative w-full h-full">
                  <Image 
                    src="/images/podcast2.jpg" 
                    alt="Podcast visual 2" 
                    fill
                    sizes="(max-width: 768px) 280px, 340px"
                    style={{ objectFit: "cover" }}
                    className="rounded-xl opacity-95"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-bl from-emerald-500/10 to-transparent" 
                    animate={{ opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>

              {/* Center Image (podcast-lady.jpg) */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-xl overflow-hidden shadow-2xl origin-center z-20"
                style={{ transformStyle: "preserve-3d" }}
                initial={{ x: "-50%", y: "-50%", scale: 0.8, opacity: 0 }}
                animate={{ x: "-50%", y: "-50%", scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="relative w-full h-full">
                  <Image 
                    src="/images/podcast-lady.jpg" 
                    alt="Person listening to GreenWave podcast" 
                    fill
                    sizes="(max-width: 768px) 300px, 380px"
                    style={{ objectFit: "cover" }}
                    className="rounded-xl"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent" 
                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
              
            </div>
            
            {/* Enhanced animated shadow */}
            <motion.div
              className="absolute bottom-5 md:bottom-10 left-1/2 transform -translate-x-1/2 w-[70%] md:w-[60%] h-8 bg-black/15 dark:bg-black/30 rounded-full blur-xl z-0"
              initial={{ opacity: 0, width: "40%" }}
              animate={{ 
                opacity: 1, 
                width: ["50%", "60%", "50%"],
              }}
              transition={{ 
                opacity: { duration: 0.5, delay: 0.5 },
                width: { duration: 8, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 