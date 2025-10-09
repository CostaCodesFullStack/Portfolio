'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimes,
} from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { useTranslation } from '@/contexts/TranslationContext';
import { getContactInfo } from '@/lib/config';

const Contact = () => {
  const { t } = useTranslation();
  const contactInfo = getContactInfo();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Limpar erros quando o usuário começar a digitar
    if (submitError) setSubmitError('');
    if (validationErrors.length > 0) setValidationErrors([]);
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Tentar abrir o Gmail diretamente
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${contactInfo.email}&su=Contato via Portfólio&body=Olá Cauã,%0D%0A%0D%0AEspero que esteja bem!%0D%0A%0D%0A`;
    
    // Abrir em nova aba
    window.open(gmailUrl, '_blank');
    
    // Fallback: tentar mailto também
    setTimeout(() => {
      window.location.href = `mailto:${contactInfo.email}?subject=Contato via Portfólio&body=Olá Cauã,%0D%0A%0D%0AEspero que esteja bem!%0D%0A%0D%0A`;
    }, 100);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setValidationErrors([]);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Verificar se a resposta é válida
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Verificar se o conteúdo é JSON válido
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Resposta não é JSON válido');
      }

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Resetar estado de sucesso após 5 segundos
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        if (data.errors && data.errors.length > 0) {
          setValidationErrors(data.errors);
        } else {
          setSubmitError(
            data.message || 'Erro ao enviar mensagem. Tente novamente.'
          );
        }
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      
      // Tratar diferentes tipos de erro
      if (error instanceof SyntaxError) {
        setSubmitError('Erro no servidor. Tente novamente mais tarde.');
      } else if (error instanceof TypeError) {
        setSubmitError('Erro de conexão. Verifique sua internet e tente novamente.');
      } else {
        setSubmitError('Erro inesperado. Tente novamente mais tarde.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfoData = [
    {
      icon: FaEnvelope,
      title: t.contact.email,
      value: contactInfo.email,
      href: '#',
      description: t.contact.contactInfo.email,
      onClick: handleEmailClick,
    },
    {
      icon: FaPhone,
      title: t.contact.phone,
      value: contactInfo.phone,
      href: `https://wa.me/5516988572014?text=Olá Cauã! Vi seu portfólio e gostaria de conversar sobre`,
      description: t.contact.contactInfo.phone,
    },
    {
      icon: FaMapMarkerAlt,
      title: t.contact.location,
      value: contactInfo.location,
      href: 'https://www.google.com/maps/search/Matão,+SP,+Brasil',
      description: t.contact.contactInfo.location,
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      name: 'GitHub',
      href: contactInfo.social.github,
      color: 'hover:text-gray-100',
    },
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      href: contactInfo.social.linkedin,
      color: 'hover:text-blue-400',
    },
    {
      icon: FaEnvelope,
      name: 'Email',
      href: `mailto:${contactInfo.social.email}`,
      color: 'hover:text-red-400',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="section-padding bg-gray-100/50 dark:bg-dark-800/30"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{t.contact.title}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t.contact.letsWorkTogether}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                {t.contact.contactDescription}
              </p>
            </div>

            {/* Informações de Contato */}
            <div className="space-y-6">
              {contactInfoData.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  onClick={info.onClick}
                  target={info.href.startsWith('mailto:') || info.href.startsWith('tel:') ? '_self' : '_blank'}
                  rel={info.href.startsWith('mailto:') || info.href.startsWith('tel:') ? '' : 'noopener noreferrer'}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-white/30 dark:bg-dark-700/30 rounded-lg hover:bg-white/50 dark:hover:bg-dark-700/50 transition-colors duration-300 group cursor-pointer"
                  aria-label={`${info.title}: ${info.value}`}
                >
                  <div className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center group-hover:bg-primary-600/30 transition-colors duration-300">
                    <info.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-medium">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {info.value}
                    </p>
                    <p className="text-primary-400 text-xs">
                      {info.description}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Links Sociais */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                {t.contact.socialMedia}
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 bg-white/50 dark:bg-dark-700/50 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 hover:bg-white/70 dark:hover:bg-dark-700/70`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Formulário de Contato */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="contact-form"
          >
            <h3 className="form-title">{t.contact.sendMessage}</h3>

            {/* Mensagens de erro */}
            {(submitError || validationErrors.length > 0) && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
              >
                <div className="flex items-start">
                  <FaExclamationTriangle className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                  <div className="flex-1">
                    {submitError && (
                      <p className="text-red-700 dark:text-red-300 font-medium mb-2">
                        {submitError}
                      </p>
                    )}
                    {validationErrors.length > 0 && (
                      <div>
                        <p className="text-red-700 dark:text-red-300 font-medium mb-2">
                          Por favor, corrija os seguintes erros:
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                          {validationErrors.map((error, index) => (
                            <li
                              key={index}
                              className="text-red-600 dark:text-red-400 text-sm"
                            >
                              {error}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => {
                      setSubmitError('');
                      setValidationErrors([]);
                    }}
                    className="ml-2 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                  >
                    <FaTimes className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <FaCheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {t.contact.formSuccess.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {t.contact.formSuccess.message}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      {t.contact.formLabels.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder={t.contact.formPlaceholders.name}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      {t.contact.formLabels.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder={t.contact.formPlaceholders.email}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    {t.contact.formLabels.subject}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder={t.contact.formPlaceholders.subject}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    {t.contact.formLabels.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="form-textarea"
                    placeholder={t.contact.formPlaceholders.message}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="form-button"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>{t.contact.sending}</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-5 h-5" />
                      <span>{t.contact.send}</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Call to Action Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600/10 to-primary-400/10 rounded-2xl p-8 border border-primary-600/20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t.contact.finalCta.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              {t.contact.finalCta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#home"
                className="btn-primary inline-flex items-center justify-center"
              >
                {t.contact.finalCta.backToTop}
              </a>
              <a
                href={contactInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center"
              >
                <FaGithub className="w-5 h-5 mr-2" />
                {t.contact.finalCta.viewGitHub}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
