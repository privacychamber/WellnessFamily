"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <section className="pt-40 pb-20 px-6 md:px-12 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl text-forest leading-tight mb-8"
        >
          Get in Touch.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-sans text-xl text-forest/80 max-w-2xl mx-auto"
        >
          We would love to hear from you. Reach out to schedule a session, ask a question, or simply connect.
        </motion.p>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 md:px-12 flex flex-col md:flex-row gap-16 max-w-6xl mx-auto">
        {/* Contact Form Placeholder */}
        <div className="w-full md:w-1/2 flex flex-col">
          <h2 className="font-serif text-3xl text-forest mb-8">Send a Message</h2>
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="font-sans text-sm tracking-widest uppercase text-forest/70">Name</label>
              <input type="text" className="bg-transparent border-b border-forest/30 py-2 outline-none focus:border-forest transition-colors text-forest" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-sans text-sm tracking-widest uppercase text-forest/70">Email</label>
              <input type="email" className="bg-transparent border-b border-forest/30 py-2 outline-none focus:border-forest transition-colors text-forest" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-sans text-sm tracking-widest uppercase text-forest/70">Message</label>
              <textarea rows={4} className="bg-transparent border-b border-forest/30 py-2 outline-none focus:border-forest transition-colors text-forest resize-none"></textarea>
            </div>
            <Button variant="primary" size="lg" className="w-fit mt-4">
              Send Message
            </Button>
          </form>
        </div>

        {/* Info & Map Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-12">
          <div>
            <h2 className="font-serif text-3xl text-forest mb-6">Our Sanctuary</h2>
            <p className="font-sans text-lg text-forest/80 mb-4 leading-relaxed">
              Experience deep healing and return to yourself in a space designed for safety, peace, and integration.
            </p>
          </div>

          <div className="bg-[#f5f1e7] p-8 flex flex-col items-center justify-center text-center rounded-sm">
            <div className="w-12 h-12 mb-6 text-forest">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
               </svg>
            </div>
            <h3 className="font-serif text-2xl text-forest mb-4">Location</h3>
            <p className="font-sans text-forest/70 mb-8 max-w-sm">
              Find our physical location and immerse yourself in a healing environment.
            </p>
            <a 
              href="https://maps.app.goo.gl/W6eLZax5QpagoDKs6"
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="outline" className="w-full border-forest text-forest hover:bg-forest hover:text-sand">
                Open in Google Maps
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
