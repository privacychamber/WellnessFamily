import { SettingsEditor } from "@/components/admin/SettingsEditor";

export default function AdminSettingsPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">Settings</h1>
        <p className="text-zinc-500 mt-2">Manage website settings and SEO tags.</p>
      </div>
      
      <SettingsEditor />
    </div>
  );
}
