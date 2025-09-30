'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiChevronDown, HiCode, HiLightBulb, HiCog } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('about')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/CostaCodesFullStack', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/caua-costa-222900278', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:cauadevcosta@gmail.com', label: 'Email' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo Principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Logo e Nome */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center space-x-3 mb-4 justify-center lg:justify-start"
            >

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-2"
            >
              <span className="text-primary-400 font-mono text-sm tracking-wider">
                <br></br> <br />
                      Olá, eu sou
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              <span className="gradient-text">Cauã Costa</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4"
            >
              Estudante de Engenharia de Software
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Estudante de Engenharia de Software apaixonado por desenvolvimento web, 
              fullstack e frontend moderno. Interessado em backend escalável, APIs, 
              automação e inteligência artificial. Localizado em Matão - SP.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center"
              >
                Entre em Contato
                <HiChevronDown className="ml-2 w-4 h-4" />
              </a>
              <a
                href="#projects"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Ver Projetos
              </a>
            </motion.div>

          </motion.div>

          {/* Ilustração/Imagem */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Círculo de fundo */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-primary-400/20 rounded-full blur-3xl"></div>
              
              {/* Imagem de perfil */}
              <div className="relative w-full h-full rounded-full border-4 border-primary-600/30 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-dark-800 to-dark-700 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <span className="text-4xl font-bold text-white">CC</span>
                    </div>
                    <p className="text-gray-400 text-sm">Foto de perfil</p>
                  </div>
                </div>
                <Image
                  src="/images/profile-photo.jpg"
                  alt="Cauã Costa - Estudante de Engenharia de Software"
                  width={400}
                  height={400}
                  className="absolute inset-0 w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Ícones flutuantes */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-primary-600/20 rounded-full flex items-center justify-center"
              >
                <HiCode className="w-8 h-8 text-primary-400" />
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary-600/20 rounded-full flex items-center justify-center"
              >
                <HiLightBulb className="w-6 h-6 text-primary-400" />
              </motion.div>

              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -left-8 w-10 h-10 bg-primary-600/20 rounded-full flex items-center justify-center"
              >
                <HiCog className="w-5 h-5 text-primary-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          onClick={scrollToNext}
          className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
          aria-label="Scroll para próxima seção"
        >
          <HiChevronDown className="w-8 h-8" />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero
