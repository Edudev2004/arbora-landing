import { useState } from 'react';
import { Button } from '../ui/Button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DASHBOARD_URL = 'http://localhost:5173'; // TODO: cambiar en producción
const BASE_URL = import.meta.env.BASE_URL;

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Características', href: '#features' },
    { label: 'Ventas', href: '#ventas' },
    { label: 'Precios', href: '#pricing' },
  ];

  return (
    <header className="bg-zinc-950/80 backdrop-blur-2xl sticky top-0 z-50 border-b border-zinc-800/50">
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-10">
          <a className="flex items-center gap-2" href="#">
            <img src={`${BASE_URL}ARBORA-WHITE.png`} alt="Arbora" className="h-6" />
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors duration-200" 
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="hidden md:flex items-center gap-5">
            <a href={DASHBOARD_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors duration-200 px-4 py-2">
              Login
            </a>
            <a href={DASHBOARD_URL} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="font-bold">
                Empezar gratis
              </Button>
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-zinc-800/50 bg-zinc-950 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.label}
                  className="text-lg font-bold text-zinc-400 hover:text-primary transition-colors" 
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const targetId = link.href.replace('#', '');
                    const elem = document.getElementById(targetId);
                    if (elem) {
                      // Calculate position BEFORE closing menu (layout is stable)
                      const offset = 80;
                      const bodyRect = document.body.getBoundingClientRect().top;
                      const elementRect = elem.getBoundingClientRect().top;
                      const elementPosition = elementRect - bodyRect;
                      const offsetPosition = elementPosition - offset;
                      
                      // Close menu first
                      setIsOpen(false);
                      
                      // Wait for menu collapse animation to finish, then scroll
                      setTimeout(() => {
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        });
                      }, 350);
                    } else {
                      console.warn(`[Navbar] Section not found: #${targetId}`);
                      setIsOpen(false);
                    }
                  }}
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-zinc-800" />
              <div className="flex flex-col gap-4">
                <a 
                  href={DASHBOARD_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-lg font-bold text-white text-center py-3 rounded-xl bg-zinc-900 border border-zinc-800"
                >
                  Regístrate
                </a>
                <a 
                  href={DASHBOARD_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full py-4 text-lg">
                    Empezar gratis
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
