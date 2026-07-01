import { PathsEditor } from "@/components/admin/PathsEditor";

export default function AdminPathsPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">Healing Paths Content</h1>
        <p className="text-zinc-500 mt-2">Manage the titles, descriptions, services, and sound healing details on the Healing Paths page.</p>
      </div>
      
      <PathsEditor />
    </div>
  );
}
