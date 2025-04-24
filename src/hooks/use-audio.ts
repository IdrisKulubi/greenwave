"use client";

import { useState, useEffect, useRef } from "react";

interface UseAudioReturn {
  playing: boolean;
  duration: number;
  currentTime: number;
  progress: number;
  play: () => void;
  pause: () => void;
  toggle: () => void;
  seek: (time: number) => void;
}

export function useAudio(src: string): UseAudioReturn {
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(src);
      
      audioRef.current.addEventListener("loadedmetadata", () => {
        setDuration(audioRef.current?.duration || 0);
      });
      
      audioRef.current.addEventListener("timeupdate", () => {
        const current = audioRef.current?.currentTime || 0;
        const duration = audioRef.current?.duration || 0;
        setCurrentTime(current);
        setProgress((current / duration) * 100);
      });
      
      audioRef.current.addEventListener("ended", () => {
        setPlaying(false);
      });
    }
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
        audioRef.current = null;
      }
    };
  }, [src]);
  
  const play = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error("Error playing audio:", error);
      });
      setPlaying(true);
    }
  };
  
  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPlaying(false);
    }
  };
  
  const toggle = () => {
    if (playing) {
      pause();
    } else {
      play();
    }
  };
  
  const seek = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };
  
  return {
    playing,
    duration,
    currentTime,
    progress,
    play,
    pause,
    toggle,
    seek,
  };
} 