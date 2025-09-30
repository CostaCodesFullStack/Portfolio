'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'pt' | 'en'

interface Translation {
  nav: {
    home: string
    skills: string
    experience: string
    projects: string
    contact: string
  }
  hero: {
    greeting: string
    name: string
    title: string
    description: string
    cta: string
  }
  about: {
    title: string
    subtitle: string
    description: string
  }
  skills: {
    title: string
    subtitle: string
  }
  experience: {
    title: string
    subtitle: string
  }
  projects: {
    title: string
    subtitle: string
    viewProject: string
    viewCode: string
  }
  contact: {
    title: string
    subtitle: string
    name: string
    email: string
    message: string
    send: string
  }
}

const translations: Record<Language, Translation> = {
  pt: {
    nav: {
      home: 'Início',
      skills: 'Habilidades',
      experience: 'Experiência',
      projects: 'Projetos',
      contact: 'Contato'
    },
    hero: {
      greeting: 'Olá, eu sou',
      name: 'Cauã Costa',
      title: 'Estudante de Engenharia de Software',
      description: 'Apaixonado por tecnologia e desenvolvimento de software. Atualmente cursando Engenharia de Software na UFC e explorando o mundo da programação.',
      cta: 'Conheça meu trabalho'
    },
    about: {
      title: 'Sobre Mim',
      subtitle: 'Conheça minha jornada',
      description: 'Sou um estudante de Engenharia de Software apaixonado por tecnologia e inovação. Minha jornada no desenvolvimento começou com curiosidade e hoje se transformou em uma paixão genuína por criar soluções que fazem a diferença.'
    },
    skills: {
      title: 'Habilidades',
      subtitle: 'Tecnologias que domino'
    },
    experience: {
      title: 'Experiência',
      subtitle: 'Minha jornada profissional'
    },
    projects: {
      title: 'Projetos',
      subtitle: 'Alguns dos meus trabalhos',
      viewProject: 'Ver Projeto',
      viewCode: 'Ver Código'
    },
    contact: {
      title: 'Contato',
      subtitle: 'Vamos conversar',
      name: 'Nome',
      email: 'Email',
      message: 'Mensagem',
      send: 'Enviar Mensagem'
    }
  },
  en: {
    nav: {
      home: 'Home',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hello, I am',
      name: 'Cauã Costa',
      title: 'Software Engineering Student',
      description: 'Passionate about technology and software development. Currently studying Software Engineering at UFC and exploring the world of programming.',
      cta: 'View my work'
    },
    about: {
      title: 'About Me',
      subtitle: 'Get to know my journey',
      description: 'I am a Software Engineering student passionate about technology and innovation. My journey in development started with curiosity and today has become a genuine passion for creating solutions that make a difference.'
    },
    skills: {
      title: 'Skills',
      subtitle: 'Technologies I master'
    },
    experience: {
      title: 'Experience',
      subtitle: 'My professional journey'
    },
    projects: {
      title: 'Projects',
      subtitle: 'Some of my work',
      viewProject: 'View Project',
      viewCode: 'View Code'
    },
    contact: {
      title: 'Contact',
      subtitle: "Let's talk",
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message'
    }
  }
}

interface TranslationContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translation
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export const useTranslation = () => {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider')
  }
  return context
}

interface TranslationProviderProps {
  children: ReactNode
}

export const TranslationProvider = ({ children }: TranslationProviderProps) => {
  const [language, setLanguage] = useState<Language>('pt')

  useEffect(() => {
    // Verificar se há preferência salva no localStorage
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en')) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    // Salvar preferência no localStorage
    localStorage.setItem('language', language)
  }, [language])

  const value = {
    language,
    setLanguage,
    t: translations[language]
  }

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  )
}
