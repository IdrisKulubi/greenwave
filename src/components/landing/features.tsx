"use client";

import { motion } from "framer-motion";
import { 
  Globe, 
  Users, 
  BookOpen, 
  Radio, 
  Database, 
  Share2 
} from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Global Impact",
      description: "Reach environmentally-conscious audiences around the world with your sustainability insights."
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Community Driven",
      description: "Join a community of environmental advocates, researchers, and change-makers sharing knowledge."
    },
    {
      icon: <BookOpen className="h-10 w-10" />,
      title: "Educational Focus",
      description: "Transform complex environmental topics into accessible and engaging audio content."
    },
    {
      icon: <Radio className="h-10 w-10" />,
      title: "Professional Production",
      description: "High-quality narration and sound design that brings your written content to life."
    },
    {
      icon: <Database className="h-10 w-10" />,
      title: "Content Archive",
      description: "Your podcasts remain accessible in our growing library of sustainability resources."
    },
    {
      icon: <Share2 className="h-10 w-10" />,
      title: "Social Sharing",
      description: "Easily share your podcast episodes across platforms to maximize reach and impact."
    }
  ];

  return (
    <section className="py-20 bg-emerald-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 dark:text-emerald-300 mb-4">
            Why Choose GreenWave
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Our platform offers unique benefits for environmental content creators and conscious listeners
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-950 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-emerald-100 dark:border-emerald-900/50 group"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-emerald-100 dark:bg-emerald-900/30 rounded-xl mb-6 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/30 transition-colors duration-300">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-emerald-700 dark:text-emerald-400 mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 