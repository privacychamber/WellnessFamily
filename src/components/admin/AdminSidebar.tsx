'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Image as ImageIcon, Settings, LayoutDashboard, User, Compass, Sparkles, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

export function AdminSidebar() {
  const pathname = usePathname();

  const links = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Homepage', href: '/admin/homepage', icon: Home },
    { name: 'About Page', href: '/admin/about', icon: User },
    { name: 'Healing Paths', href: '/admin/paths', icon: Compass },
    { name: 'Retreats Page', href: '/admin/retreats', icon: Sparkles },
    { name: 'Contact Page', href: '/admin/contact', icon: Mail },
    { name: 'Images', href: '/admin/images', icon: ImageIcon },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="w-64 bg-zinc-900 text-white flex flex-col h-screen border-r border-zinc-800">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-white tracking-tight">Admin Panel</h2>
        <p className="text-zinc-400 text-sm mt-1">Wellness Family</p>
      </div>
      
      <nav className="flex-1 px-4 space-y-2 mt-4">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;
          
          return (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                isActive 
                  ? "bg-zinc-800 text-white font-medium" 
                  : "text-zinc-400 hover:bg-zinc-800/50 hover:text-white"
              )}
            >
              <Icon className="w-4 h-4" />
              {link.name}
            </Link>
          );
        })}
      </nav>
      
      <div className="p-4 border-t border-zinc-800 space-y-3">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
        >
          &larr; Back to Website
        </Link>
        <button
          onClick={async () => {
            const res = await fetch('/api/auth/logout', { method: 'POST' });
            if (res.ok) {
              window.location.href = '/admin/login';
            }
          }}
          className="w-full text-left text-sm text-zinc-400 hover:text-red-400 transition-colors flex items-center gap-2"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
