import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-right">
      <Link href="/" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors">Home</Link>
      <Link href="/gallery" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors">Gallery</Link>
      <Link href="/about" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors">About</Link>
    </nav>
  );
};

export default NavBar;
