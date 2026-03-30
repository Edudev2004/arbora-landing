import { motion } from 'framer-motion';
import { BarChart3, Users, Award, Activity, Wifi } from 'lucide-react';

const BASE_URL = import.meta.env.BASE_URL;

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

                <div className="w-full aspect-[16/9] bg-zinc-950/20 flex items-center justify-center overflow-hidden">
                  <img 
                    src={`${BASE_URL}Arbora-Dashboard.png`} 
                    alt="Arbora Dashboard Analytics" 
                    className="w-full h-full object-cover rounded-b-xl"
                  />
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
