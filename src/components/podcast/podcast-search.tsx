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
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="relative max-w-xl mx-auto"
    >
      <div className="relative flex items-center">
        <Input
          type="text"
          placeholder="Search podcasts by title, topic, or keyword..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="pr-28 h-12 bg-white dark:bg-slate-900 border-emerald-200 dark:border-emerald-800 focus-visible:ring-emerald-500"
        />
        {query && (
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClear}
            className="absolute right-[76px] text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
          >
            <X size={16} />
            <span className="sr-only">Clear search</span>
          </Button>
        )}
        <Button
          onClick={handleSearch}
          className="absolute right-0 h-12 px-4 rounded-l-none bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600"
        >
          <Search size={16} className="mr-2" />
          <span>Search</span>
        </Button>
      </div>
    </motion.div>
  );
} 