import { motion } from 'framer-motion';
import { CalendarDays, Bell, Package, Clock } from 'lucide-react';

// Simulated calendar data
const calendarDays = [
  { day: 24, events: [] },
  { day: 25, events: [{ type: 'delivery', label: 'Pedido #041' }] },
  { day: 26, events: [] },
  { day: 27, events: [{ type: 'delivery', label: 'Pedido #042' }, { type: 'delivery', label: 'Pedido #043' }] },
  { day: 28, events: [{ type: 'entry', label: 'Nuevo pedido' }] },
  { day: 29, events: [] },
  { day: 30, events: [{ type: 'delivery', label: 'Pedido #044' }] },
];

export const CalendarPreview = () => {
  return (
    <section className="py-32 px-6 bg-zinc-950/50 border-y border-zinc-800/30 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-tertiary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-tertiary mb-6">
              <CalendarDays className="w-3.5 h-3.5" />
              Próximamente
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-tight">
              Tu negocio, <br />organizado al <span className="text-tertiary italic">día</span>.
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed font-medium mb-10 max-w-lg">
              Cada venta que entra se registra automáticamente en tu calendario. 
              Sabrás exactamente qué preparar y cuándo entregarlo.
            </p>

            <div className="space-y-6">
              {[
                { icon: Package, label: 'Registro automático', desc: 'Cada pedido confirmado se agenda solo.' },
                { icon: Clock, label: 'Fechas de entrega', desc: 'Visualiza cuándo entra y cuándo sale cada pedido.' },
                { icon: Bell, label: 'Alertas proactivas', desc: '"Mañana tienes 2 entregas pendientes."' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="p-2.5 rounded-xl bg-tertiary/10 border border-tertiary/20 text-tertiary group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white mb-1">{item.label}</h4>
                    <p className="text-xs text-zinc-500 font-medium">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Calendar Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-gradient-to-br from-tertiary/10 to-primary/5 blur-[80px] pointer-events-none" />
            
            <div className="relative bg-zinc-900/60 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-5 sm:p-8 shadow-2xl">
              {/* Calendar Header */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-black tracking-tight text-white">Marzo 2026</h3>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-extrabold">Calendario de entregas</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 w-full sm:w-auto justify-center">
                  <Bell className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                  <span className="text-[10px] font-extrabold text-amber-400 uppercase tracking-tight">2 entregas mañana</span>
                </div>
              </div>

              {/* Day Headers */}
              <div className="grid grid-cols-7 gap-1 sm:gap-3 mb-4">
                {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map(d => (
                  <div key={d} className="text-center text-[10px] font-bold text-zinc-600 uppercase">{d}</div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 sm:gap-3">
                {calendarDays.map((day, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className={`relative py-3 sm:py-5 rounded-xl sm:rounded-2xl text-center transition-all cursor-default group ${
                      day.events.length > 0 
                        ? 'bg-zinc-800/80 border border-zinc-700/50 shadow-lg shadow-black/20' 
                        : 'bg-zinc-900/40 border border-transparent'
                    }`}
                  >
                    <span className={`text-xs sm:text-base font-black ${day.events.length > 0 ? 'text-white' : 'text-zinc-700/50'}`}>
                      {day.day}
                    </span>
                    {day.events.length > 0 && (
                      <div className="mt-2 flex flex-col items-center gap-1">
                        <div className="flex -space-x-1">
                          {day.events.slice(0, 2).map((_, idx) => (
                            <div key={idx} className="w-1.5 h-1.5 rounded-full bg-tertiary shadow-[0_0_8px_rgba(52,211,153,0.4)] border border-zinc-900" />
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Stats Row */}
              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  { label: 'Pendientes', value: '4', color: 'text-amber-400' },
                  { label: 'Esta semana', value: '7', color: 'text-tertiary' },
                  { label: 'Completados', value: '23', color: 'text-zinc-400' }
                ].map((stat, i) => (
                  <div key={i} className="bg-zinc-950/50 rounded-2xl p-3 text-center border border-zinc-800/20">
                    <p className={`text-xl sm:text-2xl font-black ${stat.color} leading-none mb-1`}>{stat.value}</p>
                    <p className="text-[8px] sm:text-[10px] font-black text-zinc-600 uppercase tracking-tighter">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
