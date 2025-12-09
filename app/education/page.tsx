import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

export default function Education() {
  return (
    <main className="min-h-screen bg-slate-200 text-black pt-24 p-8">
      <Navbar />
      <div className="flex flex-col md:flex-row gap-8 w-full">
        <div className="w-full md:w-1/3 bg-slate-500/80 rounded-lg p-8 flex flex-col items-center h-[550px]">
  
            {/* รูปใหญ่ด้านบน */}
            <div className="h-[65%] w-full overflow-hidden flex items-center justify-center">
                <img src="/image/primary.jpg" className="w-60 h-60 object-contain rounded-lg" />
            </div>

            {/* กล่องคำอธิบายด้านล่าง */}
            <div className="h-[35%] w-full bg-white/10 rounded-lg p-6 backdrop-blur">
                <h2 className="text-3xl font-medium text-white mb-2 text-center">Primary</h2>
                <p className="text-xl text-gray-200 mb-2 text-center">
                    Rojanawit Malabiang School, Phitsanulok
                </p>
                <p className="text-xl font-semibold text-gray-200 text-center">
                    Grade : 4.00
                </p>
            </div>
        </div>

        <div className="w-full md:w-1/3 bg-slate-700/80 rounded-lg p-8 flex flex-col items-center h-[550px]">
  
            {/* รูปใหญ่ด้านบน */}
            <div className="h-[65%] w-full overflow-hidden flex items-center justify-center">
                <img src="/image/secondary.jpg" className="w-60 h-60 object-contain rounded-lg" />
            </div>

            {/* กล่องคำอธิบายด้านล่าง */}
            <div className="h-[35%] w-full bg-white/10 rounded-lg p-6 backdrop-blur">
                <h2 className="text-3xl font-medium text-white mb-2 text-center">Secondary</h2>
                <p className="text-xl text-gray-200 mb-2 text-center">
                    Princess Chulabhorn Science High School, Phitsanulok
                </p>
                <p className="text-xl font-semibold text-gray-200 text-center">
                    Grade : 3.90
                </p>
            </div>

        </div>

        <div className="w-full md:w-1/3 bg-slate-900/80 rounded-lg p-8 flex flex-col items-center h-[550px]">
  
            {/* รูปใหญ่ด้านบน */}
            <div className="h-[65%] w-full overflow-hidden flex items-center justify-center">
                <img src="/image/tiatary.jpg" className="w-60 h-60 object-contain rounded-lg" />
            </div>

            {/* กล่องคำอธิบายด้านล่าง */}
            <div className="h-[35%] w-full bg-white/10 rounded-lg p-6 backdrop-blur">
                <h2 className="text-3xl text-white mb-2 text-center font-medium">University</h2>
                <p className="text-xl text-gray-200 text-center">
                    Chulalongkorn University,
                </p>
                <p className="text-xl text-gray-200 text-center">
                    Faculty of Engineering
                </p>
            </div>

        </div>

    </div>



      <Footer />
    </main>
  );
}
