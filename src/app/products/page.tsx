'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // kontrola prihlasenia
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      router.push('/');
    }
  }, [router]);

  // načítanie produktov s error handlingom
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');

        if (!res.ok) {
          throw new Error(`HTTP error: ${res.status}`);
        }

        const data = await res.json();
        setProducts(data);
      } catch (err) {
        if (err instanceof SyntaxError) {
          setError('Invalid JSON response from API.');
        } else {
          setError((err as Error).message);
        }
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <p className="p-8 text-red-600">Error: {error}</p>;
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-400">Products</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded shadow hover:shadow-lg transition cursor-pointer"
            onClick={() => router.push(`/products/${product.id}`)}
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-40 w-full object-contain mb-4"
            />
            <h2 className="text-lg font-semibold text-[#1a1a1a]">
              {product.title}
            </h2>
            <p className="text-[#f37021] font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
