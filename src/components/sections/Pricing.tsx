import { motion } from 'framer-motion';
import { Sparkles, Zap, Bot, CalendarDays, ShieldCheck, QrCode, Brain, HelpCircle, Users } from 'lucide-react';
import { Button } from '../ui/Button';

const plans = [
  {
    name: 'Arbora Core',
    role: 'Tu Asistente Operativo',
    price: 'S/ 59',
    priceNote: 'Prueba Gratis de 30 días',
    description: 'Filtra consultas básicas y organiza tus pedidos manualmente. El bot deriva las ventas a tus asesores humanos.',
    features: [
      { icon: Zap, label: 'Mensajes ILIMITADOS (Sin costo x msj)' },
      { icon: HelpCircle, label: 'Responde preguntas frecuentes (FAQ)' },
      { icon: Users, label: 'Asignación manual a asesores' },
      { icon: CalendarDays, label: 'Calendario de gestión manual' },
      { icon: QrCode, label: 'Vinculación por QR' },
      { icon: ShieldCheck, label: 'Anti-Spam Inteligente' },
    ],
    cta: 'Probar Gratis 30 Días',
    ctaVariant: 'glass' as const,
    highlighted: false
  },
  {
    name: 'Arbora AI',
    role: 'Tu Vendedor Estrella',
    badge: 'Más Popular',
    price: 'S/ 249',
    priceNote: 'por mes',
    description: 'Vendedor autónomo con IA que entiende contexto, maneja objeciones y cierra ventas 24/7 sin límites.',
    features: [
      { icon: Zap, label: 'Mensajes ILIMITADOS (Sin costo x msj)' },
      { icon: Brain, label: 'IA que cierra ventas autónomamente' },
      { icon: Zap, label: 'Validación de pagos SIN intervención' },
      { icon: CalendarDays, label: 'Agenda de entregas 100% automática' },
      { icon: Bot, label: 'Entrenamiento con tu marca' },
      { icon: Sparkles, label: 'Cierre de ventas proactivo' },
    ],
    cta: 'Activar IA ahora',
    ctaVariant: 'primary' as const,
    highlighted: true
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black uppercase tracking-widest text-primary mb-6">
            Planes y Precios
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
            De un bot que responde, <br /> a uno que <span className="text-primary italic">vende</span>.
          </h2>
          <p className="text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed font-medium">
            Elige el nivel de automatización que tu negocio necesita hoy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative group rounded-[2.5rem] p-10 border transition-all duration-500 ${
                plan.highlighted 
                  ? 'bg-zinc-900/60 border-primary/30 hover:border-primary/50 shadow-2xl shadow-primary/5' 
                  : 'bg-zinc-950/50 border-zinc-800/50 hover:border-zinc-700/60'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-widest shadow-xl shadow-primary/30 z-20">
                  {plan.badge}
                </div>
              )}
              
              <div className="relative z-10">
                <p className={`text-[10px] font-black uppercase tracking-[0.2em] mb-4 ${plan.highlighted ? 'text-primary' : 'text-zinc-500'}`}>
                  {plan.role}
                </p>
                
                <h3 className="text-3xl font-black tracking-tight text-white mb-6">
                  {plan.name}
                </h3>

                <div className="mb-8">
                  <span className="text-6xl font-black text-white">{plan.price}</span>
                  <span className="text-sm text-zinc-500 font-medium ml-2">{plan.priceNote}</span>
                </div>

                <p className="text-sm text-zinc-400 font-medium mb-10 leading-relaxed min-h-[48px]">
                  {plan.description}
                </p>

                <ul className="space-y-4 mb-12">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-4">
                      <div className={`p-1.5 rounded-lg flex-shrink-0 ${plan.highlighted ? 'bg-primary/10 text-primary' : 'bg-zinc-800 text-zinc-500'}`}>
                        <feature.icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm text-zinc-300 font-medium">{feature.label}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.ctaVariant} 
                  size="lg" 
                  className={`w-full py-7 text-base font-black ${plan.highlighted ? 'shadow-xl shadow-primary/20 group-hover:scale-[1.02]' : ''}`}
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
