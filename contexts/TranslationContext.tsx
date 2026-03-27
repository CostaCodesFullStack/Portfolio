'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

type Language = 'pt' | 'en';

interface Translation {
  nav: {
    home: string;
    skills: string;
    experience: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    description: string;
    cta: string;
    ctaSecondary: string;
    scrollIndicator: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    myStory: string;
    myJourney: string;
    storyText1: string;
    storyText2: string;
    storyText3: string;
    stats: {
      completedProjects: string;
      yearsOfStudy: string;
      technologiesLearned: string;
    };
    timeline: {
      softwareEngineering: string;
      firstProjects: string;
      passionDiscovery: string;
      firstContact: string;
    };
    timelineDescriptions: {
      softwareEngineering: string;
      firstProjects: string;
      passionDiscovery: string;
      firstContact: string;
    };
    cta: {
      title: string;
      description: string;
      button: string;
    };
  };
  skills: {
    title: string;
    subtitle: string;
    programmingLanguages: string;
    softSkills: string;
    concepts: string;
    softSkillsList: {
      communication: string;
      teamwork: string;
      problemSolving: string;
      continuousLearning: string;
      adaptability: string;
    };
    softSkillsDescriptions: {
      communication: string;
      teamwork: string;
      problemSolving: string;
      continuousLearning: string;
      adaptability: string;
    };
    conceptsList: string[];
    cta: {
      title: string;
      description: string;
      button: string;
    };
  };
  experience: {
    title: string;
    subtitle: string;
    education: string;
    projectsAndLearning: string;
    certifications: string;
    achievements: string;
    current: string;
    inProgress: string;
    timeline: {
      softwareEngineering: string;
      firstProjects: string;
      passionDiscovery: string;
      firstContact: string;
    };
    experiences: {
      webDevelopment: string;
      personalProjects: string;
      webDevelopmentStudies: string;
      independentLearning: string;
      modsDevelopment: string;
      fivemBot: string;
    };
    certificationsList: {
      htmlCss: string;
      javascript: string;
      python: string;
      java: string;
    };
    achievementsList: {
      portfolio: string;
      webProjects: string;
      certifications: string;
      apiIntegration: string;
      projectDeploy: string;
      continuousLearning: string;
    };
    educationDetails: {
      title: string;
      institution: string;
      location: string;
      description: string;
    };
    experienceDetails: {
      achievements: string;
      webDevelopmentDescription: string;
      learningDescription: string;
      modsDescription: string;
      webDevelopmentAchievements: string[];
      learningAchievements: string[];
      modsAchievements: string[];
    };
    practicalExperience: {
      title: string;
      fivemBot: {
        title: string;
        type: string;
        period: string;
        description: string;
        achievements: string[];
      };
      webDevelopment: {
        title: string;
        type: string;
        period: string;
        description: string;
        achievements: string[];
      };
      modsDevelopment: {
        title: string;
        type: string;
        period: string;
        description: string;
        achievements: string[];
      };
    };
    certificationDetails: {
      htmlCss: string;
      javascript: string;
      python: string;
      java: string;
    };
    achievementDetails: {
      portfolio: string;
      webProjects: string;
      certifications: string;
      apiIntegration: string;
      projectDeploy: string;
      continuousLearning: string;
    };
    technologies: {
      title: string;
      subtitle: string;
      categories: {
        frontend: string;
        backend: string;
        tools: string;
      };
      technologies: {
        react: string;
        html5: string;
        css3: string;
        javascript: string;
        python: string;
        java: string;
        c: string;
        lua: string;
        git: string;
        api: string;
        mysql: string;
        typescript: string;
      };
    };
    cta: {
      title: string;
      description: string;
      button: string;
      viewProjects: string;
    };
  };
  projects: {
    title: string;
    subtitle: string;
    viewProject: string;
    viewCode: string;
    categories: {
      featured: string;
      frontend: string;
      backend: string;
      fullstack: string;
    };
    project1: {
      title: string;
      description: string;
    };
    project2: {
      title: string;
      description: string;
    };
    project3: {
      title: string;
      description: string;
    };
    project4: {
      title: string;
      description: string;
    };
    project5: {
      title: string;
      description: string;
    };
    ariaLabels: {
      viewCode: string;
      viewDemo: string;
    };
    cta: {
      title: string;
      description: string;
      githubButton: string;
      proposeButton: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    subject: string;
    letsWorkTogether: string;
    contactDescription: string;
    socialMedia: string;
    sendMessage: string;
    phone: string;
    location: string;
    sending: string;
    formLabels: {
      name: string;
      email: string;
      subject: string;
      message: string;
    };
    formPlaceholders: {
      name: string;
      email: string;
      subject: string;
      message: string;
    };
    formSuccess: {
      title: string;
      message: string;
    };
    contactInfo: {
      email: string;
      phone: string;
      location: string;
    };
    finalCta: {
      title: string;
      description: string;
      backToTop: string;
      viewGitHub: string;
    };
  };
  footer: {
    description: string;
    quickLinks: string;
    contact: string;
    quickLinksList: {
      home: string;
      about: string;
      skills: string;
      projects: string;
      experience: string;
      contact: string;
    };
    contactInfo: {
      email: string;
      location: string;
    };
    copyright: string;
    madeWith: string;
    developedWith: string;
  };
}

const translations: Record<Language, Translation> = {
  pt: {
    nav: {
      home: 'Início',
      skills: 'Habilidades',
      experience: 'Experiência',
      projects: 'Projetos',
      contact: 'Contato',
    },
    hero: {
      greeting: 'Olá, eu sou',
      name: 'Cauã Costa',
      title: 'Estudante de Engenharia de Software',
      description:
        'Estudante de Engenharia de Software apaixonado por desenvolvimento web, fullstack e frontend moderno. Interessado em backend escalável, APIs, automação e inteligência artificial. Localizado em Matão - SP.',
      cta: 'Entre em Contato',
      ctaSecondary: 'Ver Projetos',
      scrollIndicator: 'Scroll para próxima seção',
    },
    about: {
      title: 'Sobre Mim',
      subtitle:
        'Conheça um pouco mais sobre minha jornada na programação e meus objetivos profissionais',
      description:
        'Conheça um pouco mais sobre minha jornada na programação e meus objetivos profissionais',
      myStory: 'Minha História',
      myJourney: 'Minha Jornada',
      storyText1:
        'Olá! Sou Cauã Costa, estudante de Engenharia de Software apaixonado por tecnologia e desenvolvimento. Minha jornada na programação começou em 2023, quando descobri o fascinante mundo da criação de soluções digitais e decidi me dedicar a essa área.',
      storyText2:
        'Atualmente, estou cursando Engenharia de Software com previsão de conclusão em 2029, focado em desenvolvimento web, fullstack e frontend moderno. Tenho grande interesse em backend escalável, APIs, automação e inteligência artificial.',
      storyText3:
        'Meu objetivo é me tornar um desenvolvedor full-stack de excelência, contribuindo para projetos que tenham impacto real na sociedade. Estou sempre em busca de novos desafios e oportunidades de crescimento na área de tecnologia, especialmente em desenvolvimento web.',
      stats: {
        completedProjects: 'Projetos Concluídos',
        yearsOfStudy: 'Anos de Estudo',
        technologiesLearned: 'Tecnologias Aprendidas',
      },
      timeline: {
        softwareEngineering: 'Cursando Engenharia de Software',
        firstProjects: 'Primeiros Projetos',
        passionDiscovery: 'Descoberta da Paixão',
        firstContact: 'Primeiro Contato',
      },
      timelineDescriptions: {
        softwareEngineering:
          'Cursando Engenharia de Software com foco em desenvolvimento web e fullstack',
        firstProjects:
          'Desenvolveu Conversor de Moedas e Calculadora com React e JavaScript',
        passionDiscovery:
          'Descobriu o fascínio pela programação e desenvolvimento web',
        firstContact: 'Primeiro contato com tecnologia e programação',
      },
      cta: {
        title: 'Interessado em trabalhar comigo?',
        description:
          'Estou sempre aberto a novas oportunidades e projetos interessantes',
        button: 'Vamos Conversar',
      },
    },
    skills: {
      title: 'Habilidades',
      subtitle:
        'Tecnologias e competências que estou desenvolvendo para me tornar um desenvolvedor completo',
      programmingLanguages: 'Linguagens de Programação',
      softSkills: 'Habilidades Interpessoais',
      concepts: 'Conceitos e Conhecimentos',
      softSkillsList: {
        communication: 'Comunicação',
        teamwork: 'Trabalho em Equipe',
        problemSolving: 'Resolução de Problemas',
        continuousLearning: 'Aprendizado Contínuo',
        adaptability: 'Adaptabilidade',
      },
      softSkillsDescriptions: {
        communication: 'Capacidade de comunicar ideias técnicas de forma clara',
        teamwork: 'Colaboração eficaz em projetos multidisciplinares',
        problemSolving: 'Abordagem analítica para encontrar soluções',
        continuousLearning: 'Paixão por aprender novas tecnologias e métodos',
        adaptability: 'Flexibilidade para trabalhar com diferentes tecnologias',
      },
      conceptsList: [
        'Estruturas de Dados',
        'Algoritmos',
        'Programação Orientada a Objetos',
        'Responsive Design',
        'Desenvolvimento Web',
        'Clean Code',
        'Lógica de Programação',
        'Manipulação do DOM',
        'CSS Flexbox e Grid',
        'Componentes React',
      ],
      cta: {
        title: 'Interessado em ver meus projetos?',
        description:
          'Confira alguns dos projetos que desenvolvi aplicando essas habilidades',
        button: 'Ver Projetos',
      },
    },
    experience: {
      title: 'Jornada Acadêmica',
      subtitle:
        'Minha trajetória de aprendizado, projetos pessoais e conquistas acadêmicas',
      education: 'Educação',
      projectsAndLearning: 'Projetos e Aprendizado',
      certifications: 'Certificações e Cursos',
      achievements: 'Principais Conquistas',
      current: 'Atual',
      inProgress: 'Cursando',
      timeline: {
        softwareEngineering: 'Cursando Engenharia de Software',
        firstProjects: 'Primeiros Projetos',
        passionDiscovery: 'Descoberta da Paixão',
        firstContact: 'Primeiro Contato',
      },
      experiences: {
        webDevelopment: 'Desenvolvimento de Projetos Web',
        personalProjects: 'Projetos Pessoais',
        webDevelopmentStudies: 'Estudos em Desenvolvimento Web',
        independentLearning: 'Aprendizado Independente',
        modsDevelopment: 'Estudos e Desenvolvimento de Mods MTA/FIVEM',
        fivemBot: 'Bot Discord para Comunidade FiveM',
      },
      certificationsList: {
        htmlCss: 'HTML5 e CSS3',
        javascript: 'JavaScript',
        python: 'Python',
        java: 'Java',
      },
      achievementsList: {
        portfolio: 'Portfólio Profissional',
        webProjects: 'Projetos Web',
        certifications: '3+ Certificações',
        apiIntegration: 'Integração de APIs',
        projectDeploy: 'Deploy de Projetos',
        continuousLearning: 'Aprendizado Contínuo',
      },
      educationDetails: {
        title: 'Engenharia de Software',
        institution: 'Faculdade Anhanguera',
        location: 'Matão, SP',
        description:
          'Graduação em Engenharia de Software com foco em desenvolvimento de sistemas, arquitetura de software e engenharia de requisitos. Previsão de conclusão em 2029.',
      },
      experienceDetails: {
        achievements: 'Principais realizações:',
        webDevelopmentDescription:
          'Desenvolvimento de projetos web práticos incluindo Conversor de Moedas e Calculadora, aplicando conhecimentos em React e JavaScript.',
        learningDescription:
          'Dedicação intensiva ao aprendizado de tecnologias web modernas através de cursos online e prática constante.',
        modsDescription:
          'Dedicação intensiva ao estudo da linguagem LUA aplicada ao desenvolvimento de modificações (mods) para plataformas MTA e FIVEM, explorando conceitos de lógica de programação, sistemas dinâmicos e integração com servidores.',
        webDevelopmentAchievements: [
          'Conversor de Moedas com API externa',
          'Calculadora funcional em React',
          'Interface responsiva e moderna',
          'Integração com APIs externas',
          'Deploy em GitHub Pages',
        ],
        learningAchievements: [
          'Aprendizado de React e JavaScript',
          'Desenvolvimento de habilidades em HTML e CSS',
          'Integração com APIs externas',
          'Criação de projetos práticos',
          'Versionamento com Git e GitHub',
        ],
        modsAchievements: [
          'Aprendizado e prática da linguagem LUA para criação de scripts e sistemas em servidores MTA e FIVEM',
          'Desenvolvimento de recursos personalizados como sistemas de login, inventário, economia e HUDs',
          'Integração com bancos de dados externos (MySQL) para persistência de informações do servidor',
          'Criação de interfaces interativas usando HTML, CSS e JavaScript integradas ao client-side dos servidores',
        ],
      },
      practicalExperience: {
        title: 'Experiência Prática',
        fivemBot: {
          title: 'Bot Discord para Comunidades FiveM',
          type: 'Aplicação de Bot Discord',
          period: '2026',
          description:
            'Um bot Discord completo desenvolvido para comunidades FiveM/GTA RP, com arquitetura modular incluindo sistemas de verificação, moderação e ferramentas de gestão comunitária.',
          achievements: [
            'Implementei um sistema robusto de verificação usando discord.js v14 e Zod para validação de schemas, garantindo onboarding seguro de usuários com verificações personalizadas.',
            'Desenvolvi funcionalidades de gestão de advertências com integração MongoDB para armazenamento persistente e políticas automatizadas de escalonamento.',
            'Criei recursos de anúncios e agendamento de eventos usando Fastify para endpoints API e Canvas para geração dinâmica de imagens.',
            'Integrei suporte multi-banco de dados (MongoDB, MySQL, SQLite) com Sequelize ORM para gestão flexível de dados conforme diferentes necessidades da comunidade.',
            'Utilizei Winston para logging avançado e rastreamento de erros, melhorando depuração e monitoramento operacional.',
            'Empreguei tsup para compilação eficiente de TypeScript e ES Modules com imports mapeados para estrutura de código escalável e sustentável.',
            'Criei mecanismos de controle de presença com atribuição automática de cargos e rastreamento via eventos do Discord.',
            'Otimizei performance com arquitetura modular, reduzindo tempos de carga e melhorando experiência do usuário em servidores RP de alto tráfego.',
          ],
        },
        webDevelopment: {
          title: 'Desenvolvimento de Projetos Web',
          type: 'Projetos Pessoais',
          period: '2025',
          description:
            'Desenvolvimento de projetos web práticos aplicando React e JavaScript',
          achievements: [
            'Conversor de Moedas com API externa',
            'Calculadora funcional em React',
            'Interface responsiva e moderna',
            'Deploy em GitHub Pages',
          ],
        },
        modsDevelopment: {
          title: 'Mods MTA/FIVEM (LUA)',
          type: 'Aprendizado Independente',
          period: '2023',
          description:
            'Desenvolvimento de modificações usando LUA para servidores de jogos',
          achievements: [
            'Sistemas de login, inventário e economia',
            'Integração com MySQL para persistência de dados',
            'Interfaces interativas com HTML/CSS/JS',
            'Scripts e sistemas dinâmicos',
          ],
        },
      },
      certificationDetails: {
        htmlCss:
          'Desenvolvimento web com HTML5 e CSS3, incluindo responsividade e design moderno.',
        javascript:
          'Fundamentos de JavaScript, DOM, APIs e desenvolvimento web interativo.',
        python:
          'Fundamentos de Python, estruturas de dados, algoritmos e desenvolvimento de aplicações.',
        java: 'Fundamentos de Java, orientação a objetos, estruturas de dados e desenvolvimento de aplicações.',
      },
      achievementDetails: {
        portfolio: 'Desenvolvimento de portfólio completo com React e Next.js',
        webProjects:
          'Conversor de Moedas e Calculadora desenvolvidos com React',
        certifications: 'Conclusão de cursos em HTML, CSS, JavaScript e React',
        apiIntegration:
          'Experiência com APIs externas no projeto Conversor de Moedas',
        projectDeploy: 'Deploy de projetos no GitHub Pages',
        continuousLearning:
          'Dedicação ao estudo de desenvolvimento web e fullstack',
      },
      technologies: {
        title: 'Tecnologias Dominadas',
        subtitle:
          'Tecnologias e ferramentas que domino através de prática e estudo',
        categories: {
          frontend: 'Frontend',
          backend: 'Backend/Linguagens',
          tools: 'Ferramentas',
        },
        technologies: {
          react: 'React',
          html5: 'HTML5',
          css3: 'CSS3',
          javascript: 'JavaScript',
          python: 'Python',
          java: 'Java',
          c: 'C',
          lua: 'LUA',
          git: 'Git/GitHub',
          api: 'APIs REST',
          mysql: 'MySQL',
          typescript: 'TypeScript',
        },
      },
      cta: {
        title: 'Pronto para novos desafios?',
        description:
          'Estou em busca de oportunidades para aplicar meus conhecimentos e continuar aprendendo',
        button: 'Vamos Conversar',
        viewProjects: 'Ver Todos os Projetos',
      },
    },
    projects: {
      title: 'Projetos',
      subtitle:
        'Alguns dos projetos que desenvolvi durante minha jornada de aprendizado em programação',
      viewProject: 'Ver Projeto',
      viewCode: 'Ver Código',
      categories: {
        featured: 'Destaques',
        frontend: 'Frontend',
        backend: 'Backend',
        fullstack: 'Full-Stack',
      },
      project1: {
        title: 'Conversor de Moedas',
        description:
          'Aplicação simples e responsiva para converter moedas em tempo real consumindo API externa. Interface intuitiva com seleção de moedas e valores atualizados.',
      },
      project2: {
        title: 'Calculadora',
        description:
          'Calculadora funcional desenvolvida em React com interface moderna. Inclui operações básicas com design responsivo e experiência de usuário otimizada.',
      },
      project3: {
        title: 'Calculadora IMC',
        description:
          'Aplicação web de cálculo de IMC desenvolvida com HTML, CSS e JavaScript, com interface responsiva e classificação automática baseada em padrões de saúde.',
      },
      project4: {
        title: 'Landing Page Educacional',
        description:
          'Landing page moderna e responsiva para uma cafeteria fictícia, desenvolvida com HTML, CSS e JavaScript. Inclui seções de apresentação, cardápio, depoimentos e contato com design elegante e interativo.',
      },
      project5: {
        title: 'Sistema de Mercado em Java',
        description:
          'Projeto educacional de backend em Java puro para simular o funcionamento de um caixa de mercado, com cadastro de produtos, controle de estoque e carrinho de compras aplicando POO e separacao em camadas.',
      },
      ariaLabels: {
        viewCode: 'Ver código no GitHub',
        viewDemo: 'Ver demonstração',
      },
      cta: {
        title: 'Interessado em ver mais projetos?',
        description:
          'Confira todos os meus projetos no GitHub e acompanhe minha evolução',
        githubButton: 'Ver no GitHub',
        proposeButton: 'Propor Projeto',
      },
    },
    contact: {
      title: 'Contato',
      subtitle:
        'Vamos conversar! Estou sempre aberto a novas oportunidades e projetos interessantes',
      name: 'Nome',
      email: 'Email',
      message: 'Mensagem',
      send: 'Enviar Mensagem',
      subject: 'Assunto',
      letsWorkTogether: 'Vamos trabalhar juntos?',
      contactDescription:
        'Estou sempre interessado em novos projetos e oportunidades de colaboração. Se você tem uma ideia ou projeto em mente, não hesite em entrar em contato!',
      socialMedia: 'Redes Sociais',
      sendMessage: 'Envie uma mensagem',
      phone: 'Telefone',
      location: 'Localização',
      sending: 'Enviando...',
      formLabels: {
        name: 'Nome *',
        email: 'Email *',
        subject: 'Assunto *',
        message: 'Mensagem *',
      },
      formPlaceholders: {
        name: 'Seu nome completo',
        email: 'seu@email.com',
        subject: 'Qual o assunto da sua mensagem?',
        message: 'Conte-me sobre seu projeto ou ideia...',
      },
      formSuccess: {
        title: 'Mensagem enviada!',
        message: 'Obrigado pelo contato. Responderei em breve!',
      },
      contactInfo: {
        email: 'Envie-me um email',
        phone: 'Envie uma mensagem no WhatsApp',
        location: 'Ver no Google Maps',
      },
      finalCta: {
        title: 'Obrigado por visitar meu portfólio!',
        description:
          'Espero que tenha gostado de conhecer um pouco sobre mim e meus projetos. Estou sempre em busca de novos desafios e oportunidades de crescimento.',
        backToTop: 'Voltar ao Topo',
        viewGitHub: 'Ver no GitHub',
      },
    },
    footer: {
      description:
        'Estudante de Engenharia de Software apaixonado por tecnologia e desenvolvimento. Construindo soluções inovadoras e aprendendo constantemente.',
      quickLinks: 'Links Rápidos',
      contact: 'Contato',
      quickLinksList: {
        home: 'Início',
        about: 'Sobre',
        skills: 'Habilidades',
        projects: 'Projetos',
        experience: 'Experiência',
        contact: 'Contato',
      },
      contactInfo: {
        email: 'cauadevcosta@gmail.com',
        location: 'Matão, SP',
      },
      copyright: 'Cauã Costa.',
      madeWith: '',
      developedWith: 'Desenvolvido com Next.js',
    },
  },
  en: {
    nav: {
      home: 'Home',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hello, I am',
      name: 'Cauã Costa',
      title: 'Software Engineering Student',
      description:
        'Software Engineering student passionate about web development, fullstack and modern frontend. Interested in scalable backend, APIs, automation and artificial intelligence. Based in Matão - SP.',
      cta: 'Get in Touch',
      ctaSecondary: 'View Projects',
      scrollIndicator: 'Scroll to next section',
    },
    about: {
      title: 'About Me',
      subtitle:
        'Learn more about my programming journey and professional goals',
      description:
        'Learn more about my programming journey and professional goals',
      myStory: 'My Story',
      myJourney: 'My Journey',
      storyText1:
        'Hello! I am Cauã Costa, a Software Engineering student passionate about technology and development. My programming journey began in 2023, when I discovered the fascinating world of creating digital solutions and decided to dedicate myself to this field.',
      storyText2:
        'Currently, I am studying Software Engineering with expected completion in 2029, focused on web development, fullstack and modern frontend. I have great interest in scalable backend, APIs, automation and artificial intelligence.',
      storyText3:
        'My goal is to become an excellent full-stack developer, contributing to projects that have real impact on society. I am always looking for new challenges and growth opportunities in the technology field, especially in web development.',
      stats: {
        completedProjects: 'Completed Projects',
        yearsOfStudy: 'Years of Study',
        technologiesLearned: 'Technologies Learned',
      },
      timeline: {
        softwareEngineering: 'Studying Software Engineering',
        firstProjects: 'First Projects',
        passionDiscovery: 'Passion Discovery',
        firstContact: 'First Contact',
      },
      timelineDescriptions: {
        softwareEngineering:
          'Studying Software Engineering with focus on web development and fullstack',
        firstProjects:
          'Developed Currency Converter and Calculator with React and JavaScript',
        passionDiscovery:
          'Discovered fascination for programming and web development',
        firstContact: 'First contact with technology and programming',
      },
      cta: {
        title: 'Interested in working with me?',
        description:
          'I am always open to new opportunities and interesting projects',
        button: "Let's Talk",
      },
    },
    skills: {
      title: 'Skills',
      subtitle:
        'Technologies and competencies I am developing to become a complete developer',
      programmingLanguages: 'Programming Languages',
      softSkills: 'Soft Skills',
      concepts: 'Concepts and Knowledge',
      softSkillsList: {
        communication: 'Communication',
        teamwork: 'Teamwork',
        problemSolving: 'Problem Solving',
        continuousLearning: 'Continuous Learning',
        adaptability: 'Adaptability',
      },
      softSkillsDescriptions: {
        communication: 'Ability to communicate technical ideas clearly',
        teamwork: 'Effective collaboration in multidisciplinary projects',
        problemSolving: 'Analytical approach to finding solutions',
        continuousLearning: 'Passion for learning new technologies and methods',
        adaptability: 'Flexibility to work with different technologies',
      },
      conceptsList: [
        'Data Structures',
        'Algorithms',
        'Object-Oriented Programming',
        'Responsive Design',
        'Web Development',
        'Clean Code',
        'Programming Logic',
        'DOM Manipulation',
        'CSS Flexbox and Grid',
        'React Components',
      ],
      cta: {
        title: 'Interested in seeing my projects?',
        description:
          'Check out some of the projects I developed applying these skills',
        button: 'View Projects',
      },
    },
    experience: {
      title: 'Academic Journey',
      subtitle: 'My learning path, personal projects and academic achievements',
      education: 'Education',
      projectsAndLearning: 'Projects and Learning',
      certifications: 'Certifications and Courses',
      achievements: 'Main Achievements',
      current: 'Current',
      inProgress: 'In Progress',
      timeline: {
        softwareEngineering: 'Software Engineering Degree',
        firstProjects: 'First Projects',
        passionDiscovery: 'Passion Discovery',
        firstContact: 'First Contact',
      },
      experiences: {
        webDevelopment: 'Web Development Projects',
        personalProjects: 'Personal Projects',
        webDevelopmentStudies: 'Web Development Studies',
        independentLearning: 'Independent Learning',
        modsDevelopment: 'MTA/FIVEM Mods Development Studies',
        fivemBot: 'FiveM Community Discord Bot',
      },
      certificationsList: {
        htmlCss: 'HTML5 and CSS3',
        javascript: 'JavaScript',
        python: 'Python',
        java: 'Java',
      },
      achievementsList: {
        portfolio: 'Professional Portfolio',
        webProjects: 'Web Projects',
        certifications: '3+ Certifications',
        apiIntegration: 'API Integration',
        projectDeploy: 'Project Deploy',
        continuousLearning: 'Continuous Learning',
      },
      educationDetails: {
        title: 'Software Engineering',
        institution: 'Anhanguera University',
        location: 'Matão, SP',
        description:
          "Bachelor's degree in Software Engineering with focus on systems development, software architecture and requirements engineering. Expected completion in 2029.",
      },
      experienceDetails: {
        achievements: 'Main achievements:',
        webDevelopmentDescription:
          'Development of practical web projects including Currency Converter and Calculator, applying React and JavaScript knowledge.',
        learningDescription:
          'Intensive dedication to learning modern web technologies through online courses and constant practice.',
        modsDescription:
          'Intensive study of LUA language applied to the development of modifications (mods) for MTA and FIVEM platforms, exploring programming logic concepts, dynamic systems and server integration.',
        webDevelopmentAchievements: [
          'Currency Converter with external API',
          'Functional Calculator in React',
          'Responsive and modern interface',
          'External API integration',
          'Deploy on GitHub Pages',
        ],
        learningAchievements: [
          'Learning React and JavaScript',
          'Developing HTML and CSS skills',
          'External API integration',
          'Creating practical projects',
          'Versioning with Git and GitHub',
        ],
        modsAchievements: [
          'Learning and practicing LUA language for creating scripts and systems on MTA and FIVEM servers',
          'Developing custom resources like login systems, inventory, economy and HUDs',
          'Integration with external databases (MySQL) for server information persistence',
          'Creating interactive interfaces using HTML, CSS and JavaScript integrated with server client-side',
        ],
      },
      practicalExperience: {
        title: 'Practical Experience',
        fivemBot: {
          title: 'FiveM Community Discord Bot',
          type: 'Discord Bot Application',
          period: '2026',
          description:
            'A comprehensive Discord bot designed for FiveM/GTA RP communities, featuring modular architecture with verification, moderation, and community management tools.',
          achievements: [
            'Implemented a robust verification system using discord.js v14 and Zod for schema validation, ensuring secure user onboarding with custom checks.',
            'Developed warning management functionality with MongoDB integration for persistent storage and automated escalation policies.',
            'Built announcement and event scheduling features using Fastify for API endpoints and Canvas for dynamic image generation.',
            'Integrated multi-database support (MongoDB, MySQL, SQLite) with Sequelize ORM for flexible data management across different community needs.',
            'Utilized Winston for advanced logging and error tracking, improving debugging and operational monitoring.',
            'Employed tsup for efficient TypeScript compilation and ES Modules with mapped imports for scalable, maintainable code structure.',
            'Created attendance control mechanisms with automated role assignments and presence tracking via Discord events.',
            'Optimized performance with modular architecture, reducing load times and enhancing user experience in high-traffic RP servers.',
          ],
        },
        webDevelopment: {
          title: 'Web Project Development',
          type: 'Personal Projects',
          period: '2025',
          description:
            'Development of practical web projects applying React and JavaScript',
          achievements: [
            'Currency Converter with external API',
            'Functional Calculator in React',
            'Responsive and modern interface',
            'Deploy on GitHub Pages',
          ],
        },
        modsDevelopment: {
          title: 'MTA/FIVEM Mods (LUA)',
          type: 'Independent Learning',
          period: '2024',
          description:
            'Development of modifications using LUA for game servers',
          achievements: [
            'Login, inventory and economy systems',
            'Integration with MySQL for data persistence',
            'Interactive interfaces with HTML/CSS/JS',
            'Dynamic scripts and systems',
          ],
        },
      },
      certificationDetails: {
        htmlCss:
          'Web development with HTML5 and CSS3, including responsiveness and modern design.',
        javascript:
          'JavaScript fundamentals, DOM, APIs and interactive web development.',
        python:
          'Python fundamentals, data structures, algorithms and application development.',
        java: 'Java fundamentals, object-oriented programming, data structures and application development.',
      },
      achievementDetails: {
        portfolio: 'Complete portfolio development with React and Next.js',
        webProjects: 'Currency Converter and Calculator developed with React',
        certifications:
          'Completion of courses in HTML, CSS, JavaScript and React',
        apiIntegration:
          'Experience with external APIs in the Currency Converter project',
        projectDeploy: 'Project deployment on GitHub Pages',
        continuousLearning:
          'Dedication to web development and fullstack studies',
      },
      technologies: {
        title: 'Mastered Technologies',
        subtitle: 'Technologies and tools I master through practice and study',
        categories: {
          frontend: 'Frontend',
          backend: 'Backend/Languages',
          tools: 'Tools',
        },
        technologies: {
          react: 'React',
          html5: 'HTML5',
          css3: 'CSS3',
          javascript: 'JavaScript',
          python: 'Python',
          java: 'Java',
          c: 'C',
          lua: 'LUA',
          git: 'Git/GitHub',
          api: 'REST APIs',
          mysql: 'MySQL',
          typescript: 'TypeScript',
        },
      },
      cta: {
        title: 'Ready for new challenges?',
        description:
          'I am looking for opportunities to apply my knowledge and continue learning',
        button: "Let's Talk",
        viewProjects: 'View All Projects',
      },
    },
    projects: {
      title: 'Projects',
      subtitle:
        'Some of the projects I developed during my programming learning journey',
      viewProject: 'View Project',
      viewCode: 'View Code',
      categories: {
        featured: 'Featured',
        frontend: 'Frontend',
        backend: 'Backend',
        fullstack: 'Full-Stack',
      },
      project1: {
        title: 'Currency Converter',
        description:
          'Simple and responsive application to convert currencies in real time consuming external API. Intuitive interface with currency selection and updated values.',
      },
      project2: {
        title: 'Calculator',
        description:
          'Functional calculator developed in React with modern interface. Includes basic operations with responsive design and optimized user experience.',
      },
      project3: {
        title: 'IMC Calculator',
        description:
          'Web application for BMI calculation developed with HTML, CSS and JavaScript, featuring a responsive interface and automatic classification based on health standards.',
      },
      project4: {
        title: 'Educational Landing Page',
        description:
          'Modern and responsive landing page for a fictional coffee shop, developed with HTML, CSS and JavaScript. Includes presentation, menu, testimonials and contact sections with elegant and interactive design.',
      },
      project5: {
        title: 'Java Market System',
        description:
          'Educational backend project built with pure Java to simulate a grocery checkout system, including product registration, stock control and shopping cart flows while applying OOP and layered separation.',
      },
      ariaLabels: {
        viewCode: 'View code on GitHub',
        viewDemo: 'View demonstration',
      },
      cta: {
        title: 'Interested in seeing more projects?',
        description:
          'Check out all my projects on GitHub and follow my evolution',
        githubButton: 'View on GitHub',
        proposeButton: 'Propose Project',
      },
    },
    contact: {
      title: 'Contact',
      subtitle:
        "Let's talk! I am always open to new opportunities and interesting projects",
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      subject: 'Subject',
      letsWorkTogether: "Let's work together?",
      contactDescription:
        "I am always interested in new projects and collaboration opportunities. If you have an idea or project in mind, don't hesitate to get in touch!",
      socialMedia: 'Social Media',
      sendMessage: 'Send a message',
      phone: 'Phone',
      location: 'Location',
      sending: 'Sending...',
      formLabels: {
        name: 'Name *',
        email: 'Email *',
        subject: 'Subject *',
        message: 'Message *',
      },
      formPlaceholders: {
        name: 'Your full name',
        email: 'your@email.com',
        subject: 'What is the subject of your message?',
        message: 'Tell me about your project or idea...',
      },
      formSuccess: {
        title: 'Message sent!',
        message: 'Thank you for contacting me. I will respond soon!',
      },
      contactInfo: {
        email: 'Send me an email',
        phone: 'Call me',
        location: 'I am based here',
      },
      finalCta: {
        title: 'Thank you for visiting my portfolio!',
        description:
          'I hope you enjoyed learning a bit about me and my projects. I am always looking for new challenges and growth opportunities.',
        backToTop: 'Back to Top',
        viewGitHub: 'View on GitHub',
      },
    },
    footer: {
      description:
        'Software Engineering student passionate about technology and development. Building innovative solutions and constantly learning.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      quickLinksList: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        experience: 'Experience',
        contact: 'Contact',
      },
      contactInfo: {
        email: 'cauadevcosta@gmail.com',
        location: 'Matão, SP',
      },
      copyright: 'Cauã Costa. Made with',
      madeWith: 'and lots of coffee ☕',
      developedWith: 'Developed with Next.js',
    },
  },
};

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
}

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
);

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider = ({ children }: TranslationProviderProps) => {
  const [language, setLanguage] = useState<Language>('pt');

  useEffect(() => {
    // Verificar se há preferência salva no localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    // Salvar preferência no localStorage
    localStorage.setItem('language', language);
  }, [language]);

  const value: TranslationContextType = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};
