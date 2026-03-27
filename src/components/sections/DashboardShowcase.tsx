import { motion } from 'framer-motion';
import { BarChart3, Users, Award, Activity, Wifi } from 'lucide-react';

const features = [
  { icon: BarChart3, label: 'Analíticas avanzadas', desc: 'Métricas de mensajes, retención, y popularidad de nodos en gráficas interactivas.' },
  { icon: Users, label: 'Gestión de usuarios', desc: 'Ve quiénes interactúan más, segmenta por recurrencia y actividad diaria.' },
  { icon: Award, label: 'Efectividad del bot', desc: 'Mide resoluciones automáticas vs fallbacks. Optimiza tu árbol con datos reales.' },
  { icon: Activity, label: 'Pulso de actividad', desc: 'Heatmap por hora del día. Descubre tus picos de interacción.' },
];

export const DashboardShowcase = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -inset-6 bg-gradient-to-br from-primary/10 to-tertiary/5 blur-[80px] pointer-events-none" />

            <div className="relative bg-zinc-900/60 backdrop-blur-xl border border-zinc-800/50 rounded-2xl overflow-hidden shadow-2xl">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800/50 bg-zinc-950/50">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 bg-zinc-900 rounded-md text-[10px] text-zinc-500 font-mono">
                    localhost:5173/dashboard
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <Wifi className="w-3 h-3 text-emerald-500" />
                  <span className="text-[9px] text-emerald-400 font-bold">En vivo</span>
                </div>
              </div>

              {/* Dashboard content mockup */}
              <div className="p-6 space-y-4">
                {/* Stats row */}
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { label: 'Mensajes Hoy', value: '847', trend: '+12%', color: '#6366f1' },
                    { label: 'Clientes', value: '156', trend: '+8%', color: '#a855f7' },
                    { label: 'Resoluciones', value: '723', trend: '+15%', color: '#22c55e' },
                    { label: 'Fallbacks', value: '24', trend: '-3%', color: '#ef4444' }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="bg-zinc-950/50 rounded-xl p-3 border border-zinc-800/30"
                    >
                      <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider">{stat.label}</p>
                      <p className="text-lg font-black text-white mt-1">{stat.value}</p>
                      <p className="text-[10px] font-bold mt-0.5" style={{ color: stat.color }}>{stat.trend}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Chart placeholder */}
                <div className="bg-zinc-950/50 rounded-xl p-4 border border-zinc-800/30">
                  <p className="text-[10px] text-zinc-500 font-bold uppercase mb-3">Pulso de Actividad</p>
                  <div className="flex items-end gap-1 h-16">
                    {[30, 45, 25, 60, 80, 55, 70, 40, 90, 65, 50, 35, 75, 85, 60, 45, 30, 55, 70, 80, 50, 35, 25, 40].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.03, duration: 0.6 }}
                        className="flex-1 bg-primary/30 rounded-t-sm hover:bg-primary/60 transition-colors"
                      />
                    ))}
                  </div>
                </div>

                {/* Mini donut + top nodes */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-zinc-950/50 rounded-xl p-4 border border-zinc-800/30">
                    <p className="text-[10px] text-zinc-500 font-bold uppercase mb-2">Efectividad</p>
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12">
                        <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                          <circle cx="18" cy="18" r="14" fill="none" stroke="#27272a" strokeWidth="4" />
                          <circle cx="18" cy="18" r="14" fill="none" stroke="#22c55e" strokeWidth="4" strokeDasharray="75 25" />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-white">85%</span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-[9px]">
                          <div className="w-2 h-2 rounded-full bg-emerald-500" />
                          <span className="text-zinc-400">Resueltos</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[9px]">
                          <div className="w-2 h-2 rounded-full bg-red-500" />
                          <span className="text-zinc-400">Fallback</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-zinc-950/50 rounded-xl p-4 border border-zinc-800/30">
                    <p className="text-[10px] text-zinc-500 font-bold uppercase mb-2">Top Nodos</p>
                    <div className="space-y-1.5">
                      {['Catálogo', 'Pedidos', 'Horarios'].map((n, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                            <div className="h-full bg-tertiary/60 rounded-full" style={{ width: `${90 - i * 25}%` }} />
                          </div>
                          <span className="text-[9px] text-zinc-500 font-medium w-14 text-right">{n}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-primary mb-6">
              <BarChart3 className="w-3.5 h-3.5" />
              Panel de control
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-tight">
              Datos que <span className="text-primary italic">impulsan</span> <br /> decisiones.
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed font-medium mb-10 max-w-lg">
              Dashboard profesional con métricas en tiempo real. Entiende a tus clientes, 
              optimiza tus flujos y escala con confianza.
            </p>

            <div className="space-y-6">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white mb-1">{item.label}</h4>
                    <p className="text-xs text-zinc-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
