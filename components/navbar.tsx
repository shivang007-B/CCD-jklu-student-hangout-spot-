"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Coffee, Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

export function NavBar() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const pathname = usePathname();

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Menu", href: "/menu" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "glass-nav py-2"
                : "bg-transparent py-4"
                }`}
        >
            <div className="max-w-[1200px] mx-auto px-4 xl:px-0">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="text-primary p-2 group-hover:text-accent transition-colors">
                            <Coffee className="h-5 w-5 md:h-6 md:w-6" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-outfit font-bold text-lg md:text-xl text-foreground leading-none">
                                <span className="text-primary italic">C</span>CD
                            </span>
                            <span className="text-[10px] md:text-xs text-muted-foreground leading-none mt-1">
                                JKLU Students Hangout Spot
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-bold font-outfit uppercase tracking-wider transition-colors hover:text-primary ${pathname === link.href ? "text-primary" : "text-foreground"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 rounded-full font-bold shadow-sm flex items-center gap-2 font-outfit" asChild>
                            <Link href="/menu">
                                Order Now <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </Button>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-foreground"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-background border-b border-border shadow-lg absolute top-full left-0 right-0">
                    <nav className="flex flex-col p-4 gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-base font-medium p-2 rounded-md font-outfit ${pathname === link.href
                                    ? "bg-secondary text-primary"
                                    : "text-foreground/80 hover:bg-secondary/50"
                                    }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button variant="outline" className="w-full mt-2 rounded-full border-primary text-primary hover:bg-primary/10 font-outfit" asChild>
                            <Link href="/menu" onClick={() => setIsMobileMenuOpen(false)}>
                                Order Now
                            </Link>
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
}
