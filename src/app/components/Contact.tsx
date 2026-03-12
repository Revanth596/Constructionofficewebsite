import { motion, useInView } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useRef, useState } from 'react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission - in real app would send to backend
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', color: 'from-cyan-500 to-blue-600' },
    { icon: Mail, label: 'Email', value: 'info@buildtech.com', color: 'from-purple-500 to-pink-600' },
    { icon: MapPin, label: 'Address', value: '123 Builder St, Construction City', color: 'from-pink-500 to-purple-600' }
  ];

  return (
    <section id="contact" className="relative py-24 bg-black overflow-hidden">
      {/* Futuristic Grid Background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }} />
      
      {/* Animated glow orbs */}
      <motion.div
        className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              background: i % 3 === 0 
                ? 'rgba(6, 182, 212, 0.5)' 
                : i % 3 === 1 
                  ? 'rgba(139, 92, 246, 0.5)'
                  : 'rgba(236, 72, 153, 0.5)',
              boxShadow: i % 3 === 0 
                ? '0 0 15px rgba(6, 182, 212, 0.6)' 
                : i % 3 === 1 
                  ? '0 0 15px rgba(139, 92, 246, 0.6)'
                  : '0 0 15px rgba(236, 72, 153, 0.6)',
            }}
            animate={{
              y: [0, -200, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
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

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Build Together</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to start your construction project? Get in touch with us today
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 px-4">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-300 mb-8">
                We're here to answer any questions you may have about our services. 
                Reach out to us and we'll respond as soon as we can.
              </p>
            </div>

            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.4
                      }}
                      className="relative"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${info.color} rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity`} />
                      <div className={`relative bg-gradient-to-br ${info.color} p-4 rounded-xl border border-white/20`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </motion.div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{info.label}</h4>
                      <p className="text-gray-300">{info.value}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* 3D Floating element */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
              className="relative mt-12"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-30" />
              <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 p-8 rounded-2xl">
                <h4 className="text-white font-bold text-lg mb-2">Business Hours</h4>
                <p className="text-gray-300">Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p className="text-gray-300">Saturday: 9:00 AM - 4:00 PM</p>
                <p className="text-gray-300">Sunday: Closed</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-20" />
            
            <motion.form
              onSubmit={handleSubmit}
              className="relative bg-black/60 backdrop-blur-xl p-8 rounded-2xl border border-white/10"
              whileHover={{ scale: 1.01 }}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-purple-400/50 rounded-br-2xl" />
              
              <div className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Name *</label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Email *</label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Phone</label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Service Interested In</label>
                  <motion.select
                    whileFocus={{ scale: 1.02 }}
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all"
                  >
                    <option value="" className="text-slate-900 bg-white">Select a service</option>
                    <option value="construction" className="text-slate-900 bg-white">House Construction</option>
                    <option value="2d-3d-plans" className="text-slate-900 bg-white">2D & 3D Plans</option>
                    <option value="structural" className="text-slate-900 bg-white">Structural Plans</option>
                    <option value="interior" className="text-slate-900 bg-white">Interior Design</option>
                    <option value="estimation" className="text-slate-900 bg-white">Cost Estimation</option>
                  </motion.select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Message *</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </span>
                  <div className="absolute inset-0 rounded-lg shadow-[0_0_30px_rgba(6,182,212,0.6)] group-hover:shadow-[0_0_50px_rgba(139,92,246,0.8)] transition-shadow" />
                </motion.button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}