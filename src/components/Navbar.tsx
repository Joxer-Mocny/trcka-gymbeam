'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar(){
    const router = useRouter();
    const [user, setuser] = useState<string | null>(null);

    useEffect(()=> {
        const storedUser = localStorage.getItem('user');
        setuser(storedUser);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        router.push('/');
    };

    if (!user) return null;

    return (
        <nav className="bg-orange-500 text-white px-6 py4 flex justify-between items-center">
        <h1 className="text-xl font-bold">GymBeam Shop</h1>    
        <button
            onClick={handleLogout}
            className="bg-white text-orange-500 px-4 py-2 rounded hover:bg-gray-100 transition">
                Logout
            </button>
        </nav>
    );
}