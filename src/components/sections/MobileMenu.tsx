import { XMarkIcon } from '@heroicons/react/24/outline';
import { Dispatch, SetStateAction } from 'react';

type NavbarProps = {
    menuOpen: boolean;
    setMenuOpen: Dispatch<SetStateAction<boolean>>;
  };

export const MobileMenu = ({menuOpen, setMenuOpen}: NavbarProps) => {
    

    return (
        <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
                        transition-all duration-300 ease-in-out
                        
                        ${menuOpen 
                            ? "h-screen opacity-100 pointer-events-auto"
                            : "h-0 opacity-0 pointer-events-none"
                        }
                        relative
                        `}
        >

            <button 
                onClick={() => setMenuOpen(false)}
                className="w-7 h-5 absolute top-6 right-6 text-3xl focus:outline-none cursor-pointer"
                aria-label='Close menu'
            >
                <XMarkIcon className="text-blue-500 hover:text-violet-900 transition-colors"/>
            </button>
            <a
                        href='#home'
                        onClick={() => setMenuOpen(false)}
                        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                                    ${menuOpen 
                                        ? "opacity-100 translate-y-0" 
                                        : "opacity-0 translate-y-5"}
                            `}
                    >
                        Home
                    </a>
                    <a
                        href='#about'
                        onClick={() => setMenuOpen(false)}
                        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                            ${menuOpen 
                                ? "opacity-100 translate-y-0" 
                                : "opacity-0 translate-y-5"}
                    `}
                    > 
                        About
                    </a>
                    <a
                        href='#projects'
                        onClick={() => setMenuOpen(false)}
                        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                            ${menuOpen 
                                ? "opacity-100 translate-y-0" 
                                : "opacity-0 translate-y-5"}
                    `}
                    >
                        Projects
                    </a>
                    <a
                        href='#contact'
                        onClick={() => setMenuOpen(false)}
                        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                            ${menuOpen 
                                ? "opacity-100 translate-y-0" 
                                : "opacity-0 translate-y-5"}
                    `}
                    >
                        Contact
                    </a>
        </div>
    );
}