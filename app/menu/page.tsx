"use client";

import { useState } from "react";
import Image from "next/image";

/* ══════════════════════════════════════════════════════
   TYPES
   ══════════════════════════════════════════════════════ */
interface MenuItem {
  id: number;
  name: string;
  price: number;
  desc: string;
  img: string;
}

/* ══════════════════════════════════════════════════════
   COMPLETE CCD MENU DATA — web images (Unsplash)
   ══════════════════════════════════════════════════════ */
const menuData: Record<string, MenuItem[]> = {
  "Cold Coffii": [
    { id: 1, name: "Thick Cold Coffee", price: 50, desc: "The legendary JKLU student fuel.", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80&fit=crop&auto=format" },
    { id: 2, name: "Cold Coffii with Extra Ice Cream", price: 60, desc: "Extra scoop for the extra vibe.", img: "/mqdefault.jpg" },
    { id: 3, name: "Cold Coffii with Choco Chips", price: 70, desc: "Crunchy choco chips in every sip.", img: "/cc.jpg" },
    { id: 4, name: "Hazelnut Coffii", price: 70, desc: "Rich hazelnut flavor coffee.", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80&fit=crop&auto=format" },
    { id: 5, name: "Caramel Coffii", price: 70, desc: "Sweet caramel drizzle coffee.", img: "/cr.jpg" },
    { id: 6, name: "Banana Coffii", price: 60, desc: "Something healthy! Banana blend.", img: "/Banana_3.webp" },
    { id: 7, name: "Extra Strong Coffii", price: 10, desc: "Add extra shot to any coffee.", img: "/sc.avif" },
  ],
  "Mojito": [
    { id: 8, name: "Green Mint Mojito", price: 50, desc: "Fresh mint, refreshing sip.", img: "/gm.webp" },
    { id: 9, name: "Blue Lagoon Mojito", price: 50, desc: "Blue curacao twist mojito.", img: "/bl.jpeg" },
    { id: 10, name: "Black Current Mojito", price: 50, desc: "Berry burst in every glass.", img: "https://images.unsplash.com/photo-1570696516188-ade861b84a49?w=600&q=80&fit=crop&auto=format" },
    { id: 11, name: "Green Apple Mojito", price: 50, desc: "Tangy green apple refresher.", img: "/ga.cms" },
  ],
  "Thick Shakes": [
    { id: 12, name: "Black Current Shake", price: 60, desc: "Rich black current thick shake.", img: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=600&q=80&fit=crop&auto=format" },
    { id: 13, name: "Strawberry Shake", price: 60, desc: "Classic strawberry blend.", img: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600&q=80&fit=crop&auto=format" },
    { id: 14, name: "Vanilla Shake", price: 60, desc: "Smooth vanilla thick shake.", img: "https://images.unsplash.com/photo-1568901839119-631418a3910d?w=600&q=80&fit=crop&auto=format" },
    { id: 15, name: "Oreo Shake", price: 60, desc: "Crushed Oreo cookie shake.", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=80&fit=crop&auto=format" },
    { id: 16, name: "Butterscotch Shake", price: 70, desc: "Crunchy butterscotch delight.", img: "/bs.jpeg" },
    { id: 17, name: "Chocolate Shake", price: 60, desc: "Rich chocolate thick shake.", img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80&fit=crop&auto=format" },
    { id: 18, name: "Kit Kat Shake", price: 80, desc: "Kit Kat blended shake.", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=80&fit=crop&auto=format" },
    { id: 19, name: "Biscoff Shake", price: 80, desc: "Lotus Biscoff caramel shake.", img: "/b1.jpg" },
  ],
  "Maggi": [
    { id: 20, name: "Plain Maggi", price: 40, desc: "The OG 2 minute noodle.", img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80&fit=crop&auto=format" },
    { id: 21, name: "Masala Maggi", price: 45, desc: "Extra masala, extra taste.", img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80&fit=crop&auto=format" },
    { id: 22, name: "Schezwan Maggi", price: 50, desc: "Spicy schezwan tossed maggi.", img: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=600&q=80&fit=crop&auto=format" },
    { id: 23, name: "Veg Tadka Maggi", price: 50, desc: "Maggi with veggie tadka.", img: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=600&q=80&fit=crop&auto=format" },
    { id: 24, name: "Perry Perry Cheese Maggi", price: 70, desc: "Peri peri + cheese overload.", img: "https://images.unsplash.com/photo-1542528180-1c2803fa048c?w=600&q=80&fit=crop&auto=format" },
    { id: 25, name: "Egg Maggi (With 2 Eggs)", price: 70, desc: "Maggi loaded with 2 eggs.", img: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600&q=80&fit=crop&auto=format" },
    { id: 26, name: "Cheese Maggi", price: 70, desc: "Extra cheesy maggi bowl.", img: "https://images.unsplash.com/photo-1548340748-6af6f3943ade?w=600&q=80&fit=crop&auto=format" },
  ],
  "Jumbo Burger": [
    { id: 27, name: "Veg Burger (Large Patty)", price: 50, desc: "Classic crispy veg patty burger.", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80&fit=crop&auto=format" },
    { id: 28, name: "Double Tikki Burger", price: 60, desc: "Double the patty, double the fun.", img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&q=80&fit=crop&auto=format" },
    { id: 29, name: "Veg Cheese Burger", price: 70, desc: "Loaded with extra cheese.", img: "https://images.unsplash.com/photo-1586816001966-79b736744398?w=600&q=80&fit=crop&auto=format" },
    { id: 30, name: "Tandoori Burger", price: 60, desc: "Smoky tandoori spiced burger.", img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&q=80&fit=crop&auto=format" },
    { id: 31, name: "Veg Burger Combo Offer", price: 90, desc: "Burger + fries combo deal.", img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=600&q=80&fit=crop&auto=format" },
  ],
  "Pizza": [
    { id: 32, name: "OTC Pizza", price: 89, desc: "Over the counter classic pizza.", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80&fit=crop&auto=format" },
    { id: 33, name: "CCD Special Pizza", price: 99, desc: "Sweet Corn + Jalapeno + Olive.", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80&fit=crop&auto=format" },
  ],
  "Sandwich": [
    { id: 34, name: "Veg Grilled Sandwich", price: 50, desc: "Classic veg grilled, 4 large pcs.", img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80&fit=crop&auto=format" },
    { id: 35, name: "Tandoori Sandwich", price: 70, desc: "Tandoori masala grilled sandwich.", img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=600&q=80&fit=crop&auto=format" },
    { id: 36, name: "Aloo Sandwich", price: 50, desc: "Spiced aloo filling sandwich.", img: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=600&q=80&fit=crop&auto=format" },
    { id: 37, name: "Cheese Grilled Sandwich", price: 80, desc: "Extra cheese grilled sandwich.", img: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=600&q=80&fit=crop&auto=format" },
  ],
  "Rolls": [
    { id: 38, name: "Veg Roll", price: 50, desc: "Crispy veg stuffed roll.", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80&fit=crop&auto=format" },
    { id: 39, name: "Veg Cheese Roll", price: 80, desc: "Cheesy veg roll wrap.", img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80&fit=crop&auto=format" },
    { id: 40, name: "Egg Roll (With Double Egg)", price: 70, desc: "Double egg stuffed roll.", img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&q=80&fit=crop&auto=format" },
  ],
  "Pasta": [
    { id: 41, name: "White Sauce Pasta", price: 99, desc: "Creamy white sauce pasta.", img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80&fit=crop&auto=format" },
    { id: 42, name: "Pink Sauce Pasta", price: 99, desc: "Creamy & cheesy pink sauce.", img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&q=80&fit=crop&auto=format" },
    { id: 43, name: "Spaghetti Pasta", price: 90, desc: "Classic spaghetti style pasta.", img: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=600&q=80&fit=crop&auto=format" },
  ],
  "French Fry": [
    { id: 44, name: "Regular French Fry", price: 70, desc: "Crispy golden salted fries.", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80&fit=crop&auto=format" },
    { id: 45, name: "Perry Perry French Fry", price: 80, desc: "Peri peri spiced fries.", img: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=600&q=80&fit=crop&auto=format" },
    { id: 46, name: "Cheese French Fry", price: 99, desc: "Loaded cheese fries.", img: "https://images.unsplash.com/photo-1630431341973-02e1b662ec35?w=600&q=80&fit=crop&auto=format" },
  ],
  "Fried Rice": [
    { id: 47, name: "Veg Fried Rice", price: 50, desc: "Classic veg fried rice.", img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80&fit=crop&auto=format" },
    { id: 48, name: "Schezwan Fried Rice", price: 60, desc: "Spicy schezwan fried rice.", img: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=600&q=80&fit=crop&auto=format" },
    { id: 49, name: "Egg Fried Rice", price: 70, desc: "Egg tossed fried rice.", img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80&fit=crop&auto=format" },
  ],
  "Hakka Noodles": [
    { id: 50, name: "Veg Hakka Noodles", price: 50, desc: "Stir-fried veg hakka noodles.", img: "https://images.unsplash.com/photo-1582878826629-33b7a4b51a7c?w=600&q=80&fit=crop&auto=format" },
    { id: 51, name: "Schezwan Noodles", price: 60, desc: "Spicy schezwan noodles.", img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80&fit=crop&auto=format" },
    { id: 52, name: "Egg Noodles (2 Eggs)", price: 80, desc: "Egg tossed hakka noodles.", img: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=600&q=80&fit=crop&auto=format" },
  ],
  "Patties": [
    { id: 53, name: "Aalu Patties", price: 20, desc: "Classic aloo patties.", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80&fit=crop&auto=format" },
    { id: 54, name: "Masala Patties", price: 30, desc: "Spiced masala patties.", img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&q=80&fit=crop&auto=format" },
    { id: 55, name: "Paneer Patties", price: 25, desc: "Soft paneer stuffed patties.", img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d6?w=600&q=80&fit=crop&auto=format" },
    { id: 56, name: "Tandoori Patties", price: 40, desc: "Smoky tandoori flavored.", img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80&fit=crop&auto=format" },
    { id: 57, name: "Paneer Masala", price: 35, desc: "Paneer with masala twist.", img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80&fit=crop&auto=format" },
    { id: 58, name: "Cheese Patties", price: 45, desc: "Loaded cheese patties.", img: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=600&q=80&fit=crop&auto=format" },
    { id: 59, name: "Paneer Cheese", price: 45, desc: "Paneer + cheese combo.", img: "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?w=600&q=80&fit=crop&auto=format" },
    { id: 60, name: "Paneer Tandoori", price: 45, desc: "Paneer tandoori special.", img: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=600&q=80&fit=crop&auto=format" },
    { id: 61, name: "Ex. Cheese Topping", price: 25, desc: "Add extra cheese topping.", img: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&q=80&fit=crop&auto=format" },
  ],
  "Paratha & More": [
    { id: 62, name: "Aloo Paratha with Curd (1Pc)", price: 40, desc: "Stuffed aloo paratha + curd.", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80&fit=crop&auto=format" },
    { id: 63, name: "Aloo Paratha with Curd + Amul Butter (1Pc)", price: 50, desc: "Paratha + curd + Amul butter.", img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&q=80&fit=crop&auto=format" },
    { id: 64, name: "Pav Bhaji", price: 60, desc: "Classic pav bhaji, buttery & spicy.", img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80&fit=crop&auto=format" },
    { id: 65, name: "Extra Pav / Bhaji", price: 10, desc: "Add extra pav or bhaji.", img: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=600&q=80&fit=crop&auto=format" },
  ],
  "Omelet": [
    { id: 66, name: "Sp. Jumbo Omelet (With Double Egg)", price: 50, desc: "Special jumbo double egg omelet.", img: "https://images.unsplash.com/photo-1510693206972-df098062cb71?w=600&q=80&fit=crop&auto=format" },
    { id: 67, name: "Bread Cheese Omelet (With Double Egg)", price: 75, desc: "Cheesy bread omelet.", img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&q=80&fit=crop&auto=format" },
    { id: 68, name: "Only Omelate (With 2 Egg)", price: 45, desc: "Simple double egg omelette.", img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&q=80&fit=crop&auto=format" },
  ],
  "More Drinks": [
    { id: 69, name: "Kulhad Masala Chai", price: 15, desc: "Kadak masala chai in kulhad.", img: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=600&q=80&fit=crop&auto=format" },
    { id: 70, name: "Hot Coffee (Hand Whipped)", price: 30, desc: "Hand whipped hot coffee (30/60).", img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80&fit=crop&auto=format" },
    { id: 71, name: "Hot Chocolate", price: 25, desc: "Warm rich hot chocolate.", img: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=600&q=80&fit=crop&auto=format" },
    { id: 72, name: "Lemon Mint Iced Tea", price: 50, desc: "Refreshing lemon mint iced tea.", img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80&fit=crop&auto=format" },
    { id: 73, name: "Hot Dark Chocolate Pastry", price: 50, desc: "Warm dark chocolate pastry.", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80&fit=crop&auto=format" },
  ],
};

const categories = Object.keys(menuData);

/* ══════════════════════════════════════════════════════
   MENU CARD
   ══════════════════════════════════════════════════════ */
function MenuCard({ item }: { item: MenuItem }) {
  const [imgError, setImgError] = useState(false);

  const handleOrder = () => {
    const text = encodeURIComponent(
      `Hi CCD, I'd like to order 1x ${item.name} (₹${item.price}).`
    );
    window.open(`https://wa.me/918619471588?text=${text}`, "_blank");
  };

  return (
    <div className="ccd-card">
      <div className="ccd-card-img">
        {!imgError ? (
          <Image
            src={item.img}
            alt={item.name}
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw"
            className="ccd-food-img"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="ccd-fallback" />
        )}
        <div className="ccd-img-overlay" />
        <span className="ccd-price">₹{item.price}</span>
      </div>

      <div className="ccd-card-body">
        <h3 className="ccd-item-name">{item.name}</h3>
        <p className="ccd-item-desc">{item.desc}</p>
        <button className="ccd-order-btn" onClick={handleOrder}>
          Order via WhatsApp
        </button>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   MAIN PAGE
   ══════════════════════════════════════════════════════ */
export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@400;600;700;800&family=DM+Serif+Display:ital@0;1&display=swap');

        .ccd-root {
          background: #0A0A0A;
          color: #FAFAFA;
          font-family: 'Syne', sans-serif;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* ── HERO ── */
        .ccd-hero {
          padding: 64px 24px 36px;
          text-align: center;
          position: relative;
          overflow: hidden;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }
        .ccd-hero::before {
          content: '';
          position: absolute;
          top: -60px; left: 50%;
          transform: translateX(-50%);
          width: 700px; height: 500px;
          background: radial-gradient(ellipse, rgba(245,197,24,0.10) 0%, transparent 70%);
          pointer-events: none;
        }
        .ccd-badge {
          display: inline-block;
          background: #F5C518;
          color: #0A0A0A;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          padding: 5px 14px;
          border-radius: 2px;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .ccd-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(60px, 10vw, 100px);
          line-height: 0.88;
          letter-spacing: 2px;
          color: #FAFAFA;
          margin: 0;
        }
        .ccd-title em {
          color: #F5C518;
          font-family: 'DM Serif Display', serif;
          font-style: italic;
        }
        .ccd-subtitle {
          color: #888;
          font-size: 13px;
          max-width: 460px;
          margin: 14px auto 0;
          line-height: 1.6;
        }
        .ccd-meta {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 14px;
        }
        .ccd-meta span { font-size: 11px; color: #888; letter-spacing: 0.4px; }
        .ccd-meta strong { color: #F5C518; }

        /* ── TABS ── */
        .ccd-tabs-wrap {
          overflow-x: auto;
          padding: 0 16px;
          scrollbar-width: none;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }
        .ccd-tabs-wrap::-webkit-scrollbar { display: none; }
        .ccd-tabs {
          display: flex;
          gap: 4px;
          min-width: max-content;
          padding: 16px 8px;
        }
        .ccd-tab {
          background: #1A1A1A;
          border: 1px solid #252525;
          color: #888;
          font-family: 'Syne', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.8px;
          padding: 7px 14px;
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.18s;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .ccd-tab:hover { color: #FAFAFA; border-color: #F5C518; }
        .ccd-tab.active {
          background: #F5C518;
          color: #0A0A0A;
          border-color: #F5C518;
        }

        /* ── SECTION ── */
        .ccd-section {
          padding: 20px 20px 72px;
          max-width: 1200px;
          margin: 0 auto;
          flex: 1;
          width: 100%;
        }
        .ccd-section-head {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }
        .ccd-section-head h2 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 30px;
          letter-spacing: 2px;
          color: #F5C518;
          white-space: nowrap;
          margin: 0;
        }
        .ccd-divider {
          flex: 1;
          border: none;
          border-top: 1px solid #252525;
        }

        /* ── GRID ── */
        .ccd-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 2px;
          animation: ccdFadeIn 0.35s ease both;
        }
        @keyframes ccdFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── CARD ── */
        .ccd-card {
          background: #121212;
          border: 1px solid #252525;
          overflow: hidden;
          transition: border-color 0.25s, transform 0.25s;
          position: relative;
          display: flex;
          flex-direction: column;
        }
        .ccd-card:hover {
          border-color: #F5C518;
          transform: translateY(-3px);
        }

        /* ── CARD IMAGE ── */
        .ccd-card-img {
          height: 190px;
          position: relative;
          overflow: hidden;
          background: #1A1A1A;
        }
        .ccd-food-img {
          object-fit: cover;
          transition: transform 0.45s ease !important;
        }
        .ccd-card:hover .ccd-food-img {
          transform: scale(1.07) !important;
        }
        .ccd-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(10,10,10,0.6) 0%,
            transparent 55%
          );
          z-index: 1;
          pointer-events: none;
        }
        .ccd-fallback {
          width: 100%;
          height: 100%;
          background: #1E1E1E;
        }

        /* ── PRICE TAG ── */
        .ccd-price {
          position: absolute;
          top: 10px; right: 10px;
          background: #F5C518;
          color: #0A0A0A;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          padding: 3px 9px;
          border-radius: 2px;
          z-index: 2;
        }

        /* ── CARD BODY ── */
        .ccd-card-body {
          padding: 14px 16px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .ccd-item-name {
          font-size: 13px;
          font-weight: 700;
          line-height: 1.3;
          margin: 0 0 5px;
          color: #FAFAFA;
        }
        .ccd-item-desc {
          font-size: 11px;
          color: #888;
          line-height: 1.5;
          margin: 0 0 12px;
          flex: 1;
        }

        /* ── ORDER BUTTON ── */
        .ccd-order-btn {
          width: 100%;
          background: #F5C518;
          color: #0A0A0A;
          border: none;
          font-family: 'Syne', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          padding: 9px;
          cursor: pointer;
          border-radius: 2px;
          transition: background 0.18s;
        }
        .ccd-order-btn:hover { background: #FDD835; }

        /* ── FOOTER ── */
        .ccd-footer {
          border-top: 1px solid #252525;
          padding: 28px 24px;
          text-align: center;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }
        .ccd-footer p {
          font-size: 11px;
          color: #888;
          margin-bottom: 5px;
          letter-spacing: 0.3px;
        }
        .ccd-footer strong { color: #F5C518; }
      `}</style>

      <div className="ccd-root">
        {/* ── Hero ── */}
        <div className="ccd-hero">
          <div className="ccd-badge">Est. JKLU Campus · Jaipur</div>
          <h1 className="ccd-title">
            CCD <em>Kuch Bhi</em>
            <br />
            Taste Jo Dil Maange
          </h1>
          <p className="ccd-subtitle">
            Every item under ₹100. From legendary Cold Coffii to late-night
            Maggi — all your JKLU favorites.
          </p>
          <div className="ccd-meta">
            <span><strong>8 AM – 9:45 PM</strong></span>
            <span>·</span>
            <span>Order: <strong>86194 71588</strong></span>
            <span>·</span>
            <span>Degda Complex, Opp. JKLU</span>
          </div>
        </div>

        {/* ── Category Tabs ── */}
        <div className="ccd-tabs-wrap">
          <div className="ccd-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`ccd-tab${activeCategory === cat ? " active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── Menu Grid ── */}
        <div className="ccd-section">
          <div className="ccd-section-head">
            <h2>{activeCategory}</h2>
            <hr className="ccd-divider" />
          </div>
          <div key={activeCategory} className="ccd-grid">
            {menuData[activeCategory].map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="ccd-footer">
          <p>
            Pizza Packing <strong>₹10</strong> Extra &nbsp;·&nbsp; Order
            accepted after payment only &nbsp;·&nbsp; Self service from counter
          </p>
          <p>
            We accept <strong>Birthday &amp; Kitty Party</strong> orders!
            &nbsp;·&nbsp; <strong>@ccd_jaipur</strong>
          </p>
        </div>
      </div>
    </>
  );
}