"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Clock, Star, Coffee } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const reviews = [
  { user: "@JKLU_Dev", text: "Cold Coffii saved my deadline. 🔥", time: "12m ago" },
  { user: "@RiyaCampus", text: "Pav Bhaji = Peak Comfort Food.", time: "45m ago" },
  { user: "@TechBro24", text: "Perry Perry Cheese Maggi is fire!", time: "1h ago" },
  { user: "@ChaiLover", text: "Kulhad Chai at ₹15 is unbeatable ☕", time: "2h ago" },
  { user: "@FoodieSingh", text: "CCD Special Pizza > everything else 🍕", time: "3h ago" },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-background py-24 px-6 min-h-screen pt-32 w-full">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px] md:auto-rows-[300px]">

          {/* TILE 1: IMMERSIVE HERO (2x2) */}
          <motion.div style={{ scale }} className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-3xl bg-secondary group realistic-shadow border border-border">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-secondary/80 mix-blend-overlay z-10" />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/cold_coffee_vibe.jpg"
              alt="CCD Vibe"
              className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 grayscale-[10%] group-hover:grayscale-0 transition-all duration-1000 z-0"
            />

            {/* Floating Emojis */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 right-10 z-20 text-4xl drop-shadow-xl"
            >
              🤤
            </motion.div>
            <motion.div
              animate={{ y: [0, 15, 0], rotate: [2, -2, 2] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-32 right-20 z-20 text-3xl drop-shadow-xl"
            >
              🔥
            </motion.div>

            <div className="relative z-20 p-8 md:p-12 h-full flex flex-col justify-end bg-gradient-to-t from-background/90 via-background/20 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 h-2/3 backdrop-blur-[4px] -z-10 bg-gradient-to-t from-background via-background/50 to-transparent" />

              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-primary font-outfit font-bold tracking-widest uppercase mb-3 text-sm md:text-base drop-shadow-md"
              >
                Grab Big Deals
              </motion.span>
              <h2 className="text-5xl md:text-7xl font-bold text-foreground leading-tight font-outfit drop-shadow-lg">
                On <span className="text-primary italic font-newsreader">Yummy Meals!</span>
              </h2>
            </div>
          </motion.div>

          {/* TILE 2: DATA-PULSE (1x1) */}
          <div className="md:col-span-1 md:row-span-1 bg-card p-6 md:p-8 rounded-3xl realistic-shadow border border-border flex flex-col justify-between group hover:border-primary/50 transition-colors">
            <div className="flex justify-between items-center text-primary">
              <Star fill="currentColor" size={28} className="animate-pulse-intense" />
              <span className="text-5xl font-black font-outfit">142</span>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground font-outfit">Orders This Hour</p>
              <p className="text-2xl font-bold font-outfit text-foreground mt-1 group-hover:text-primary transition-colors">Masala Maggi</p>
            </div>
          </div>

          {/* TILE 3: LIVE VIBE FEED (1x2) */}
          <div className="md:col-span-1 md:row-span-2 bg-card rounded-3xl p-6 md:p-8 realistic-shadow border border-border flex flex-col justify-between overflow-hidden">
            <h3 className="text-2xl font-bold font-outfit text-foreground flex items-center justify-between">
              Live Vibes <Clock size={20} className="text-primary" />
            </h3>

            <div className="space-y-4 flex-grow overflow-hidden relative my-6">
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-card to-transparent z-10" />
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-card to-transparent z-10" />

              <motion.div
                animate={{ y: ["0%", "-50%"] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="space-y-4"
              >
                {[...reviews, ...reviews].map((rev, i) => (
                  <div key={`${rev.user}-${i}`} className="bg-secondary p-4 rounded-xl border border-border/50 group hover:border-primary/30 transition-colors">
                    <p className="font-bold font-outfit text-foreground flex justify-between items-center text-sm md:text-base">
                      {rev.user}
                      <span className="text-xs text-muted-foreground">{rev.time}</span>
                    </p>
                    <p className="italic font-newsreader text-muted-foreground mt-2">&quot;{rev.text}&quot;</p>
                  </div>
                ))}
              </motion.div>
            </div>

            <Button className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl font-bold text-sm md:text-base transition-transform hover:scale-[1.02] font-outfit shadow-lg shadow-primary/20">
              Share Your Mood
            </Button>
          </div>

          {/* TILE 4: QUICK ORDER (1x1) */}
          <div className="md:col-span-1 md:row-span-1 bg-card p-6 md:p-8 rounded-3xl realistic-shadow border border-border flex flex-col justify-between group hover:border-accent/50 transition-colors">
            <div className="flex justify-between items-start">
              <div className="bg-accent/10 p-2 rounded-lg text-accent">
                <Coffee size={24} />
              </div>
              <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-foreground opacity-50 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            <div>
              <p className="font-bold font-outfit text-lg mb-3 text-foreground">Thick Cold Coffee</p>
              <select className="w-full p-3 bg-secondary rounded-[10px] text-sm font-outfit border border-border mb-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-foreground appearance-none cursor-pointer hover:bg-secondary/80 transition-colors">
                <option>Plain — ₹50</option>
                <option>Extra Ice Cream — ₹60</option>
                <option>Choco Chips — ₹70</option>
              </select>
              <Button asChild className="w-full h-12 bg-accent text-accent-foreground hover:bg-accent/90 rounded-[10px] font-bold text-sm hover:scale-[1.02] transition-transform font-outfit shadow-md">
                <Link href={`https://wa.me/918619471588?text=${encodeURIComponent("Hi CCD, I'd like to order 1x Thick Cold Coffee.")}`} target="_blank">
                  Quick Order <span className="ml-2 font-mono">₹50</span>
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
