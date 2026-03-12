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
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', color: 'from-green-500 to-emerald-400' },
    { icon: Mail, label: 'Email', value: 'info@constructionco.com', color: 'from-blue-500 to-cyan-400' },
    { icon: MapPin, label: 'Address', value: '123 Builder St, Construction City', color: 'from-purple-500 to-pink-400' }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-blue-400/30 rounded-full"
            animate={{
              y: [0, -200, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1]
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Build Together
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to start your construction project? Get in touch with us today
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-slate-300 mb-8">
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
                  className="flex items-start gap-4 group"
                >
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.4
                    }}
                    className={`bg-gradient-to-br ${info.color} p-4 rounded-xl shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{info.label}</h4>
                    <p className="text-slate-300">{info.value}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* 3D Floating element */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotateY: [0, 360]
              }}
              transition={{
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                rotateY: { duration: 15, repeat: Infinity, ease: "linear" }
              }}
              className="mt-12 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <h4 className="text-white font-bold text-lg mb-2">Business Hours</h4>
              <p className="text-slate-300">Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p className="text-slate-300">Saturday: 9:00 AM - 4:00 PM</p>
              <p className="text-slate-300">Sunday: Closed</p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl"
              whileHover={{ scale: 1.01 }}
            >
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 transition-colors"
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 transition-colors"
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 transition-colors"
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                  >
                    <option value="" className="text-slate-900">Select a service</option>
                    <option value="2d-3d-plans" className="text-slate-900">2D & 3D Plans</option>
                    <option value="structural" className="text-slate-900">Structural Plans</option>
                    <option value="interior" className="text-slate-900">Interior Design</option>
                    <option value="construction" className="text-slate-900">House Construction</option>
                    <option value="estimation" className="text-slate-900">Cost Estimation</option>
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg font-semibold shadow-lg hover:shadow-2xl transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
