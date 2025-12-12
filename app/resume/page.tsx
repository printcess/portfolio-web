import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";

export default function FigmaPage() {
  return (
    <main className="min-h-screen bg-slate-200 text-black pt-24 pb-24">
      <Navbar />
      <div className="w-full h-full flex flex-col items-center">
        <div className="w-[80%] flex-1 min-h-[80vh]">
            <img src="/image/wanut.png" className="w-full h-full object-contain" alt="Figma Design" />
        </div>
      </div>
      <Footer />
    </main>
  );
}