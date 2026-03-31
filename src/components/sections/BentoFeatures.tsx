import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { GitBranch, HeartPulse, QrCode, ShieldCheck, CreditCard, CalendarDays, Smartphone, Wifi, Check, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Badge } from '../ui/Badge';

const devices = [
  { name: 'Ventas MX', status: 'online', msgs: '1,247' },
  { name: 'Soporte PE', status: 'online', msgs: '863' },
  { name: 'Tienda CO', status: 'offline', msgs: '—' },
];

const features = [
  {
    title: "Editor Visual sin Código",
    description: "Arrastra y suelta bloques para crear flujos conversacionales complejos en segundos.",
    icon: GitBranch,
    className: "md:col-span-8",
    color: "primary",
    visual: (
      <div className="mt-auto relative rounded-xl bg-zinc-950/80 p-6 border border-zinc-800 overflow-hidden">
        <div className="flex gap-4 flex-wrap">
          <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg text-[10px] font-mono">Trigger: New Message</div>
          <div className="p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-[10px] font-mono">Action: Send Menu</div>
          <div className="p-3 bg-tertiary/10 border border-tertiary/20 rounded-lg text-[10px] font-mono">Response: Catálogo</div>
        </div>
        <GitBranch className="absolute right-0 bottom-0 w-32 h-32 text-primary/5 -mr-4 -mb-4" />
      </div>
    )
  },
  {
    title: "Analíticas en Tiempo Real",
    description: "Métricas de engagement, retención de usuarios y popularidad de nodos.",
    icon: HeartPulse,
    className: "md:col-span-4",
    color: "tertiary",
    visual: (
      <div className="w-full flex items-end justify-center gap-1.5 h-20 mt-4">
        {[20, 35, 50, 75, 40, 60, 25].map((h, i) => (
          <motion.div 
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            className="w-4 bg-tertiary/40 rounded-t-sm"
          />
        ))}
      </div>
    )
  },
  {
    title: "Vinculación por QR",
    description: "Conecta tu WhatsApp en solo 5 segundos escaneando el código.",
    icon: QrCode,
    className: "md:col-span-4",
    color: "primary",
    visual: (
      <div className="w-full flex justify-center mt-6">
        <div className="p-4 bg-white/5 rounded-xl border border-zinc-800 group-hover:scale-105 transition-transform">
          <QrCode className="w-24 h-24 text-white opacity-40" />
        </div>
      </div>
    )
  },
  {
    title: "Pagos Automatizados",
    description: "El bot cobra, captura comprobantes y notifica al instante para aprobación.",
    icon: CreditCard,
    className: "md:col-span-4",
    color: "tertiary",
    visual: (
      <div className="w-full mt-auto flex justify-center">
        <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-2 flex flex-col sm:flex-row items-center gap-3 group-hover:border-zinc-700/50 transition-colors">
          <div className="flex items-center gap-2.5 px-3 py-2 border-b border-zinc-900 sm:border-b-0 sm:border-r sm:border-zinc-900 w-full sm:w-auto justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_rgba(251,191,36,0.4)]" />
            <span className="text-[9px] font-black text-amber-400 uppercase tracking-[0.15em] whitespace-nowrap">PAGO PENDIENTE</span>
          </div>
          <div className="flex items-center gap-2 p-1">
            <div className="flex items-center justify-center gap-1.5 px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20 text-[10px] font-black hover:bg-emerald-500/20 transition-colors cursor-pointer whitespace-nowrap">
              <Check className="w-3.5 h-3.5" />
              <span>APROBAR</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 px-4 py-2 bg-red-500/10 text-red-500 rounded-xl border border-red-500/20 text-[10px] font-black hover:bg-red-500/20 transition-colors cursor-pointer whitespace-nowrap">
              <X className="w-3.5 h-3.5" />
              <span>RECHAZAR</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Calendario de Entregas",
    description: "Agenda automática de pedidos con notificaciones de fechas límite.",
    icon: CalendarDays,
    className: "md:col-span-4",
    color: "primary",
    visual: (
      <div className="mt-4 grid grid-cols-5 gap-1.5">
        {[
          { day: 24, active: false }, { day: 25, active: true }, { day: 26, active: false },
          { day: 27, active: true }, { day: 28, active: true }
        ].map((d, i) => (
          <div key={i} className={`p-2 rounded-lg text-center text-xs font-bold ${
            d.active ? 'bg-primary/15 text-primary border border-primary/20' : 'bg-zinc-900 text-zinc-600'
          }`}>
            {d.day}
          </div>
        ))}
      </div>
    )
  },
  {
    title: "Anti-Spam Inteligente",
    description: "Protección contra bloqueos con filtros de comportamiento humano.",
    icon: ShieldCheck,
    className: "md:col-span-4",
    color: "emerald",
    visual: (
      <div className="mt-4 p-4 bg-zinc-900 border border-zinc-800 rounded-xl relative overflow-hidden">
        <div className="flex items-center gap-3 text-emerald-400 mb-3 font-semibold">
          <ShieldCheck className="w-5 h-5" />
          <span className="text-xs uppercase tracking-tighter">Protección Activa</span>
          <div className="ml-auto flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>
        </div>
        <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-full bg-emerald-500" 
          />
        </div>
      </div>
    )
  },
  {
    title: "Multi-Dispositivo WhatsApp",
    description: "Gestiona múltiples líneas de WhatsApp desde un solo panel. Ideal para equipos con varias tiendas o sucursales.",
    icon: Smartphone,
    className: "md:col-span-8",
    color: "primary",
    visual: (
      <div className="mt-auto w-full relative rounded-xl bg-zinc-950/80 p-5 border border-zinc-800 overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {devices.map((dev, i) => (
            <div key={i} className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-3.5 h-3.5 text-zinc-400" />
                  <span className="text-[11px] font-black text-white">{dev.name}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${dev.status === 'online' ? 'bg-emerald-500' : 'bg-zinc-600'}`} />
                  <span className={`text-[9px] font-bold ${dev.status === 'online' ? 'text-emerald-400' : 'text-zinc-600'}`}>
                    {dev.status === 'online' ? 'Conectado' : 'Offline'}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 mt-1">
                <Wifi className={`w-3 h-3 ${dev.status === 'online' ? 'text-emerald-500' : 'text-zinc-700'}`} />
                <span className="text-[10px] font-medium text-zinc-500">{dev.msgs} msgs</span>
              </div>
            </div>
          ))}
        </div>
        <Smartphone className="absolute right-0 bottom-0 w-28 h-28 text-primary/5 -mr-3 -mb-3" />
      </div>
    )
  }
];

export const BentoFeatures = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const currentIndex = useRef(0);
  const isPaused = useRef(false);

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    if (!isMobile) return;

    const container = scrollRef.current;
    if (!container) return;

    const cards = Array.from(container.children) as HTMLElement[];
    const totalCards = cards.length;
    if (totalCards === 0) return;

    // Sincronizar el índice actual al desplazar manualmente
    const syncIndex = () => {
      const scrollPos = container.scrollLeft;
      const containerWidth = container.offsetWidth;
      let closestIndex = 0;
      let minDistance = Infinity;
      
      cards.forEach((card, i) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const scrollCenter = scrollPos + containerWidth / 2;
        const distance = Math.abs(cardCenter - scrollCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = i;
        }
      });
      currentIndex.current = closestIndex;
    };

    let timer: number;

    const startAutoPlay = () => {
      timer = setTimeout(() => {
        if (!isPaused.current) {
          const next = (currentIndex.current + 1) % totalCards;
          const card = cards[next];
          if (card) {
            const scrollPosition = card.offsetLeft - (container.offsetWidth / 2) + (card.offsetWidth / 2);
            container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
            currentIndex.current = next;
          }
        }
        startAutoPlay(); // Programar el siguiente
      }, 4000);
    };

    const resetTimer = () => {
      clearTimeout(timer);
      startAutoPlay();
    };

    const handleTouchStart = () => {
      isPaused.current = true;
      clearTimeout(timer);
    };

    const handleTouchEnd = () => {
      isPaused.current = false;
      resetTimer();
    };

    container.addEventListener('scroll', syncIndex, { passive: true });
    container.addEventListener('scroll', resetTimer, { passive: true });
    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchend', handleTouchEnd);

    startAutoPlay();

    return () => {
      clearTimeout(timer);
      container.removeEventListener('scroll', syncIndex);
      container.removeEventListener('scroll', resetTimer);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <section id="features" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <Badge icon={false}>Características</Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-4">
            Todo para <span className="text-primary italic">vender</span> desde WhatsApp.
          </h2>
        </div>
        
        <div 
          ref={scrollRef} 
          className="flex overflow-x-auto hide-scrollbar md:grid md:grid-cols-12 gap-6 pb-8 -mx-6 px-6 snap-x snap-mandatory scroll-smooth"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={cn(
                "flex-shrink-0 w-[85vw] sm:w-[380px] md:w-full snap-center group relative overflow-hidden glass-card p-6 sm:p-8 border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300",
                feature.className
              )}
            >
              <div className="flex flex-col h-full relative z-10 text-center md:text-left">
                <div className={cn(
                  "mb-6 p-3 rounded-xl inline-block transition-transform group-hover:scale-110 mx-auto md:mx-0",
                  feature.color === 'primary' ? 'bg-primary/10 text-primary' : 
                  feature.color === 'tertiary' ? 'bg-tertiary/10 text-tertiary' : 
                  'bg-emerald-500/10 text-emerald-400'
                )}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight text-white">{feature.title}</h3>
                <p className="text-zinc-400 text-sm max-w-sm mb-8 leading-relaxed font-medium mx-auto md:mx-0">
                  {feature.description}
                </p>
                <div className="w-full flex-1 flex items-center justify-center">
                  {feature.visual}
                </div>
              </div>
              
              {/* Background Glow */}
              <div className="absolute -inset-24 bg-primary/5 blur-[100px] pointer-events-none group-hover:bg-primary/10 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
