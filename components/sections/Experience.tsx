'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  HiAcademicCap,
  HiCode,
  HiCalendar,
  HiLocationMarker,
  HiCheckCircle,
  HiClock,
} from 'react-icons/hi';
import { FaGraduationCap, FaCertificate, FaGamepad } from 'react-icons/fa';
import { useTranslation } from '@/contexts/TranslationContext';

const Experience = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Formação Acadêmica - Card Grande
  const education = {
    title: t.experience.educationDetails.title,
    institution: t.experience.educationDetails.institution,
    location: t.experience.educationDetails.location,
    period: '2025 - 2029',
    description: t.experience.educationDetails.description,
    status: 'current',
    progress: 25, // 1 ano de 4
    icon: FaGraduationCap,
  };

  // Experiência Prática - Cards Médios
  const practicalExperiences = [
    {
      title: t.experience.practicalExperience.webDevelopment.title,
      type: t.experience.practicalExperience.webDevelopment.type,
      period: t.experience.practicalExperience.webDevelopment.period,
      description: t.experience.practicalExperience.webDevelopment.description,
      achievements:
        t.experience.practicalExperience.webDevelopment.achievements,
      icon: HiCode,
      color: 'bg-emerald-600',
    },
    {
      title: t.experience.practicalExperience.modsDevelopment.title,
      type: t.experience.practicalExperience.modsDevelopment.type,
      period: t.experience.practicalExperience.modsDevelopment.period,
      description: t.experience.practicalExperience.modsDevelopment.description,
      achievements:
        t.experience.practicalExperience.modsDevelopment.achievements,
      icon: FaGamepad,
      color: 'bg-purple-600',
    },
  ];

  // Certificações Oficiais - Cards Pequenos
  const certifications = [
    {
      title: t.experience.certificationsList.htmlCss,
      issuer: 'Curso em Vídeo',
      year: '2025',
      description: t.experience.certificationDetails.htmlCss,
      icon: FaCertificate,
    },
    {
      title: t.experience.certificationsList.javascript,
      issuer: 'Curso em Vídeo',
      year: '2025',
      description: t.experience.certificationDetails.javascript,
      icon: FaCertificate,
    },
    {
      title: t.experience.certificationsList.python,
      issuer: 'Santander Open Academy',
      year: '2025',
      description: t.experience.certificationDetails.python,
      icon: FaCertificate,
    },
    {
      title: t.experience.certificationsList.java,
      issuer: 'Curso Em Vídeo',
      year: t.experience.inProgress,
      description: t.experience.certificationDetails.java,
      icon: HiClock,
    },
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="section-padding bg-gray-100/50 dark:bg-dark-800/30"
    >
      <div className="container-custom">
        {/* Título da Seção */}
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

        {/* A) Card Grande - Formação Acadêmica */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="card bg-gradient-to-r from-blue-600/10 to-blue-500/10 border-blue-600/30">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center ring-4 ring-blue-600/30">
                <education.icon className="w-8 h-8 text-white" />
              </div>

              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {education.title}
                  </h3>
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full border border-blue-600/30">
                    {t.experience.current}
                  </span>
                </div>

                <p className="text-blue-400 font-semibold text-lg mb-2">
                  {education.institution}
                </p>

                <div className="flex items-center space-x-6 text-gray-600 dark:text-gray-400 mb-4">
                  <span className="flex items-center">
                    <HiCalendar className="w-5 h-5 mr-2 text-blue-500" />
                    {education.period}
                  </span>
                  <span className="flex items-center">
                    <HiLocationMarker className="w-5 h-5 mr-2 text-blue-500" />
                    {education.location}
                  </span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {education.description}
                </p>

                {/* Barra de Progresso */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>Progresso do Curso</span>
                    <span>Ano 1 de 4 ({education.progress}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${education.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* B) Cards Médios - Experiência Prática */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t.experience.practicalExperience.title}
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {practicalExperiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                className="card hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 ${exp.color} rounded-full flex items-center justify-center`}
                  >
                    <exp.icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {exp.title}
                    </h4>
                    <p className="text-primary-500 dark:text-primary-400 font-medium mb-2">
                      {exp.type} • {exp.period}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                      {exp.description}
                    </p>

                    <div>
                      <h5 className="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-2">
                        {t.experience.experienceDetails.achievements}
                      </h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                          >
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* C) Cards Pequenos - Certificações Oficiais */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center">
            <FaCertificate className="w-6 h-6 text-primary-400 mr-3" />
            {t.experience.certifications}
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="card text-center hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 border-yellow-400/30"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                    <cert.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {cert.title}
                </h4>
                <p className="text-yellow-600 dark:text-yellow-400 font-medium mb-2">
                  {cert.issuer}
                </p>
                <p className="text-primary-500 dark:text-primary-400 text-sm mb-3 font-semibold">
                  {cert.year}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-xs">
                  {cert.description}
                </p>

                <div className="flex justify-center mt-4">
                  <HiCheckCircle className="w-5 h-5 text-emerald-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* E) CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-600/10 to-primary-400/10 rounded-2xl p-8 border border-primary-600/20">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {t.experience.cta.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t.experience.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center"
              >
                {t.experience.cta.button}
              </a>
              <a
                href="#projects"
                className="btn-secondary inline-flex items-center"
              >
                {t.experience.cta.viewProjects}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
