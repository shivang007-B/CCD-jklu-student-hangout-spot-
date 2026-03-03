import Image from "next/image";
import { Coffee, GraduationCap, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
    return (
        <div className="py-8 px-4 max-w-5xl mx-auto min-h-screen animate-in fade-in duration-500">
            <div className="text-center mb-16">
                <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">Our Story</h1>
                <p className="text-xl text-primary font-medium italic">More than just a cafe. An emotion since day one.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                <div className="space-y-6">
                    <h2 className="font-playfair text-3xl font-bold text-foreground">The Hub of JKLU</h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                        What started as a small stall serving tea and simple snacks quickly blossomed into the unofficial heart of the JKLU campus. Chai Coffee Darbar isn&apos;t just where you go when you&apos;re hungry; it&apos;s where ideas are born, projects are finished at the 11th hour, and friendships are forged over a shared plate of Double Masala Maggi.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                        We understand the student budget and the student appetite. That&apos;s why our commitment has always been: high quality, generous portions, and prices that don&apos;t make you think twice.
                    </p>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="flex items-center gap-3">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <GraduationCap className="w-6 h-6 text-primary" />
                            </div>
                            <div className="font-medium text-foreground">Student Friendly</div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <Clock className="w-6 h-6 text-primary" />
                            </div>
                            <div className="font-medium text-foreground">Fast Service</div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <Coffee className="w-6 h-6 text-primary" />
                            </div>
                            <div className="font-medium text-foreground">Quality Brews</div>
                        </div>
                    </div>
                </div>

                <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-zinc-800">
                    {/* Placeholder for actual cafe image */}
                    <div className="absolute inset-0 bg-[#2C1810]" />
                    <div className="absolute inset-0 flex items-center justify-center flex-col text-white/50 p-8 text-center bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CgkJPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KCTwvc3ZnPg==')] opacity-40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-playfair text-3xl text-accent font-bold italic rotate-[-10deg]">Vibe Check</span>
                    </div>
                </div>
            </div>

            <div className="mb-20">
                <h2 className="font-playfair text-3xl font-bold text-center mb-10 text-foreground">The Wall of Love</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="bg-secondary/30 border-none shadow-sm pb-6">
                        <CardContent className="pt-6">
                            <div className="text-secondary-foreground mb-4 text-4xl leading-none font-playfair">&quot;</div>
                            <p className="text-muted-foreground italic mb-6 leading-relaxed">CCD&apos;s cold coffee literally got me through my final year projects. It&apos;s the fuel of JKLU.</p>
                            <div className="font-bold text-foreground">- Rahul S., B.Tech &apos;25</div>
                        </CardContent>
                    </Card>
                    <Card className="bg-primary/5 border-none shadow-sm pb-6">
                        <CardContent className="pt-6">
                            <div className="text-primary/40 mb-4 text-4xl leading-none font-playfair">&quot;</div>
                            <p className="text-muted-foreground italic mb-6 leading-relaxed">You haven&apos;t really experienced JKLU if you haven&apos;t debated with friends over a plate of CCD fries.</p>
                            <div className="font-bold text-foreground">- Priya K., Design &apos;24</div>
                        </CardContent>
                    </Card>
                    <Card className="bg-accent/10 border-none shadow-sm pb-6">
                        <CardContent className="pt-6">
                            <div className="text-accent/60 mb-4 text-4xl leading-none font-playfair">&quot;</div>
                            <p className="text-muted-foreground italic mb-6 leading-relaxed">The only place on campus where the food feels like a hug from home.</p>
                            <div className="font-bold text-foreground">- Aman M., BBA &apos;26</div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Gallery Section */}
            <div>
                <h2 className="font-playfair text-3xl font-bold text-center mb-10 text-foreground">Gallery Snapshot</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="aspect-square bg-secondary rounded-xl overflow-hidden relative group">
                            <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-50 group-hover:scale-110 transition-transform duration-500">
                                {i === 1 ? "🍔" : i === 2 ? "☕" : i === 3 ? "🍕" : "📸"}
                            </div>
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-medium bg-black/50 px-3 py-1 rounded-full text-sm">View</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
