import Link from "next/link";
import { ArrowRight, Home, Image as ImageIcon, Settings } from "lucide-react";

export default function AdminPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">Dashboard Overview</h1>
        <p className="text-zinc-500 mt-2">Welcome to the Wellness Family admin panel.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/admin/homepage" className="group bg-white p-6 rounded-2xl border border-zinc-200 hover:border-black transition-colors shadow-sm">
          <div className="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-black group-hover:text-white transition-colors">
            <Home className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-zinc-900 mb-2">Homepage Content</h3>
          <p className="text-zinc-500 text-sm mb-4">Edit headlines, subtitles, and hero images on the main page.</p>
          <span className="text-sm font-medium text-black flex items-center gap-1 group-hover:gap-2 transition-all">
            Manage <ArrowRight className="w-4 h-4" />
          </span>
        </Link>

        <Link href="/admin/images" className="group bg-white p-6 rounded-2xl border border-zinc-200 hover:border-black transition-colors shadow-sm">
          <div className="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-black group-hover:text-white transition-colors">
            <ImageIcon className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-zinc-900 mb-2">Image Gallery</h3>
          <p className="text-zinc-500 text-sm mb-4">Manage and upload media files for your website.</p>
          <span className="text-sm font-medium text-black flex items-center gap-1 group-hover:gap-2 transition-all">
            Manage <ArrowRight className="w-4 h-4" />
          </span>
        </Link>

        <Link href="/admin/settings" className="group bg-white p-6 rounded-2xl border border-zinc-200 hover:border-black transition-colors shadow-sm">
          <div className="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-black group-hover:text-white transition-colors">
            <Settings className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-zinc-900 mb-2">Settings</h3>
          <p className="text-zinc-500 text-sm mb-4">Configure global website preferences and SEO data.</p>
          <span className="text-sm font-medium text-black flex items-center gap-1 group-hover:gap-2 transition-all">
            Manage <ArrowRight className="w-4 h-4" />
          </span>
        </Link>
      </div>
    </div>
  );
}
