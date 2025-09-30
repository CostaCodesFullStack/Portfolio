'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiAcademicCap, HiCode, HiLightBulb, HiUsers } from 'react-icons/hi'
import { useTranslation } from '@/contexts/TranslationContext'

const About = () => {
  const { t } = useTranslation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { icon: HiCode, label: t.about.stats.completedProjects, value: '3+' },
    { icon: HiAcademicCap, label: t.about.stats.yearsOfStudy, value: '1' },
    { icon: HiLightBulb, label: t.about.stats.technologiesLearned, value: '3+' },
    /* { icon: HiUsers, label: 'Projetos Colaborativos', value: '3+' }, */
  ]

  const timeline = [
    {
      year: '2025',
      title: t.about.timeline.softwareEngineering,
      description: t.about.timelineDescriptions.softwareEngineering,
      status: 'current'
    },
    {
      year: '2024',
      title: t.about.timeline.firstProjects,
      description: t.about.timelineDescriptions.firstProjects,
      status: 'completed'
    },
    {
      year: '2024',
      title: t.about.timeline.passionDiscovery,
      description: t.about.timelineDescriptions.passionDiscovery,
      status: 'completed'
    },
    {
      year: '2023',
      title: t.about.timeline.firstContact,
      description: t.about.timelineDescriptions.firstContact,
      status: 'completed'
    }
  ]

  return (
    <section id="about" ref={ref} className="section-padding bg-gray-100/50 dark:bg-dark-800/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{t.about.title}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            {t.about.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* História Pessoal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t.about.myStory}</h3>
            
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                {t.about.storyText1}
              </p>
              
              <p>
                {t.about.storyText2}
              </p>
              
              <p>
                {t.about.storyText3}
              </p>
            </div>

            {/* Estatísticas */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 bg-white/50 dark:bg-dark-700/50 rounded-lg"
                >
                  <stat.icon className="w-8 h-8 text-primary-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t.about.myJourney}</h3>
            
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="relative flex items-start space-x-4"
                >
                  {/* Linha vertical */}
                  {index < timeline.length - 1 && (
                    <div className="absolute left-4 top-12 w-0.5 h-16 bg-gradient-to-b from-primary-600 to-primary-400"></div>
                  )}
                  
                  {/* Ponto */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    item.status === 'current' 
                      ? 'bg-primary-600 ring-4 ring-primary-600/30' 
                      : 'bg-primary-400'
                  }`}>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-primary-400 font-mono text-sm font-medium">
                        {item.year}
                      </span>
                      {item.status === 'current' && (
                        <span className="px-2 py-1 bg-primary-600/20 text-primary-400 text-xs rounded-full">
                          {t.experience.current}
                        </span>
                      )}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              {t.about.cta.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t.about.cta.description}
            </p>
            <a
              href="#contact"
              className="btn-primary inline-flex items-center"
            >
              {t.about.cta.button}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
