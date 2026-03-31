import { motion } from 'framer-motion';
import { GitBranch, HeartPulse, QrCode, ShieldCheck, CreditCard, CalendarDays, Smartphone, Wifi } from 'lucide-react';
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
      <div className="mx-auto p-4 bg-white/5 rounded-xl border border-zinc-800 mt-4 group-hover:scale-105 transition-transform">
        <QrCode className="w-24 h-24 text-white opacity-40" />
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
      <div className="mt-4 p-4 bg-zinc-950/80 border border-zinc-800 rounded-xl">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">Pago pendiente</span>
        </div>
        <div className="flex gap-2 mt-3">
          <div className="flex-1 text-center text-[10px] font-bold py-1.5 bg-emerald-500/15 text-emerald-400 rounded-lg border border-emerald-500/20">✓ Aprobar</div>
          <div className="flex-1 text-center text-[10px] font-bold py-1.5 bg-red-500/10 text-red-400 rounded-lg border border-red-500/20">✕ Rechazar</div>
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
      <div className="mt-auto relative rounded-xl bg-zinc-950/80 p-5 border border-zinc-800 overflow-hidden">
        <div className="flex gap-3">
          {devices.map((dev, i) => (
            <div key={i} className="flex-1 p-3 rounded-lg bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-3.5 h-3.5 text-zinc-400" />
                  <span className="text-[11px] font-bold text-white">{dev.name}</span>
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
                <span className="text-[10px] text-zinc-500">{dev.msgs} msgs</span>
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
  return (
    <section id="features" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <Badge icon={false}>Características</Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-4">
            Todo para <span className="text-primary italic">vender</span> desde WhatsApp.
          </h2>
        </div>
        
        <div className="flex overflow-x-auto hide-scrollbar md:grid md:grid-cols-12 gap-6 pb-8 -mx-6 px-6 snap-x snap-mandatory">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={cn(
                "flex-shrink-0 w-[280px] sm:w-[320px] md:w-full snap-center group relative overflow-hidden glass-card p-8 border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300",
                feature.className
              )}
            >
              <div className="flex flex-col items-start h-full relative z-10">
                <div className={cn(
                  "mb-6 p-3 rounded-xl inline-block transition-transform group-hover:scale-110",
                  feature.color === 'primary' ? 'bg-primary/10 text-primary' : 
                  feature.color === 'tertiary' ? 'bg-tertiary/10 text-tertiary' : 
                  'bg-emerald-500/10 text-emerald-400'
                )}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight text-white">{feature.title}</h3>
                <p className="text-zinc-400 text-sm max-w-sm mb-8 leading-relaxed font-medium">
                  {feature.description}
                </p>
                {feature.visual}
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
