# 🎨 Guia de Personalização - Portfólio Cauã Costa

Este guia detalhado te ajudará a personalizar o portfólio com suas próprias informações, projetos e estilo visual.

## 📋 Checklist de Personalização

### ✅ Informações Básicas
- [ ] Nome completo
- [ ] Profissão/cargo
- [ ] Foto de perfil
- [ ] Informações de contato
- [ ] Links das redes sociais
- [ ] Localização

### ✅ Conteúdo
- [ ] História pessoal
- [ ] Habilidades técnicas
- [ ] Projetos realizados
- [ ] Experiências profissionais
- [ ] Educação e certificações
- [ ] Conquistas e prêmios

### ✅ Visual
- [ ] Cores do tema
- [ ] Imagens dos projetos
- [ ] Logo personalizado
- [ ] Favicon

## 🔧 Passo a Passo

### 1. Informações Pessoais

#### Hero Section (`components/sections/Hero.tsx`)

```tsx
// Linha 15-20: Atualize os links sociais
const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/SEU_USUARIO', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/SEU_PERFIL', label: 'LinkedIn' },
  { icon: FaEnvelope, href: 'mailto:seu@email.com', label: 'Email' },
]

// Linha 25-30: Atualize o nome e profissão
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
  <span className="gradient-text">SEU NOME</span>
</h1>

<h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6">
  Sua Profissão
</h2>

// Linha 35-40: Atualize a descrição
<p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
  Sua descrição pessoal e objetivos profissionais.
</p>
```

#### About Section (`components/sections/About.tsx`)

```tsx
// Linha 30-50: Atualize sua história
<p>
  Sua história pessoal e jornada na programação...
</p>

// Linha 52-60: Atualize as estatísticas
const stats = [
  { icon: HiCode, label: 'Projetos Concluídos', value: 'X+' },
  { icon: HiAcademicCap, label: 'Anos de Estudo', value: 'X' },
  // ...
]

// Linha 62-80: Atualize a timeline
const timeline = [
  {
    year: '2024',
    title: 'Seu Marco',
    description: 'Descrição do que aconteceu',
    status: 'completed'
  },
  // ...
]
```

### 2. Habilidades Técnicas

#### Skills Section (`components/sections/Skills.tsx`)

```tsx
// Linha 20-80: Atualize as habilidades técnicas
const technicalSkills = [
  {
    category: 'Frontend',
    icon: HiCode,
    skills: [
      { name: 'React', icon: FaReact, level: 85, color: 'text-blue-400' },
      { name: 'JavaScript', icon: FaJs, level: 90, color: 'text-yellow-400' },
      // Adicione suas habilidades...
    ]
  },
  // ...
]

// Linha 82-100: Atualize as habilidades interpessoais
const softSkills = [
  { name: 'Comunicação', icon: HiUsers, description: 'Sua descrição...' },
  // ...
]

// Linha 102-120: Atualize os conceitos
const concepts = [
  'Estruturas de Dados',
  'Algoritmos',
  // Adicione seus conhecimentos...
]
```

### 3. Projetos

#### Projects Section (`components/sections/Projects.tsx`)

```tsx
// Linha 20-80: Adicione seus projetos
const projects = [
  {
    id: 1,
    title: 'Nome do Projeto',
    description: 'Descrição detalhada do projeto...',
    image: '/images/projeto1.jpg', // Adicione a imagem
    technologies: ['React', 'Node.js', 'MongoDB'],
    category: 'Full-Stack',
    icon: FaServer,
    github: 'https://github.com/seu-usuario/projeto',
    demo: 'https://seu-projeto.vercel.app',
    featured: true
  },
  // Adicione mais projetos...
]
```

**Dicas para projetos:**
- Use imagens de alta qualidade (600x400px recomendado)
- Inclua links para GitHub e demonstrações
- Seja específico nas tecnologias utilizadas
- Destaque projetos importantes com `featured: true`

### 4. Experiência Profissional

#### Experience Section (`components/sections/Experience.tsx`)

```tsx
// Linha 20-30: Atualize a educação
const education = [
  {
    year: '2024 - Atual',
    title: 'Sua Graduação',
    institution: 'Sua Universidade',
    location: 'Sua Cidade, Estado',
    description: 'Descrição do curso...',
    status: 'current',
    icon: FaGraduationCap
  }
]

// Linha 32-60: Adicione suas experiências
const experiences = [
  {
    year: '2024 - Atual',
    title: 'Seu Cargo',
    company: 'Sua Empresa',
    location: 'Sua Cidade, Estado',
    description: 'Descrição das suas responsabilidades...',
    type: 'work',
    icon: HiCode,
    achievements: [
      'Conquista 1',
      'Conquista 2',
      // ...
    ]
  }
]

// Linha 62-80: Adicione certificações
const certifications = [
  {
    title: 'Nome da Certificação',
    issuer: 'Instituição',
    date: '2024',
    icon: FaCertificate,
    description: 'Descrição da certificação...'
  }
]
```

