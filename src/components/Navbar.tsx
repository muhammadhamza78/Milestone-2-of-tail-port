import { FaHome, FaUser} from 'react-icons/fa';
import { IoMail } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-white">PORTFOLIO</div>
            <div className="flex space-x-4">
              <a
                href="/"
                className="flex items-center space-x-1 text-gray-300 hover:text-blue-400"
              >
                <FaHome size={18} />
                <span>Home</span>
              </a>
              <a
                href="/about"
                className="flex items-center space-x-1 text-gray-300 hover:text-blue-400"
              >
                <FaUser size={18} />
                <span>About</span>
              </a>
              <a
                href="/contact"
                className="flex items-center space-x-1 text-gray-300 hover:text-blue-400"
              >
                <IoMail size={18} />
                <span>Contact</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
