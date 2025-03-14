import React, { useState, useEffect } from 'react';
import { Ticket, LogIn, User, Menu, X } from 'lucide-react';

const NavLink = ({ title, active }) => (
  <a
    href="#"
    className={`px-4 py-2 font-medium text-white transition-all duration-300 ${
      active ? 'border-b-2 border-pink-500' : 'hover:text-pink-400'
    }`}
  >
    {title}
  </a>
);

const MobileNavLink = ({ title, active, icon }) => (
    <a
        href="#"
        className={`block px-4 py-2 rounded-md font-medium transition-all ${
            active ? 'text-pink-400' : 'text-gray-300 hover:text-pink-400'
        }`}
    >
        {icon}
        {title}
    </a>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-md flex items-center justify-center transform transition-all duration-300 bg-gradient-to-br from-pink-500 to-purple-600">
                <Ticket className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                EventTix
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink key="home" title="Home" active />
            <NavLink key="events" title="Events" />
            <NavLink key="about" title="About" />
            <NavLink key="contact" title="Contact" />

            <button className="px-4 py-2 rounded-md font-medium flex items-center text-white hover:bg-white/10 transition-all">
              <LogIn className="w-4 h-4 mr-1" />
              Login
            </button>
            <button className="px-4 py-2 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium flex items-center transition-all hover:scale-105">
              <User className="w-4 h-4 mr-1" />
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-pink-400 hover:bg-pink-500/10 transition-all"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-4 bg-gray-800">
          <MobileNavLink title="Home" active />
          <MobileNavLink title="Events" />
          <MobileNavLink title="About" />
          <MobileNavLink title="Contact" />
          <div className="flex flex-col space-y-2 pt-2 border-t border-gray-700/50">
            <MobileNavLink
              title="Login"
              icon={<LogIn className="w-4 h-4 mr-2" />}
            />
            <button className="py-2 px-3 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium flex items-center justify-center">
              <User className="w-4 h-4 mr-2" />
              Sign Up
            </button>
          </div>
   
        </div>
      </div>    
    </nav>
  );
}
  export default Navbar;