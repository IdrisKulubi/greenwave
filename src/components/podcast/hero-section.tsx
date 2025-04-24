"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
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

      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-900 dark:text-emerald-50 mb-4 leading-tight">
            Explore Podcasts That Power the Planet
          </h1>
          <p className="text-lg md:text-xl text-emerald-800/80 dark:text-emerald-300/90 mb-8 leading-relaxed">
            Listen to sustainability stories, environmental insights, and climate action — turned from articles into immersive audio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-700 dark:hover:bg-emerald-600 px-6 py-6 rounded-full h-auto font-medium shadow-lg shadow-emerald-600/20 dark:shadow-emerald-900/30">
              Browse All Episodes
            </Button>
            <Button variant="outline" className="border-emerald-600 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-300 dark:hover:bg-emerald-900/50 px-6 py-6 rounded-full h-auto font-medium">
              Submit an Article
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 