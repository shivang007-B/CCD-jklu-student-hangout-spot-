"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

/* ══════════════════════════════════════════════════════
   COMPLETE CCD MENU — Extracted from actual menu cards
   ══════════════════════════════════════════════════════ */

const menuData = {
    "Cold Coffii ☕": [
        { id: 1, name: "Thick Cold Coffee", price: 50, icon: "☕", desc: "The legendary JKLU student fuel." },
        { id: 2, name: "Cold Coffii with Extra Ice Cream", price: 60, icon: "🍦", desc: "Extra scoop for the extra vibe." },
        { id: 3, name: "Cold Coffii with Choco Chips", price: 70, icon: "🍫", desc: "Crunchy choco chips in every sip." },
        { id: 4, name: "Hazelnut Coffii", price: 70, icon: "🌰", desc: "Rich hazelnut flavor coffee." },
        { id: 5, name: "Caramel Coffii", price: 70, icon: "🍮", desc: "Sweet caramel drizzle coffee." },
        { id: 6, name: "Banana Coffii", price: 60, icon: "🍌", desc: "Something healthy! Banana blend." },
        { id: 7, name: "Extra Strong Coffii", price: 10, icon: "💪", desc: "Add extra shot to any coffee." },
    ],
    "Mojito 🍹": [
        { id: 8, name: "Green Mint Mojito", price: 50, icon: "🌿", desc: "Fresh mint, refreshing sip." },
        { id: 9, name: "Blue Lagoon Mojito", price: 50, icon: "🔵", desc: "Blue curacao twist mojito." },
        { id: 10, name: "Black Current Mojito", price: 50, icon: "🫐", desc: "Berry burst in every glass." },
        { id: 11, name: "Green Apple Mojito", price: 50, icon: "🍏", desc: "Tangy green apple refresher." },
    ],
    "Thick Shakes 🥤": [
        { id: 12, name: "Black Current Shake", price: 60, icon: "🫐", desc: "Rich black current thick shake." },
        { id: 13, name: "Strawberry Shake", price: 60, icon: "🍓", desc: "Classic strawberry blend." },
        { id: 14, name: "Vanilla Shake", price: 60, icon: "🍦", desc: "Smooth vanilla thick shake." },
        { id: 15, name: "Oreo Shake", price: 60, icon: "🍪", desc: "Crushed Oreo cookie shake." },
        { id: 16, name: "Butterscotch Shake", price: 70, icon: "🧈", desc: "Crunchy butterscotch delight." },
        { id: 17, name: "Chocolate Shake", price: 60, icon: "🍫", desc: "Rich chocolate thick shake." },
        { id: 18, name: "Kit Kat Shake", price: 80, icon: "🍫", desc: "Kit Kat blended shake." },
        { id: 19, name: "Biscoff Shake", price: 80, icon: "🍪", desc: "Lotus Biscoff caramel shake." },
    ],
    "Maggi 🍜": [
        { id: 20, name: "Plain Maggi", price: 40, icon: "🍜", desc: "The OG 2 minute noodle." },
        { id: 21, name: "Masala Maggi", price: 45, icon: "🌶️", desc: "Extra masala, extra taste." },
        { id: 22, name: "Schezwan Maggi", price: 50, icon: "🔥", desc: "Spicy schezwan tossed maggi." },
        { id: 23, name: "Veg Tadka Maggi", price: 50, icon: "🥘", desc: "Maggi with veggie tadka." },
        { id: 24, name: "Perry Perry Cheese Maggi", price: 70, icon: "🧀", desc: "Peri peri + cheese overload." },
        { id: 25, name: "Egg Maggi (With 2 Eggs)", price: 70, icon: "🥚", desc: "Maggi loaded with 2 eggs." },
        { id: 26, name: "Cheese Maggi", price: 70, icon: "🧀", desc: "Extra cheesy maggi bowl." },
    ],
    "Jumbo Burger 🍔": [
        { id: 27, name: "Veg Burger (Large Patty)", price: 50, icon: "🍔", desc: "Classic crispy veg patty burger." },
        { id: 28, name: "Double Tikki Burger", price: 60, icon: "🍔", desc: "Double the patty, double the fun." },
        { id: 29, name: "Veg Cheese Burger", price: 70, icon: "🧀", desc: "Loaded with extra cheese." },
        { id: 30, name: "Tandoori Burger", price: 60, icon: "🔥", desc: "Smoky tandoori spiced burger." },
        { id: 31, name: "Veg Burger Combo Offer", price: 90, icon: "🎉", desc: "Burger + fries combo deal." },
    ],
    "Pizza 🍕": [
        { id: 32, name: "OTC Pizza", price: 89, icon: "🍕", desc: "Over the counter classic pizza." },
        { id: 33, name: "CCD Special Pizza", price: 99, icon: "⭐", desc: "Sweet Corn + Jalapeno + Olive." },
    ],
    "Sandwich 🥪": [
        { id: 34, name: "Veg Grilled Sandwich", price: 50, icon: "🥪", desc: "Classic veg grilled, 4 large pcs." },
        { id: 35, name: "Tandoori Sandwich", price: 70, icon: "🔥", desc: "Tandoori masala grilled sandwich." },
        { id: 36, name: "Aloo Sandwich", price: 50, icon: "🥔", desc: "Spiced aloo filling sandwich." },
        { id: 37, name: "Cheese Grilled Sandwich", price: 80, icon: "🧀", desc: "Extra cheese grilled sandwich." },
    ],
    "Rolls 🌯": [
        { id: 38, name: "Veg Roll", price: 50, icon: "🌯", desc: "Crispy veg stuffed roll." },
        { id: 39, name: "Veg Cheese Roll", price: 80, icon: "🧀", desc: "Cheesy veg roll wrap." },
        { id: 40, name: "Egg Roll (With Double Egg)", price: 70, icon: "🥚", desc: "Double egg stuffed roll." },
    ],
    "Pasta 🍝": [
        { id: 41, name: "White Sauce Pasta", price: 99, icon: "🍝", desc: "Creamy white sauce pasta." },
        { id: 42, name: "Pink Sauce Pasta", price: 99, icon: "🍝", desc: "Creamy & cheesy pink sauce." },
        { id: 43, name: "Spaghetti Pasta", price: 90, icon: "🍝", desc: "Classic spaghetti style pasta." },
    ],
    "French Fry 🍟": [
        { id: 44, name: "Regular French Fry", price: 70, icon: "🍟", desc: "Crispy golden salted fries." },
        { id: 45, name: "Perry Perry French Fry", price: 80, icon: "🌶️", desc: "Peri peri spiced fries." },
        { id: 46, name: "Cheese French Fry", price: 99, icon: "🧀", desc: "Loaded cheese fries." },
    ],
    "Fried Rice 🍚": [
        { id: 47, name: "Veg Fried Rice", price: 50, icon: "🍚", desc: "Classic veg fried rice." },
        { id: 48, name: "Schezwan Fried Rice", price: 60, icon: "🔥", desc: "Spicy schezwan fried rice." },
        { id: 49, name: "Egg Fried Rice", price: 70, icon: "🥚", desc: "Egg tossed fried rice." },
    ],
    "Hakka Noodles 🍜": [
        { id: 50, name: "Veg Hakka Noodles", price: 50, icon: "🍜", desc: "Stir-fried veg hakka noodles." },
        { id: 51, name: "Schezwan Noodles", price: 60, icon: "🔥", desc: "Spicy schezwan noodles." },
        { id: 52, name: "Egg Noodles (2 Eggs)", price: 80, icon: "🥚", desc: "Egg tossed hakka noodles." },
    ],
    "Patties 🥟": [
        { id: 53, name: "Aalu Patties", price: 20, icon: "🥔", desc: "Classic aloo patties." },
        { id: 54, name: "Masala Patties", price: 30, icon: "🌶️", desc: "Spiced masala patties." },
        { id: 55, name: "Paneer Patties", price: 25, icon: "🧀", desc: "Soft paneer stuffed patties." },
        { id: 56, name: "Tandoori Patties", price: 40, icon: "🔥", desc: "Smoky tandoori flavored." },
        { id: 57, name: "Paneer Masala", price: 35, icon: "🧀", desc: "Paneer with masala twist." },
        { id: 58, name: "Cheese Patties", price: 45, icon: "🧀", desc: "Loaded cheese patties." },
        { id: 59, name: "Paneer Cheese", price: 45, icon: "🧀", desc: "Paneer + cheese combo." },
        { id: 60, name: "Paneer Tandoori", price: 45, icon: "🔥", desc: "Paneer tandoori special." },
        { id: 61, name: "Ex. Cheese Topping", price: 25, icon: "🧀", desc: "Add extra cheese topping." },
    ],
    "Paratha & More 🫓": [
        { id: 62, name: "Aloo Paratha with Curd (1Pc)", price: 40, icon: "🫓", desc: "Stuffed aloo paratha + curd." },
        { id: 63, name: "Aloo Paratha with Curd + Amul Butter (1Pc)", price: 50, icon: "🧈", desc: "Paratha + curd + Amul butter." },
        { id: 64, name: "Pav Bhaji", price: 60, icon: "🍛", desc: "Classic pav bhaji, buttery & spicy." },
        { id: 65, name: "Extra Pav / Bhaji", price: 10, icon: "🍞", desc: "Add extra pav or bhaji." },
    ],
    "Omelet 🍳": [
        { id: 66, name: "Sp. Jumbo Omelet (With Double Egg)", price: 50, icon: "🍳", desc: "Special jumbo double egg omelet." },
        { id: 67, name: "Bread Cheese Omelet (With Double Egg)", price: 75, icon: "🧀", desc: "Cheesy bread omelet." },
        { id: 68, name: "Only Omelate (With 2 Egg)", price: 45, icon: "🥚", desc: "Simple double egg omelette." },
    ],
    "More Drinks ☕": [
        { id: 69, name: "Kulhad Masala Chai", price: 15, icon: "☕", desc: "Kadak masala chai in kulhad." },
        { id: 70, name: "Hot Coffee (Hand Whipped)", price: 30, icon: "☕", desc: "Hand whipped hot coffee (30/60)." },
        { id: 71, name: "Hot Chocolate", price: 25, icon: "🍫", desc: "Warm rich hot chocolate." },
        { id: 72, name: "Lemon Mint Iced Tea", price: 50, icon: "🍋", desc: "Refreshing lemon mint iced tea." },
        { id: 73, name: "Hot Dark Chocolate Pastry", price: 50, icon: "🎂", desc: "Warm dark chocolate pastry." },
    ],
};

