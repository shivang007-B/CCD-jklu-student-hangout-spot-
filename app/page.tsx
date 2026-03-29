"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Clock, Star, Coffee, ChevronRight, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

/* ══════════════════════════════════════════════════════
   DATA
   ══════════════════════════════════════════════════════ */
const reviews = [
  { user: "@JKLU_Dev", text: "Cold Coffii saved my deadline.", time: "12m ago" },
  { user: "@RiyaCampus", text: "Pav Bhaji = Peak Comfort Food.", time: "45m ago" },
  { user: "@TechBro24", text: "Perry Perry Cheese Maggi is fire!", time: "1h ago" },
  { user: "@ChaiLover", text: "Kulhad Chai at 15 is unbeatable", time: "2h ago" },
  { user: "@FoodieSingh", text: "CCD Special Pizza > everything else", time: "3h ago" },
];

const heroSlides = [
  { label: "Cold Coffii", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=1400&q=90&fit=crop&auto=format" },
  { label: "Masala Maggi", img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=1400&q=90&fit=crop&auto=format" },
  { label: "CCD Special Pizza", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1400&q=90&fit=crop&auto=format" },
];

const specials = [
  { id: 1, name: "Thick Cold Coffee", price: 50, tag: "Best Seller", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=85&fit=crop&auto=format" },
  { id: 2, name: "CCD Special Pizza", price: 99, tag: "Chef's Pick", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=85&fit=crop&auto=format" },
  { id: 3, name: "Perry Perry Cheese Maggi", price: 70, tag: "Spicy Hit", img: "https://images.unsplash.com/photo-1542528180-1c2803fa048c?w=600&q=85&fit=crop&auto=format" },
  { id: 4, name: "Veg Cheese Burger", price: 70, tag: "Fan Fav", img: "https://images.unsplash.com/photo-1586816001966-79b736744398?w=600&q=85&fit=crop&auto=format" },
  { id: 5, name: "Biscoff Shake", price: 80, tag: "New", img: "/b1.jpg" },
  { id: 6, name: "Cheese French Fry", price: 99, tag: "Must Try", img: "https://images.unsplash.com/photo-1630431341973-02e1b662ec35?w=600&q=85&fit=crop&auto=format" },
];

const FOOD_VIDEO = "https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const [activeSlide, setActiveSlide] = useState(0);
  const [tick, setTick] = useState(0);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveSlide((p) => (p + 1) % heroSlides.length);
      setTick((p) => p + 1);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => { });
    }
  }, []);

  const handleOrder = (name: string, price: number) => {
    const text = encodeURIComponent(`Hi CCD, I'd like to order 1x ${name} (₹${price}).`);
    window.open(`https://wa.me/918619471588?text=${text}`, "_blank");
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=Syne:wght@400;500;600;700;800&display=swap');

        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}

        html,body{
          margin:0!important;
          padding:0!important;
          width:100%;
          overflow-x:hidden;
        }

        :root{
          --blk:#080604; --blk2:#100D09; --blk3:#1A1510; --blk4:#252018;
          --brn:#3D2B1A;  --brnm:#6B4A2E; --brnl:#A0734A;
          --yel:#F5C518;  --yeldk:#C9960A;
          --crm:#F2E8D5;  --crmd:#C4AD8A; --wht:#FAFAF8;
        }

        .hp{
          background:var(--blk);
          color:var(--wht);
          font-family:'Syne',sans-serif;
          overflow-x:hidden;
          width:100%;
          margin:0;
          padding:0;
        }

        /* ── VIDEO HERO ── */
        .hp-vh{
          position:relative;
          width:100vw;
          margin-left:calc(50% - 50vw);
          height:100vh;
          min-height:620px;
          overflow:hidden;
          display:flex;
          align-items:flex-end;
        }
        .hp-vbg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:brightness(0.35) saturate(1.4);z-index:0}
        .hp-vslide{position:absolute;inset:0;z-index:1}
        .hp-vgrain{position:absolute;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:180px;opacity:0.04;pointer-events:none;z-index:3}
        .hp-vvig{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 110%,rgba(8,6,4,1) 0%,transparent 65%),linear-gradient(to top,rgba(8,6,4,1) 0%,rgba(8,6,4,0.45) 28%,transparent 58%),linear-gradient(to bottom,rgba(8,6,4,0.55) 0%,transparent 22%);z-index:4;pointer-events:none}

        .hp-hbody{position:relative;z-index:10;padding:0 3vw 72px;width:100%;max-width:1200px;margin:0 auto;display:flex;align-items:flex-end;justify-content:space-between;gap:32px}
        .hp-hleft{max-width:700px}
        .hp-hbadge{display:inline-block;font-size:10px;font-weight:700;letter-spacing:3.5px;text-transform:uppercase;color:var(--yel);background:rgba(245,197,24,0.1);border:1px solid rgba(245,197,24,0.3);padding:5px 14px;border-radius:20px;margin-bottom:20px}
        .hp-hh1{font-family:'Bebas Neue',sans-serif;font-size:clamp(70px,10vw,140px);line-height:0.86;letter-spacing:2px;color:var(--wht)}
        .hp-hh1 em{color:var(--yel);font-family:'Playfair Display',serif;font-style:italic;font-weight:900}
        .hp-hsub{font-size:14px;color:var(--crmd);line-height:1.7;margin-top:18px;max-width:420px}
        .hp-hctas{display:flex;gap:12px;margin-top:28px;flex-wrap:wrap}
        .hp-btn-y{display:inline-flex;align-items:center;gap:8px;background:var(--yel);color:var(--blk);font-family:'Syne',sans-serif;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;padding:14px 28px;border-radius:4px;text-decoration:none;border:none;cursor:pointer;transition:background 0.2s,transform 0.15s}
        .hp-btn-y:hover{background:#FDD835;transform:translateY(-2px)}
        .hp-btn-o{display:inline-flex;align-items:center;gap:8px;background:transparent;color:var(--crm);font-family:'Syne',sans-serif;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;padding:14px 28px;border-radius:4px;border:1px solid rgba(255,255,255,0.2);text-decoration:none;cursor:pointer;transition:all 0.2s}
        .hp-btn-o:hover{border-color:var(--yel);color:var(--yel);transform:translateY(-2px)}

        .hp-hright{display:flex;flex-direction:column;align-items:flex-end;gap:10px;padding-bottom:8px;flex-shrink:0}
        .hp-spill{display:flex;align-items:center;gap:8px;padding:8px 14px;border-radius:24px;border:1px solid rgba(255,255,255,0.1);cursor:pointer;transition:all 0.3s;background:rgba(8,6,4,0.5);backdrop-filter:blur(8px)}
        .hp-spill.act{border-color:var(--yel);background:rgba(245,197,24,0.12)}
        .hp-spill-dot{width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,0.3);flex-shrink:0;transition:background 0.3s}
        .hp-spill.act .hp-spill-dot{background:var(--yel)}
        .hp-spill-lbl{font-size:11px;font-weight:600;letter-spacing:0.8px;color:rgba(255,255,255,0.45);text-transform:uppercase;transition:color 0.3s}
        .hp-spill.act .hp-spill-lbl{color:var(--yel)}

        .hp-scroll-hint{position:absolute;bottom:24px;left:50%;transform:translateX(-50%);z-index:10;display:flex;flex-direction:column;align-items:center;gap:6px}
        .hp-scroll-hint span{font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,0.25)}
        .hp-scroll-line{width:1px;height:40px;background:linear-gradient(to bottom,rgba(245,197,24,0.8),transparent);animation:hpSL 1.8s ease-in-out infinite}
        @keyframes hpSL{0%,100%{opacity:0;transform:scaleY(0);transform-origin:top}50%{opacity:1;transform:scaleY(1)}}

        /* ── INFO STRIP (full bleed) ── */
        .hp-info-wrap{
          width:100vw;
          margin-left:calc(50% - 50vw);
          background:var(--blk2);
          border-top:1px solid rgba(255,255,255,0.06);
          border-bottom:1px solid rgba(255,255,255,0.06);
        }
        .hp-info{
          width:100%;
          max-width:1200px;
          margin:0 auto;
          padding:44px 3vw;
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:32px;
        }
        @media(max-width:700px){.hp-info{grid-template-columns:1fr;gap:24px}}
        .hp-iitem{display:flex;flex-direction:column;gap:5px}
        .hp-iico{width:36px;height:36px;border-radius:8px;background:rgba(245,197,24,0.1);display:flex;align-items:center;justify-content:center;color:var(--yel);margin-bottom:4px}
        .hp-ilbl{font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--brnl)}
        .hp-ival{font-family:'Playfair Display',serif;font-size:18px;font-weight:700;color:var(--wht);line-height:1.3}
        .hp-isub{font-size:12px;color:var(--brnl)}

        /* ── SECTION ── */
        .hp-sec{padding:80px 3vw;width:100%;max-width:1200px;margin:0 auto}
        .hp-sec-lbl{font-size:10px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:var(--yel);margin-bottom:8px}
        .hp-sec-ttl{font-family:'Bebas Neue',sans-serif;font-size:clamp(36px,4vw,56px);letter-spacing:1px;color:var(--wht);margin-bottom:40px;line-height:1}
        .hp-sec-ttl em{color:var(--yel);font-family:'Playfair Display',serif;font-style:italic}

        /* ── BENTO ── */
        .hp-bento{display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:300px 300px;gap:10px}
        @media(max-width:1024px){.hp-bento{grid-template-columns:1fr 1fr;grid-template-rows:auto}.hp-tile-hero{grid-column:span 2;min-height:340px}.hp-tile-feed{grid-column:span 2;min-height:320px}}
        @media(max-width:600px){.hp-bento{grid-template-columns:1fr}.hp-tile-hero,.hp-tile-stat,.hp-tile-feed,.hp-tile-order{grid-column:span 1}}

        .hp-tile{border-radius:16px;overflow:hidden;position:relative;border:1px solid rgba(255,255,255,0.06);transition:border-color 0.3s,transform 0.3s}
        .hp-tile:hover{border-color:rgba(245,197,24,0.35);transform:translateY(-2px)}
        .hp-tile-hero{grid-column:span 2;grid-row:span 2;background:var(--blk3)}
        .hp-tile-stat{grid-column:span 1;background:var(--blk2)}
        .hp-tile-feed{grid-column:span 1;grid-row:span 2;background:var(--blk2);display:flex;flex-direction:column;padding:26px}
        .hp-tile-order{grid-column:span 1;background:var(--blk3);padding:26px;display:flex;flex-direction:column;justify-content:space-between}

        .hp-htile-vig{position:absolute;inset:0;background:linear-gradient(to top,rgba(8,6,4,0.95) 0%,rgba(8,6,4,0.3) 45%,transparent 70%);z-index:1;pointer-events:none}
        .hp-flbl{position:absolute;top:18px;left:18px;z-index:20;background:rgba(8,6,4,0.7);border:1px solid rgba(245,197,24,0.3);backdrop-filter:blur(8px);padding:5px 12px;border-radius:20px}
        .hp-flbl span{font-size:10px;font-weight:600;letter-spacing:1.5px;color:var(--yel);text-transform:uppercase}
        .hp-fdots{position:absolute;top:18px;right:18px;z-index:20;display:flex;flex-direction:column;gap:7px}
        .hp-fdot{width:5px;height:5px;border-radius:50%;background:rgba(255,255,255,0.25);cursor:pointer;border:none;transition:all 0.3s}
        .hp-fdot.act{background:var(--yel);height:18px;border-radius:3px}
        .hp-hcont{position:absolute;bottom:0;left:0;right:0;padding:30px 34px;z-index:10}
        .hp-hcont-ey{font-size:10px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:var(--yel);margin-bottom:8px;display:block}
        .hp-hcont-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(36px,4vw,58px);line-height:0.9;color:var(--wht);margin:0}
        .hp-hcont-h2 em{color:var(--yel);font-family:'Playfair Display',serif;font-style:italic;font-weight:700}

        /* stat */
        .hp-si{height:100%;padding:26px;display:flex;flex-direction:column;justify-content:space-between}
        .hp-st{display:flex;justify-content:space-between;align-items:flex-start}
        .hp-snum{font-family:'Bebas Neue',sans-serif;font-size:70px;line-height:1;color:var(--yel);letter-spacing:-1px}
        .hp-sico{width:42px;height:42px;border-radius:10px;background:rgba(245,197,24,0.12);display:flex;align-items:center;justify-content:center;color:var(--yel)}
        .hp-slbl{font-size:10px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:var(--brnl);margin-bottom:4px}
        .hp-sdish{font-family:'Playfair Display',serif;font-size:20px;font-weight:700;color:var(--wht);line-height:1.2}
        .hp-sbar{height:3px;background:var(--blk4);border-radius:2px;margin-top:14px;overflow:hidden}
        .hp-sbarf{height:100%;background:linear-gradient(90deg,var(--yeldk),var(--yel));border-radius:2px;animation:hpBar 2s ease forwards}
        @keyframes hpBar{from{width:0}to{width:78%}}

        /* feed */
        .hp-fhdr{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;flex-shrink:0}
        .hp-fttl{font-family:'Bebas Neue',sans-serif;font-size:20px;letter-spacing:2px;color:var(--wht);margin:0}
        .hp-flive{display:flex;align-items:center;gap:6px;font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--brnl)}
        .hp-ldot{width:6px;height:6px;border-radius:50%;background:var(--yel);animation:hpPls 1.5s ease-in-out infinite}
        @keyframes hpPls{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.5;transform:scale(1.5)}}
        .hp-fscroll{flex:1;overflow:hidden;position:relative;margin-bottom:16px}
        .hp-fscroll::before{content:'';position:absolute;top:0;left:0;right:0;height:26px;background:linear-gradient(to bottom,var(--blk2),transparent);z-index:2;pointer-events:none}
        .hp-fscroll::after{content:'';position:absolute;bottom:0;left:0;right:0;height:26px;background:linear-gradient(to top,var(--blk2),transparent);z-index:2;pointer-events:none}
        .hp-ftrack{display:flex;flex-direction:column;gap:9px;animation:hpSc 18s linear infinite}
        @keyframes hpSc{0%{transform:translateY(0)}100%{transform:translateY(-50%)}}
        .hp-ftrack:hover{animation-play-state:paused}
        .hp-rcard{background:var(--blk3);border:1px solid rgba(255,255,255,0.05);border-radius:10px;padding:11px 13px;flex-shrink:0;transition:border-color 0.2s}
        .hp-rcard:hover{border-color:rgba(245,197,24,0.2)}
        .hp-rtop{display:flex;justify-content:space-between;align-items:center;margin-bottom:5px}
        .hp-rusr{font-size:11px;font-weight:700;color:var(--yel)}
        .hp-rtime{font-size:10px;color:var(--brnl)}
        .hp-rtxt{font-family:'Playfair Display',serif;font-size:12px;font-style:italic;color:var(--crmd);line-height:1.5}
        .hp-fbtn{flex-shrink:0;width:100%;height:44px;background:var(--yel);color:var(--blk);border:none;border-radius:10px;font-family:'Syne',sans-serif;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;cursor:pointer;transition:background 0.2s,transform 0.15s}
        .hp-fbtn:hover{background:#FDD835;transform:translateY(-1px)}

        /* order */
        .hp-otop{display:flex;justify-content:space-between;align-items:flex-start}
        .hp-oico{width:40px;height:40px;background:rgba(245,197,24,0.1);border-radius:10px;display:flex;align-items:center;justify-content:center;color:var(--yel)}
        .hp-oarr{color:var(--brnl);transition:color 0.2s,transform 0.2s}
        .hp-tile-order:hover .hp-oarr{color:var(--wht);transform:translate(2px,-2px)}
        .hp-oname{font-family:'Playfair Display',serif;font-size:16px;font-weight:700;color:var(--wht);margin:0 0 11px}
        .hp-osel{width:100%;padding:9px 13px;background:var(--blk4);border:1px solid rgba(255,255,255,0.08);border-radius:8px;color:var(--crmd);font-family:'Syne',sans-serif;font-size:12px;margin-bottom:10px;appearance:none;cursor:pointer;outline:none;transition:border-color 0.2s}
        .hp-osel:hover,.hp-osel:focus{border-color:rgba(245,197,24,0.4);color:var(--wht)}
        .hp-olink{display:flex;width:100%;height:42px;background:var(--brn);border:1px solid var(--brnm);border-radius:8px;align-items:center;justify-content:center;gap:8px;font-family:'Syne',sans-serif;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--crm);text-decoration:none;transition:background 0.2s,border-color 0.2s,transform 0.15s}
        .hp-olink:hover{background:var(--brnm);border-color:var(--yel);transform:translateY(-1px)}
        .hp-oprice{font-family:'Bebas Neue',sans-serif;font-size:16px;color:var(--yel)}

        /* specials */
        .hp-sgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
        @media(max-width:900px){.hp-sgrid{grid-template-columns:1fr 1fr}}
        @media(max-width:560px){.hp-sgrid{grid-template-columns:1fr}}
        .hp-scard{border-radius:14px;overflow:hidden;background:var(--blk2);border:1px solid rgba(255,255,255,0.06);transition:border-color 0.3s,transform 0.3s;cursor:pointer;display:flex;flex-direction:column}
        .hp-scard:hover{border-color:var(--yel);transform:translateY(-4px)}
        .hp-simgw{position:relative;height:200px;overflow:hidden;background:var(--blk3)}
        .hp-simg{width:100%;height:100%;object-fit:cover;transition:transform 0.5s ease}
        .hp-scard:hover .hp-simg{transform:scale(1.08)}
        .hp-sovl{position:absolute;inset:0;background:linear-gradient(to top,rgba(8,6,4,0.7) 0%,transparent 55%);pointer-events:none}
        .hp-stag{position:absolute;top:11px;left:11px;background:var(--yel);color:var(--blk);font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;padding:4px 10px;border-radius:2px;z-index:2}
        .hp-sprc{position:absolute;bottom:11px;right:11px;font-family:'Bebas Neue',sans-serif;font-size:22px;color:var(--yel);z-index:2;text-shadow:0 2px 8px rgba(0,0,0,0.6)}
        .hp-sbody{padding:14px 16px;flex:1;display:flex;flex-direction:column;justify-content:space-between;gap:10px}
        .hp-sname{font-size:14px;font-weight:700;color:var(--wht);line-height:1.3}
        .hp-sbtn{width:100%;height:40px;background:transparent;border:1px solid rgba(245,197,24,0.3);border-radius:6px;color:var(--yel);font-family:'Syne',sans-serif;font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;cursor:pointer;transition:background 0.2s,border-color 0.2s;display:flex;align-items:center;justify-content:center;gap:6px}
        .hp-sbtn:hover{background:var(--yel);color:var(--blk);border-color:var(--yel)}

        /* cta banner */
        .hp-cta-wrap{
          width:100vw;
          margin-left:calc(50% - 50vw);
          padding:0 3vw 80px;
        }
        .hp-cta{border-radius:20px;overflow:hidden;position:relative;min-height:220px;display:flex;align-items:center;background:var(--brn);width:100%;max-width:1200px;margin:0 auto;}
        .hp-ctabg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.22;filter:saturate(1.5)}
        .hp-ctaov{position:absolute;inset:0;background:linear-gradient(90deg,rgba(8,6,4,0.92) 0%,rgba(61,43,26,0.55) 100%)}
        .hp-ctabody{position:relative;z-index:2;padding:48px 5vw;display:flex;align-items:center;justify-content:space-between;width:100%;gap:24px;flex-wrap:wrap}
        .hp-ctatxt h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(30px,4vw,50px);color:var(--wht);letter-spacing:1px;line-height:1;margin-bottom:8px}
        .hp-ctatxt h2 em{color:var(--yel);font-family:'Playfair Display',serif;font-style:italic}
        .hp-ctatxt p{font-size:13px;color:var(--crmd);max-width:400px}

        @media(max-width:600px){.hp-hright{display:none}.hp-hbody{padding:0 16px 56px}}
      `}</style>

      <div className="hp">

        {/* ══════════════════ 1. VIDEO HERO ══════════════════ */}
        <section className="hp-vh">
          <video
            ref={videoRef}
            className="hp-vbg"
            src={FOOD_VIDEO}
            autoPlay muted loop playsInline
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              className="hp-vslide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
            >
              <Image
                src={heroSlides[activeSlide].img}
                alt={heroSlides[activeSlide].label}
                fill priority
                style={{ objectFit: "cover", filter: "brightness(0.35) saturate(1.4)" }}
              />
            </motion.div>
          </AnimatePresence>

          <div className="hp-vgrain" aria-hidden />
          <div className="hp-vvig" aria-hidden />

          <motion.div className="hp-hbody" style={{ opacity: heroOpacity }}>
            <div className="hp-hleft">
              <motion.span
                key={`ey-${tick}`}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="hp-hbadge"
              >
                Grab Big Deals
              </motion.span>
              <motion.h1
                key={`h1-${tick}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="hp-hh1"
              >
                On <em>Yummy</em><br />Meals!
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="hp-hsub"
              >
                Every item under ₹100. JKLU&apos;s favourite campus hangout —
                cold coffii, maggi, burgers & more, all day long.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="hp-hctas"
              >
                <Link href="/menu" className="hp-btn-y">
                  View Full Menu <ChevronRight size={14} />
                </Link>
                <Link
                  href={`https://wa.me/918619471588?text=${encodeURIComponent("Hi CCD! I'd like to place an order.")}`}
                  target="_blank"
                  className="hp-btn-o"
                >
                  Order Now <ArrowUpRight size={14} />
                </Link>
              </motion.div>
            </div>

            <div className="hp-hright">
              {heroSlides.map((s, i) => (
                <button
                  key={s.label}
                  className={`hp-spill${i === activeSlide ? " act" : ""}`}
                  onClick={() => setActiveSlide(i)}
                >
                  <div className="hp-spill-dot" />
                  <span className="hp-spill-lbl">{s.label}</span>
                </button>
              ))}
            </div>
          </motion.div>

          <div className="hp-scroll-hint">
            <span>Scroll</span>
            <div className="hp-scroll-line" />
          </div>
        </section>

        {/* ══════════════════ 2. INFO STRIP ══════════════════ */}
        <div className="hp-info-wrap">
          <div className="hp-info">
            {[
              { icon: <Clock size={18} />, label: "Timings", val: "8 AM – 9:45 PM", sub: "Open every day" },
              { icon: <Phone size={18} />, label: "Order", val: "86194 71588", sub: "WhatsApp or call" },
              { icon: <MapPin size={18} />, label: "Location", val: "Degda Complex", sub: "Opposite JKLU, Jaipur" },
            ].map((info) => (
              <motion.div
                key={info.label}
                className="hp-iitem"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="hp-iico">{info.icon}</div>
                <p className="hp-ilbl">{info.label}</p>
                <p className="hp-ival">{info.val}</p>
                <p className="hp-isub">{info.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ══════════════════ 3. BENTO DASHBOARD ══════════════════ */}
        <div className="hp-sec">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="hp-sec-lbl">Live Campus Hub</p>
            <h2 className="hp-sec-ttl">What&apos;s <em>Happening</em></h2>
          </motion.div>

          <div className="hp-bento">
            {/* HERO TILE */}
            <motion.div
              className="hp-tile hp-tile-hero"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  style={{ position: "absolute", inset: 0 }}
                >
                  <Image
                    src={heroSlides[activeSlide].img}
                    alt={heroSlides[activeSlide].label}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </motion.div>
              </AnimatePresence>

              <div className="hp-htile-vig" />

              <motion.div
                key={`fl-${activeSlide}`}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="hp-flbl"
              >
                <span>{heroSlides[activeSlide].label}</span>
              </motion.div>

              <div className="hp-fdots">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    className={`hp-fdot${i === activeSlide ? " act" : ""}`}
                    onClick={() => setActiveSlide(i)}
                    aria-label={heroSlides[i].label}
                  />
                ))}
              </div>

              <motion.div
                className="hp-hcont"
                key={`hc-${tick}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="hp-hcont-ey">Grab Big Deals</span>
                <h2 className="hp-hcont-h2">On <em>Yummy Meals!</em></h2>
              </motion.div>
            </motion.div>

            {/* STAT TILE */}
            <motion.div
              className="hp-tile hp-tile-stat"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="hp-si">
                <div className="hp-st">
                  <div className="hp-snum">142</div>
                  <div className="hp-sico"><Star size={20} fill="currentColor" /></div>
                </div>
                <div>
                  <p className="hp-slbl">Orders This Hour</p>
                  <p className="hp-sdish">Masala Maggi</p>
                  <div className="hp-sbar"><div className="hp-sbarf" /></div>
                </div>
              </div>
            </motion.div>

            {/* LIVE FEED TILE */}
            <motion.div
              className="hp-tile hp-tile-feed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="hp-fhdr">
                <h3 className="hp-fttl">Live Vibes</h3>
                <div className="hp-flive">
                  <div className="hp-ldot" />
                  <Clock size={12} />
                  Live
                </div>
              </div>
              <div className="hp-fscroll">
                <div className="hp-ftrack">
                  {[...reviews, ...reviews].map((rev, i) => (
                    <div key={`${rev.user}-${i}`} className="hp-rcard">
                      <div className="hp-rtop">
                        <span className="hp-rusr">{rev.user}</span>
                        <span className="hp-rtime">{rev.time}</span>
                      </div>
                      <p className="hp-rtxt">&ldquo;{rev.text}&rdquo;</p>
                    </div>
                  ))}
                </div>
              </div>
              <button className="hp-fbtn">Share Your Mood</button>
            </motion.div>

            {/* QUICK ORDER TILE */}
            <motion.div
              className="hp-tile hp-tile-order"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="hp-otop">
                <div className="hp-oico"><Coffee size={20} /></div>
                <ArrowUpRight size={18} className="hp-oarr" />
              </div>
              <div>
                <p className="hp-oname">Thick Cold Coffee</p>

                <select className="hp-osel">
                  <option>Plain — ₹50</option>
                  <option>Extra Ice Cream — ₹60</option>
                  <option>Choco Chips — ₹70</option>
                </select>
                <Link
                  href={`https://wa.me/918619471588?text=${encodeURIComponent("Hi CCD, I'd like to order 1x Thick Cold Coffee.")}`}
                  target="_blank"
                  className="hp-olink"
                >
                  <span>Quick Order</span>
                  <span className="hp-oprice">₹50</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ══════════════════ 4. SPECIALS ══════════════════ */}
        <div className="hp-sec" style={{ paddingTop: "0" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="hp-sec-lbl">Handpicked For You</p>
            <h2 className="hp-sec-ttl">Campus <em>Favourites</em></h2>
          </motion.div>

          <div className="hp-sgrid">
            {specials.map((item, idx) => (
              <motion.div
                key={item.id}
                className="hp-scard"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
              >
                <div className="hp-simgw">
                  {!imgErrors[item.id] ? (
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="hp-simg"
                      style={{ objectFit: "cover" }}
                      onError={() => setImgErrors((p) => ({ ...p, [item.id]: true }))}
                      unoptimized={item.id === 5}
                    />
                  ) : (
                    <div style={{ width: "100%", height: "100%", background: "var(--blk3)" }} />
                  )}
                  <div className="hp-sovl" />
                  <div className="hp-stag">{item.tag}</div>
                  <div className="hp-sprc">₹{item.price}</div>
                </div>
                <div className="hp-sbody">
                  <p className="hp-sname">{item.name}</p>
                  <button className="hp-sbtn" onClick={() => handleOrder(item.name, item.price)}>
                    Order via WhatsApp <ArrowUpRight size={12} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ══════════════════ 5. CTA BANNER ══════════════════ */}
        <div className="hp-cta-wrap">
          <motion.div
            className="hp-cta"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1400&q=80&fit=crop&auto=format"
              alt="Food spread"
              fill
              className="hp-ctabg"
              style={{ objectFit: "cover" }}
            />
            <div className="hp-ctaov" />
            <div className="hp-ctabody">
              <div className="hp-ctatxt">
                <h2>Explore Our <em>Full Menu</em></h2>
                <p>73 items. All under ₹100. Cold coffii to loaded maggi — find exactly what you&apos;re craving.</p>
              </div>
              <Link href="/menu" className="hp-btn-y" style={{ flexShrink: 0 }}>
                See All 73 Items <ChevronRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>

      </div>
    </>
  );
}