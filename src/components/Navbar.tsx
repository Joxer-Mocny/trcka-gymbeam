'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from './Button';

export default function Navbar() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [user, setUser] = useState<string | null>(null);

useEffect(() => {
  setIsClient(true);
  const storedUser = localStorage.getItem('user');
  setUser(storedUser);

  const handleStorageChange = () => {
    const updatedUser = localStorage.getItem('user');
    setUser(updatedUser);
  };

  window.addEventListener('storage', handleStorageChange);
  return () => window.removeEventListener('storage', handleStorageChange);
}, []);


  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/');
    setUser(null); // okamžitá zmena
  };

  return (
    <nav className="bg-[#f37021] text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-xl font-bold">GymBeam Shop</h1>
      {isClient && user && (
       <Button onClick={handleLogout}>
        Logout
      </Button>
      )}
    </nav>
  );
}
