export default function AdminImagesPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">Images</h1>
        <p className="text-zinc-500 mt-2">Manage website images and media.</p>
      </div>
      
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 flex flex-col items-center justify-center text-center py-20">
        <h3 className="text-xl font-medium text-zinc-800 mb-2">Image Gallery Coming Soon</h3>
        <p className="text-zinc-500 max-w-md mx-auto">
          For now, you can update images by pasting image URLs directly in the Homepage Content tab. 
          A fully integrated media library will be added here in the future.
        </p>
      </div>
    </div>
  );
}
