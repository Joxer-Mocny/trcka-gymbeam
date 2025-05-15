'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Button from '@/components/Button';

type Product = {
    id:number;
    title:string;
    price:number;
    description:string;
    image:string;
};

export default function ProductDetailPage() {
    const {id} =useParams();
    const router = useRouter();
    const[product, setProduct] = useState<Product | null>(null);

    useEffect(() =>{
        const user = localStorage.getItem('user');
        if(!user) {
            router.push('/')
        }
    }, [router]);

    useEffect(()=>{
        if(id){
            fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data)=> setProduct(data));
        }
    }, [id]);
    if(!product) {
         return <p className="p-8">Loading...</p>;
    }

    return(
         <main className="p-8 max-w-3xl mx-auto bg-white rounded-xl shadow">
      <Button
        onClick={() => router.back()}
      >
        ← Back to Products
      </Button>

      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-1/2 object-contain max-h-80"
        />
        <div>
          <h1 className="text-2xl font-bold mb-2 text-[#1a1a1a]">{product.title}</h1>
          <p className="text-xl text-orange-500 font-semibold mb-4">
            ${product.price}
          </p>
          <p className="text-[#1a1a1a] leading-relaxed">{product.description}</p>
        </div>
      </div>
    </main>
    );
}