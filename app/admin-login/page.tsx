'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('sandidhajar@gmail.com');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/admin-login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    if (!res.ok) {
      setError('Mot de passe invalide.');
      return;
    }
    router.push('/admin');
    router.refresh();
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#07111f] px-4 text-white">
      <form onSubmit={submit} className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-sky-300">Admin login</p>
        <h1 className="mt-3 text-3xl font-semibold">Accès privé</h1>
        <p className="mt-2 text-sm text-slate-400">Entre ton email et ton mot de passe admin pour ouvrir le panneau.</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-6 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-4 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
          placeholder="Mot de passe"
        />
        {error && <p className="mt-3 text-sm text-rose-300">{error}</p>}
        <button type="submit" className="mt-6 w-full rounded-xl bg-sky-400 px-4 py-3 font-semibold text-slate-950">
          Se connecter
        </button>
      </form>
    </main>
  );
}
