"use client";

import { MapPin, Phone, Clock, Mail, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
    return (
        <div className="py-8 px-4 max-w-6xl mx-auto min-h-screen animate-in fade-in duration-500">
            <div className="text-center mb-16">
                <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">Find Us</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    We&apos;re right where you need us. Stop by for a quick bite or drop a message via WhatsApp to pick up your order on the go.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Contact Info Cards */}
                <div className="lg:col-span-1 space-y-6">
                    <Card className="border-border/50 shadow-sm rounded-xl overflow-hidden">
                        <CardContent className="p-6">
                            <h3 className="font-playfair text-2xl font-bold mb-6 text-foreground">Get in Touch</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full mt-1">
                                        <MapPin className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-foreground mb-1">Our Location</h4>
                                        <p className="text-muted-foreground text-sm">Near JK Lakshmipat University,<br />Mahapura, Jaipur,<br />Rajasthan 302026</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full mt-1">
                                        <Clock className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-foreground mb-1">Operating Hours</h4>
                                        <p className="text-muted-foreground text-sm mb-1">Mon - Sat: 9:00 AM - 10:00 PM</p>
                                        <p className="text-muted-foreground text-sm">Sun: 10:00 AM - 9:00 PM</p>
                                        <div className="mt-2 inline-flex items-center text-xs font-medium text-green-600 bg-green-50 px-2.5 py-0.5 rounded-full ring-1 ring-inset ring-green-600/20">
                                            Open Now
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full mt-1">
                                        <Phone className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-foreground mb-1">Phone / WhatsApp</h4>
                                        <p className="text-muted-foreground text-sm">+91 98765 43210</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-border">
                                <Button
                                    className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white flex items-center justify-center gap-2 rounded-[8px] h-12"
                                    onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    Chat on WhatsApp
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Google Map Section */}
                <div className="lg:col-span-2">
                    <Card className="border-border/50 shadow-sm rounded-xl overflow-hidden h-full min-h-[400px]">
                        {/* Using an iframe to embed Google Maps pointing near JKLU */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.187310543507!2d75.64817088495679!3d26.833973683161678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396ce216ca882df%3A0xc3f34e38e8cb9b7c!2sJK%20Lakshmipat%20University!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: "500px" }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="CCD Location Map"
                            className="w-full h-full grayscale-[20%] contrast-125"
                        ></iframe>
                    </Card>
                </div>

            </div>
        </div>
    );
}
