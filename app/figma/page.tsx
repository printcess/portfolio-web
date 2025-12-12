import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";

export default function FigmaPage() {
  return (
    <main className="min-h-screen bg-slate-200 text-black pt-24 pb-24">
      <Navbar />
      
      <div className="w-full h-full flex flex-col items-center">
        <h1 className="text-4xl font-bold mt-8 mb-20 text-center">Figma Designs</h1>
        <div className="w-full flex-1 min-h-[80vh]">
            <img src="/image/figma.png" className="w-full h-full object-contain" alt="Figma Design" />
        </div>
      </div>
      <Footer />
    </main>
  );
}