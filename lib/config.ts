// Configurações centralizadas do portfólio
export const portfolioConfig = {
  // Informações de contato
  contact: {
    email: 'cauadevcosta@gmail.com',
    phone: '+55 (16) 98857-2014',
    location: 'Matão, SP - Brasil',
    social: {
      github: 'https://github.com/CostaCodesFullStack',
      linkedin: 'https://www.linkedin.com/in/caua-costa-222900278',
      email: 'cauadevcosta@gmail.com',
    },
  },

  // Configurações de email
  email: {
    // Email de destino para mensagens do formulário
    destination: 'cauadevcosta@gmail.com',
    // Assunto padrão para emails do formulário
    subjectPrefix: '[Portfólio]',
    // Configurações do servidor de email
    service: 'gmail' as const,
  },

  // Configurações do site
  site: {
    name: 'Cauã Costa - Portfólio',
    url:
      process.env.NEXT_PUBLIC_SITE_URL ||
      'https://portfolio-one-gold-6xch6vskv8.vercel.app',
    author: 'Cauã Costa',
  },
};

// Função para obter o email de destino
export const getDestinationEmail = (): string => {
  return portfolioConfig.contact.email;
};

// Função para obter configurações de email
export const getEmailConfig = () => {
  return {
    destination: portfolioConfig.contact.email,
    subjectPrefix: portfolioConfig.email.subjectPrefix,
    service: portfolioConfig.email.service,
    from: process.env.EMAIL_USER || portfolioConfig.contact.email,
  };
};

// Função para gerar assunto do email
export const generateEmailSubject = (userSubject: string): string => {
  return `${portfolioConfig.email.subjectPrefix} ${userSubject}`;
};

// Função para obter informações de contato
export const getContactInfo = () => {
  return portfolioConfig.contact;
};
