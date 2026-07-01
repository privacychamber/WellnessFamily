import { AboutEditor } from "@/components/admin/AboutEditor";

export default function AdminAboutPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">About Page Content</h1>
        <p className="text-zinc-500 mt-2">Manage the biography and imagery displayed on the About page.</p>
      </div>
      
      <AboutEditor />
    </div>
  );
}
