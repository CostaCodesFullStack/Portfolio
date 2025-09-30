'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'
import { HiCode } from 'react-icons/hi'
import { useTranslation } from '@/contexts/TranslationContext'

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/CostaCodesFullStack', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/caua-costa-222900278', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:cauadevcosta@gmail.com', label: 'Email' },
  ]

  const quickLinks = [
    { name: t.footer.quickLinksList.home, href: '#home' },
    { name: t.footer.quickLinksList.about, href: '#about' },
    { name: t.footer.quickLinksList.skills, href: '#skills' },
    { name: t.footer.quickLinksList.projects, href: '#projects' },
    { name: t.footer.quickLinksList.experience, href: '#experience' },
    { name: t.footer.quickLinksList.contact, href: '#contact' },
  ]

  return (
    <footer className="bg-gray-100 dark:bg-dark-900 border-t border-gray-300 dark:border-dark-700">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo e Descrição */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <span className="text-xl font-bold gradient-text">Cauã Costa</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
                {t.footer.description}
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white dark:bg-dark-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-dark-700 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links Rápidos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">{t.footer.quickLinks}</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Informações de Contato */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">{t.footer.contact}</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="w-4 h-4 text-primary-400" />
                  <span className="text-gray-600 dark:text-gray-400 text-sm">{t.footer.contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <HiCode className="w-4 h-4 text-primary-400" />
                  <span className="text-gray-600 dark:text-gray-400 text-sm">{t.footer.contactInfo.location}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Linha de Separação */}
        <div className="border-t border-gray-300 dark:border-dark-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-gray-600 dark:text-gray-400 text-sm flex items-center"
            >
              © {currentYear} {t.footer.copyright}{' '}
              <FaHeart className="w-4 h-4 text-red-400 mx-1" />
              {t.footer.madeWith}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center space-x-6"
            >
              <span className="text-gray-600 dark:text-gray-400 text-sm">
                {t.footer.developedWith}
              </span>
              <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
