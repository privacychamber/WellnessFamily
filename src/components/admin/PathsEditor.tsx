'use client';

import { useState, useEffect } from 'react';
import { Save, Loader2, AlertCircle, CheckCircle2, Plus, Trash } from 'lucide-react';

export function PathsEditor() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    fetch('/api/content?page=paths')
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

  const handleChange = (key: string, value: any) => {
    setData((prev: any) => ({ ...prev, [key]: value }));
    setStatus('idle');
  };

  const handleServiceChange = (index: number, key: string, value: string) => {
    const updatedServices = [...data.services];
    updatedServices[index] = { ...updatedServices[index], [key]: value };
    handleChange('services', updatedServices);
  };

  const handleSave = async () => {
    setSaving(true);
    setStatus('idle');
    try {
      const res = await fetch('/api/content?page=paths', {
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
        <h3 className="text-xl font-semibold text-zinc-900 mb-1">Healing Paths Content</h3>
        <p className="text-zinc-500 text-sm">Manage the services and details offered on the Healing Paths page.</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">Page Title</label>
          <input
            type="text"
            value={data.title || ''}
            onChange={(e) => handleChange('title', e.target.value)}
            className="w-full px-4 py-2 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-black focus:border-black outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">Page Description</label>
          <textarea
            value={data.description || ''}
            onChange={(e) => handleChange('description', e.target.value)}
            rows={3}
            className="w-full px-4 py-2 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-black focus:border-black outline-none transition-all"
          />
        </div>

        <div className="border-t border-zinc-100 pt-6">
          <h4 className="text-lg font-medium text-zinc-900 mb-4">Services List</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.services?.map((service: any, index: number) => (
              <div key={index} className="p-5 border border-zinc-200 rounded-xl space-y-4 bg-zinc-50/50">
                <h5 className="font-semibold text-sm text-zinc-600">Service #{index + 1}</h5>
                <div>
                  <label className="block text-xs font-medium text-zinc-500 mb-1">Title</label>
                  <input
                    type="text"
                    value={service.title || ''}
                    onChange={(e) => handleServiceChange(index, 'title', e.target.value)}
                    className="w-full px-3 py-1.5 border border-zinc-200 rounded-lg bg-white focus:ring-1 focus:ring-black focus:border-black outline-none text-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-500 mb-1">Description</label>
                  <textarea
                    value={service.description || ''}
                    onChange={(e) => handleServiceChange(index, 'description', e.target.value)}
                    rows={3}
                    className="w-full px-3 py-1.5 border border-zinc-200 rounded-lg bg-white focus:ring-1 focus:ring-black focus:border-black outline-none text-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-500 mb-1">Button Text</label>
                  <input
                    type="text"
                    value={service.buttonText || ''}
                    onChange={(e) => handleServiceChange(index, 'buttonText', e.target.value)}
                    className="w-full px-3 py-1.5 border border-zinc-200 rounded-lg bg-white focus:ring-1 focus:ring-black focus:border-black outline-none text-sm transition-all"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-zinc-100 pt-6 space-y-4">
          <h4 className="text-lg font-medium text-zinc-900">Sound Healing Section</h4>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">Section Title</label>
            <input
              type="text"
              value={data.soundHealingTitle || ''}
              onChange={(e) => handleChange('soundHealingTitle', e.target.value)}
              className="w-full px-4 py-2 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-black focus:border-black outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">Section Description</label>
            <textarea
              value={data.soundHealingDescription || ''}
              onChange={(e) => handleChange('soundHealingDescription', e.target.value)}
              rows={3}
              className="w-full px-4 py-2 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-black focus:border-black outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">Button Text</label>
            <input
              type="text"
              value={data.soundHealingButtonText || ''}
              onChange={(e) => handleChange('soundHealingButtonText', e.target.value)}
              className="w-full px-4 py-2 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-black focus:border-black outline-none transition-all"
            />
          </div>
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
