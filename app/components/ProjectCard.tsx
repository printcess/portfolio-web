import Link from 'next/link';

interface ProjectCardProps {
  id: string;
  title: string;
  color: string;
  children: React.ReactNode;
}

export default function ProjectCard({ id, title, color, children }: ProjectCardProps) {
  return (
    <Link 
      href={`/projects/${id}`} 
      className={`block rounded-3xl p-8 transition-transform hover:scale-105 ${color} text-white group h-full`}
    >
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        {children}
    </Link>
  );
}
