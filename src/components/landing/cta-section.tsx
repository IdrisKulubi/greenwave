"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Headphones, FileText } from "lucide-react";
import { useRouter } from "next/navigation";

export function CtaSection() {
  const router = useRouter();

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-800 dark:from-emerald-800 dark:to-emerald-950 text-white">
      <div className="container mx-auto px-4 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Environmental Audio Movement
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Whether you're a content creator with environmental insights to share or a listener passionate about sustainability, GreenWave has something for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                className="bg-white text-emerald-800 hover:bg-emerald-100 px-8 py-6 h-auto rounded-full font-medium shadow-xl shadow-emerald-900/20"
                onClick={() => router.push("/podcasts")}
              >
                <Headphones className="w-5 h-5 mr-2" />
                Browse Podcasts
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 px-8 py-6 h-auto rounded-full font-medium"
                onClick={() => router.push("/submit")}
              >
                <FileText className="w-5 h-5 mr-2" />
                Submit Your Article
              </Button>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mt-12 text-sm opacity-80"
          >
            <p>Join thousands of environmental advocates already using GreenWave</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 