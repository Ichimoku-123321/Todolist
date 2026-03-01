import { useState } from 'react';
import { Ghost, CheckSquare, Menu, X } from 'lucide-react';

interface NavLinkProps {
  href: string;
  text: string;
  active?: boolean;
}

const NavLink = ({ href, text, active }: NavLinkProps) => (
    <a
        href={href}
        className={`relative font-cinzel font-semibold tracking-wide transition-colors duration-300 group
      py-1 text-xs sm:text-sm md:text-sm lg:text-base
      3xl:text-lg 5xl:text-2xl 5xl:py-2
      7xl:text-4xl 7xl:py-4 9xl:text-6xl 9xl:py-6
      ${active ? 'text-amber-400' : 'text-slate-400 hover:text-amber-200'}
    `}
    >
      {text}
      <span className={`absolute bottom-0 left-0 w-full bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right group-hover:origin-left 
      h-[1px] 5xl:h-[3px] 7xl:h-[5px] 9xl:h-[8px]
      ${active ? 'scale-x-100' : ''}`}></span>
    </a>
);

const MobileNavLink = ({ text, active }: { text: string; active?: boolean }) => (
    <a
        href="#"
        className={`block px-4 py-3 border-l-2 text-sm sm:text-base font-cinzel font-medium transition-colors ${
            active ? 'border-amber-500 text-amber-400 bg-amber-900/10' : 'border-transparent text-slate-300 hover:bg-white/5'
        }`}
    >
      {text}
    </a>
);

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
      <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-amber-500/10 backdrop-blur-md bg-black/70">
        <div className="max-w-7xl 3xl:max-w-[95vw] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20 md:h-24 3xl:h-32 5xl:h-48 7xl:h-64 9xl:h-96">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 sm:gap-3 5xl:gap-6 7xl:gap-10 9xl:gap-16 group">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-500 blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <Ghost className="relative text-amber-400 group-hover:text-amber-300 transition-colors
                w-6 h-6 sm:w-8 sm:h-8
                3xl:w-10 3xl:h-10 5xl:w-16 5xl:h-16
                7xl:w-24 7xl:h-24 9xl:w-40 9xl:h-40
              " />
              </div>
              <div className="flex flex-col">
              <span className="font-cinzel font-bold tracking-[0.2em] text-white leading-none
                text-lg sm:text-xl
                3xl:text-2xl 5xl:text-4xl 7xl:text-6xl 9xl:text-8xl
              ">
                SHADOW
              </span>
                <span className="text-amber-500 font-playfair uppercase mt-1
                text-[8px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em]
                3xl:text-xs 5xl:text-lg 7xl:text-2xl 9xl:text-4xl
              ">
                Protocol
              </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-10 3xl:gap-16 5xl:gap-24 7xl:gap-40 9xl:gap-60">
              <NavLink href="#" text="Главная" active />
              <NavLink href="#" text="Личный кабинет" />
              <NavLink href="#" text="О нас" />
            </nav>

            {/* CTA Button Header */}
            <div className="hidden md:flex items-center">
              <button className="relative bg-black border border-amber-600/50 text-amber-400 hover:text-black hover:bg-amber-500 transition-all duration-300 font-cinzel font-bold tracking-wider group overflow-hidden cursor-pointer
              px-4 py-2 text-xs lg:px-6 lg:text-sm
              3xl:px-8 3xl:py-3 3xl:text-base
              5xl:px-12 5xl:py-5 5xl:text-xl 5xl:border-2
              7xl:px-20 7xl:py-8 7xl:text-3xl 7xl:border-4
              9xl:px-32 9xl:py-12 9xl:text-5xl 9xl:border-8
            ">
              <span className="relative z-10 flex items-center gap-2 5xl:gap-4 9xl:gap-8">
                <CheckSquare className="w-3 h-3 lg:w-4 lg:h-4 3xl:w-5 3xl:h-5 5xl:w-8 5xl:h-8 7xl:w-12 7xl:h-12 9xl:w-20 9xl:h-20" />
                ToDoList
              </span>
                <div className="absolute inset-0 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out z-0"></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 -mr-2 text-amber-400 hover:text-white transition-colors cursor-pointer"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
            <div className="md:hidden glass-panel border-t border-amber-500/10 absolute w-full bg-black/95">
              <div className="px-4 pt-2 pb-6 space-y-2">
                <MobileNavLink text="Главная" active />
                <MobileNavLink text="Личный кабинет" />
                <MobileNavLink text="О нас" />
                <div className="pt-4">
                  <button className="w-full flex justify-center items-center gap-2 bg-amber-600/20 border border-amber-500/50 text-amber-400 px-4 py-3 rounded-sm font-cinzel cursor-pointer hover:bg-amber-600/40 transition-colors">
                    <CheckSquare size={18} />
                    <span>Перейти в ToDoList</span>
                  </button>
                </div>
              </div>
            </div>
        )}
      </header>
  );
};