import Link from 'next/link';
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Image src={"/QCG_Logo_White Background.png"} alt="QCG Logo" className="h-10" height={70} width={100}/>
        <ul className="space-x-4 ml-auto">
          <li className="inline-block">
            <Link href= "/support" className="text-sm font-helvetica-neue text-gray-700 hover:text-blue-800 mr-6 w-32"> Find a specialist </Link>
            <Link href= "/how" className="text-sm font-helvetica-neue text-gray-700 hover:text-blue-800 mr-6 w-32"> How it works </Link>
            <Link href= "/about" className="text-sm font-helvetica-neue text-gray-700 hover:text-blue-800 mr-6 w-32"> About </Link>
            <Link href= "/blog" className="text-sm font-helvetica-neue text-gray-700 hover:text-blue-800 mr-14 w-32"> Blog </Link>
            <a
              href="/"
              className="text-sm font-helvetica-neue text-gray-300 bg-blue-950 px-4 py-2 rounded text-white w-32"
            >
              List your clinic
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;