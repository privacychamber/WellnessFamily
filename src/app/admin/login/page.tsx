'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2, Lock } from 'lucide-react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        router.push('/admin');
        router.refresh();
      } else {
        const data = await res.json();
        setError(data.error || 'Invalid credentials');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f1e7] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md bg-white p-10 rounded-2xl border border-[#8f9e8b]/20 shadow-xl shadow-[#1b2921]/5 space-y-8">
        
        {/* Logo and Headings */}
        <div className="text-center">
          <div className="w-14 h-14 border border-[#2c4c3b] rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-[#2c4c3b] text-sm font-semibold tracking-wider">WF</span>
          </div>
          <h2 className="text-[#2c4c3b] tracking-[0.2em] text-xs font-semibold uppercase">Wellness Family</h2>
          <h1 className="font-serif text-3xl text-[#2c4c3b] mt-3">Admin Sanctuary</h1>
          <p className="text-zinc-500 text-sm mt-2">Sign in to manage your wellness space.</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm border border-red-100 flex items-center gap-2">
            <span className="font-medium">Error:</span> {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-xs font-medium tracking-widest text-[#2c4c3b]/80 uppercase">Username</label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-[#2c4c3b] focus:border-[#2c4c3b] outline-none text-[#2c4c3b] transition-all bg-zinc-50/50"
              placeholder="Enter your username"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-medium tracking-widest text-[#2c4c3b]/80 uppercase">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-[#2c4c3b] focus:border-[#2c4c3b] outline-none text-[#2c4c3b] transition-all bg-zinc-50/50"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#2c4c3b] hover:bg-[#1b2921] text-white py-3.5 rounded-xl font-medium tracking-wider uppercase text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-[#2c4c3b]/10 disabled:opacity-75 disabled:cursor-not-allowed"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <>
                <Lock className="w-3.5 h-3.5" />
                Unlock Dashboard
              </>
            )}
          </button>
        </form>

        <div className="text-center pt-4">
          <a href="/" className="text-xs text-[#2c4c3b]/70 hover:text-[#2c4c3b] tracking-wider uppercase transition-colors">
            &larr; Back to sanctuary
          </a>
        </div>

      </div>
    </div>
  );
}
