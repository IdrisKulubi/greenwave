"use client";

import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  X,
      
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Podcast } from "@/lib/podcast-data";
import Image from "next/image";

interface PodcastPlayerProps {
  podcast: Podcast | null;
  isOpen: boolean;
  onClose: () => void;
}

export function PodcastPlayer({ podcast, isOpen, onClose }: PodcastPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [audioFrequencies, setAudioFrequencies] = useState<number[]>([]);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  
  useEffect(() => {
    if (isOpen && podcast) {
      const audio = new Audio(podcast.audioSrc);
      audioRef.current = audio;
      
      audio.addEventListener('loadedmetadata', () => {
        setDuration(audio.duration);
      });
      
      audio.addEventListener('ended', () => {
        setIsPlaying(false);
      });
      
      const audioContext = new AudioContext();
      audioContextRef.current = audioContext;
      const analyser = audioContext.createAnalyser();
      analyserRef.current = analyser;
      analyser.fftSize = 64;
      
      const source = audioContext.createMediaElementSource(audio);
      source.connect(analyser);
      analyser.connect(audioContext.destination);
      
      return () => {
        audio.pause();
        audio.src = '';
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
        if (audioContext.state !== 'closed') {
          audioContext.close();
        }
      };
    }
  }, [isOpen, podcast]);
  
  const updateVisualizer = () => {
    if (analyserRef.current && isPlaying) {
      const bufferLength = analyserRef.current.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      analyserRef.current.getByteFrequencyData(dataArray);
      
      const frequencies = Array.from(dataArray).slice(0, 24).map(value => value / 255);
      setAudioFrequencies(frequencies);
      
      animationRef.current = requestAnimationFrame(updateVisualizer);
    }
  };
  
  const updateTime = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      animationRef.current = requestAnimationFrame(updateTime);
    }
  };
  
  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      } else {
        audioContextRef.current?.resume().then(() => {
          audioRef.current?.play();
          animationRef.current = requestAnimationFrame(updateTime);
          animationRef.current = requestAnimationFrame(updateVisualizer);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const handleSeek = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };
  
  const handleVolumeChange = (value: number[]) => {
    if (audioRef.current) {
      const newVolume = value[0];
      audioRef.current.volume = newVolume;
      setVolume(newVolume);
      if (newVolume === 0) {
        setIsMuted(true);
      } else {
        setIsMuted(false);
      }
    }
  };
  
  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume;
      } else {
        audioRef.current.volume = 0;
      }
      setIsMuted(!isMuted);
    }
  };
  
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  
  const skip = (seconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(
        Math.max(audioRef.current.currentTime + seconds, 0),
        duration
      );
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogTitle>Podcast Player</DialogTitle>
      <DialogContent className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-950 dark:to-slate-900 p-0 border-emerald-200 dark:border-emerald-800">
        <div className="px-6 pt-6 pb-4 sticky top-0 z-10 bg-gradient-to-b from-emerald-50 to-emerald-50/80 dark:from-emerald-950 dark:to-emerald-950/80 backdrop-blur-sm">
          <div className="absolute top-4 right-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8 rounded-full hover:bg-emerald-100/50 dark:hover:bg-emerald-900/50"
            >
              <X size={18} />
            </Button>
          </div>
          <h2 className="text-xl font-semibold text-emerald-800 dark:text-emerald-200 mr-10">
            {podcast?.title ?? "Loading..."}
          </h2>
        </div>
        
        {podcast && (
          <div className="px-6 pb-6 flex flex-col items-center">
            <div className="relative w-full max-w-[320px] aspect-square mb-6 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={podcast.imageUrl}
                alt={podcast.title}
                fill
                sizes="(max-width: 768px) 300px, 320px"
                priority
                style={{ objectFit: "cover" }}
                className="rounded-xl transition-opacity duration-300"
              />
              
              <div className="absolute inset-0 flex items-end justify-center p-4 bg-black/10 backdrop-blur-sm">
                <div className="flex items-end h-12 space-x-1">
                  {audioFrequencies.length > 0
                    ? audioFrequencies.map((freq, index) => (
                        <motion.div
                          key={index}
                          className="w-1.5 bg-emerald-300/80 rounded-full"
                          initial={{ height: "0%" }}
                          animate={{ height: `${Math.max(2, freq * 100)}%` }}
                          transition={{ duration: 0.1, ease: "easeOut" }}
                        />
                      ))
                    : Array.from({ length: 24 }).map((_, index) => (
                        <div
                          key={index}
                          className="w-1.5 h-[2%] bg-emerald-300/40 rounded-full"
                        />
                      ))}
                </div>
              </div>
            </div>
            
            <div className="text-center mb-6">
              <p className="text-lg font-medium text-emerald-800 dark:text-emerald-200">
                {podcast.tag}
              </p>
              <p className="text-sm text-emerald-600 dark:text-emerald-400">
                Episode {podcast.id}
              </p>
            </div>
            
            <div className="w-full max-w-md mb-4">
              <Slider
                value={[currentTime]}
                max={duration}
                step={1}
                onValueChange={handleSeek}
                className="w-full h-2 cursor-pointer"
                aria-label="Podcast progress"
              />
              <div className="flex justify-between text-xs text-emerald-600 dark:text-emerald-400 mt-1">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => skip(-15)}
                className="h-10 w-10 rounded-full hover:bg-emerald-100 dark:hover:bg-emerald-900/50"
              >
                <div className="relative">
                  <SkipBack size={20} />
                  <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 text-[10px] font-medium">
                    15
                  </span>
                </div>
              </Button>
              
              <Button
                onClick={togglePlayPause}
                size="icon"
                className={cn(
                  "h-14 w-14 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600",
                  "transition-transform duration-200 hover:scale-105"
                )}
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause size={24} />
                ) : (
                  <Play size={24} className="ml-1" />
                )}
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={() => skip(15)}
                className="h-10 w-10 rounded-full hover:bg-emerald-100 dark:hover:bg-emerald-900/50"
              >
                <div className="relative">
                  <SkipForward size={20} />
                  <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 text-[10px] font-medium">
                    15
                  </span>
                </div>
              </Button>
            </div>
            
            <div className="flex items-center gap-3 w-full max-w-[150px]">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMute}
                className="h-8 w-8 rounded-full hover:bg-emerald-100 dark:hover:bg-emerald-900/50"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </Button>
              
              <Slider
                value={[isMuted ? 0 : volume]}
                max={1}
                step={0.05}
                onValueChange={handleVolumeChange}
                className="w-full h-1 cursor-pointer"
                aria-label="Volume control"
              />
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
} 