import React from 'react'
import { motion } from 'framer-motion'
import { Heart, BookOpen, Star, Sparkles } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-romantic">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-transparent to-accent-500/20"></div>
      </div>

      {/* Floating Hearts */}
      <motion.div 
        className="absolute top-20 left-10 text-primary-300"
        variants={floatingVariants}
        animate="animate"
      >
        <Heart className="h-8 w-8" fill="currentColor" />
      </motion.div>
      
      <motion.div 
        className="absolute top-40 right-20 text-accent-300"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      >
        <Sparkles className="h-6 w-6" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-32 left-20 text-primary-400"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      >
        <Star className="h-7 w-7" fill="currentColor" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 container-custom text-center px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="mb-8"
          variants={itemVariants}
        >
          <div className="inline-flex items-center justify-center p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-6">
            <BookOpen className="h-12 w-12 text-primary-600 mr-2" />
            <Heart className="h-10 w-10 text-accent-500" fill="currentColor" />
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif mb-6"
          variants={itemVariants}
        >
          <span className="text-gradient">Anidos</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-secondary-600 font-light mb-4"
          variants={itemVariants}
        >
          Autor Romântico
        </motion.p>

        <motion.h2
          className="text-3xl md:text-5xl font-serif text-secondary-800 mb-8 leading-tight"
          variants={itemVariants}
        >
          Mergulhe no universo romântico e<br />
          <span className="text-gradient">descubra paixões inesquecíveis</span>
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-secondary-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Transforme sua leitura em uma experiência emocionante com histórias que tocam o coração. 
          Apaixone-se novamente em cada página e deixe-se envolver por narrativas profundas e 
          personagens marcantes que ficarão para sempre em sua memória.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          variants={itemVariants}
        >
          <motion.button
            onClick={() => window.open('', '_blank')}
            className="btn-primary text-lg px-10 py-5"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(236, 72, 153, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Heart className="inline-block w-5 h-5 mr-2" fill="currentColor" />
            Adquira agora e deixe-se envolver
          </motion.button>

          <motion.button
            onClick={() => document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary text-lg px-10 py-5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BookOpen className="inline-block w-5 h-5 mr-2" />
            Conheça o Autor
          </motion.button>
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <div className="card-romantic p-6 text-center">
            <Heart className="h-12 w-12 text-primary-500 mx-auto mb-4" fill="currentColor" />
            <h3 className="text-2xl font-bold text-secondary-800 mb-2">Captura Emocional</h3>
            <p className="text-secondary-600">Histórias que tocam profundamente o coração dos leitores</p>
          </div>

          <div className="card-romantic p-6 text-center">
            <BookOpen className="h-12 w-12 text-accent-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-secondary-800 mb-2">Narrativa Profunda</h3>
            <p className="text-secondary-600">Tramas envolventes com desenvolvimento cuidadoso</p>
          </div>

          <div className="card-romantic p-6 text-center">
            <Star className="h-12 w-12 text-primary-500 mx-auto mb-4" fill="currentColor" />
            <h3 className="text-2xl font-bold text-secondary-800 mb-2">Personagens Marcantes</h3>
            <p className="text-secondary-600">Caracteres únicos que permanecem na memória</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-secondary-400 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-secondary-400 rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}