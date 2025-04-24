"use client";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/podcast/hero-section";
import { PodcastGrid } from "@/components/podcast/podcast-grid";
import { PodcastSearch } from "@/components/podcast/podcast-search";
import { Footer } from "@/components/footer";
import { podcasts as allPodcasts } from "@/lib/podcast-data";
import { useState } from "react";

export default function Home() {
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
        <HeroSection />
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

