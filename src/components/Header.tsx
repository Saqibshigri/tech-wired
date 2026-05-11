import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className='fixed top-0 left-0 right-0 z-50 glass'>
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between'>
        {/* Logo */}
        <div className='flex items-center gap-2'>
          <div className='text-2xl font-bold gradient-text'>Tech Wired</div>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center gap-8'>
          <button
            onClick={() => scrollToSection("services")}
            className='hover:text-cyan-400 transition'
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className='hover:text-cyan-400 transition'
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection("case-studies")}
            className='hover:text-cyan-400 transition'
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className='hover:text-cyan-400 transition'
          >
            About
          </button>
        </div>

        {/* CTA Buttons */}
        <div className='hidden md:flex gap-3 items-center'>
          <button
            onClick={() => scrollToSection("contact")}
            className='px-6 py-2 rounded-lg border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 transition font-semibold'
          >
            Book a Call
          </button>
          <button
            onClick={() => scrollToSection("case-studies")}
            className='px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-lg hover:shadow-cyan-500/50 transition font-semibold'
          >
            See Our Work
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden border-t border-cyan-400/20'>
          <div className='px-4 py-4 space-y-4'>
            <button
              onClick={() => scrollToSection("services")}
              className='block w-full text-left hover:text-cyan-400'
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className='block w-full text-left hover:text-cyan-400'
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("case-studies")}
              className='block w-full text-left hover:text-cyan-400'
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className='block w-full text-left hover:text-cyan-400'
            >
              About
            </button>
            <div className='pt-4 space-y-2 border-t border-cyan-400/20'>
              <button
                onClick={() => scrollToSection("contact")}
                className='w-full px-4 py-2 border-2 border-cyan-400 text-cyan-400 rounded-lg'
              >
                Book a Call
              </button>
              <button
                onClick={() => scrollToSection("case-studies")}
                className='w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold'
              >
                See Our Work
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
