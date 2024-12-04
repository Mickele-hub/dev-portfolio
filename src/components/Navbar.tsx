import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pastAbout, setPastAbout] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const aboutOffset = aboutSection.offsetTop;
        setPastAbout(window.scrollY > aboutOffset - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Home', 'About', 'Skills', 'Contact'];

  return (
    <nav className={`fixed w-full z-50 bg-gray-900/80 ${pastAbout ? 'h-14' : 'h-20'} transition-all duration-200`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-full py-4">
          <div className="flex-shrink-0">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-xl font-bold">
              Mickele
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500 relative group py-2"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transition-all duration-200 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Menu mobile */}
          <div 
            className={`
              fixed top-0 right-0 h-full w-64 bg-gray-900/95 transform transition-transform duration-300 ease-in-out
              ${isOpen ? 'translate-x-0' : 'translate-x-full'}
              md:hidden
            `}
          >
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white p-2"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col items-center pt-8 space-y-8">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500 relative group py-2"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transition-all duration-200 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;