'use client';

import { useState, useRef } from 'react';
import { Upload, Loader2, AlertCircle } from 'lucide-react';

interface ImageUploaderProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
}

export function ImageUploader({ value, onChange, label }: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (file: File) => {
    setUploading(true);
    setError('');

    try {
      // call our upload API route
      const res = await fetch(`/api/content/upload?filename=${encodeURIComponent(file.name)}`, {
        method: 'POST',
        body: file,
      });

      if (res.ok) {
        const blob = await res.json();
        if (blob.url) {
          onChange(blob.url);
        } else {
          setError('Invalid response from upload server');
        }
      } else {
        const errJson = await res.json();
        setError(errJson.error || 'Failed to upload image');
      }
    } catch (err) {
      setError('An error occurred during upload');
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleUpload(e.target.files[0]);
    }
  };

  const triggerSelect = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-3">
      {label && <label className="block text-sm font-medium text-zinc-700">{label}</label>}
      
      <div className="flex flex-col md:flex-row gap-4 items-start">
        {/* URL Input */}
        <div className="flex-1 w-full">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full px-4 py-2 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-black focus:border-black outline-none text-sm transition-all"
            placeholder="Pasted image URL (or upload below)"
          />
        </div>

        {/* Upload Button */}
        <div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
          <button
            type="button"
            onClick={triggerSelect}
            disabled={uploading}
            className="flex items-center justify-center gap-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-medium px-4 py-2 rounded-lg text-sm transition-colors border border-zinc-200 disabled:opacity-75 disabled:cursor-not-allowed h-9"
          >
            {uploading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-zinc-600" />
                Uploading...
              </>
            ) : (
              <>
                <Upload className="w-4 h-4 text-zinc-600" />
                Upload Image File
              </>
            )}
          </button>
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-2 text-xs text-red-600 bg-red-50 p-2.5 rounded-lg border border-red-100">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Image Preview */}
      {value && (
        <div className="relative mt-2 rounded-lg overflow-hidden border border-zinc-200 max-w-sm h-48 bg-zinc-50">
          <img
            src={value}
            alt="Preview"
            className="object-cover w-full h-full"
            onError={(e) => {
              // Hide image preview if URL is invalid/broken
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      )}
    </div>
  );
}
