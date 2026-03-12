import { motion } from 'motion/react';
import { Building, Ruler, Home, PenTool, DollarSign, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Building,
    title: 'House Construction',
    description: 'Complete construction solutions from foundation to finish with quality craftsmanship and attention to detail.',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    icon: Ruler,
    title: '2D & 3D Plans',
    description: 'Detailed architectural plans and realistic 3D visualizations to bring your vision to life before construction begins.',
    color: 'from-purple-500 to-pink-600'
  },
  {
    icon: Home,
    title: 'Structural Plans',
    description: 'Engineering excellence with comprehensive structural designs ensuring safety, durability, and code compliance.',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    icon: PenTool,
    title: 'Interior Design',
    description: 'Transform spaces with creative interior solutions that blend aesthetics with functionality and comfort.',
    color: 'from-pink-500 to-purple-600'
  },
  {
    icon: DollarSign,
    title: 'Cost Estimation',
    description: 'Accurate project cost analysis and budgeting to help you plan financially and avoid unexpected expenses.',
    color: 'from-cyan-500 to-purple-600'
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 bg-black overflow-hidden">
      {/* Futuristic Grid Background */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `
          linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }} />
      
      {/* Animated glow orbs */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-4"
          >
            <Sparkles className="w-12 h-12 text-cyan-400" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Premium Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Cutting-edge solutions powered by innovation and expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                {/* Glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500`} />
                
                {/* Card */}
                <div className="relative h-full bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 overflow-hidden">
                  {/* Animated corner accents */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-2xl" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-400/50 rounded-br-2xl" />
                  
                  {/* Icon */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }}
                    className="relative mb-6"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity`} />
                    <div className={`relative bg-gradient-to-r ${service.color} p-4 rounded-2xl inline-block border border-white/20`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover effect line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}