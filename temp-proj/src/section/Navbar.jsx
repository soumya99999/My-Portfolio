import React, { useState } from 'react';
import navLinks from "../constant/index.js";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  const NavItems = ({ className }) => {
    return (
      <ul className={`nav-ul flex flex-col sm:flex-row sm:gap-1 items-center ${className}`}>
        {navLinks.map((link) => (
          <li className='nav-li' key={link.id}>
            <a href={link.href} className='nav-li_a text-white py-1 block sm:inline-block hover:text-gray-300'>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <header className='fixed top-0 right-0 z-50 w-full '>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex justify-between items-center py-5'>
          {/* Logo */}
          <a href="/" className='text-white font-bold text-xl'>
            <img src="assets/Code-2.webp" alt="logo" loading="lazy" className='h-20 w-auto transform scale-x-[-1]' />
          </a>

          <button className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex' onClick={toggle} aria-label='Toggle-menu'>
            <img
              src={isOpen ? "assets/close.webp" : "assets/menu.webp"} 
              alt="toggle"
              className='w-6 h-6'
              loading="lazy"
            />
          </button>

          {/* Navigation items for laptop/desktop */}
          <nav className='hidden sm:block'>
            <NavItems />
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className='sm:hidden absolute top-16 left-0 w-full bg-black transition-all ease-in-out duration-300'>
          <NavItems className="p-5 border-t border-gray-700" />
        </nav>
      )}
    </header>
  );
};

export default Navbar;
