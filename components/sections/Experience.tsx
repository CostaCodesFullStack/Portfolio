'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  HiAcademicCap, 
  HiCode, 
  HiLightBulb, 
  HiUsers, 
  HiCalendar,
  HiLocationMarker
} from 'react-icons/hi'
import { FaGraduationCap, FaCertificate, FaAward } from 'react-icons/fa'
import { useTranslation } from '@/contexts/TranslationContext'

const Experience = () => {
  const { t } = useTranslation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const education = [
    {
      year: '2025 - Atual',
      title: t.experience.educationDetails.title,
      institution: t.experience.educationDetails.institution,
      location: t.experience.educationDetails.location,
      description: t.experience.educationDetails.description,
      status: 'current',
      icon: FaGraduationCap
    }
  ]

  const experiences = [
    {
      year: '2025',
      title: t.experience.experiences.webDevelopment,
      company: t.experience.experiences.personalProjects,
      location: 'Matão, SP',
      description: t.experience.experienceDetails.webDevelopmentDescription,
      type: 'personal',
      icon: HiCode,
      achievements: t.experience.experienceDetails.webDevelopmentAchievements
    },
    {
      year: '2025',
      title: t.experience.experiences.webDevelopmentStudies,
      company: t.experience.experiences.independentLearning,
      location: 'Online',
      description: t.experience.experienceDetails.learningDescription,
      type: 'learning',
      icon: HiLightBulb,
      achievements: t.experience.experienceDetails.learningAchievements
    },
    {
      year: '2024',
      title: t.experience.experiences.modsDevelopment,
      company: t.experience.experiences.independentLearning,
      location: 'Online',
      description: t.experience.experienceDetails.modsDescription,
      type: 'learning',
      icon: HiLightBulb,
      achievements: t.experience.experienceDetails.modsAchievements
    },
  ]

  const certifications = [
    {
      title: t.experience.certificationsList.htmlCss,
      issuer: 'Curso em Vídeo',
      date: '2025',
      icon: FaCertificate,
      description: t.experience.certificationDetails.htmlCss
    },
    {
      title: t.experience.certificationsList.javascript,
      issuer: 'Curso em Vídeo',
      date: '2025',
      icon: FaCertificate,
      description: t.experience.certificationDetails.javascript
    },
    {
      title: t.experience.certificationsList.react,
      issuer: 'Aprendizado Prático',
      date: '2025',
      icon: FaCertificate,
      description: t.experience.certificationDetails.react
    },
    {
      title: t.experience.certificationsList.python,
      issuer: 'Santander Open Academy',
      date: '2025',
      icon: FaCertificate,
      description: t.experience.certificationDetails.python
    }
  ]

  const achievements = [
    {
      title: t.experience.achievementsList.portfolio,
      description: t.experience.achievementDetails.portfolio,
      icon: HiCode,
      date: '2025'
    },
    {
      title: t.experience.achievementsList.webProjects,
      description: t.experience.achievementDetails.webProjects,
      icon: HiUsers,
      date: '2025'
    },
    {
      title: t.experience.achievementsList.certifications,
      description: t.experience.achievementDetails.certifications,
      icon: FaAward,
      date: '2025'
    },
    {
      title: t.experience.achievementsList.apiIntegration,
      description: t.experience.achievementDetails.apiIntegration,
      icon: FaAward,
      date: '2025'
    },
    {
      title: t.experience.achievementsList.projectDeploy,
      description: t.experience.achievementDetails.projectDeploy,
      icon: HiLightBulb,
      date: '2025'
    },
    {
      title: t.experience.achievementsList.continuousLearning,
      description: t.experience.achievementDetails.continuousLearning,
      icon: HiAcademicCap,
      date: '2025'
    }
  ]

  return (
    <section id="experience" ref={ref} className="section-padding bg-gray-100/50 dark:bg-dark-800/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{t.experience.title}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            {t.experience.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Educação */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <HiAcademicCap className="w-6 h-6 text-primary-400 mr-3" />
              {t.experience.education}
            </h3>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className="card relative"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    edu.status === 'current' 
                      ? 'bg-primary-600 ring-4 ring-primary-600/30' 
                      : 'bg-primary-400'
                  }`}>
                    <edu.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">{edu.title}</h4>
                      {edu.status === 'current' && (
                        <span className="px-2 py-1 bg-primary-600/20 text-primary-400 text-xs rounded-full border border-primary-600/30">
                          {t.experience.current}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-primary-400 font-medium mb-1">{edu.institution}</p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <span className="flex items-center">
                        <HiCalendar className="w-4 h-4 mr-1" />
                        {edu.year}
                      </span>
                      <span className="flex items-center">
                        <HiLocationMarker className="w-4 h-4 mr-1" />
                        {edu.location}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Experiências */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <HiCode className="w-6 h-6 text-primary-400 mr-3" />
              {t.experience.projectsAndLearning}
            </h3>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                className="card"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    exp.type === 'personal' ? 'bg-blue-600' : 
                    exp.type === 'academic' ? 'bg-purple-600' : 'bg-green-600'
                  }`}>
                    <exp.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h4>
                    <p className="text-primary-400 font-medium mb-1">{exp.company}</p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <span className="flex items-center">
                        <HiCalendar className="w-4 h-4 mr-1" />
                        {exp.year}
                      </span>
                      <span className="flex items-center">
                        <HiLocationMarker className="w-4 h-4 mr-1" />
                        {exp.location}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{exp.description}</p>
                    
                    {exp.achievements && (
                      <div>
                        <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">{t.experience.experienceDetails.achievements}</h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                              <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certificações */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center">
            <FaCertificate className="w-6 h-6 text-primary-400 mr-3" />
            {t.experience.certifications}
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="card text-center hover:scale-105 transition-transform duration-300"
              >
                <cert.icon className="w-12 h-12 text-primary-400 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{cert.title}</h4>
                <p className="text-primary-400 font-medium mb-2">{cert.issuer}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{cert.date}</p>
                <p className="text-gray-700 dark:text-gray-300 text-xs">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Conquistas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center">
            <FaAward className="w-6 h-6 text-primary-400 mr-3" />
            {t.experience.achievements}
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                className="card text-center hover:scale-105 transition-transform duration-300"
              >
                <achievement.icon className="w-10 h-10 text-primary-400 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{achievement.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{achievement.description}</p>
                <p className="text-primary-400 text-xs font-medium">{achievement.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600/10 to-primary-400/10 rounded-2xl p-8 border border-primary-600/20">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {t.experience.cta.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t.experience.cta.description}
            </p>
            <a
              href="#contact"
              className="btn-primary inline-flex items-center"
            >
              <HiLightBulb className="w-5 h-5 mr-2" />
              {t.experience.cta.button}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
