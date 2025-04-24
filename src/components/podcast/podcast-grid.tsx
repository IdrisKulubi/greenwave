"use client";

import { PodcastCard } from "@/components/podcast/podcast-card";
import { EmptySearch } from "@/components/podcast/empty-search";
import { Podcast } from "@/lib/podcast-data";
import { motion } from "framer-motion";

interface PodcastGridProps {
  podcasts: Podcast[];
  searchQuery?: string;
  onResetSearch?: () => void;
}

export function PodcastGrid({ podcasts, searchQuery = "", onResetSearch }: PodcastGridProps) {
  const handleReset = () => {
    if (onResetSearch) {
      onResetSearch();
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12 md:py-16"
    >
      {podcasts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {podcasts.map((podcast, index) => (
            <PodcastCard key={podcast.id} podcast={podcast} index={index} />
          ))}
        </div>
      ) : (
        <EmptySearch searchQuery={searchQuery} onReset={handleReset} />
      )}
    </motion.section>
  );
} 