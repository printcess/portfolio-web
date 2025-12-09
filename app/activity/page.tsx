import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";

const activities = [
  { id: '1', title: 'Openhouse CEDT staff', color: 'bg-slate-400', imageSrc: '/image/webdev.png' },
  { id: '2', title: 'CUIIC 2025 staff', color: 'bg-slate-500', imageSrc: '/image/cuiic.jpg' },
  { id: '3', title: 'SAKURA SCIENCE Exchange Program', color: 'bg-slate-700', imageSrc: '/image/sakura.png' },
  { id: '4', title: 'UX/UI Workshop', color: 'bg-slate-400', imageSrc: '/image/uxui.png' },
];

export default function Activity() {
  return (
    <main className="min-h-screen bg-slate-200 text-black pt-24 p-8">
      <Navbar />
      
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-12">
          {activities.map((activity) => (
            <div 
              key={activity.id} 
              className={`block rounded-3xl p-8 ${activity.color} text-white h-full`}
            >
                <h2 className="text-2xl font-bold mb-4">{activity.title}</h2>
                <div className="flex items-center justify-center w-full h-72">
                  <Image
                    src={activity.imageSrc}
                    alt={activity.title}
                    width={500}
                    height={500}
                    className="object-cover rounded-lg"
                  />
                </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
