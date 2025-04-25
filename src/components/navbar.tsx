"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Navbar() {
  const router = useRouter();
  
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md"
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              <span className="text-xl font-semibold text-emerald-700 dark:text-emerald-300">GreenWave</span>
            </div>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="font-medium text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 transition-colors">
            Home
          </Link>
          <Link href="/podcasts" className="font-medium text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 transition-colors">
            Podcasts
          </Link>
          <Link href="/" className="font-medium text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 transition-colors">
            About
          </Link>
          <Link href="/submit" className="font-medium text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 transition-colors">
            Submit Article
          </Link>
          <Link href="/greenwave-coin" className="font-medium text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 transition-colors">
            GreenWave Coin
          </Link>
        </nav>

        <div className="flex items-center gap-4">
         
          <Button 
            className="hidden md:flex bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-700 dark:hover:bg-emerald-600"
            onClick={() => router.push("/submit")}
          >
            Get Started
          </Button>
          <ModeToggle />
        </div>
      </div>
    </motion.header>
  );
} 