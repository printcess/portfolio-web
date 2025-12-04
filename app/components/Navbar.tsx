import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-neutral-900 shadow-sm">
      <div className="text-xl font-bold">Portfolio</div>
      <Link href="/" className="px-4 py-2 bg-black text-white rounded-md hover:bg-neutral-800 transition-colors dark:bg-white dark:text-black dark:hover:bg-neutral-200">
        Home
      </Link>
    </nav>
  );
}
