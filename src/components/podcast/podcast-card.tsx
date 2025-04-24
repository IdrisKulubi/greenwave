"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Podcast } from "@/lib/podcast-data";
import { motion } from "framer-motion";
import { useState } from "react";
import { Play, Pause, ChevronRight, Clock } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import { useAudio } from "@/hooks/use-audio";
import { formatTime } from "@/lib/utils";

interface PodcastCardProps {
  podcast: Podcast;
  index: number;
}

export function PodcastCard({ podcast, index }: PodcastCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  // We'll use a placeholder audio source for demonstration
  const audioSrc = "/podcast/placeholder-audio.mp3";
  const { playing, duration, currentTime, progress, toggle, seek } = useAudio(audioSrc);

  // Format the audio duration for display
  const formattedCurrentTime = formatTime(currentTime);
  const formattedDuration = formatTime(duration);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="h-full"
      >
        <Card className="h-full flex flex-col overflow-hidden group transition-all duration-300 hover:shadow-lg dark:hover:shadow-emerald-950/20 hover:border-emerald-300/50">
          <CardHeader className="p-4 pb-0 relative overflow-hidden">
            <div className="w-full aspect-[4/3] bg-emerald-50 dark:bg-emerald-950/30 rounded-md overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center bg-emerald-100/50 dark:bg-emerald-900/20">
                <Play size={48} className="text-emerald-700/30 dark:text-emerald-400/20" />
              </div>
              <Badge className="absolute top-2 right-2 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 dark:hover:bg-emerald-800">
                {podcast.tag}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="flex-1 p-4 pt-4">
            <h3 className="text-lg font-semibold leading-tight mb-2 text-slate-800 dark:text-slate-100 transition-colors group-hover:text-emerald-700 dark:group-hover:text-emerald-400">
              {podcast.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-2">
              {podcast.description}
            </p>
            <div className="flex items-center text-xs font-mono text-slate-500 dark:text-slate-500">
              <Clock size={12} className="mr-1" /> {podcast.duration}
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button 
              onClick={() => setIsOpen(true)}
              className="w-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white"
            >
              <Play size={16} className="mr-2" /> Play Episode
            </Button>
          </CardFooter>
        </Card>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-emerald-800 dark:text-emerald-400">
              {podcast.title}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {podcast.description}
            </p>
            
            <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-6 space-y-4">
              <div className="flex justify-center">
                <motion.div 
                  className="w-24 h-24 rounded-full bg-emerald-600 dark:bg-emerald-700 flex items-center justify-center cursor-pointer"
                  whileTap={{ scale: 0.95 }}
                  onClick={toggle}
                >
                  {playing ? (
                    <Pause size={36} className="text-white" />
                  ) : (
                    <Play size={36} className="text-white ml-2" />
                  )}
                </motion.div>
              </div>
              
              <div>
                <Slider
                  value={[progress]}
                  max={100}
                  step={0.1}
                  onValueChange={(value) => {
                    seek((value[0] / 100) * duration);
                  }}
                  className="my-4"
                />
                <div className="flex justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span>{formattedCurrentTime}</span>
                  <span>{formattedDuration}</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center text-sm text-slate-600 dark:text-slate-400">
              <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                {podcast.tag}
              </Badge>
              <Button variant="ghost" size="sm" className="text-emerald-600 dark:text-emerald-400">
                More episodes <ChevronRight size={16} />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
} 