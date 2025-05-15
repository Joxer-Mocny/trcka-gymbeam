'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';


export default function LoginPage() {
  const [username, setUsername] = useState('');
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      router.push('/products');
    }
  }, [router]);

  const handleLogin = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (username.trim()) {
      localStorage.setItem('user', username);
      window.dispatchEvent(new Event('storage'));
      router.push('/products');
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-[#f5f5f5]">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-[#1a1a1a]">Welcome to GymBeam</h1>

      <form onSubmit={handleLogin}>
  <input
    type="text"
    placeholder="Enter your name"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    className="w-full p-2 border rounded mb-4 text-[#1a1a1a]"
  />

<Button type="submit" disabled={!username.trim()} >
  Login
</Button>
</form>
      </div>
    </main>
  );
}
