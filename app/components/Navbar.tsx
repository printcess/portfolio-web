import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 bg-slate-700/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-sm">
      <div className="text-2xl font-Medium tracking-widest text-white">PORTFOLIO</div>
      <Link
        href="/"
        className="px-6 py-2 bg-slate-500 text-white rounded-2xl hover:bg-slate-600 transition-colors"
      >
        home
      </Link>
    </nav>
  );
}
