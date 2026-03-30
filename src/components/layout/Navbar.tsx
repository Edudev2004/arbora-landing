import { Button } from '../ui/Button';

const DASHBOARD_URL = 'http://localhost:5173'; // TODO: cambiar en producción
const BASE_URL = import.meta.env.BASE_URL;

export const Navbar = () => {
  return (
    <header className="bg-zinc-950/80 backdrop-blur-2xl sticky top-0 z-50 border-b border-zinc-800/50">
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-10">
          <a className="flex items-center gap-2" href="#">
            <img src={`${BASE_URL}ARBORA-WHITE.png`} alt="Arbora" className="h-6" />
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors duration-200" href="#features">Características</a>
            <a className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors duration-200" href="#ventas">Ventas</a>
            <a className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors duration-200" href="#pricing">Precios</a>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <a href={DASHBOARD_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors duration-200 px-4 py-2">
            Login
          </a>
          <a href={DASHBOARD_URL} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="hidden sm:flex font-bold">
              Empezar gratis
            </Button>
          </a>
        </div>
      </nav>
    </header>
  );
};
