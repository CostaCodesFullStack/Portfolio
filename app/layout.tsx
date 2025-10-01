import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Particles from '@/components/Particles'
import { TranslationProvider } from '@/contexts/TranslationContext'
import ThemeProviderWrapper from '@/components/providers/ThemeProviderWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cauã Costa - Estudante de Engenharia de Software',
  description: 'Portfólio profissional de Cauã Costa, estudante de Engenharia de Software na Faculdade Anhanguera Conheça meus projetos, habilidades e jornada de aprendizado em programação.',
  keywords: ['portfólio', 'engenharia de software', 'desenvolvedor', 'programação', 'tecnologia', 'UFC', 'Fortaleza', 'React', 'JavaScript'],
  authors: [{ name: 'Cauã Costa' }],
  creator: 'Cauã Costa',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://cauacosta.dev',
    title: 'Cauã Costa - Estudante de Engenharia de Software',
    description: 'Portfólio profissional de Cauã Costa, estudante de Engenharia de Software na Faculdade Anhanguera Conheça meus projetos e habilidades.',
    siteName: 'Cauã Costa Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cauã Costa - Estudante de Engenharia de Software',
    description: 'Portfólio profissional de Cauã Costa, estudante de Engenharia de Software na Faculdade Anhanguera',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProviderWrapper>
          <TranslationProvider>
            <Particles />
            <Navbar />
            <main className="relative z-10">
              {children}
            </main>
            <Footer />
          </TranslationProvider>
        </ThemeProviderWrapper>
      </body>
    </html>
  )
}
