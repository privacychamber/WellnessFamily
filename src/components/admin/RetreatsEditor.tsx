'use client';

import { useState, useEffect } from 'react';
import { Save, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';

export function RetreatsEditor() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    fetch('/api/content?page=retreats')
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

  const handleRetreatChange = (index: number, key: string, value: string) => {
    const updatedRetreats = [...data.retreatsList];
    updatedRetreats[index] = { ...updatedRetreats[index], [key]: value };
    handleChange('retreatsList', updatedRetreats);
  };

  const handleSave = async () => {
    setSaving(true);
    setStatus('idle');
    try {
      const res = await fetch('/api/content?page=retreats', {
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
        <h3 className="text-xl font-semibold text-zinc-900 mb-1">Retreats Page Content</h3>
        <p className="text-zinc-500 text-sm">Manage the upcoming retreats and testimonials shown on the Retreats page.</p>
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
          <h4 className="text-lg font-medium text-zinc-900 mb-4">Retreats List</h4>
          <div className="space-y-6">
            {data.retreatsList?.map((retreat: any, index: number) => (
              <div key={index} className="p-5 border border-zinc-200 rounded-xl space-y-4 bg-zinc-50/50">
                <h5 className="font-semibold text-sm text-zinc-600">Retreat #{index + 1}</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-500 mb-1">Title</label>
                    <input
                      type="text"
                      value={retreat.title || ''}
                      onChange={(e) => handleRetreatChange(index, 'title', e.target.value)}
                      className="w-full px-3 py-1.5 border border-zinc-200 rounded-lg bg-white focus:ring-1 focus:ring-black focus:border-black outline-none text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-500 mb-1">Date / Season</label>
                    <input
                      type="text"
                      value={retreat.date || ''}
                      onChange={(e) => handleRetreatChange(index, 'date', e.target.value)}
                      className="w-full px-3 py-1.5 border border-zinc-200 rounded-lg bg-white focus:ring-1 focus:ring-black focus:border-black outline-none text-sm transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-500 mb-1">Description</label>
                  <textarea
                    value={retreat.description || ''}
                    onChange={(e) => handleRetreatChange(index, 'description', e.target.value)}
                    rows={3}
                    className="w-full px-3 py-1.5 border border-zinc-200 rounded-lg bg-white focus:ring-1 focus:ring-black focus:border-black outline-none text-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-500 mb-1">Button Text</label>
                  <input
                    type="text"
                    value={retreat.buttonText || ''}
                    onChange={(e) => handleRetreatChange(index, 'buttonText', e.target.value)}
                    className="w-full px-3 py-1.5 border border-zinc-200 rounded-lg bg-white focus:ring-1 focus:ring-black focus:border-black outline-none text-sm transition-all"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-zinc-100 pt-6 space-y-4">
          <h4 className="text-lg font-medium text-zinc-900">Testimonial</h4>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">Quote Content</label>
            <textarea
              value={data.testimonial || ''}
              onChange={(e) => handleChange('testimonial', e.target.value)}
              rows={3}
              className="w-full px-4 py-2 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-black focus:border-black outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">Author Name</label>
            <input
              type="text"
              value={data.testimonialAuthor || ''}
              onChange={(e) => handleChange('testimonialAuthor', e.target.value)}
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
