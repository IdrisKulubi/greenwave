"use client";

import { Leaf } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-slate-50/50 dark:bg-slate-950/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-lg font-semibold text-emerald-700 dark:text-emerald-300">GreenWave</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Transforming environmental stories into immersive audio experiences.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-slate-900 dark:text-slate-100 mb-4">Content</h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><Link href="/podcasts" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Podcasts</Link></li>
              <li><Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">About</Link></li>
              <li><Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Topics</Link></li>
              <li><Link href="/submit" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Submit Article</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-slate-900 dark:text-slate-100 mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">About</Link></li>
              <li><Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Careers</Link></li>
              <li><Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Press</Link></li>
              <li><Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-slate-900 dark:text-slate-100 mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Terms</Link></li>
              <li><Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Privacy</Link></li>
              <li><Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Cookies</Link></li>
              <li><Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Licensing</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-6 text-sm text-slate-500 dark:text-slate-500">
          <p>&copy; {new Date().getFullYear()} GreenWave. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 