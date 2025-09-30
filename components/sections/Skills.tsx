'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaReact, 
  FaPython, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt
} from 'react-icons/fa'
import { 
  SiC
} from 'react-icons/si'
import { HiCode, HiCog, HiLightBulb, HiUsers } from 'react-icons/hi'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const technicalSkills = [
    {
      category: 'Linguagens de Programação',
      icon: HiCode,
      skills: [
        { name: 'HTML', icon: FaHtml5, level: 70, color: 'text-orange-400' },
        { name: 'CSS', icon: FaCss3Alt, level: 70, color: 'text-blue-300' },
        { name: 'JavaScript', icon: FaJs, level: 70, color: 'text-yellow-400' },
        { name: 'C', icon: SiC, level: 50, color: 'text-blue-500' },
        { name: 'Python', icon: FaPython, level: 50, color: 'text-yellow-500' },
        { name: 'React', icon: FaReact, level: 40, color: 'text-blue-400' },
      ]
    }
  ]

  const softSkills = [
    { name: 'Comunicação', icon: HiUsers, description: 'Capacidade de comunicar ideias técnicas de forma clara' },
    { name: 'Trabalho em Equipe', icon: HiUsers, description: 'Colaboração eficaz em projetos multidisciplinares' },
    { name: 'Resolução de Problemas', icon: HiLightBulb, description: 'Abordagem analítica para encontrar soluções' },
    { name: 'Aprendizado Contínuo', icon: HiCode, description: 'Paixão por aprender novas tecnologias e métodos' },
    { name: 'Adaptabilidade', icon: HiCog, description: 'Flexibilidade para trabalhar com diferentes tecnologias' },
  ]

  const concepts = [
    'Estruturas de Dados',
    'Algoritmos',
    'Programação Orientada a Objetos',
    'Responsive Design',
    'Desenvolvimento Web',
    'Clean Code',
    'Lógica de Programação',
    'Manipulação do DOM',
    'CSS Flexbox e Grid',
    'Componentes React'
  ]

  return (
    <section id="skills" ref={ref} className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Habilidades</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Tecnologias e competências que estou desenvolvendo para me tornar um desenvolvedor completo
          </p>
        </motion.div>

        {/* Habilidades Técnicas */}
        <div className="space-y-12 mb-16">
          {technicalSkills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="card"
            >
              <div className="flex items-center space-x-3 mb-6">
                <category.icon className="w-6 h-6 text-primary-400" />
                <h3 className="text-xl font-bold text-white">{category.category}</h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    className="text-center p-4 bg-dark-700/30 rounded-lg hover:bg-dark-700/50 transition-colors duration-300"
                  >
                    <skill.icon className={`w-8 h-8 mx-auto mb-2 ${skill.color}`} />
                    <div className="text-sm font-medium text-white mb-2">{skill.name}</div>
                    
                    {/* Barra de progresso */}
                    <div className="w-full bg-dark-600 rounded-full h-2 mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 }}
                        className="bg-gradient-to-r from-primary-400 to-primary-600 h-2 rounded-full"
                      />
                    </div>
                    <div className="text-xs text-gray-400">{skill.level}%</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Habilidades Interpessoais */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="card mb-12"
        >
          <h3 className="text-xl font-bold text-white mb-6 flex items-center">
            <HiUsers className="w-6 h-6 text-primary-400 mr-3" />
            Habilidades Interpessoais
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="p-4 bg-dark-700/30 rounded-lg hover:bg-dark-700/50 transition-colors duration-300"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <skill.icon className="w-5 h-5 text-primary-400" />
                  <h4 className="font-semibold text-white">{skill.name}</h4>
                </div>
                <p className="text-sm text-gray-400">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Conceitos e Conhecimentos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="card"
        >
          <h3 className="text-xl font-bold text-white mb-6 flex items-center">
            <HiLightBulb className="w-6 h-6 text-primary-400 mr-3" />
            Conceitos e Conhecimentos
          </h3>
          
          <div className="flex flex-wrap gap-3">
            {concepts.map((concept, index) => (
              <motion.span
                key={concept}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 1 + index * 0.05 }}
                className="px-4 py-2 bg-primary-600/20 text-primary-300 rounded-full text-sm border border-primary-600/30 hover:bg-primary-600/30 transition-colors duration-300"
              >
                {concept}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600/10 to-primary-400/10 rounded-2xl p-8 border border-primary-600/20">
            <h3 className="text-xl font-bold text-white mb-4">
              Interessado em ver meus projetos?
            </h3>
            <p className="text-gray-400 mb-6">
              Confira alguns dos projetos que desenvolvi aplicando essas habilidades
            </p>
            <a
              href="#projects"
              className="btn-primary inline-flex items-center"
            >
              Ver Projetos
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
