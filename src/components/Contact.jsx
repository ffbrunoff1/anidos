import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Heart, BookOpen, User, MessageCircle } from 'lucide-react'
import ReCAPTCHA from 'react-google-recaptcha'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')
  const recaptchaRef = useRef(null)

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

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      // Execute reCAPTCHA
      const token = await recaptchaRef.current.executeAsync()
      
      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recipientEmail: '',
          token
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Erro ao enviar:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      // Reset reCAPTCHA
      recaptchaRef.current.reset()
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "Entre em contato conosco",
      action: "Enviar Email",
      link: "mailto:contato@anidos.com"
    },
    {
      icon: BookOpen,
      title: "Livros",
      details: "Explore nossa coleção",
      action: "Ver Livros",
      link: ""
    },
    {
      icon: Heart,
      title: "Comunidade",
      details: "Junte-se aos leitores",
      action: "Participar",
      link: "#"
    }
  ]

  return (
    <section id="contato" className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 text-primary-100 opacity-30">
          <Heart className="h-40 w-40" fill="currentColor" />
        </div>
        <div className="absolute bottom-20 left-10 text-accent-100 opacity-20">
          <BookOpen className="h-32 w-32" />
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
            <MessageCircle className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-secondary-800 mb-6">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Tem alguma dúvida, sugestão ou simplesmente quer compartilhar como as histórias 
            de Anidos tocaram seu coração? Adoramos ouvir nossos leitores!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="card-romantic p-8">
              <h3 className="text-2xl font-bold font-serif text-secondary-800 mb-6">
                Envie sua Mensagem
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-secondary-700 mb-2">
                    <User className="inline-block w-4 h-4 mr-2" />
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-secondary-700 mb-2">
                    <Mail className="inline-block w-4 h-4 mr-2" />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-secondary-700 mb-2">
                    <MessageCircle className="inline-block w-4 h-4 mr-2" />
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Compartilhe seus pensamentos, dúvidas ou sugestões..."
                  />
                </div>

                {/* reCAPTCHA */}
                <div className="mt-4 flex justify-center">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    size="invisible"
                    sitekey="6Lc7xpsrAAAAAKh0I1boee2JN1oO8iF_yd0ihl79"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    isSubmitting 
                      ? 'bg-secondary-300 text-secondary-500 cursor-not-allowed' 
                      : 'bg-gradient-accent text-white hover:shadow-lg hover:scale-105'
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-secondary-500 mr-2"></div>
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Mensagem
                    </span>
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <Heart className="inline-block w-5 h-5 mr-2" fill="currentColor" />
                    Mensagem enviada com sucesso! Obrigado pelo contato.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Erro ao enviar mensagem. Tente novamente.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold font-serif text-secondary-800 mb-6">
                  Outras Formas de Contato
                </h3>
                <p className="text-secondary-600 leading-relaxed mb-8">
                  Escolha a forma que preferir para entrar em contato. Estamos sempre 
                  disponíveis para nossos leitores e respondemos todas as mensagens 
                  com carinho e atenção.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <motion.div
                      key={index}
                      className="card-romantic p-6 group cursor-pointer"
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => {
                        if (info.link.startsWith('http') || info.link.startsWith('mailto:')) {
                          window.open(info.link, '_blank')
                        }
                      }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-gradient-accent rounded-full group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-secondary-800 mb-1">
                            {info.title}
                          </h4>
                          <p className="text-secondary-600 mb-2">
                            {info.details}
                          </p>
                          <span className="text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-300">
                            {info.action} →
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Author Message */}
              <motion.div
                className="card-romantic p-6 bg-gradient-to-br from-primary-50 to-accent-50"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-accent rounded-full flex items-center justify-center">
                    <Heart className="h-8 w-8 text-white" fill="currentColor" />
                  </div>
                  <h4 className="text-xl font-bold font-serif text-secondary-800 mb-3">
                    Uma Mensagem de Anidos
                  </h4>
                  <blockquote className="text-secondary-700 italic leading-relaxed">
                    "Cada mensagem de vocês é um presente para mim. Saber que minhas histórias 
                    tocaram seus corações me inspira a continuar escrevendo com ainda mais paixão. 
                    Obrigado por fazerem parte desta jornada romântica!"
                  </blockquote>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
        >
          <div className="card-romantic p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold font-serif text-secondary-800 mb-4">
              Pronto para Mergulhar nas Histórias?
            </h3>
            <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
              Não espere mais para descobrir as emoções que as obras de Anidos podem 
              despertar em você. Cada livro é uma nova aventura esperando para ser vivida.
            </p>
            <motion.button
              onClick={() => window.open('', '_blank')}
              className="btn-primary text-lg px-10 py-4"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(236, 72, 153, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <BookOpen className="inline-block w-5 h-5 mr-2" />
              Explorar Livros Agora
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}