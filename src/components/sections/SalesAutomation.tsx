import { motion } from 'framer-motion';
import { CreditCard, Camera, BellRing, CheckCircle, Brain, Target, ArrowRight, Sparkles } from 'lucide-react';

const coreSteps = [
  { icon: CreditCard, title: "Método de pago", color: "#a78bfa" },
  { icon: Camera, title: "Captura Screenshot", color: "#f59e0b" },
  { icon: BellRing, title: "Alerta al Dueño", color: "#ef4444" },
  { icon: CheckCircle, title: "Agenda Entrega", color: "#22c55e" },
];

const aiSteps = [
  { icon: Target, title: "Entiende Objeciones", color: "#6366f1" },
  { icon: Brain, title: "Negocia y Convence", color: "#a855f7" },
  { icon: Sparkles, title: "Cierra la Venta", color: "#f43f5e" },
  { icon: CreditCard, title: "Venta Confirmada", color: "#22c55e" },
];

export const SalesAutomation = () => {
  return (
    <section id="ventas" className="py-32 px-6 relative overflow-hidden bg-zinc-950/20">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-tight">
              Diseñado para <span className="text-primary italic">cerrar</span>.
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed font-medium">
              Tú decides el nivel de inteligencia de tu bot. Desde un asistente de nodos 
              hasta un cerrador experto con IA.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Core Row */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2.5rem] bg-zinc-900/30 border border-zinc-800/50"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="p-2 bg-zinc-800 rounded-lg text-zinc-400">
                <Target className="w-5 h-5" />
              </span>
              <div>
                <h4 className="text-lg font-black text-white">Arbora Core</h4>
                <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest">Flujos por Nodos</p>
              </div>
            </div>

            <p className="text-sm text-zinc-400 mb-10 leading-relaxed font-medium">
              Filtra dudas básicas y deriva el cierre a tus asesores humanos. 
              Mantén el control total con registro manual de pedidos.
            </p>

            <div className="space-y-6">
              {[
                { icon: CreditCard, title: "Envía Info Básica", color: "#a78bfa" },
                { icon: Target, title: "Asigna a Vendedor", color: "#f59e0b" },
                { icon: BellRing, title: "Registro Manual", color: "#ef4444" },
                { icon: CheckCircle, title: "Entrega Manual", color: "#22c55e" },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-zinc-800"
                    style={{ backgroundColor: `${step.color}10` }}
                  >
                    <step.icon className="w-5 h-5" style={{ color: step.color }} />
                  </div>
                  <div className="flex-1 h-px bg-zinc-800" />
                  <span className="text-xs font-black text-zinc-400 uppercase tracking-wider">{step.title}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* AI Row */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2.5rem] bg-primary/5 border border-primary/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 blur-xl pointer-events-none">
              <Brain className="w-32 h-32 text-primary" />
            </div>

            <div className="flex items-center gap-3 mb-8">
              <span className="p-2 bg-primary/10 rounded-lg text-primary">
                <Brain className="w-5 h-5" />
              </span>
              <div>
                <h4 className="text-lg font-black text-white">Arbora AI</h4>
                <p className="text-xs text-primary font-bold uppercase tracking-widest">Vendedor Autónomo</p>
              </div>
            </div>

            <p className="text-sm text-zinc-400 mb-10 leading-relaxed font-medium">
              Vendedor 100% autónomo que negocia, resuelve dudas complejas y 
              cierra la venta sin que tú hagas nada.
            </p>

            <div className="space-y-6">
              {aiSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-primary/20 shadow-lg shadow-primary/5"
                    style={{ backgroundColor: `${step.color}15` }}
                  >
                    <step.icon className="w-5 h-5" style={{ color: step.color }} />
                  </div>
                  <div className="flex-1 h-px bg-primary/20" />
                  <span className="text-xs font-black text-white uppercase tracking-wider">{step.title}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10 p-4 rounded-xl bg-zinc-950/50 border border-primary/20 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-3 h-3 text-primary" />
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest italic">Ventas Proactivas activadas</span>
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                "Detectado interés por stock limitado. Enviando mensaje de urgencia..."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
