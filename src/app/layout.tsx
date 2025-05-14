import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';

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
      <body className="bg-[#f5f5f5] min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}