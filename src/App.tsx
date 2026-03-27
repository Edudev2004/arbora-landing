import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { BentoFeatures } from './components/sections/BentoFeatures';
import { SalesAutomation } from './components/sections/SalesAutomation';
import { CalendarPreview } from './components/sections/CalendarPreview';
import { DashboardShowcase } from './components/sections/DashboardShowcase';
import { Pricing } from './components/sections/Pricing';
import { Button } from './components/ui/Button';
import { motion } from 'framer-motion';
import { MessageCircle, Globe, ShieldCheck } from 'lucide-react';

const DASHBOARD_URL = 'http://localhost:5173'; // TODO: cambiar en producción

function App() {
  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary/30 scroll-smooth selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Social Proof */}
        <section className="py-12 border-y border-zinc-800/30 bg-zinc-950/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-10">
              Confiado por emprendedores y equipos innovadores
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700 brightness-200">
              {/* Placeholder logos — replace with client logos when available */}
              <span className="text-lg font-black text-white cursor-default tracking-wider">COMERCIO+</span>
              <span className="text-lg font-black text-white cursor-default tracking-wider">ENVÍOS YA</span>
              <span className="text-lg font-black text-white cursor-default tracking-wider">TIENDA MX</span>
              <span className="text-lg font-black text-white cursor-default tracking-wider">DELIVERY PRO</span>
              <span className="text-lg font-black text-white cursor-default tracking-wider">SHOP NOW</span>
            </div>
          </div>
        </section>

        <BentoFeatures />

        <SalesAutomation />

        <CalendarPreview />

        <DashboardShowcase />

        {/* How it Works */}
        <section className="py-32 px-6 bg-zinc-950/50 border-y border-zinc-800/30">
          <div className="max-w-7xl mx-auto text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight">
              De cero a ventas <br /> en 10 minutos.
            </h2>
            <p className="text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed">
              Un proceso tan simple que tu primer bot estará vendiendo hoy mismo.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            {[
              { step: 1, title: 'Vincula tu WhatsApp', desc: 'Escanea el QR desde el dashboard y conéctate al instante.' },
              { step: 2, title: 'Diseña tu flujo', desc: 'Arrastra nodos, configura pagos y define respuestas automáticas.' },
              { step: 3, title: 'Vende y mide', desc: 'Tus clientes compran por WhatsApp. Tú ves todo en tiempo real.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white text-2xl font-black mb-8 shadow-xl shadow-primary/20 rotate-3 group-hover:rotate-0 transition-transform duration-300">
                  {item.step}
                </div>
                <h4 className="text-xl font-black mb-4 tracking-tight">{item.title}</h4>
                <p className="text-zinc-500 font-medium text-sm leading-relaxed max-w-[260px]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <Pricing />

        {/* CTA Section */}
        <section className="py-40 px-6">
          <div className="max-w-5xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-tertiary to-primary rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 animate-pulse"></div>
            <div className="relative bg-zinc-950 rounded-[2.5rem] p-16 md:p-24 text-center border border-zinc-800/50 overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
              
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 leading-[1.05] hero-gradient-text px-4">
                Tu competencia ya <br /> vende por WhatsApp.
              </h2>
              
              <p className="text-lg md:text-xl text-zinc-500 mb-14 max-w-2xl mx-auto leading-relaxed font-semibold">
                Empieza hoy, gratis. Sin tarjeta, sin compromisos. <br /> Configura tu primer bot en menos de 10 minutos.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a href={DASHBOARD_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="px-12 py-6 text-xl shadow-2xl shadow-primary/40">
                    Crear mi Bot ahora
                  </Button>
                </a>
                <a href="mailto:contacto@arbora.app">
                  <Button variant="glass" size="lg" className="px-12 py-6 text-xl">
                    Hablar con nosotros
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900/50 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
            <img src="/ARBORA-WHITE.png" alt="Arbora" className="h-6 mb-4" />
            <p className="text-zinc-500 font-medium text-xs mt-2 mb-8 leading-relaxed">
              Automatización inteligente de ventas por WhatsApp. Flujos, pagos, entregas y analíticas en un solo lugar.
            </p>
            <div className="flex gap-4">
               <MessageCircle className="p-2 w-10 h-10 border border-zinc-800 rounded-lg text-zinc-500 hover:border-primary hover:text-primary transition-all cursor-pointer" />
               <Globe className="p-2 w-10 h-10 border border-zinc-800 rounded-lg text-zinc-500 hover:border-primary hover:text-primary transition-all cursor-pointer" />
               <ShieldCheck className="p-2 w-10 h-10 border border-zinc-800 rounded-lg text-zinc-500 hover:border-primary hover:text-primary transition-all cursor-pointer" />
            </div>
          </div>
          {[
            { title: 'Producto', links: [
              { label: 'Características', href: '#features' },
              { label: 'Ventas automatizadas', href: '#ventas' },
              { label: 'Precios', href: '#pricing' },
              { label: 'Dashboard', href: DASHBOARD_URL }
            ]},
            { title: 'Recursos', links: [
              { label: 'Documentación', href: '#' },
              { label: 'Guía de inicio', href: '#' },
              { label: 'Comunidad', href: '#' },
              { label: 'Estado del servicio', href: '#' }
            ]},
            { title: 'Empresa', links: [
              { label: 'Sobre nosotros', href: '#' },
              { label: 'Contacto', href: 'mailto:contacto@arbora.app' },
              { label: 'Blog', href: '#' },
              { label: 'Empleo', href: '#' }
            ]}
          ].map((column, i) => (
            <div key={i} className="flex flex-col gap-6">
              <h4 className="text-sm font-black text-white tracking-widest uppercase">{column.title}</h4>
              <ul className="flex flex-col gap-4">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <a href={link.href} className="text-zinc-500 hover:text-primary transition-colors font-medium text-sm">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-6 border-t border-zinc-900/50 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.2em] font-black text-zinc-600">
            © 2024 Arbora. Todos los derechos reservados.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-black text-zinc-600">
            <a href="#" className="hover:text-primary transition-colors">Privacidad</a>
            <a href="#" className="hover:text-primary transition-colors">Términos</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
