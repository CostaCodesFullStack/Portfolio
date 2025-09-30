# 🚀 Portfólio Cauã Costa

Um portfólio profissional e moderno para Cauã Costa, estudante de Engenharia de Software. Desenvolvido com Next.js, TypeScript e Tailwind CSS, seguindo as melhores práticas de desenvolvimento web.

## ✨ Características

- 🎨 **Design Moderno**: Interface limpa e profissional com tema escuro
- 📱 **Totalmente Responsivo**: Adapta-se perfeitamente a todos os dispositivos
- ⚡ **Performance Otimizada**: Carregamento rápido e experiência fluida
- 🎭 **Animações Suaves**: Transições elegantes com Framer Motion
- 🔍 **SEO Otimizado**: Meta tags e estrutura semântica para melhor indexação
- ♿ **Acessível**: Seguindo as melhores práticas de acessibilidade
- 🌐 **Internacionalização**: Suporte para múltiplos idiomas (atualmente em português)

## 🛠️ Stack Tecnológica

### Frontend
- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Biblioteca de animações
- **React Icons** - Ícones SVG para React

### Ferramentas de Desenvolvimento
- **ESLint** - Linter para JavaScript/TypeScript
- **PostCSS** - Processador CSS
- **Autoprefixer** - Adiciona prefixos CSS automaticamente

## 🚀 Instalação e Configuração

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### 1. Clone o repositório
```bash
git clone https://github.com/CostaCodesFullStack/Portfolio.git
cd Portfolio
```

### 2. Instale as dependências
```bash
npm install
# ou
yarn install
```

### 3. Execute o projeto em desenvolvimento
```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

### 4. Build para produção
```bash
npm run build
npm run start
# ou
yarn build
yarn start
```

## 📁 Estrutura do Projeto

```
portfolio/
├── app/                    # App Router do Next.js
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/            # Componentes React
│   ├── sections/          # Seções do portfólio
│   │   ├── Hero.tsx       # Seção inicial
│   │   ├── About.tsx      # Sobre mim
│   │   ├── Skills.tsx     # Habilidades
│   │   ├── Projects.tsx   # Projetos
│   │   ├── Experience.tsx # Experiência
│   │   └── Contact.tsx    # Contato
│   ├── Navbar.tsx         # Navegação
│   ├── Footer.tsx         # Rodapé
│   └── Particles.tsx      # Efeito de partículas
├── public/                # Arquivos estáticos
├── styles/                # Arquivos de estilo adicionais
├── next.config.js         # Configuração do Next.js
├── tailwind.config.js     # Configuração do Tailwind
├── tsconfig.json          # Configuração do TypeScript
└── package.json           # Dependências do projeto
```

## 🎨 Personalização

### 1. Informações Pessoais

Edite os seguintes arquivos para personalizar suas informações:

#### `components/sections/Hero.tsx`
```tsx
// Linha 15-20
const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/SEU_USUARIO', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/SEU_PERFIL', label: 'LinkedIn' },
  { icon: FaEnvelope, href: 'mailto:seu@email.com', label: 'Email' },
]
```

#### `components/sections/About.tsx`
- Atualize a história pessoal (linhas 30-50)
- Modifique as estatísticas (linhas 52-60)
- Ajuste a timeline (linhas 62-80)

#### `components/sections/Skills.tsx`
- Adicione/remova habilidades técnicas (linhas 20-80)
- Atualize o nível de proficiência
- Modifique as habilidades interpessoais (linhas 82-100)

#### `components/sections/Projects.tsx`
- Adicione seus projetos (linhas 20-80)
- Inclua links para GitHub e demonstrações
- Atualize as tecnologias utilizadas

#### `components/sections/Experience.tsx`
- Adicione sua educação (linhas 20-30)
- Inclua experiências profissionais (linhas 32-60)
- Adicione certificações (linhas 62-80)

#### `components/sections/Contact.tsx`
- Atualize informações de contato (linhas 20-40)
- Configure o formulário de contato
- Adicione links para redes sociais

### 2. Cores e Tema

Edite `tailwind.config.js` para personalizar as cores:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Suas cores primárias
        400: '#60a5fa',
        600: '#2563eb',
        // ...
      },
      dark: {
        // Suas cores escuras
        800: '#1e293b',
        900: '#0f172a',
        // ...
      }
    }
  }
}
```

### 3. Imagens

1. Adicione sua foto de perfil em `public/images/`
2. Atualize o caminho da imagem no componente Hero
3. Adicione imagens dos projetos em `public/projects/`

### 4. SEO e Meta Tags

Edite `app/layout.tsx` para personalizar as meta tags:

```tsx
export const metadata: Metadata = {
  title: 'Seu Nome - Sua Profissão',
  description: 'Sua descrição personalizada',
  // ...
}
```

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório GitHub à Vercel
2. Configure as variáveis de ambiente se necessário
3. Deploy automático a cada push

### Netlify

1. Conecte seu repositório GitHub à Netlify
2. Configure o build command: `npm run build`
3. Configure o publish directory: `.next`

### GitHub Pages

1. Configure o GitHub Actions para build automático
2. Atualize o `next.config.js` para suporte ao GitHub Pages
3. Configure o domínio personalizado se necessário

## 📝 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm run start

# Linting
npm run lint
```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

**Cauã Costa**
- Email: caua@exemplo.com
- GitHub: [@CostaCodesFullStack](https://github.com/CostaCodesFullStack)
- LinkedIn: [Cauã Costa](https://linkedin.com/in/cauacosta)

## 🙏 Agradecimentos

- [Next.js](https://nextjs.org/) - Framework React
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Framer Motion](https://www.framer.com/motion/) - Animações
- [React Icons](https://react-icons.github.io/react-icons/) - Ícones
- [Unsplash](https://unsplash.com/) - Imagens de placeholder

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
