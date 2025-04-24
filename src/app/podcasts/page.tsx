"use client";

import { Navbar } from "@/components/navbar";
import { PodcastGrid } from "@/components/podcast/podcast-grid";
import { PodcastSearch } from "@/components/podcast/podcast-search";
import { Footer } from "@/components/footer";
import { podcasts as allPodcasts } from "@/lib/podcast-data";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function PodcastsPage() {
  const router = useRouter();
  const [filteredPodcasts, setFilteredPodcasts] = useState(allPodcasts);
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (!query.trim()) {
      setFilteredPodcasts(allPodcasts);
      return;
    }
    
    const lowerCaseQuery = query.toLowerCase();
    const filtered = allPodcasts.filter(
      podcast => 
        podcast.title.toLowerCase().includes(lowerCaseQuery) ||
        podcast.description.toLowerCase().includes(lowerCaseQuery) ||
        podcast.tag.toLowerCase().includes(lowerCaseQuery)
    );
    
    setFilteredPodcasts(filtered);
  };
  
  const handleResetSearch = () => {
    setSearchQuery("");
    setFilteredPodcasts(allPodcasts);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-emerald-50 dark:bg-emerald-950 py-12 px-4">
          <div className="container mx-auto">
            <Button 
              variant="ghost" 
              onClick={() => router.push("/")}
              className="mb-8 text-emerald-700 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300"
            >
              <ArrowLeft size={16} className="mr-2" /> Back to Home
            </Button>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-emerald-800 dark:text-emerald-300 mb-4">
                Explore Our Sustainability Podcasts
              </h1>
              <p className="text-lg text-emerald-700 dark:text-emerald-400 max-w-2xl mb-8">
                Listen to our curated collection of podcasts covering the most pressing environmental topics and innovative solutions for a sustainable future.
              </p>
            </motion.div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <PodcastSearch onSearch={handleSearch} />
        </div>
        
        <PodcastGrid 
          podcasts={filteredPodcasts} 
          searchQuery={searchQuery}
          onResetSearch={handleResetSearch}
        />
      </main>
      <Footer />
    </div>
  );
} 