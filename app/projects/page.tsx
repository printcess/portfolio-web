import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import ProjectCard from "@/app/components/ProjectCard";
import Image from "next/image";

const projects = [
  { id: '1', title: 'Hoo app', color: 'bg-slate-400', imageSrc: '/image/hoo2.png', width: 500, height: 500},
  { id: '2', title: 'Electronic nose', color: 'bg-slate-500', imageSrc: '/image/nose2.png' , width: 700, height: 700},
  { id: '3', title: 'Emotion Diary', color: 'bg-slate-700', imageSrc: '/image/diary2.png' , width: 700, height: 700},
  { id: '4', title: 'Liver Detection', color: 'bg-slate-400', imageSrc: '/image/liver2.png' , width: 250, height: 250},
  { id: '5', title: 'แบ่งอิ่ม', color: 'bg-slate-500', imageSrc: '/image/BI2.png' , width: 700, height: 700},
  { id: '6', title: 'Cp Retail Transfer', color: 'bg-slate-700', imageSrc: '/image/cp.png' , width: 200, height: 200},
  { id: '7', title: 'Erroreye', color: 'bg-slate-400', imageSrc: '/image/eye.png' , width: 500, height: 500},
  { id: '8', title: 'Problem Society', color: 'bg-slate-500', imageSrc: '/image/problem.png' , width: 700, height: 700},
  { id: '9', title: 'Game', color: 'bg-slate-500', imageSrc: '/image/game.png' , width: 700, height: 700},
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-slate-200 text-black pt-24 p-8">
      <Navbar />
      
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-12">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              id={project.id} 
              title={project.title} 
              color={project.color}
            >
              {project.imageSrc && (
                <div className="flex items-center justify-center w-full h-72">
                  <Image
                  src={project.imageSrc}
                  alt={project.title}
                  width={project.width}
                  height={project.height}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                </div>
              )}
            </ProjectCard>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
