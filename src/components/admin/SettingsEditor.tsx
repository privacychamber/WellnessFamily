'use client';

import { useState, useEffect } from 'react';
import { Save, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';

export function SettingsEditor() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    fetch('/api/content?page=settings')
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleChange = (key: string, value: string) => {
    setData((prev: any) => ({ ...prev, [key]: value }));
    setStatus('idle');
  };

  const handleSave = async () => {
    setSaving(true);
    setStatus('idle');
    try {
      const res = await fetch('/api/content?page=settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64 text-zinc-500">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="p-6 bg-red-50 text-red-600 rounded-lg flex items-center gap-3">
        <AlertCircle className="w-5 h-5" />
        Failed to load content.
      </div>
    );
  }

  return (
    <div className="max-w-4xl space-y-8 bg-white p-8 rounded-2xl shadow-sm border border-zinc-100">
      <div>
        <h3 className="text-xl font-semibold text-zinc-900 mb-1">Global Settings</h3>
        <p className="text-zinc-500 text-sm">Update the general configuration and SEO for the website.</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">Website Name</label>
          <input
            type="text"
            value={data.siteName || ''}
            onChange={(e) => handleChange('siteName', e.target.value)}
            className="w-full px-4 py-2 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-black focus:border-black outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">SEO Meta Description</label>
          <textarea
            value={data.seoDescription || ''}
            onChange={(e) => handleChange('seoDescription', e.target.value)}
            rows={3}
            className="w-full px-4 py-2 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-black focus:border-black outline-none transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 pt-4 border-t border-zinc-100">
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 bg-black text-white px-6 py-2.5 rounded-lg font-medium hover:bg-zinc-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          Save Changes
        </button>

        {status === 'success' && (
          <span className="flex items-center gap-2 text-green-600 text-sm font-medium">
            <CheckCircle2 className="w-4 h-4" />
            Changes saved successfully
          </span>
        )}
        
        {status === 'error' && (
          <span className="flex items-center gap-2 text-red-600 text-sm font-medium">
            <AlertCircle className="w-4 h-4" />
            Failed to save changes
          </span>
        )}
      </div>
    </div>
  );
}
