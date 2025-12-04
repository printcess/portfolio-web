import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-slate-700 dark:bg-neutral-900 shadow-sm">
      <div className="text-2xl font-Medium tracking-widest text-white">PORTFOLIO</div>
      <Link href="/" className="px-6 py-2 bg-slate-500 text-white rounded-2xl hover:bg-slate-600 transition-colors ">
        home
      </Link>
    </nav>
  );
}
