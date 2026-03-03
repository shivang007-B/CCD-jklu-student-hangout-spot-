"use client";

import { MessageCircle } from "lucide-react";
import * as React from "react";

export function WhatsAppButton() {
    const whatsappNumber = "919784032687"; // Placeholder, can be updated later
    const message = encodeURIComponent("Hi CCD! I'd like to place an order from the website.");

    const href = `https://wa.me/${whatsappNumber}?text=${message}`;

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
            aria-label="Order via WhatsApp"
        >
            <MessageCircle className="h-6 w-6" />
            <span className="sr-only">Order via WhatsApp</span>
        </a>
    );
}
