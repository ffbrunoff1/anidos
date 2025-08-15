import React from 'react'
import { motion } from 'framer-motion'
import { Heart, BookOpen, PenTool, Award, Users, Sparkles } from 'lucide-react'

export default function About() {
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  }

  const achievements = [
    {
      icon: Award,
      title: "Autor Reconhecido",
      description: "Especialista em literatura romântica com anos de experiência"
    },
    {
      icon: Users,
      title: "Leitores Apaixonados",
      description: "Milhares de leitores envolvidos em cada nova publicação"
    },
    {
      icon: BookOpen,
      title: "Obras Publicadas",
      description: "Coleção crescente de romances emocionantes e envolventes"
    },
    {
      icon: Heart,
      title: "Paixão pela Escrita",
      description: "Dedicação completa à arte de contar histórias de amor"
    }
  ]

  const qualities = [
    "Criação de universos romanceados únicos",
    "Captura emocional profunda dos leitores",
    "Narrativas que marcam e transformam",
    "Personagens autênticos e cativantes",
    "Histórias que tocam o coração",
    "Desenvolvimento cuidadoso de tramas"
  ]

  return (
    <section id="sobre" className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 text-primary-100">
          <Sparkles className="h-32 w-32 opacity-30" />
        </div>
        <div className="absolute bottom-20 left-10 text-accent-100">
          <Heart className="h-24 w-24 opacity-20" fill="currentColor" />
        </div>
      </div>

      <motion.div
        className="container-custom relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <div className="inline-flex items-center justify-center p-3 bg-gradient-accent rounded-full shadow-lg mb-6">
            <PenTool className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-secondary-800 mb-6">
            Sobre <span className="text-gradient">Anidos</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Mergulhe na trajetória de um autor dedicado à arte de criar histórias 
            que tocam profundamente o coração dos leitores
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Author Image */}
          <motion.div
            className="relative"
            variants={itemVariants}
          >
            <div className="relative">
              <motion.div
                className="card-romantic p-8 text-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-48 h-48 mx-auto mb-6 bg-gradient-accent rounded-full flex items-center justify-center shadow-2xl">
                  <PenTool className="h-24 w-24 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-secondary-800 mb-2">Anidos</h3>
                <p className="text-lg text-primary-600 font-semibold">Autor Romântico</p>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 text-accent-400"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-8 w-8" />
              </motion.div>
            </div>
          </motion.div>

          {/* Biography Content */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold font-serif text-secondary-800 mb-6">
              Uma Paixão que Transcende Páginas
            </h3>
            
            <div className="space-y-6 text-lg text-secondary-600 leading-relaxed">
              <p>
                Anidos é um autor dedicado ao universo romântico, especializado em criar 
                narrativas envolventes que capturam a essência do amor em suas mais 
                diversas formas. Com uma abordagem única para a literatura romântica, 
                ele constrói histórias que ressoam profundamente com seus leitores.
              </p>
              
              <p>
                Sua expertise em criação de universos romanceados e envolventes se 
                manifesta através de personagens marcantes e tramas cuidadosamente 
                desenvolvidas. Cada obra é uma jornada emocional que transporta o 
                leitor para mundos onde o amor é a força motriz de transformação.
              </p>
              
              <p>
                Com foco na captura emocional e narrativa profunda, Anidos continua 
                a encantar leitores que buscam histórias autênticas e emocionantes, 
                estabelecendo-se como uma voz singular no cenário da literatura romântica.
              </p>
            </div>

            <motion.div className="mt-8">
              <h4 className="text-xl font-bold text-secondary-800 mb-4">Especialidades:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {qualities.map((quality, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Heart className="h-4 w-4 text-primary-500 flex-shrink-0" fill="currentColor" />
                    <span className="text-secondary-700">{quality}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={itemVariants}
        >
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <motion.div
                key={index}
                className="card-romantic p-6 text-center group"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-full mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <IconComponent className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="text-lg font-bold text-secondary-800 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-secondary-600 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
        >
          <div className="card-romantic p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold font-serif text-secondary-800 mb-4">
              Pronto para se Apaixonar?
            </h3>
            <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
              Descubra as obras de Anidos e mergulhe em histórias que transformarão 
              sua experiência de leitura. Cada página é uma nova descoberta emocional.
            </p>
            <motion.button
              onClick={() => window.open('', '_blank')}
              className="btn-primary text-lg px-10 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="inline-block w-5 h-5 mr-2" fill="currentColor" />
              Explorar Livros
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}