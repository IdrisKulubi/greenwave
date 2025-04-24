"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "GreenWave transformed my research article into an engaging podcast that reached thousands of listeners interested in renewable energy solutions.",
      author: "Dr. Sarah Johnson",
      role: "Environmental Scientist",
      avatar: "/avatars/avatar-1.png" // Placeholder
    },
    {
      quote: "As someone always on the go, GreenWave has become my favorite way to stay informed about environmental issues while commuting or exercising.",
      author: "Michael Torres",
      role: "Sustainability Advocate",
      avatar: "/avatars/avatar-2.png" // Placeholder
    },
    {
      quote: "The production quality is outstanding. My article on ocean conservation reached an entirely new audience through the GreenWave podcast format.",
      author: "Emma Chen",
      role: "Marine Biologist",
      avatar: "/avatars/avatar-3.png" // Placeholder
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
            What Our Community Says
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Hear from content creators and listeners who are part of the GreenWave ecosystem
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative bg-emerald-50 dark:bg-emerald-900/10 rounded-xl p-8 shadow-sm border border-emerald-100 dark:border-emerald-900/30"
            >
              <Quote className="h-10 w-10 text-emerald-300 dark:text-emerald-800 absolute right-6 top-6" />
              
              <p className="text-slate-700 dark:text-slate-300 mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-emerald-200 dark:bg-emerald-800 flex items-center justify-center text-emerald-800 dark:text-emerald-200 font-semibold mr-4">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-700 dark:text-emerald-400">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 