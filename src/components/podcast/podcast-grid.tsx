"use client";

import { useState } from "react";
import { PodcastCard } from "@/components/podcast/podcast-card";
import { EmptySearch } from "@/components/podcast/empty-search";
import { PodcastPlayer } from "@/components/podcast/podcast-player";
import { Podcast } from "@/lib/podcast-data";
import { motion } from "framer-motion";

interface PodcastGridProps {
  podcasts: Podcast[];
  searchQuery?: string;
  onResetSearch?: () => void;
}

export function PodcastGrid({ podcasts, searchQuery = "", onResetSearch }: PodcastGridProps) {
  const [selectedPodcast, setSelectedPodcast] = useState<Podcast | null>(null);
  const [playerOpen, setPlayerOpen] = useState(false);

  const handlePodcastSelect = (podcast: Podcast) => {
    setSelectedPodcast(podcast);
    setPlayerOpen(true);
  };

  const handleReset = () => {
    if (onResetSearch) {
      onResetSearch();
    }
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-12 md:py-16"
      >
        {podcasts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {podcasts.map((podcast, index) => (
                <PodcastCard 
                  key={podcast.id} 
                  podcast={podcast} 
                  index={index}
                  onPlay={() => handlePodcastSelect(podcast)}
                />
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-16 text-center"
            >
              <div className="inline-flex items-center justify-center mb-4">
                <div className="h-[1px] w-16 bg-emerald-200 dark:bg-emerald-800"></div>
                <div className="mx-4 text-emerald-500 dark:text-emerald-400 font-medium text-sm">COMING SOON</div>
                <div className="h-[1px] w-16 bg-emerald-200 dark:bg-emerald-800"></div>
              </div>
              <h3 className="text-2xl font-bold text-emerald-800 dark:text-emerald-300 mb-3">
                More podcasts are on the way!
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                We&apos;re working hard to bring you more engaging environmental stories transformed into immersive audio experiences. 
                Stay tuned for our growing library of sustainable content.
              </p>
            </motion.div>
          </>
        ) : (
          <EmptySearch searchQuery={searchQuery} onReset={handleReset} />
        )}
      </motion.section>

      <PodcastPlayer 
        podcast={selectedPodcast} 
        isOpen={playerOpen} 
        onClose={() => setPlayerOpen(false)} 
      />
    </>
  );
} 