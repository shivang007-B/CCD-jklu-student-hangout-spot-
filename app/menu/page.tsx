"use client";

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

// Mock data using emojis for visual representation as placeholder for actual images
const menuData = {
    Beverages: [
        { id: 1, name: "Classic Cold Coffee", price: 60, icon: "🥤", desc: "The legendary JKLU student favorite." },
        { id: 2, name: "Masala Chai", price: 20, icon: "☕", desc: "Kadak adrak wali chai." },
        { id: 3, name: "Iced Tea", price: 50, icon: "🍹", desc: "Refreshing lemon iced tea." },
        { id: 4, name: "Hot Coffee", price: 40, icon: "☕", desc: "Classic hot coffee to keep you awake." },
    ],
    Burgers: [
        { id: 5, name: "Aloo Tikki Burger", price: 50, icon: "🍔", desc: "Classic crispy potato patty burger." },
        { id: 6, name: "Double Tikki Burger", price: 80, icon: "🍔", desc: "Double the patty, double the fun. With cheese." },
        { id: 7, name: "Paneer Burger", price: 90, icon: "🍔", desc: "Soft paneer slab with spicy mayo." },
    ],
    Pizza: [
        { id: 8, name: "Margherita Pizza", price: 120, icon: "🍕", desc: "Classic cheese and tomato pizza." },
        { id: 9, name: "Veggie Delight", price: 150, icon: "🍕", desc: "Loaded with onions, capsicum, corn, and olives." },
        { id: 10, name: "Paneer Makhani Pizza", price: 180, icon: "🍕", desc: "Fusion pizza with paneer makhani topping." },
    ],
    Maggi: [
        { id: 11, name: "Classic Masala Maggi", price: 40, icon: "🍜", desc: "The OG 2 minute noodle." },
        { id: 12, name: "Double Masala Maggi", price: 50, icon: "🍜", desc: "For the spice lovers." },
        { id: 13, name: "Cheese Burst Maggi", price: 70, icon: "🍜", desc: "Extra cheesy, extra creamy." },
    ],
    Snacks: [
        { id: 14, name: "French Fries", price: 60, icon: "🍟", desc: "Crispy salted fries." },
        { id: 15, name: "Peri Peri Fries", price: 80, icon: "🍟", desc: "Spicy peri peri tossed fries." },
        { id: 16, name: "Garlic Bread", price: 70, icon: "🥖", desc: "Classic garlic bread with cheese." },
    ]
};

const categories = Object.keys(menuData);

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    const handleOrderClick = (itemName: string) => {
        const text = encodeURIComponent(`Hi CCD, I'd like to order 1x ${itemName}.`);
        window.open(`https://wa.me/919876543210?text=${text}`, "_blank");
    };

    // Staggered animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        },
        exit: {
            opacity: 0,
            y: 20,
            transition: { duration: 0.2 }
        }
    };

    const itemVariants: import("framer-motion").Variants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        show: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 24 }
        }
    };

    return (
        <div className="pt-24 pb-16 px-4 max-w-6xl mx-auto min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-4">Our Menu</h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-inter">
                    From the legendary cold coffee to the comfort of late-night Maggi, find all your JKLU favorites right here.
                </p>
            </motion.div>

            <Tabs defaultValue={categories[0]} className="w-full" onValueChange={setActiveCategory}>
                <div className="flex justify-center mb-12 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                    <TabsList className="bg-secondary/30 p-1.5 h-auto rounded-full flex-none backdrop-blur-sm border border-border/50 shadow-sm">
                        {categories.map((category) => (
                            <TabsTrigger
                                key={category}
                                value={category}
                                className="rounded-full px-8 py-3 text-sm md:text-base font-bold data-[state=active]:bg-[#8B4513] data-[state=active]:text-[#F5E6D3] data-[state=active]:shadow-md transition-all duration-300"
                            >
                                {category}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </div>

                <div className="relative min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            variants={containerVariants}
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {menuData[activeCategory as keyof typeof menuData].map((item) => (
                                <motion.div key={item.id} variants={itemVariants} className="h-full">
                                    <div className="menu-card group h-full flex flex-col relative overflow-hidden bg-white dark:bg-card">
                                        {/* Image Section */}
                                        <div className="h-[125%] aspect-[4/5] bg-secondary/40 relative overflow-hidden flex items-center justify-center group-hover:bg-secondary/60 transition-colors duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]">
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ duration: 0.3, ease: [0.175, 0.885, 0.32, 1.275] }}
                                                className="text-7xl drop-shadow-xl relative z-0"
                                            >
                                                {item.icon}
                                            </motion.div>

                                            {/* Hover Heart Indicator */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none bg-black/5">
                                                <Heart className="w-16 h-16 text-[#e63946] fill-[#e63946] opacity-80" />
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="p-6 flex-1 flex flex-col">
                                            <div className="flex justify-between items-start gap-4 mb-2">
                                                <h3 className="font-playfair text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                                                    {item.name}
                                                </h3>
                                                <span className="font-bold text-xl font-inter text-foreground whitespace-nowrap">
                                                    ₹{item.price}
                                                </span>
                                            </div>
                                            <p className="text-sm text-muted-foreground font-inter mb-6 flex-grow">{item.desc}</p>

                                            {/* Action Section */}
                                            <div className="pt-4 border-t border-border/50 mt-auto">
                                                <Button
                                                    className="w-full bg-[#D4A373] text-[#2C1810] hover:bg-[#c49363] rounded-[8px] font-bold shadow-sm heart-button flex items-center justify-center gap-2 h-12"
                                                    onClick={() => handleOrderClick(item.name)}
                                                >
                                                    <Heart className="w-4 h-4 heart-icon" /> Add to Order
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </Tabs>
        </div>
    );
}
