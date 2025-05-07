import { Bars3Icon } from '@heroicons/react/24/outline';
import { Dispatch, SetStateAction, useEffect } from 'react';

type NavbarProps = {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export const Navbar = ({ menuOpen, setMenuOpen }: NavbarProps) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <span
            onClick={() => scrollToId('home')}
            className="font-mono text-xl font-bold text-white cursor-pointer"
          >
            Diego<span className="text-blue-500">.dev</span>
          </span>

          <Bars3Icon
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-blue-500 hover:text-violet-900 transition-colors"
            onClick={() => setMenuOpen((prev: boolean) => !prev)}
          />

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToId('home')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToId('about')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToId('projects')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToId('contact')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
