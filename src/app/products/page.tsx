'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type Products = {
    id: number;
    title: string;
    price: number;
    desciption: string;
    image: string;
};

export default function ProductsPage(){
    const [products, setProducts] = useState<Product[]>([]);
    const router = useRouter();
    useEffect(()=>{
        const user = localStorage.getItem('user');
        if(!user) {
            router.push('/');
        }

    }, [router]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((res)=> res.json())
        .then((data)=> setProducts(data));
    }, []);

    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold mb-6">Products</h1>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products.map((product)=>(
                    <div
                        key={product.id}
                        className="bg-white p-4 rounded shadow hover:shadow-lg transition cursor-pointer"
                        onClick={()=> router.push(`/products/${product.id}`)}>
                    <img 
                        src={product.image}
                        alt={product.title}
                        className="h-40 w-full object-contain mb-4"/>
                        <h2 className="text-lg font-semibold">{product.title}</h2>
                        <p className='text-orange-500 font-bold'>${product.price}</p>
                    </div>
                    ))}
            </div>
        </main>
    );
}