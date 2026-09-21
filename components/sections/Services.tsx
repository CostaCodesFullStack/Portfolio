'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaDiscord,
  FaServer,
  FaDesktop,
  FaCode,
  FaTools,
} from 'react-icons/fa';
import { IconType } from 'react-icons';
import React from 'react';
import { useTranslation } from '@/contexts/TranslationContext';
import { container, item, fadeUp } from '@/lib/motion';

// Wrapper para corrigir tipagem do react-icons com className
const Icon = ({
  icon: IconComponent,
  className,
}: {
  icon: IconType;
  className?: string;
}) => {
  const Comp = IconComponent as React.ElementType;
  return <Comp className={className} />;
};

const Services = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    { ...t.services.items.discordBots, icon: FaDiscord },
    { ...t.services.items.saasDashboards, icon: FaServer },
    { ...t.services.items.desktopApps, icon: FaDesktop },
    { ...t.services.items.apis, icon: FaCode },
    { ...t.services.items.maintenance, icon: FaTools },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="section-padding bg-gray-100/50 dark:bg-dark-800/30"
    >
      <div className="container-custom">
        <motion.div
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={fadeUp()}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{t.services.title}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={container}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map(service => (
            <motion.div
              key={service.title}
              variants={item}
              className="card hover:border-primary-600/30 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-600/10 flex items-center justify-center mb-4">
                <Icon
                  icon={service.icon}
                  className="w-6 h-6 text-primary-400"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={fadeUp(0.3)}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600/10 to-primary-400/10 rounded-2xl p-8 border border-primary-600/20">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {t.services.cta.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t.services.cta.description}
            </p>
            <a href="#contact" className="btn-primary inline-flex items-center">
              {t.services.cta.button}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
