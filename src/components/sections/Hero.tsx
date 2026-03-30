import { motion } from 'framer-motion';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { PlayCircle, ArrowDown } from 'lucide-react';

const DASHBOARD_URL = 'http://localhost:5173'; // TODO: cambiar en producción

export const Hero = () => {
  return (
    <section className="relative pt-24 pb-32 px-6 overflow-hidden mesh-gradient">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        <Badge>La nueva era de la automatización en WhatsApp</Badge>
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[1.05] hero-gradient-text">
          De responder dudas, <br className="hidden md:block" /> a cerrar ventas.
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
          La primera plataforma que combina flujos operativos por nodos con inteligencia artificial 
          diseñada para convencer a tus clientes y gestionar tus entregas.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href={DASHBOARD_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="w-full sm:w-auto">
              Empezar gratis
            </Button>
          </a>
          <a href="#ventas">
            <Button variant="glass" size="lg" className="w-full sm:w-auto">
              <PlayCircle className="w-5 h-5 mr-1" />
              Ver cómo funciona
            </Button>
          </a>
        </div>

        {/* Mockup with floating elements */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-24 relative"
        >
          <div className="absolute -inset-10 bg-gradient-to-r from-primary/10 to-tertiary/10 blur-[120px] opacity-40"></div>
          
          <div className="relative rounded-2xl border border-zinc-700/50 p-3 bg-zinc-900 shadow-2xl overflow-hidden group">
            {/* Placeholder for dashboard screenshot - user will provide */}
            <div className="w-full aspect-[16/9] bg-zinc-950 rounded-xl flex items-center justify-center border border-zinc-800/50 relative overflow-hidden">
              <img 
                src="/Arbora-HerramientaGrafica.png" 
                alt="Arbora Dashboard" 
                className="w-full h-full object-cover rounded-xl transition-all duration-1000"
              />
            </div>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none"></div>
            
            {/* Floating Stats */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute bottom-12 right-12 p-6 bg-zinc-900/40 backdrop-blur-2xl border border-primary/30 rounded-2xl hidden md:block"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-2 h-8 bg-tertiary rounded-full"></div>
                <div className="w-2 h-12 bg-primary rounded-full"></div>
                <div className="w-2 h-6 bg-tertiary rounded-full"></div>
                <div className="w-2 h-10 bg-primary rounded-full"></div>
              </div>
              <p className="text-[10px] font-bold text-white uppercase tracking-widest">+240% Engagement</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-12"
        >
          <ArrowDown className="w-5 h-5 text-zinc-600 mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
};
