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
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900/90">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;