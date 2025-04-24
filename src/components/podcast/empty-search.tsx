"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { SearchX, RefreshCw, Filter } from "lucide-react";

interface EmptySearchProps {
  searchQuery: string;
  onReset: () => void;
}

export function EmptySearch({ searchQuery, onReset }: EmptySearchProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="text-center py-20 px-4"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-emerald-50 dark:bg-emerald-900/30 shadow-inner"
      >
        <SearchX size={48} className="text-emerald-400 dark:text-emerald-500" />
      </motion.div>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <h3 className="text-2xl font-semibold text-emerald-800 dark:text-emerald-200 mb-3">
          No podcasts found
        </h3>
        
        <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-8 leading-relaxed">
          {searchQuery ? (
            <>
              We couldn&apos;t find any podcasts matching <span className="font-medium text-emerald-600 dark:text-emerald-400">"{searchQuery}"</span>. 
              Try adjusting your search or browse all available episodes.
            </>
          ) : (
            <>Our podcast library is currently being updated. Please check back soon for new episodes.</>
          )}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button 
            onClick={onReset}
            variant="default" 
            className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 rounded-full"
          >
            <RefreshCw size={16} className="mr-2" /> Show All Podcasts
          </Button>
          
          <Button 
            onClick={() => window.history.back()}
            variant="outline" 
            className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-800 dark:text-emerald-300 dark:hover:bg-emerald-900/50 rounded-full"
          >
            Go Back
          </Button>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="mt-12 flex items-center justify-center"
      >
        <div className="h-[1px] w-16 bg-emerald-200 dark:bg-emerald-800/50"></div>
        <div className="mx-4 text-slate-400 dark:text-slate-500 font-medium text-sm flex items-center">
          <Filter size={14} className="mr-2" /> Try searching by topic
        </div>
        <div className="h-[1px] w-16 bg-emerald-200 dark:bg-emerald-800/50"></div>
      </motion.div>
    </motion.div>
  );
} 