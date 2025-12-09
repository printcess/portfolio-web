import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { Phone, Github, Instagram, Facebook, Mail } from "lucide-react";
import CopyEmailButton from "@/app/components/CopyEmailButton";

export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-900 text-white pt-24 p-8">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center gap-6 p-8 mt-24">
  {/* รูปโปรไฟล์ */}
  <img src="/image/print.jpg" className="w-40 h-40 object-contain rounded-full object-cover" />

  {/* ปุ่มต่าง ๆ */}
  <div className="flex gap-4 pt-4">
              <a
                href="tel:+66622630936"
                className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Phone size={20} />
              </a>
              <a
                href="https://github.com/printcess"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Github size={20} />
                
              </a>
              <a
                href="https://instagram.com/printcess._"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/pn.gerdchai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <CopyEmailButton />
            </div>
</div>
      <Footer />
    </main>
  );
}