const categories = Object.keys(menuData);

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    const handleOrderClick = (itemName: string, itemPrice: number) => {
        const text = encodeURIComponent(
            `Hi CCD, I'd like to order 1x ${itemName} (₹${itemPrice}).`
        );
        window.open(`https://wa.me/918619471588?text=${text}`, "_blank");
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.06 },
        },
        exit: {
            opacity: 0,
            y: 20,
            transition: { duration: 0.2 },
        },
    };

    const itemVariants: import("framer-motion").Variants = {
        hidden: { opacity: 0, scale: 0.9, y: 16 },
        show: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 24 },
        },
    };

    return (
        <div className="pt-24 pb-16 px-4 max-w-6xl mx-auto min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10"
            >
                <h1 className="font-outfit text-5xl md:text-6xl font-bold text-foreground mb-3">
                    Our <span className="text-primary italic font-newsreader">Menu</span>
                </h1>
                <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto font-outfit">
                    Kuch Bhi LoGy — Every Item Under ₹100 Only! From legendary Cold Coffii
                    to late-night Maggi, find all your JKLU favorites.
                </p>
                <p className="text-xs text-muted-foreground mt-2 font-outfit">
                    📞 For Order: 86194 71588 &nbsp;|&nbsp; 📍 Degda Complex, Opp. JKLU, Jaipur
                </p>
            </motion.div>

            <Tabs defaultValue={categories[0]} className="w-full" onValueChange={setActiveCategory}>
                {/* Scrollable Category Pills */}
                <div className="flex justify-center mb-10 overflow-x-auto pb-4 -mx-4 px-4 custom-scrollbar">
                    <TabsList className="bg-secondary/30 p-1.5 h-auto rounded-full flex-none backdrop-blur-sm border border-border/50 shadow-sm">
                        {categories.map((category) => (
                            <TabsTrigger
                                key={category}
                                value={category}
                                className="rounded-full px-5 py-2.5 text-xs md:text-sm font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all duration-300 whitespace-nowrap font-outfit"
                            >
                                {category}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </div>

                {/* Menu Grid */}
                <div className="relative min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            variants={containerVariants}
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                        >
                            {menuData[activeCategory as keyof typeof menuData].map((item) => (
                                <motion.div key={item.id} variants={itemVariants} className="h-full">
                                    <div className="menu-card group h-full flex flex-col relative overflow-hidden">
                                        {/* Emoji Icon Section */}
                                        <div className="h-32 bg-secondary/40 relative overflow-hidden flex items-center justify-center group-hover:bg-secondary/60 transition-colors duration-300">
                                            <motion.div
                                                whileHover={{ scale: 1.15, rotate: 5 }}
                                                transition={{ duration: 0.3, ease: [0.175, 0.885, 0.32, 1.275] }}
                                                className="text-5xl drop-shadow-xl"
                                            >
                                                {item.icon}
                                            </motion.div>

                                            {/* Hover Heart */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none bg-black/10">
                                                <Heart className="w-12 h-12 text-red-500 fill-red-500 opacity-70" />
                                            </div>

                                            {/* Price Badge */}
                                            <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-black px-2.5 py-1 rounded-full font-outfit shadow-md">
                                                ₹{item.price}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-5 flex-1 flex flex-col">
                                            <h3 className="font-outfit text-base font-bold leading-tight group-hover:text-primary transition-colors mb-1">
                                                {item.name}
                                            </h3>
                                            <p className="text-xs text-muted-foreground font-outfit mb-4 flex-grow">
                                                {item.desc}
                                            </p>

                                            {/* Order Button */}
                                            <Button
                                                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-bold text-xs h-10 flex items-center justify-center gap-2 font-outfit shadow-sm hover:scale-[1.02] transition-transform"
                                                onClick={() => handleOrderClick(item.name, item.price)}
                                            >
                                                <Heart className="w-3.5 h-3.5" /> Order via WhatsApp
                                            </Button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </Tabs>

            {/* Bottom Info */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-16 text-center space-y-2"
            >
                <p className="text-muted-foreground text-sm font-outfit">
                    ⏰ Timing: 8 AM to 9:45 PM &nbsp;|&nbsp; 🏷️ Pizza Packing 10/- Extra
                </p>
                <p className="text-muted-foreground text-xs font-outfit">
                    Order Will Be Accepted After Payment Only · Self Service (From Counter Only)
                </p>
                <p className="text-primary font-bold text-sm font-outfit">
                    🎉 We Accept B&apos;day & Kitty Party Orders!
                </p>
                <p className="text-muted-foreground text-xs font-outfit">
                    📸 @ccd_jaipur
                </p>
            </motion.div>
        </div>
    );
}
