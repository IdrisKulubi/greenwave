"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Search, X } from "lucide-react";

interface PodcastSearchProps {
  onSearch: (query: string) => void;
}

export function PodcastSearch({ onSearch }: PodcastSearchProps) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  const handleClear = () => {
    setQuery("");
    onSearch("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="py-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto mb-4"
      >
        <h2 className="text-xl font-semibold text-center text-emerald-800 dark:text-emerald-200 mb-2">
          Explore Environmental Audio
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm mb-6">
          Discover our collection of real-world environmental topics and solutions
        </p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative max-w-xl mx-auto"
      >
        <div className="relative flex items-center">
          <div className="absolute left-3 text-gray-400 dark:text-gray-500">
            <Search size={18} />
          </div>
          
          <Input
            type="text"
            placeholder="Search by title, topic, or keyword..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="pl-10 pr-24 h-12 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-emerald-200 dark:border-emerald-800/70 focus-visible:ring-emerald-500 rounded-full shadow-sm"
          />
          
          {query && (
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClear}
              className="absolute right-16 h-8 w-8 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 hover:bg-transparent"
            >
              <X size={16} />
              <span className="sr-only">Clear search</span>
            </Button>
          )}
          
          <Button
            onClick={handleSearch}
            className="absolute right-1 h-10 px-4 m-1 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 rounded-full transition-all duration-200"
          >
            <span>Search</span>
          </Button>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="flex items-center justify-center gap-1 mt-3"
        >
          <div className="text-xs text-gray-500 dark:text-gray-400">
            Try searching: 
          </div>
          {["oceans", "carbon", "food"].map((tag) => (
            <Button 
              key={tag} 
              variant="ghost" 
              size="sm" 
              onClick={() => {
                setQuery(tag);
                onSearch(tag);
              }}
              className="h-6 text-xs text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 px-2"
            >
              {tag}
            </Button>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
} 