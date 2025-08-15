import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Heart, Star, Sparkles, Users, Award, PenTool, Coffee } from 'lucide-react'

export default function Services() {
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

  const bookCategories = [
    {
      icon: Heart,
      title: "Romance Contemporâneo",
      description: "Histórias de amor modernas que refletem os desafios e alegrias dos relacionamentos atuais",
      features: ["Personagens autênticos", "Situações atuais", "Emoções verdadeiras", "Finais tocantes"],
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Star,
      title: "Romance Clássico",
      description: "Narrativas atemporais que exploram o amor em suas formas mais puras e profundas",
      features: ["Narrativa elegante", "Amor eterno", "Valores tradicionais", "Poesia romântica"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Sparkles,
      title: "Romance Fantástico",
      description: "Universos mágicos onde o amor transcende as barreiras da realidade comum",
      features: ["Mundos únicos", "Magia e romance", "Aventuras épicas", "Paixões intensas"],
      color: "from-violet-500 to-purple-500"
    }
  ]

  const writingProcess = [
    {
      step: "01",
      title: "Inspiração",
      description: "Cada história nasce de uma emoção genuína ou experiência tocante",
      icon: Coffee
    },
    {
      step: "02",
      title: "Desenvolvimento",
      description: "Criação cuidadosa de personagens e construção de universos envolventes",
      icon: PenTool
    },
    {
      step: "03",
      title: "Narrativa",
      description: "Escrita fluida que captura a essência das emoções humanas",
      icon: BookOpen
    },
    {
      step: "04",
      title: "Conexão",
      description: "Histórias que criam laços duradouros entre autor e leitores",
      icon: Users
    }
  ]

  const testimonials = [
    {
      text: "As histórias de Anidos me fizeram redescobrir o prazer da leitura romântica. Cada livro é uma jornada emocional única.",
      author: "Leitora Apaixonada",
      rating: 5
    },
    {
      text: "Nunca imaginei que pudesse me emocionar tanto com uma história. Os personagens de Anidos são inesquecíveis.",
      author: "Fã dos Romances",
      rating: 5
    },
    {
      text: "A forma como Anidos desenvolve os relacionamentos é magistral. Cada página me prende mais na história.",
      author: "Amante da Literatura",
      rating: 5
    }
  ]

  return (
    <section id="livros" className="section-padding bg-gradient-romantic relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 text-primary-200 opacity-30">
          <BookOpen className="h-40 w-40" />
        </div>
        <div className="absolute bottom-20 right-10 text-accent-200 opacity-20">
          <Heart className="h-32 w-32" fill="currentColor" />
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
          <div className="inline-flex items-center justify-center p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-6">
            <BookOpen className="h-8 w-8 text-primary-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-secondary-800 mb-6">
            Universo Literário de <span className="text-gradient">Anidos</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Explore as diferentes facetas do romance através de histórias cuidadosamente 
            crafted que tocam o coração e inspiram a alma
          </p>
        </motion.div>

        {/* Book Categories */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
          variants={itemVariants}
        >
          {bookCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={index}
                className="card-romantic p-8 text-center group"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${category.color} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <IconComponent className="h-10 w-10 text-white" fill="currentColor" />
                </motion.div>
                
                <h3 className="text-2xl font-bold font-serif text-secondary-800 mb-4">
                  {category.title}
                </h3>
                
                <p className="text-secondary-600 mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="space-y-2 mb-8">
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center space-x-2">
                      <Heart className="h-3 w-3 text-primary-500" fill="currentColor" />
                      <span className="text-sm text-secondary-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <motion.button
                  onClick={() => window.open('', '_blank')}
                  className="w-full py-3 px-6 bg-white text-secondary-800 font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:bg-primary-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explorar Categoria
                </motion.button>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Writing Process */}
        <motion.div
          className="mb-20"
          variants={itemVariants}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold font-serif text-secondary-800 mb-4">
              O Processo Criativo
            </h3>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Descubra como cada história ganha vida através de um processo cuidadoso e apaixonado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {writingProcess.map((process, index) => {
              const IconComponent = process.icon
              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="card-romantic p-6 text-center h-full flex flex-col">
                    <div className="relative mb-4">
                      <div className="text-6xl font-bold text-primary-100 absolute -top-4 left-1/2 transform -translate-x-1/2">
                        {process.step}
                      </div>
                      <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-full">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-secondary-800 mb-3">
                      {process.title}
                    </h4>
                    
                    <p className="text-secondary-600 text-sm leading-relaxed flex-grow">
                      {process.description}
                    </p>
                  </div>
                  
                  {/* Connector Line */}
                  {index < writingProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-8 right-0 w-8 h-0.5 bg-primary-200 transform translate-x-full"></div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="mb-16"
          variants={itemVariants}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold font-serif text-secondary-800 mb-4">
              O que os Leitores Dizem
            </h3>
            <p className="text-lg text-secondary-600">
              Histórias que tocam corações e transformam vidas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="card-romantic p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                
                <blockquote className="text-secondary-700 italic mb-4 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                
                <cite className="text-primary-600 font-semibold">
                  — {testimonial.author}
                </cite>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          variants={itemVariants}
        >
          <div className="card-romantic p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold font-serif text-secondary-800 mb-6">
              Comece Sua Jornada Romântica Hoje
            </h3>
            <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
              Não perca a oportunidade de se apaixonar por histórias que marcarão para sempre 
              sua experiência de leitura. Cada livro é uma nova aventura emocional esperando por você.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                onClick={() => window.open('', '_blank')}
                className="btn-primary text-lg px-10 py-4"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(236, 72, 153, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className="inline-block w-5 h-5 mr-2" fill="currentColor" />
                Adquira Seus Livros Agora
              </motion.button>
              
              <motion.button
                onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary text-lg px-10 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Users className="inline-block w-5 h-5 mr-2" />
                Entre em Contato
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}