"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { SearchX, RefreshCw } from "lucide-react";

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
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-slate-100 dark:bg-slate-800"
      >
        <SearchX size={48} className="text-slate-400" />
      </motion.div>
      <h3 className="text-xl font-medium text-slate-900 dark:text-slate-100 mb-3">
        No podcasts found
      </h3>
      <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-6">
        {searchQuery ? (
          <>
            We couldn't find any podcasts matching <span className="font-medium text-emerald-600 dark:text-emerald-400">"{searchQuery}"</span>. Try adjusting your search or browse all episodes.
          </>
        ) : (
          <>Sorry, we couldn't find any podcasts. Please try again later.</>
        )}
      </p>
      <Button 
        onClick={onReset}
        variant="outline" 
        className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-700 dark:text-emerald-400 dark:hover:bg-emerald-950/50"
      >
        <RefreshCw size={16} className="mr-2" /> Show All Podcasts
      </Button>
    </motion.div>
  );
} 