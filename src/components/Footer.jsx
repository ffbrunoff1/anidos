import React from 'react'
import { motion } from 'framer-motion'
import { Heart, BookOpen, Mail, ArrowUp, Star, PenTool } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const quickLinks = [
    { id: 'inicio', label: 'Início' },
    { id: 'sobre', label: 'Sobre o Autor' },
    { id: 'livros', label: 'Livros' },
    { id: 'contato', label: 'Contato' }
  ]

  const bookCategories = [
    'Romance Contemporâneo',
    'Romance Clássico',
    'Romance Fantástico',
    'Histórias de Amor'
  ]

  return (
    <footer className="bg-secondary-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10">
          <Heart className="h-24 w-24" fill="currentColor" />
        </div>
        <div className="absolute top-20 right-20">
          <BookOpen className="h-20 w-20" />
        </div>
        <div className="absolute bottom-20 left-1/4">
          <Star className="h-16 w-16" fill="currentColor" />
        </div>
        <div className="absolute bottom-10 right-10">
          <PenTool className="h-18 w-18" />
        </div>
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <Heart className="h-10 w-10 text-primary-400" fill="currentColor" />
                  <BookOpen className="absolute top-1 left-1 h-5 w-5 text-accent-400" />
                </div>
                <span className="text-3xl font-bold font-serif">Anidos</span>
              </div>
              
              <p className="text-secondary-300 text-lg leading-relaxed mb-6 max-w-md">
                Mergulhe no universo romântico de Anidos e descubra paixões inesquecíveis. 
                Cada história é uma jornada emocional que tocará profundamente seu coração.
              </p>
              
              <div className="flex items-center space-x-4 text-secondary-400">
                <Heart className="h-5 w-5 text-primary-400" fill="currentColor" />
                <span>Criação de universos romanceados</span>
              </div>
              <div className="flex items-center space-x-4 text-secondary-400 mt-2">
                <Star className="h-5 w-5 text-accent-400" fill="currentColor" />
                <span>Narrativas profundas e envolventes</span>
              </div>
              <div className="flex items-center space-x-4 text-secondary-400 mt-2">
                <PenTool className="h-5 w-5 text-primary-400" />
                <span>Personagens marcantes</span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold font-serif mb-6 text-white">Navegação</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.button
                      onClick={() => scrollToSection(link.id)}
                      className="text-secondary-300 hover:text-primary-400 transition-colors duration-300 text-left"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.label}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold font-serif mb-6 text-white">Categorias</h3>
              <ul className="space-y-3">
                {bookCategories.map((category, index) => (
                  <li key={index}>
                    <motion.button
                      onClick={() => window.open('', '_blank')}
                      className="text-secondary-300 hover:text-accent-400 transition-colors duration-300 text-left"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {category}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Newsletter Section */}
          <motion.div
            className="mt-16 p-8 bg-gradient-to-r from-primary-600/20 to-accent-600/20 rounded-2xl border border-primary-500/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold font-serif mb-4">
                Fique por Dentro das Novidades
              </h3>
              <p className="text-secondary-300 mb-6 max-w-2xl mx-auto">
                Seja o primeiro a saber sobre novos lançamentos, eventos especiais e 
                conteúdos exclusivos do universo romântico de Anidos.
              </p>
              <motion.button
                onClick={() => scrollToSection('contato')}
                className="btn-primary px-8 py-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="inline-block w-5 h-5 mr-2" />
                Entre em Contato
              </motion.button>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-3xl font-bold font-serif mb-4">
              Pronto para se Apaixonar?
            </h3>
            <p className="text-secondary-300 mb-8 max-w-2xl mx-auto text-lg">
              Não perca mais tempo! Mergulhe nas histórias emocionantes de Anidos 
              e transforme sua experiência de leitura hoje mesmo.
            </p>
            <motion.button
              onClick={() => window.open('', '_blank')}
              className="btn-primary text-lg px-10 py-4"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(236, 72, 153, 0.4)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="inline-block w-5 h-5 mr-2" fill="currentColor" />
              Adquira Seus Livros Agora
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-700 py-8 px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-secondary-400 text-center md:text-left">
              <p>© {currentYear} Anidos. Todos os direitos reservados.</p>
              <p className="text-sm mt-1">
                Criado com <Heart className="inline h-4 w-4 text-primary-400 mx-1" fill="currentColor" /> 
                por <a href="https://papum.ai" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors duration-300">Papum</a>
              </p>
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-secondary-300 hover:text-white transition-colors duration-300 group"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Voltar ao Topo</span>
              <div className="p-2 bg-primary-600 rounded-full group-hover:bg-primary-500 transition-colors duration-300">
                <ArrowUp className="h-4 w-4 text-white" />
              </div>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}