import { ContactEditor } from "@/components/admin/ContactEditor";

export default function AdminContactPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">Contact Page Content</h1>
        <p className="text-zinc-500 mt-2">Manage the header text, form title, sanctuary description, and map links on the Contact page.</p>
      </div>
      
      <ContactEditor />
    </div>
  );
}
