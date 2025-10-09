'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SiC, SiReact, SiHtml5, SiCss3, SiJavascript, SiPython, SiLua, SiGit, SiMysql } from 'react-icons/si';
import { HiCode, HiCog, HiLightBulb, HiUsers } from 'react-icons/hi';
import { useTranslation } from '@/contexts/TranslationContext';

const Skills = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Tecnologias Dominadas - Badges por Categoria
  const technologies = {
    frontend: [
      { name: t.experience.technologies.technologies.react, icon: SiReact },
      { name: t.experience.technologies.technologies.html5, icon: SiHtml5 },
      { name: t.experience.technologies.technologies.css3, icon: SiCss3 },
      { name: t.experience.technologies.technologies.javascript, icon: SiJavascript },
    ],
    backend: [
      { name: t.experience.technologies.technologies.python, icon: SiPython },
      { name: t.experience.technologies.technologies.c, icon: SiC },
      { name: t.experience.technologies.technologies.lua, icon: SiLua },
    ],
    tools: [
      { name: t.experience.technologies.technologies.git, icon: SiGit },
      { name: t.experience.technologies.technologies.api, icon: HiCode },
      { name: t.experience.technologies.technologies.mysql, icon: SiMysql },
    ],
  };

  const softSkills = [
    {
      name: t.skills.softSkillsList.communication,
      icon: HiUsers,
      description: t.skills.softSkillsDescriptions.communication,
    },
    {
      name: t.skills.softSkillsList.teamwork,
      icon: HiUsers,
      description: t.skills.softSkillsDescriptions.teamwork,
    },
    {
      name: t.skills.softSkillsList.problemSolving,
      icon: HiLightBulb,
      description: t.skills.softSkillsDescriptions.problemSolving,
    },
    {
      name: t.skills.softSkillsList.continuousLearning,
      icon: HiCode,
      description: t.skills.softSkillsDescriptions.continuousLearning,
    },
    {
      name: t.skills.softSkillsList.adaptability,
      icon: HiCog,
      description: t.skills.softSkillsDescriptions.adaptability,
    },
  ];

  const concepts = t.skills.conceptsList;

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
            <span className="gradient-text">{t.skills.title}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            {t.skills.subtitle}
          </p>
        </motion.div>

        {/* Tecnologias Dominadas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="card mb-12"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <HiCode className="w-6 h-6 text-primary-400 mr-3" />
            {t.experience.technologies.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            {t.experience.technologies.subtitle}
          </p>
          
          <div className="space-y-8">
            {Object.entries(technologies).map(([category, techs], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + categoryIndex * 0.2 }}
                className="space-y-4"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t.experience.technologies.categories[category as keyof typeof t.experience.technologies.categories]}
                </h4>
                
                <div className="flex flex-wrap gap-3">
                  {techs.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.6 + categoryIndex * 0.2 + techIndex * 0.1 }}
                      className="flex items-center space-x-2 bg-purple-600/10 hover:bg-purple-600/20 text-purple-400 hover:text-purple-300 px-4 py-2 rounded-full border border-purple-600/30 hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                      <tech.icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Habilidades Interpessoais */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="card mb-12"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <HiUsers className="w-6 h-6 text-primary-400 mr-3" />
            {t.skills.softSkills}
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="p-4 bg-white/30 dark:bg-dark-700/30 rounded-lg hover:bg-white/50 dark:hover:bg-dark-700/50 transition-colors duration-300"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <skill.icon className="w-5 h-5 text-primary-400" />
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
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
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <HiLightBulb className="w-6 h-6 text-primary-400 mr-3" />
            {t.skills.concepts}
          </h3>

          <div className="flex flex-wrap gap-3">
            {concepts.map((concept, index) => (
              <motion.span
                key={concept}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 1 + index * 0.05 }}
                className="px-4 py-2 bg-primary-600/20 dark:bg-primary-600/20 text-primary-700 dark:text-primary-300 rounded-full text-sm border border-primary-600/30 hover:bg-primary-600/30 transition-colors duration-300"
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
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {t.skills.cta.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t.skills.cta.description}
            </p>
            <a
              href="#projects"
              className="btn-primary inline-flex items-center"
            >
              {t.skills.cta.button}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
