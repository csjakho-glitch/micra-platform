'use client';

import { FormEvent, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function submit(e: FormEvent) {
    e.preventDefault(); setLoading(true); setError('');
    const { error } = await createClient().auth.signInWithPassword({ email, password });
    if (error) setError(error.message); else window.location.href = '/';
    setLoading(false);
  }

  return <main className="authPage"><section className="authCard"><div className="brand"><div className="brandMark">M</div><div><strong>MICRA</strong><span>Platform OS</span></div></div><div className="kicker">SECURE WORKSPACE</div><h1>Welcome back.</h1><p>Sign in to access the MICRA operating layer.</p><form onSubmit={submit}><label>Email<input type="email" required value={email} onChange={e=>setEmail(e.target.value)} /></label><label>Password<input type="password" required value={password} onChange={e=>setPassword(e.target.value)} /></label>{error && <div className="formError">{error}</div>}<button className="primary authButton" disabled={loading}>{loading ? 'Signing in…' : 'Sign in'}</button></form></section></main>;
}
