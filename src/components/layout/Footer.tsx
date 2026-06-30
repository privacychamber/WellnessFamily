import Link from "next/link";
import { Image, Video, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1b2921] text-[#f5f1e7] py-20 px-6 md:px-12 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        
        {/* Brand */}
        <div className="col-span-1 md:col-span-1 flex flex-col space-y-4">
          <span className="font-serif text-2xl tracking-wide">Wellness Family</span>
          <p className="font-sans text-sm text-[#f5f1e7]/70 leading-relaxed max-w-xs">
            A Global Wellness Movement for Mind, Body & Inner Peace. Healing begins the moment you no longer have to carry everything alone.
          </p>
        </div>

        {/* Links */}
        <div className="col-span-1 flex flex-col space-y-4">
          <h4 className="font-sans text-sm tracking-widest uppercase text-[#f5f1e7]/50 mb-2">Explore</h4>
          <Link href="/about" className="font-sans text-sm hover:text-sage transition-colors">About Parvin</Link>
          <Link href="/paths" className="font-sans text-sm hover:text-sage transition-colors">Healing Paths</Link>
          <Link href="/retreats" className="font-sans text-sm hover:text-sage transition-colors">Retreats</Link>
          <Link href="/contact" className="font-sans text-sm hover:text-sage transition-colors">Contact</Link>
        </div>

        {/* Community */}
        <div className="col-span-1 flex flex-col space-y-4">
          <h4 className="font-sans text-sm tracking-widest uppercase text-[#f5f1e7]/50 mb-2">Community</h4>
          <Link href="#" className="font-sans text-sm hover:text-sage transition-colors flex items-center space-x-2">
            <Image className="w-4 h-4" /> <span>Instagram</span>
          </Link>
          <Link href="#" className="font-sans text-sm hover:text-sage transition-colors flex items-center space-x-2">
            <Video className="w-4 h-4" /> <span>YouTube</span>
          </Link>
          <Link href="#" className="font-sans text-sm hover:text-sage transition-colors flex items-center space-x-2">
            <Mail className="w-4 h-4" /> <span>Newsletter</span>
          </Link>
        </div>

        {/* Newsletter / CTA */}
        <div className="col-span-1 flex flex-col space-y-4">
          <h4 className="font-sans text-sm tracking-widest uppercase text-[#f5f1e7]/50 mb-2">Stay Connected</h4>
          <p className="font-sans text-sm text-[#f5f1e7]/70">
            Join our gentle newsletter for reflections, guided meditations, and early access to retreats.
          </p>
          <form className="flex mt-2" aria-label="Newsletter Form">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-transparent border-b border-[#f5f1e7]/30 py-2 w-full text-sm outline-none focus:border-[#f5f1e7] transition-colors placeholder:text-[#f5f1e7]/40"
              required
            />
            <button type="submit" className="text-sm font-sans uppercase tracking-widest ml-4 hover:text-sage transition-colors">
              Join
            </button>
          </form>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[#f5f1e7]/10 flex flex-col md:flex-row justify-between items-center text-xs text-[#f5f1e7]/50">
        <p>© {new Date().getFullYear()} Wellness Family. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-sage transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-sage transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
