import { motion, useInView } from 'motion/react';
import { Box, Layers, Home, Calculator, Palette } from 'lucide-react';
import { useRef } from 'react';

const services = [
  {
    icon: Layers,
    title: '2D & 3D Plans',
    description: 'Detailed architectural plans with photorealistic 3D visualizations to bring your vision to life',
    color: 'from-blue-500 to-cyan-400',
    image: 'https://images.unsplash.com/photo-1742415106160-594d07f6cc23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwYmx1ZXByaW50JTIwcGxhbnN8ZW58MXx8fHwxNzczMzAxNjc0fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    icon: Box,
    title: 'Structural Plans',
    description: 'Engineering-grade structural designs ensuring safety, stability, and compliance with all regulations',
    color: 'from-purple-500 to-pink-400',
    image: 'https://images.unsplash.com/photo-1764717360313-587a1805fe7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJ1Y3R1cmFsJTIwZW5naW5lZXJpbmclMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzczMzAxNjc0fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    icon: Palette,
    title: 'Interior Design',
    description: 'Complete interior solutions from concept to execution with modern, functional, and beautiful spaces',
    color: 'from-amber-500 to-orange-400',
    image: 'https://images.unsplash.com/photo-1649663724528-3bd2ce98b6e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzczMjUyMzY1fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    icon: Home,
    title: 'House Construction',
    description: 'Full-service construction from foundation to finishing, delivering quality homes on time and budget',
    color: 'from-green-500 to-emerald-400',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MzIyMjQ3NXww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    icon: Calculator,
    title: 'Cost Estimation',
    description: 'Accurate and transparent cost estimates helping you plan and budget your construction project effectively',
    color: 'from-red-500 to-rose-400',
    image: 'https://images.unsplash.com/photo-1762049297262-4eef6d6d4d7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb24lMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzMzMDE2NzN8MA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Floating background shapes */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-30 blur-3xl"
      />
      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 1.3, 1]
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-30 blur-3xl"
      />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive construction solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 100 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -20,
                  rotateY: 5,
                  rotateX: 5,
                  scale: 1.02
                }}
                className="group relative"
                style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
              >
                <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-300">
                  {/* Image */}
                  <div className="h-48 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Floating icon */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }}
                    className={`absolute top-36 left-6 bg-gradient-to-br ${service.color} p-4 rounded-xl shadow-lg z-10`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="p-6 pt-12">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {service.description}
                    </p>

                    <motion.button
                      whileHover={{ x: 5 }}
                      className="mt-4 text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
                    >
                      Learn More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
