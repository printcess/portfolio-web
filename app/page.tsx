import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Phone, Github, Instagram } from "lucide-react";

export default function Home() {
  return (
    <>
      <main
        className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/image/bg2.jpg')" }}
      >
        {/* ชั้น overlay ถ้าต้องการลบก็ลบได้ */}
        <div className="absolute inset-0 bg-white/70 fixed"></div>

        {/* เนื้อหา */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12 min-h-screen">
          {/* ฝั่งซ้าย: รูป */}
          <div className="w-full md:w-1/2">
            <img
              src="/image/print.jpg"
              alt="cat"
              className="w-80 h-auto rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* ฝั่งขวา: ข้อความ */}
          <div className="w-full md:w-1/2 text-black space-y-4">
            <h1 className="text-4xl font-bold">Wanutchaporn Gerdchai</h1>
            <p className="text-2xl">
              Nickname : Print
            </p>
            <p className="text-2xl">
              Age : 19 years old
            </p>
            <p className="text-2xl">
              A first-year student in Computer Engineering and Digital Technology (CEDT)
            </p>

            {/* Contact Buttons */}
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
            </div>
          </div>
        </div>

        {/* Section 2: Skills & Interests */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 min-h-screen flex flex-col justify-center">
             <div className="flex flex-col md:flex-row gap-8 w-full">
                {/* Skill Box */}
                <div className="w-full md:w-1/2 bg-slate-900/80 rounded-lg p-8 flex flex-col">
                  <h2 className="text-3xl text-white mb-8 text-center font-medium">
                      Programming Language
                  </h2>

                  <div className="flex flex-col gap-4">
                    <div className="bg-white/10 p-4 rounded-lg text-white text-lg backdrop-blur">
                      C, C++
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg text-white text-lg backdrop-blur">
                      Python
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg text-white text-lg backdrop-blur">
                      TypeScript
                    </div>
                  </div>
              </div>

                {/* Interesting Box */}
                <div className="w-full md:w-1/2 bg-slate-300/80 rounded-lg p-8 flex flex-col">
                     <h2 className="text-3xl text-black mb-8 font-medium text-center">Interesting</h2>
                     <div className="flex flex-col gap-4">
                    <div className="bg-slate-800/10 p-4 rounded-lg text-black text-lg backdrop-blur">
                      Frontend Developer
                    </div>
                    <div className="bg-slate-800/10 p-4 rounded-lg text-black text-lg backdrop-blur">
                      Business Analyst
                    </div>
                    <div className="bg-slate-800/10 p-4 rounded-lg text-black text-lg backdrop-blur">
                      Quality Assurance
                    </div>
                    <div className="bg-slate-800/10 p-4 rounded-lg text-black text-lg backdrop-blur">
                      Project Manager
                    </div>

                     </div>
                </div>
             </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
