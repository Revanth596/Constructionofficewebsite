import { motion } from 'motion/react';

export function Building3D() {
  const floors = 8;

  return (
    <div className="relative w-full max-w-md mx-auto" style={{ perspective: '1200px' }}>
      <motion.div
        className="relative"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{
          rotateY: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Building Base */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-64 h-96 mx-auto"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Main Building Structure */}
          <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
            {/* Front Face */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-blue-500/80 to-blue-700/80 backdrop-blur-sm border-2 border-blue-400/50 rounded-t-lg overflow-hidden"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'translateZ(60px)'
              }}
            >
              {/* Windows - Building up animation */}
              <div className="grid grid-cols-4 gap-2 p-4 h-full">
                {[...Array(floors * 4)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.5 + (i * 0.05),
                      ease: "easeOut"
                    }}
                    className="bg-gradient-to-b from-cyan-300/80 to-cyan-400/60 rounded-sm border border-cyan-200/30 shadow-lg"
                    style={{
                      boxShadow: '0 0 10px rgba(34, 211, 238, 0.4)',
                    }}
                  />
                ))}
              </div>

              {/* Entrance */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.5, delay: 2 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-20 bg-gradient-to-b from-amber-300/70 to-amber-500/70 rounded-t-lg border-2 border-amber-400/50"
              />
            </motion.div>

            {/* Right Face */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-blue-600/60 to-blue-800/60 backdrop-blur-sm border-2 border-blue-500/40 rounded-t-lg overflow-hidden"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'rotateY(90deg) translateZ(60px)'
              }}
            >
              <div className="grid grid-cols-2 gap-2 p-4 h-full">
                {[...Array(floors * 2)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.6 + (i * 0.05),
                      ease: "easeOut"
                    }}
                    className="bg-gradient-to-b from-cyan-400/60 to-cyan-500/40 rounded-sm border border-cyan-300/20"
                    style={{
                      boxShadow: '0 0 8px rgba(34, 211, 238, 0.3)',
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Left Face */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-blue-600/60 to-blue-800/60 backdrop-blur-sm border-2 border-blue-500/40 rounded-t-lg overflow-hidden"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'rotateY(-90deg) translateZ(60px)'
              }}
            >
              <div className="grid grid-cols-2 gap-2 p-4 h-full">
                {[...Array(floors * 2)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.6 + (i * 0.05),
                      ease: "easeOut"
                    }}
                    className="bg-gradient-to-b from-cyan-400/60 to-cyan-500/40 rounded-sm border border-cyan-300/20"
                    style={{
                      boxShadow: '0 0 8px rgba(34, 211, 238, 0.3)',
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Back Face */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-blue-700/50 to-blue-900/50 backdrop-blur-sm border-2 border-blue-600/30 rounded-t-lg"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'rotateY(180deg) translateZ(60px)'
              }}
            />

            {/* Top Face */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.5 }}
              className="absolute inset-0 bg-gradient-to-br from-slate-600/80 to-slate-800/80 backdrop-blur-sm border-2 border-slate-500/50"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'rotateX(90deg) translateZ(0px)',
                height: '120px',
                top: 0
              }}
            >
              {/* Rooftop details */}
              <div className="absolute inset-0 flex items-center justify-center gap-4">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-8 h-12 bg-gradient-to-t from-red-500 to-red-400 rounded-t"
                />
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="w-6 h-16 bg-gradient-to-t from-gray-600 to-gray-400 rounded-t"
                />
              </div>
            </motion.div>
          </div>

          {/* Crane Animation */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 3 }}
            className="absolute -top-20 -right-16 z-20"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="relative"
            >
              {/* Crane Base */}
              <div className="w-3 h-16 bg-gradient-to-b from-yellow-400 to-yellow-600 mx-auto" />
              
              {/* Crane Arm */}
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 origin-left"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="w-24 h-2 bg-gradient-to-r from-yellow-500 to-yellow-400" />
                
                {/* Hook */}
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute right-0 top-2"
                >
                  <div className="w-0.5 h-12 bg-gray-700" />
                  <div className="w-3 h-3 bg-gray-800 rounded-full" />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating Construction Elements */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -left-12 top-1/4 w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg shadow-lg"
          style={{ transformStyle: 'preserve-3d' }}
        />

        <motion.div
          animate={{
            y: [0, -40, 0],
            rotate: [0, -180, -360]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -right-12 top-1/2 w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded shadow-lg"
          style={{ transformStyle: 'preserve-3d' }}
        />

        <motion.div
          animate={{
            y: [0, -25, 0],
            rotateZ: [0, 360]
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute left-8 bottom-12 w-10 h-2 bg-gradient-to-r from-gray-400 to-gray-600 shadow-lg"
          style={{ transformStyle: 'preserve-3d' }}
        />
      </motion.div>

      {/* Shadow */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-8 bg-black/40 rounded-full blur-xl -z-10"
      />
    </div>
  );
}
