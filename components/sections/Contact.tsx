'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle
} from 'react-icons/fa'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Resetar formulário após 3 segundos
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'cauadevcosta@gmail.com',
      href: 'mailto:cauadevcosta@gmail.com',
      description: 'Envie-me um email'
    },
    {
      icon: FaPhone,
      title: 'Telefone',
      value: '+55 (16) 99999-9999',
      href: 'tel:+5516999999999',
      description: 'Ligue para mim'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Localização',
      value: 'Matão, SP - Brasil',
      href: '#',
      description: 'Estou baseado aqui'
    }
  ]

  const socialLinks = [
    {
      icon: FaGithub,
      name: 'GitHub',
      href: 'https://github.com/CostaCodesFullStack',
      color: 'hover:text-gray-100'
    },
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/caua-costa-222900278',
      color: 'hover:text-blue-400'
    },
    {
      icon: FaEnvelope,
      name: 'Email',
      href: 'mailto:cauadevcosta@gmail.com',
      color: 'hover:text-red-400'
    }
  ]

  return (
    <section id="contact" ref={ref} className="section-padding bg-dark-800/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Contato</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Vamos conversar! Estou sempre aberto a novas oportunidades e projetos interessantes
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Vamos trabalhar juntos?
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Estou sempre interessado em novos projetos e oportunidades de colaboração. 
                Se você tem uma ideia ou projeto em mente, não hesite em entrar em contato!
              </p>
            </div>

            {/* Informações de Contato */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-dark-700/30 rounded-lg hover:bg-dark-700/50 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center group-hover:bg-primary-600/30 transition-colors duration-300">
                    <info.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{info.title}</h4>
                    <p className="text-gray-400 text-sm">{info.value}</p>
                    <p className="text-primary-400 text-xs">{info.description}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Links Sociais */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 bg-dark-700/50 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:bg-dark-700/70`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Formulário de Contato */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="card"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Envie uma mensagem
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <FaCheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">
                  Mensagem enviada!
                </h4>
                <p className="text-gray-400">
                  Obrigado pelo contato. Responderei em breve!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-700/50 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 focus:outline-none transition-colors duration-300"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-700/50 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 focus:outline-none transition-colors duration-300"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Assunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-700/50 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 focus:outline-none transition-colors duration-300"
                    placeholder="Qual o assunto da sua mensagem?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-700/50 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Conte-me sobre seu projeto ou ideia..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-5 h-5 mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Call to Action Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600/10 to-primary-400/10 rounded-2xl p-8 border border-primary-600/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Obrigado por visitar meu portfólio!
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Espero que tenha gostado de conhecer um pouco sobre mim e meus projetos. 
              Estou sempre em busca de novos desafios e oportunidades de crescimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#home"
                className="btn-primary inline-flex items-center justify-center"
              >
                Voltar ao Topo
              </a>
              <a
                href="https://github.com/CostaCodesFullStack"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center"
              >
                <FaGithub className="w-5 h-5 mr-2" />
                Ver no GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
