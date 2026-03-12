import { motion } from 'motion/react';
import { Building2, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#', color: 'from-blue-500 to-blue-600' },
    { icon: Twitter, href: '#', color: 'from-cyan-500 to-cyan-600' },
    { icon: Instagram, href: '#', color: 'from-pink-500 to-purple-600' },
    { icon: Linkedin, href: '#', color: 'from-blue-600 to-purple-600' }
  ];

  return (
    <footer className="relative bg-black text-white py-12 px-4 overflow-hidden border-t border-cyan-500/20">
      {/* Futuristic Grid Background */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `
          linear-gradient(rgba(6, 182, 212, 0.2) 1px, transparent 1px),
          linear-gradient(90deg, rgba(6, 182, 212, 0.2) 1px, transparent 1px)
        `,
        backgroundSize: '30px 30px'
      }} />
      
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              background: i % 2 === 0 ? 'rgba(6, 182, 212, 0.4)' : 'rgba(139, 92, 246, 0.4)',
              boxShadow: i % 2 === 0 
                ? '0 0 10px rgba(6, 182, 212, 0.5)' 
                : '0 0 10px rgba(139, 92, 246, 0.5)',
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <motion.div
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur-md opacity-50" />
                <div className="relative bg-gradient-to-br from-cyan-500 to-purple-500 p-2 rounded-lg border border-cyan-400/30">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
              </motion.div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">BuildTech</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 mb-4 max-w-md"
            >
              Your trusted partner in construction excellence. We deliver quality homes and 
              comprehensive architectural solutions with precision and care.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex gap-4"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="group relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-lg blur-md opacity-0 group-hover:opacity-75 transition-opacity`} />
                    <div className={`relative bg-gradient-to-r ${social.color} p-2 rounded-lg border border-white/20`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors relative group"
                  >
                    <span className="absolute -left-3 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400">›</span>
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-bold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              {['2D & 3D Plans', 'Structural Plans', 'Interior Design', 'Construction', 'Estimation'].map((service) => (
                <li key={service}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href="#services"
                    className="text-gray-400 hover:text-purple-400 transition-colors relative group"
                  >
                    <span className="absolute -left-3 opacity-0 group-hover:opacity-100 transition-opacity text-purple-400">›</span>
                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-cyan-500/20 pt-8 text-center"
        >
          <p className="text-gray-400">
            &copy; 2026 <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold">BuildTech</span> Construction. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}