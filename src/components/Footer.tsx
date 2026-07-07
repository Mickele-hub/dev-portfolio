import { Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
              Mickele
            </span>
            <p className="text-gray-400 mt-2 text-sm">
              Développeur Fullstack passionné
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Mickele-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 border border-gray-700 rounded-full text-gray-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/mickele-andrianarivony-a43474308/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 border border-gray-700 rounded-full text-gray-400 hover:text-white hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm flex items-center justify-center md:justify-end gap-2">
              © {currentYear} Mickele
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
