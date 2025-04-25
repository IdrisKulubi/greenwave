"use client";

import React from "react";
import { motion } from "framer-motion";
import { Coins, TrendingUp, Gift } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const sectionVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
};

const iconVariants = {
  hover: { scale: 1.2, rotate: 15 },
  tap: { scale: 0.9 },
};

export default function GreenWaveCoinPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-emerald-50 via-white to-cyan-50 dark:from-emerald-950 dark:via-background dark:to-cyan-950 bg-200% animate-gradient-bg">
      <motion.div
        className="container mx-auto px-4 py-12 md:py-20"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <motion.section
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <motion.div
            className="inline-block mb-4"
            whileHover="hover"
            whileTap="tap"
            variants={iconVariants}
          >
            <Coins className="w-16 h-16 text-primary" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-emerald-700 dark:text-emerald-300">
            Introducing GreenWave Coin 🌊🪙
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Earn rewards for your contribution to a greener planet. GreenWave Coin
            is our way of saying thank you for engaging with environmental content
            and stories.
          </p>
        </motion.section>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* How to Earn Section */}
          <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
            <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-transparent hover:border-primary/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <motion.div whileHover="hover" whileTap="tap" variants={iconVariants}>
                    <TrendingUp className="w-6 h-6 text-green-500" />
                  </motion.div>
                  How to Earn Coins
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Accumulate GreenWave Coins through simple actions on our platform:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Submit Articles:</strong> Share impactful environmental articles and get rewarded when they are featured. (Future Feature)
                  </li>
                  <li>
                    <strong>Listen to Podcasts:</strong> Engage with our curated podcasts and earn coins for your listening time.
                  </li>
                  <li>
                    <strong>Community Engagement:</strong> Participate in discussions and events. (Future Feature)
                  </li>
                </ul>
                <Separator className="my-4" />
                <p className="text-sm text-muted-foreground italic">
                  More earning opportunities coming soon!
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* How to Redeem Section */}
          <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
            <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-transparent hover:border-primary/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <motion.div whileHover="hover" whileTap="tap" variants={iconVariants}>
                    <Gift className="w-6 h-6 text-blue-500" />
                  </motion.div>
                  Redeem Your Rewards
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Your GreenWave Coins hold real value. Redeem them for:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Cash Payouts:</strong> Convert your coins directly into cash (details forthcoming).
                  </li>
                  <li>
                    <strong>Partner Offers:</strong> Access exclusive discounts and offers from our eco-conscious partners.
                  </li>
                  <li>
                    <strong>Premium Features:</strong> Unlock special features or content on GreenWave. (Future Feature)
                  </li>
                </ul>
                <Separator className="my-4" />
                <p className="text-sm text-muted-foreground italic">
                  Stay tuned for announcements about redemption options and partners.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.section
          className="text-center mt-16"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Ready to Dive In?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Start listening, start contributing (soon!), and start earning GreenWave Coins today. Be part of the wave of change!
          </p>
          <Link href="/podcasts" legacyBehavior passHref>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Explore Podcasts Now
            </Button>
          </Link>
        </motion.section>
      </motion.div>
    </div>
  );
} 
