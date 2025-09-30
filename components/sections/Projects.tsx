'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobile, FaServer } from 'react-icons/fa'
import { HiLightBulb, HiCode } from 'react-icons/hi'
import Image from 'next/image'
import { useState } from 'react'
import { useTranslation } from '@/contexts/TranslationContext'

const Projects = () => {
  const { t } = useTranslation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({})

  const handleImageError = (projectId: number) => {
    setImageErrors(prev => ({ ...prev, [projectId]: true }))
  }

  const projects = [
    {
      id: 1,
      title: t.projects.project1.title,
      description: t.projects.project1.description,
      image: '/images/projects/conversor-moedas.jpg',
      technologies: ['React', 'HTML', 'CSS', 'JavaScript', 'API ExchangeRate'],
      category: 'Frontend',
      icon: FaCode,
      github: 'https://github.com/CostaCodesFullStack/conversor-moedas',
      demo: 'https://costacodesfullstack.github.io/conversor-moedas',
      featured: true
    },
    {
      id: 2,
      title: t.projects.project2.title,
      description: t.projects.project2.description,
      image: '/images/projects/calculadora.jpg',
      technologies: ['React', 'HTML', 'CSS', 'JavaScript'],
      category: 'Frontend',
      icon: FaCode,
      github: 'https://github.com/CostaCodesFullStack/Calculadora-Online',
      demo: 'https://costacodesfullstack.github.io/Calculadora-Online',
      featured: true
    }
  ]

  const categories = [t.projects.categories.all, t.projects.categories.frontend, t.projects.categories.backend, t.projects.categories.fullstack]

  return (
    <section id="projects" ref={ref} className="section-padding bg-gray-100/50 dark:bg-dark-800/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{t.projects.title}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            {t.projects.subtitle}
          </p>
        </motion.div>

        {/* Filtros de Categoria */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              className="px-6 py-2 bg-white/50 dark:bg-dark-700/50 hover:bg-primary-600/20 text-gray-700 dark:text-gray-300 hover:text-primary-400 rounded-lg transition-all duration-300 border border-gray-300 dark:border-dark-600 hover:border-primary-600/50"
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid de Projetos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group bg-white/5 dark:bg-dark-800/50 backdrop-blur-sm border border-gray-200/10 dark:border-dark-700/50 rounded-2xl overflow-hidden hover:border-primary-600/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary-600/10"
            >
              {/* Imagem do Projeto */}
              <div className="relative overflow-hidden">
                {!imageErrors[project.id] ? (
                  <div className="w-full h-48 relative">
                    <Image
                      src={project.image}
                      alt={`Screenshot do projeto ${project.title}`}
                      fill
                      className="object-cover"
                      onError={() => handleImageError(project.id)}
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-primary-600/20 to-primary-400/20 flex items-center justify-center">
                    <project.icon className="w-16 h-16 text-primary-400" />
                  </div>
                )}
                
                {/* Overlay com links */}
                <div className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-primary-600 hover:bg-primary-700 rounded-full transition-colors duration-300"
                      aria-label={t.projects.ariaLabels.viewCode}
                    >
                      <FaGithub className="w-5 h-5 text-white" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-primary-600 hover:bg-primary-700 rounded-full transition-colors duration-300"
                      aria-label={t.projects.ariaLabels.viewDemo}
                    >
                      <FaExternalLinkAlt className="w-5 h-5 text-white" />
                    </a>
                  )}
                </div>
              </div>

              {/* Conteúdo do Projeto */}
              <div className="p-6 space-y-4 text-left">
                {/* Título */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-400 transition-colors duration-300 text-left">
                  {project.title}
                </h3>

                {/* Descrição */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed text-left">
                  {project.description}
                </p>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2 justify-start">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-600/10 text-primary-400 text-xs rounded-full border border-primary-600/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4 pt-2 justify-start">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm"
                    >
                      <FaGithub className="w-4 h-4" />
                      <span>{t.projects.viewCode}</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      <span>{t.projects.viewProject}</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600/10 to-primary-400/10 rounded-2xl p-8 border border-primary-600/20">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {t.projects.cta.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t.projects.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/CostaCodesFullStack"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center"
            >
              <FaGithub className="w-5 h-5 mr-2" />
              {t.projects.cta.githubButton}
            </a>
              <a
                href="#contact"
                className="btn-secondary inline-flex items-center justify-center"
              >
                <HiLightBulb className="w-5 h-5 mr-2" />
                {t.projects.cta.proposeButton}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
