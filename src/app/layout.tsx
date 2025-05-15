import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer'; 

export const metadata: Metadata = {
  title: 'GymBeam Case Study',
  description: 'React + Next.js + Tailwind',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-black">
        <Navbar />
        <main className="flex-grow">{children}</main>
       <Footer />
      </body>
    </html>
  );
}
