import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const projects = [
  {
    title: 'Modern Villa',
    category: 'Residential',
    description: 'Luxury 4-bedroom villa with contemporary design',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MzIyMjQ3NXww&ixlib=rb-4.1.0&q=80&w=1080',
    stats: ['4500 sq ft', '4 Bedrooms', '6 Months']
  },
  {
    title: 'Urban Complex',
    category: 'Commercial',
    description: 'Multi-story commercial building in city center',
    image: 'https://images.unsplash.com/photo-1762049297262-4eef6d6d4d7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb24lMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzMzMDE2NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    stats: ['25000 sq ft', '8 Floors', '14 Months']
  },
  {
    title: 'Luxury Interior',
    category: 'Interior Design',
    description: 'Complete interior transformation with modern aesthetics',
    image: 'https://images.unsplash.com/photo-1649663724528-3bd2ce98b6e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzczMjUyMzY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    stats: ['3200 sq ft', 'Full Home', '3 Months']
  },
  {
    title: 'Structural Excellence',
    category: 'Engineering',
    description: 'Advanced structural design for industrial facility',
    image: 'https://images.unsplash.com/photo-1764717360313-587a1805fe7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJ1Y3R1cmFsJTIwZW5naW5lZXJpbmclMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzczMzAxNjc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    stats: ['40000 sq ft', 'Heavy Load', '18 Months']
  }
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="projects" className="relative py-24 bg-black overflow-hidden">
      {/* Futuristic wireframe background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }} />
      
      {/* Animated glow orbs */}
      <motion.div
        className="absolute top-1/4 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              background: i % 2 === 0 ? 'rgba(6, 182, 212, 0.5)' : 'rgba(236, 72, 153, 0.5)',
              boxShadow: i % 2 === 0 
                ? '0 0 15px rgba(6, 182, 212, 0.6)' 
                : '0 0 15px rgba(236, 72, 153, 0.6)',
            }}
            animate={{
              y: [0, -150, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Transforming visions into reality with precision and excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ 
                y: -15,
                scale: 1.02,
              }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition duration-500" />
              
              <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
                {/* Image with overlay */}
                <div className="relative h-80 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  
                  {/* Floating category badge */}
                  <motion.div
                    animate={{
                      y: [0, -8, 0]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                    className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-purple-500 px-4 py-2 rounded-full text-sm font-semibold text-white border border-cyan-400/30 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                  >
                    {project.category}
                  </motion.div>

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    
                    <div className="flex gap-4 flex-wrap">
                      {project.stats.map((stat, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.15 + i * 0.1 }}
                          className="bg-white/10 backdrop-blur-md border border-cyan-400/30 px-3 py-1 rounded-lg text-sm shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                        >
                          {stat}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover effect border */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400/50 rounded-2xl transition-colors duration-300 pointer-events-none"
                />
                
                {/* Corner accents */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-purple-400/40 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-cyan-400/40 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}