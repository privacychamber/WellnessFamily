import { ContentEditor } from "@/components/admin/ContentEditor";

export default function AdminHomepagePage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">Homepage Content</h1>
        <p className="text-zinc-500 mt-2">Manage the text and imagery displayed on the main landing page.</p>
      </div>
      
      <ContentEditor />
    </div>
  );
}
