'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiAcademicCap, HiCode, HiLightBulb, HiUsers } from 'react-icons/hi'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { icon: HiCode, label: 'Projetos Concluídos', value: '3+' },
    { icon: HiAcademicCap, label: 'Anos de Estudo', value: '1' },
    { icon: HiLightBulb, label: 'Tecnologias Aprendidas', value: '3+' },
    /* { icon: HiUsers, label: 'Projetos Colaborativos', value: '3+' }, */
  ]

  const timeline = [
    {
      year: '2025',
      title: 'Formação em Engenharia de Software',
      description: 'Cursando Engenharia de Software com foco em desenvolvimento web e fullstack',
      status: 'current'
    },
    {
      year: '2024',
      title: 'Primeiros Projetos',
      description: 'Desenvolveu Conversor de Moedas e Calculadora com React e JavaScript',
      status: 'completed'
    },
    {
      year: '2024',
      title: 'Descoberta da Paixão',
      description: 'Descobriu o fascínio pela programação e desenvolvimento web',
      status: 'completed'
    },
    {
      year: '2023',
      title: 'Primeiro Contato',
      description: 'Primeiro contato com tecnologia e programação',
      status: 'completed'
    }
  ]

  return (
    <section id="about" ref={ref} className="section-padding bg-dark-800/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Sobre Mim</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Conheça um pouco mais sobre minha jornada na programação e meus objetivos profissionais
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
            <h3 className="text-2xl font-bold text-white mb-6">Minha História</h3>
            
            <div className="space-y-4 text-gray-300">
              <p>
                Olá! Sou Cauã Costa, estudante de Engenharia de Software apaixonado por tecnologia 
                e desenvolvimento. Minha jornada na programação começou em 2024, quando descobri o 
                fascinante mundo da criação de soluções digitais e decidi me dedicar a essa área.
              </p>
              
              <p>
                Atualmente, estou cursando Engenharia de Software com previsão de conclusão em 2025, 
                focado em desenvolvimento web, fullstack e frontend moderno. Tenho grande interesse 
                em backend escalável, APIs, automação e inteligência artificial.
              </p>
              
              <p>
                Meu objetivo é me tornar um desenvolvedor full-stack de excelência, contribuindo para 
                projetos que tenham impacto real na sociedade. Estou sempre em busca de novos desafios 
                e oportunidades de crescimento na área de tecnologia, especialmente em desenvolvimento web.
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
                  className="text-center p-4 bg-dark-700/50 rounded-lg"
                >
                  <stat.icon className="w-8 h-8 text-primary-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
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
            <h3 className="text-2xl font-bold text-white mb-6">Minha Jornada</h3>
            
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
                          Atual
                        </span>
                      )}
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
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
            <h3 className="text-xl font-bold text-white mb-4">
              Interessado em trabalhar comigo?
            </h3>
            <p className="text-gray-400 mb-6">
              Estou sempre aberto a novas oportunidades e projetos interessantes
            </p>
            <a
              href="#contact"
              className="btn-primary inline-flex items-center"
            >
              Vamos Conversar
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
