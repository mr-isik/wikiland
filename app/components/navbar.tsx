import Link from "next/link";
import Search from "./search";

export default function Navbar() {
  return (
    <nav className="w-full px-2 sm:px-6 py-4 flex items-center justify-between bg-zinc-800 gap-2 sm:gap-4 flex-col sm:flex-row">
      <h1 className="text-2xl font-bold text-white">
        <Link href="/">WikiRocket</Link>
      </h1>
      <Search />
    </nav>
  );
}
