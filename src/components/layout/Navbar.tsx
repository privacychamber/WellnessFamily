"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Healing Paths", href: "/paths" },
  { label: "Retreats", href: "/retreats" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-forest/10 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-serif text-2xl tracking-wide text-forest">
            Wellness Family
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-forest/80 hover:text-forest transition-colors font-sans text-sm tracking-widest uppercase"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button variant="primary" size="sm">
            Book Free Session
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-forest p-2 -mr-2"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background flex flex-col px-6 py-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-serif text-2xl text-forest">Wellness Family</span>
              <button
                className="text-forest p-2 -mr-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="flex flex-col space-y-6 flex-grow">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-forest font-serif text-3xl"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-8 border-t border-forest/10">
              <Button variant="primary" size="lg" className="w-full">
                Book Free Session
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