### 5. Informações de Contato

#### Contact Section (`components/sections/Contact.tsx`)

```tsx
// Linha 20-40: Atualize as informações de contato
const contactInfo = [
  {
    icon: FaEnvelope,
    title: 'Email',
    value: 'seu@email.com',
    href: 'mailto:seu@email.com',
    description: 'Envie-me um email'
  },
  {
    icon: FaPhone,
    title: 'Telefone',
    value: '+55 (XX) 99999-9999',
    href: 'tel:+55XX999999999',
    description: 'Ligue para mim'
  },
  // ...
]
```

### 6. Personalização Visual

#### Cores (`tailwind.config.js`)

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#0ea5e9', // Sua cor primária
        500: '#0284c7',
        600: '#0369a1', // Sua cor primária escura
        700: '#075985',
        800: '#0c4a6e',
        900: '#082f49',
      },
      // Personalize outras cores...
    }
  }
}
```

#### Meta Tags (`app/layout.tsx`)

```tsx
export const metadata: Metadata = {
  title: 'Seu Nome - Sua Profissão',
  description: 'Sua descrição personalizada para SEO',
  keywords: ['palavra-chave1', 'palavra-chave2', 'palavra-chave3'],
  authors: [{ name: 'Seu Nome' }],
  creator: 'Seu Nome',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://seudominio.com',
    title: 'Seu Nome - Sua Profissão',
    description: 'Sua descrição personalizada',
    siteName: 'Seu Nome Portfolio',
  },
  // ...
}
```

### 7. Imagens e Assets

#### Estrutura de Pastas
```
public/
├── images/
│   ├── profile.jpg          # Sua foto de perfil
│   └── projects/            # Imagens dos projetos
│       ├── projeto1.jpg
│       ├── projeto2.jpg
│       └── ...
├── favicon.ico              # Seu favicon
└── logo.png                 # Seu logo (opcional)
```

#### Adicionando Sua Foto
1. Adicione sua foto em `public/images/profile.jpg`
2. Atualize o componente Hero para usar a imagem real
3. Recomendado: 400x400px, formato JPG ou PNG

#### Imagens dos Projetos
1. Adicione as imagens em `public/images/projects/`
2. Atualize os caminhos no array de projetos
3. Recomendado: 600x400px, formato JPG ou PNG

### 8. Deploy e Domínio

#### Vercel (Recomendado)
1. Conecte seu repositório GitHub
2. Configure o domínio personalizado
3. Configure as variáveis de ambiente se necessário

#### Configuração de Domínio
1. Compre um domínio personalizado
2. Configure os DNS para apontar para o Vercel
3. Atualize as meta tags com o novo domínio

## 🎯 Dicas de Personalização

### Conteúdo
- **Seja autêntico**: Escreva sobre suas experiências reais
- **Use números**: Quantifique suas conquistas quando possível
- **Seja específico**: Detalhe as tecnologias e ferramentas utilizadas
- **Mantenha atualizado**: Revise e atualize regularmente

### Visual
- **Consistência**: Mantenha o mesmo estilo em todas as seções
- **Hierarquia**: Use tamanhos de fonte e cores para criar hierarquia visual
- **Espaçamento**: Mantenha espaçamentos consistentes
- **Contraste**: Garanta bom contraste para legibilidade

### SEO
- **Palavras-chave**: Use palavras-chave relevantes no conteúdo
- **Meta tags**: Preencha todas as meta tags adequadamente
- **URLs**: Use URLs amigáveis
- **Imagens**: Adicione alt text nas imagens

## 🚀 Próximos Passos

1. **Teste localmente**: Execute `npm run dev` e teste todas as funcionalidades
2. **Valide o conteúdo**: Revise ortografia e gramática
3. **Teste responsividade**: Verifique em diferentes dispositivos
4. **Otimize imagens**: Comprima as imagens para melhor performance
5. **Configure analytics**: Adicione Google Analytics se desejar
6. **Faça deploy**: Publique no Vercel ou outra plataforma
7. **Compartilhe**: Divulgue seu portfólio nas redes sociais

## 📞 Suporte

Se precisar de ajuda com a personalização:

1. Consulte a documentação do Next.js
2. Verifique a documentação do Tailwind CSS
3. Abra uma issue no repositório
4. Entre em contato: caua@exemplo.com

---

**Boa sorte com seu portfólio! 🚀**
