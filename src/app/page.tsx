'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      router.push('/products');
    }
  }, [router]);

  const handleLogin = () => {
    if (username.trim()) {
      localStorage.setItem('user', username);
      router.push('/products');
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4">Welcome to GymBeam</h1>
        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded"
        >
          Login
        </button>
      </div>
    </main>
  );
}
