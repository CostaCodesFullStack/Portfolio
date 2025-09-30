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
import { title } from 'process'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const education = [
    {
      year: '2025 - Atual',
      title: 'Engenharia de Software',
      institution: 'Faculdade Anhanguera',
      location: 'Matão, SP',
      description: 'Graduação em Engenharia de Software com foco em desenvolvimento de sistemas, arquitetura de software e engenharia de requisitos. Previsão de conclusão em 2025.',
      status: 'current',
      icon: FaGraduationCap
    }
  ]

  const experiences = [
    {
      year: '2025',
      title: 'Desenvolvimento de Projetos Web',
      company: 'Projetos Pessoais',
      location: 'Matão, SP',
      description: 'Desenvolvimento de projetos web práticos incluindo Conversor de Moedas e Calculadora, aplicando conhecimentos em React e JavaScript.',
      type: 'personal',
      icon: HiCode,
      achievements: [
        'Conversor de Moedas com API externa',
        'Calculadora funcional em React',
        'Interface responsiva e moderna',
        'Integração com APIs externas',
        'Deploy em GitHub Pages'
      ]
    },
    {
      year: '2025',
      title: 'Estudos em Desenvolvimento Web',
      company: 'Aprendizado Independente',
      location: 'Online',
      description: 'Dedicação intensiva ao aprendizado de tecnologias web modernas através de cursos online e prática constante.',
      type: 'learning',
      icon: HiLightBulb,
      achievements: [
        'Aprendizado de React e JavaScript',
        'Desenvolvimento de habilidades em HTML e CSS',
        'Integração com APIs externas',
        'Criação de projetos práticos',
        'Versionamento com Git e GitHub'
      ]
    },
    {
      year: '2024',
      title: 'Estudos e Desenvolvementos de Mods MTA/FIVEM',
      company: 'Aprendizado Independente',
      location: 'Online',
      description: 'Dedicação intensiva ao estudo da linguagem LUA aplicada ao desenvolvimento de modificações (mods) para plataformas MTA e FIVEM, explorando conceitos de lógica de programação, sistemas dinâmicos e integração com servidores.',
      type: 'learning',
      icon: HiLightBulb,
      achievements: [
        'Aprendizado e prática da linguagem LUA para criação de scripts e sistemas em servidores MTA e FIVEM',
        'Desenvolvimento de recursos personalizados como sistemas de login, inventário, economia e HUDs',
        'Integração com bancos de dados externos (MySQL) para persistência de informações do servidor',
        'Criação de interfaces interativas usando HTML, CSS e JavaScript integradas ao client-side dos servidores',
      ]
    },
  ]

  const certifications = [
    {
      title: 'HTML5 e CSS3',
      issuer: 'Curso em Vídeo',
      date: '2025',
      icon: FaCertificate,
      description: 'Desenvolvimento web com HTML5 e CSS3, incluindo responsividade e design moderno.'
    },
    {
      title: 'JavaScript',
      issuer: 'Curso em Vídeo',
      date: '2025',
      icon: FaCertificate,
      description: 'Fundamentos de JavaScript, DOM, APIs e desenvolvimento web interativo.'
    },
    {
      title: 'React',
      issuer: 'Aprendizado Prático',
      date: '2025',
      icon: FaCertificate,
      description: 'Desenvolvimento de aplicações React com componentes, hooks e integração de APIs.'
    }
  ]

  const achievements = [
    {
      title: 'Portfólio Profissional',
      description: 'Desenvolvimento de portfólio completo com React e Next.js',
      icon: HiCode,
      date: '2025'
    },
    {
      title: 'Projetos Web',
      description: 'Conversor de Moedas e Calculadora desenvolvidos com React',
      icon: HiUsers,
      date: '2025'
    },
    {
      title: '3+ Certificações',
      description: 'Conclusão de cursos em HTML, CSS, JavaScript e React',
      icon: FaAward,
      date: '2025'
    },
    {
      title: 'Integração de APIs',
      description: 'Experiência com APIs externas no projeto Conversor de Moedas',
      icon: FaAward,
      date: '2025'
    },
    {
      title: 'Deploy de Projetos',
      description: 'Deploy de projetos no GitHub Pages',
      icon: HiLightBulb,
      date: '2025'
    },
    {
      title: 'Aprendizado Contínuo',
      description: 'Dedicação ao estudo de desenvolvimento web e fullstack',
      icon: HiAcademicCap,
      date: '2025'
    }
  ]

  return (
    <section id="experience" ref={ref} className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Jornada Acadêmica</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Minha trajetória de aprendizado, projetos pessoais e conquistas acadêmicas
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
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <HiAcademicCap className="w-6 h-6 text-primary-400 mr-3" />
              Educação
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
                      <h4 className="text-lg font-bold text-white">{edu.title}</h4>
                      {edu.status === 'current' && (
                        <span className="px-2 py-1 bg-primary-600/20 text-primary-400 text-xs rounded-full border border-primary-600/30">
                          Atual
                        </span>
                      )}
                    </div>
                    
                    <p className="text-primary-400 font-medium mb-1">{edu.institution}</p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center">
                        <HiCalendar className="w-4 h-4 mr-1" />
                        {edu.year}
                      </span>
                      <span className="flex items-center">
                        <HiLocationMarker className="w-4 h-4 mr-1" />
                        {edu.location}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 text-sm">{edu.description}</p>
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
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <HiCode className="w-6 h-6 text-primary-400 mr-3" />
              Projetos e Aprendizado
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
                    <h4 className="text-lg font-bold text-white mb-1">{exp.title}</h4>
                    <p className="text-primary-400 font-medium mb-1">{exp.company}</p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center">
                        <HiCalendar className="w-4 h-4 mr-1" />
                        {exp.year}
                      </span>
                      <span className="flex items-center">
                        <HiLocationMarker className="w-4 h-4 mr-1" />
                        {exp.location}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4">{exp.description}</p>
                    
                    {exp.achievements && (
                      <div>
                        <h5 className="text-sm font-semibold text-white mb-2">Principais realizações:</h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-gray-400 flex items-start">
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
          <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <FaCertificate className="w-6 h-6 text-primary-400 mr-3" />
            Certificações e Cursos
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
                <h4 className="text-lg font-bold text-white mb-2">{cert.title}</h4>
                <p className="text-primary-400 font-medium mb-2">{cert.issuer}</p>
                <p className="text-gray-400 text-sm mb-3">{cert.date}</p>
                <p className="text-gray-300 text-xs">{cert.description}</p>
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
          <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <FaAward className="w-6 h-6 text-primary-400 mr-3" />
            Principais Conquistas
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
                <h4 className="text-lg font-bold text-white mb-2">{achievement.title}</h4>
                <p className="text-gray-400 text-sm mb-2">{achievement.description}</p>
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
            <h3 className="text-xl font-bold text-white mb-4">
              Pronto para novos desafios?
            </h3>
            <p className="text-gray-400 mb-6">
              Estou em busca de oportunidades para aplicar meus conhecimentos e continuar aprendendo
            </p>
            <a
              href="#contact"
              className="btn-primary inline-flex items-center"
            >
              <HiLightBulb className="w-5 h-5 mr-2" />
              Vamos Conversar
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
