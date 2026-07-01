import { RetreatsEditor } from "@/components/admin/RetreatsEditor";

export default function AdminRetreatsPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">Retreats Page Content</h1>
        <p className="text-zinc-500 mt-2">Manage titles, descriptions, retreat dates, and guest stories on the Retreats page.</p>
      </div>
      
      <RetreatsEditor />
    </div>
  );
}
