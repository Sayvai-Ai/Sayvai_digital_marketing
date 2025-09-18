import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  interface NavItem {
    name: string;
    path: string;
  }

  const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'Solution', path: '/Solution' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/30 dark:bg-gray-900/30 backdrop-blur-md shadow-lg'
          : 'bg-white dark:bg-gray-900'
      }`}
    >
      <nav className="container mx-auto px-4 py-2 md:py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
           <img
              src={theme === 'dark' ? '/logo2.svg' : '/logo1.png'}
              alt="Logo"
              className={`object-contain transition-transform duration-300 group-hover:scale-105 ${
                theme === 'dark' ? 'w-32 h-16 md:w-40 md:h-20' : 'w-44 h-20 md:w-56 md:h-28'
              }`}
              style={{
                maxWidth: theme === 'dark' ? '10rem' : '14rem',
                maxHeight: theme === 'dark' ? '5rem' : '7rem',
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12 flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative py-1 font-medium text-xl transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-[#00C0A3] dark:text-[#00C0A3]'
                    : 'text-[#1B2A41] dark:text-gray-200 hover:text-[#00C0A3] dark:hover:text-[#00C0A3]'
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#00C0A3] transform origin-left transition-transform duration-300 ${
                    location.pathname === item.path
                      ? 'scale-x-100'
                      : 'scale-x-0 hover:scale-x-100'
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Desktop Theme Toggle */}
          <div className="hidden md:flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-[#1B2A41] dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu + Theme */}
          <div className="flex items-center md:hidden space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-[#1B2A41] dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-[#1B2A41] dark:text-gray-200 hover:text-[#00C0A3] transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } overflow-y-auto`}
        >
          <div className="pt-3 pb-2 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-1 px-3 rounded-lg font-medium text-xl transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-[#00C0A3] bg-[#00C0A3]/10'
                    : 'text-[#1B2A41] dark:text-gray-200 hover:text-[#00C0A3] hover:bg-[#00C0A3]/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
