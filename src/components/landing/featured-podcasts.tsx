"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { PodcastPlayer } from "@/components/podcast/podcast-player";
import { Podcast } from "@/lib/podcast-data";
import Link from "next/link";

const podcasts: Podcast[] = [
  {
    id: "1",
    title: "Ocean Plastic Crisis",
    tag: "Ocean Health",
    description: "Exploring the growing crisis of plastics in our oceans and innovative solutions to address this global challenge.",
    audioSrc: "/podcast/oceanplastic.wav",
    duration: "01:15:32",
    imageUrl: "/images/ocean.jpg",
  },
  {
    id: "2",
    title: "Regenerative Food Systems",
    tag: "Sustainable Agriculture",
    description: "Discovering how regenerative agriculture can heal our planet while producing healthier food.",
    audioSrc: "/podcast/Regenerativefood.wav",
    duration: "00:36:45",
    imageUrl: "/images/genfood.jpg",
  },
  {
    id: "3",
    title: "The Carbon Dilemma",
    tag: "Climate Change",
    description: "Unraveling the complexities of carbon emissions and exploring viable pathways to a low-carbon future.",
    audioSrc: "/podcast/carbondilema.wav",
    duration: "00:28:17",
    imageUrl: "/images/carbon.jpg",
  }
];

export function FeaturedPodcasts() {
  const [selectedPodcast, setSelectedPodcast] = useState<Podcast | null>(null);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  const handlePlayClick = (podcast: Podcast) => {
    setSelectedPodcast(podcast);
    setIsPlayerOpen(true);
  };

  const handleClosePlayer = () => {
    setIsPlayerOpen(false);
    setSelectedPodcast(null);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950/50 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 dark:text-emerald-200 mb-4">
            Featured Podcasts
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Listen to our latest episodes exploring environmental challenges and solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {podcasts.map((podcast, index) => (
            <motion.div
              key={podcast.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-md dark:shadow-slate-700/15 overflow-hidden flex flex-col h-full border border-emerald-100 dark:border-slate-700/50 transition-all duration-300 ease-out"
              whileHover={{ 
                y: -5,
                scale: 1.03,
                boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.2), 0 8px 10px -6px rgba(16, 185, 129, 0.15)",
                transition: { duration: 0.25, ease: "easeOut" } 
              }}
            >
              <div className="relative h-48 bg-emerald-100 dark:bg-emerald-900/30">
                <Image
                  src={podcast.imageUrl}
                  alt={podcast.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-emerald-800 dark:text-emerald-100 mb-2">{podcast.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">{podcast.description}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-emerald-100 dark:border-slate-700">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{podcast.duration}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full p-2 border-emerald-300 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-700 dark:text-emerald-300 dark:hover:bg-emerald-800/50"
                    onClick={() => handlePlayClick(podcast)}
                    aria-label={`Play ${podcast.title}`}
                  >
                    <Play className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/podcasts">
           <Button
              variant="ghost"
              className="text-emerald-700 hover:text-emerald-800 dark:text-emerald-300 dark:hover:text-emerald-200"
            >
             View All Podcasts &rarr;
           </Button>
          </Link>
        </div>
      </div>

      <PodcastPlayer
        podcast={selectedPodcast}
        isOpen={isPlayerOpen}
        onClose={handleClosePlayer}
      />
    </section>
  );
} 