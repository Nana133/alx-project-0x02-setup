import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-700 text-white p-4">
      <nav className="flex space-x-4">
        <Link href="/">Welcome</Link>
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
