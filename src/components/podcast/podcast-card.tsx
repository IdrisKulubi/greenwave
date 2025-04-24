"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Podcast } from "@/lib/podcast-data";
import { motion } from "framer-motion";
import { Play, Clock, Headphones } from "lucide-react";
import Image from "next/image";

interface PodcastCardProps {
  podcast: Podcast;
  index: number;
  onPlay: () => void;
}

export function PodcastCard({ podcast, index, onPlay }: PodcastCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden group transition-all duration-300 hover:shadow-lg border-emerald-100 dark:border-emerald-800/50 hover:border-emerald-300/50 dark:hover:border-emerald-700/50">
        <CardHeader className="p-4 pb-0 relative overflow-hidden">
          <div className="w-full aspect-video bg-emerald-50 dark:bg-emerald-950/30 rounded-md overflow-hidden relative">
            <Image
              src={podcast.imageUrl}
              alt={podcast.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/images/podcast-placeholder.jpg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300" />
            
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="default"
                size="icon"
                onClick={(e) => {
                  e.preventDefault();
                  onPlay();
                }}
                className="h-12 w-12 rounded-full bg-emerald-600/90 hover:bg-emerald-600 border-2 border-white/20 shadow-lg"
              >
                <Play size={20} className="ml-1" />
              </Button>
            </motion.div>
            
            <Badge className="absolute top-2 right-2 bg-emerald-600/90 hover:bg-emerald-600 text-white">
              {podcast.tag}
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent className="flex-1 p-4 pt-4">
          <h3 className="text-lg font-semibold leading-tight mb-2 text-emerald-800 dark:text-emerald-200 transition-colors group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
            {podcast.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-3">
            {podcast.description}
          </p>
        </CardContent>
        
        <CardFooter className="p-4 pt-0 flex items-center justify-between text-xs text-slate-500 dark:text-slate-500">
          <div className="flex items-center">
            <Clock size={14} className="mr-1.5" /> 
            <span>{podcast.duration}</span>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onPlay}
            className="h-8 text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 px-2 -mr-2"
          >
            <Headphones size={14} className="mr-1.5" />
            Listen Now
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
} 