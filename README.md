# 🚀 Portfolio Profissional - Cauã Costa

<div align="center">

![Prévia do Portfólio](https://github.com/CostaCodesFullStack/Portfolio/blob/main/public/images/portifolio.gif?raw=true)

</div>

<div align="center">
  
  ![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js )
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript )
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css )
  ![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16-pink?style=for-the-badge&logo=framer )
  
  **Portfólio de um estudante de Engenharia de Software apaixonado por desenvolvimento web moderno.**
  
  [🌐 **Ver Portfólio Online**](https://portfolio-one-gold-6xch6vskv8.vercel.app ) • [📧 **Contato**](mailto:cauadevcosta@gmail.com) • [💼 **GitHub**](https://github.com/CostaCodesFullStack )

</div>

<div align="center">

  <!-- Badges de Qualidade -->

![Code Coverage](https://img.shields.io/badge/coverage-80%25-brightgreen?style=flat-square)
![ESLint](https://img.shields.io/badge/ESLint-enabled-4B32C3?style=flat-square&logo=eslint)
![Prettier](https://img.shields.io/badge/Prettier-enabled-F7B93E?style=flat-square&logo=prettier)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?style=flat-square&logo=typescript)

  <!-- Badges de Deploy -->

![Vercel](https://img.shields.io/badge/deployed%20on-Vercel-000000?style=flat-square&logo=vercel)
![GitHub Actions](https://img.shields.io/badge/CI/CD-GitHub%20Actions-2088FF?style=flat-square&logo=github-actions)

</div>

---

## 👋 Sobre o Projeto

Este portfólio foi desenvolvido para apresentar minha jornada e minhas habilidades como estudante de Engenharia de Software. Sou um desenvolvedor apaixonado por criar soluções web modernas, com foco em **frontend, backend escalável, APIs e automação**.

O projeto foi construído com **Next.js 15.5, TypeScript 5.3 e Tailwind CSS 3.4**, seguindo as melhores práticas de desenvolvimento para garantir performance, acessibilidade e uma excelente experiência de usuário.

## ✨ Destaques Técnicos

- **🎨 Interface Moderna:** Design profissional com tema escuro, totalmente responsivo e animações suaves com **Framer Motion**.
- **⚡ Performance Otimizada:** Carregamento rápido utilizando o **Next.js App Router** e build otimizado para deploy na Vercel.
- **🧩 Arquitetura Escalável:** Estrutura de projeto baseada em componentes, facilitando a manutenção e a adição de novas funcionalidades.
- **♿ Acessibilidade (A11y):** Desenvolvimento seguindo as diretrizes WCAG para garantir que o site seja acessível a todos.
- **📧 Formulário Funcional:** Sistema completo de contato com validação, envio de emails reais e feedback visual.
- **🧪 Testes Automatizados:** Cobertura de testes com Jest e React Testing Library para garantir qualidade do código.

## 🛠️ Stack Tecnológica

| Categoria               | Tecnologias                                                          |
| :---------------------- | :------------------------------------------------------------------- |
| **Core**                | `Next.js 15.5`, `React 18.2`, `TypeScript 5.3`, `Tailwind CSS 3.4`   |
| **Backend**             | `Next.js API Routes`, `Nodemailer 7.0`, `Email Validation`           |
| **Animação e Estilo**   | `Framer Motion 10.16`, `React Icons 4.12`, `PostCSS`, `Autoprefixer` |
| **Qualidade de Código** | `ESLint 8.56`, `Prettier 3.1`, `Jest 30.2`, `Testing Library 16.3`   |
| **CI/CD**               | `GitHub Actions`, `Vercel`, `CodeQL`, `Act`                          |
| **Deploy**              | `Vercel`, `Git`, `GitHub`                                            |

## 📂 Estrutura do Projeto

```
portifolio2/
├── app/                # Rotas, layouts e páginas (App Router)
│   ├── api/            # API Routes do Next.js
│   │   └── contact/    # Endpoint de contato
│   ├── globals.css     # Estilos globais
│   ├── layout.tsx      # Layout principal
│   └── page.tsx        # Página inicial
├── components/         # Componentes reutilizáveis
│   ├── sections/       # Componentes de cada seção
│   │   ├── About.tsx   # Seção sobre
│   │   ├── Contact.tsx # Seção de contato
│   │   ├── Experience.tsx # Seção de experiência
│   │   ├── Hero.tsx    # Seção hero
│   │   ├── Projects.tsx # Seção de projetos
│   │   └── Skills.tsx  # Seção de habilidades
│   ├── Footer.tsx      # Rodapé
│   ├── Navbar.tsx      # Navegação
│   ├── Particles.tsx   # Efeito de partículas
│   └── providers/      # Providers de contexto
├── contexts/           # Contextos React
│   ├── ThemeContext.tsx # Contexto de tema
│   └── TranslationContext.tsx # Contexto de tradução
├── lib/                # Funções utilitárias
│   └── config.ts       # Configurações
├── public/             # Assets estáticos
│   └── images/         # Imagens do projeto
├── __tests__/          # Testes automatizados
├── coverage/           # Relatórios de cobertura
├── docs/               # Documentação
├── scripts/            # Scripts de automação
├── tailwind.config.js  # Configuração do Tailwind CSS
├── tsconfig.json       # Configuração do TypeScript
├── jest.config.js      # Configuração do Jest
├── next.config.js      # Configuração do Next.js
└── package.json        # Dependências e scripts
```

## 🧪 Testes e Qualidade

Este projeto implementa um sistema robusto de testes e qualidade de código:

### 📊 Cobertura de Testes

- **Jest 30.2** - Framework de testes principal
- **React Testing Library 16.3** - Testes de componentes React
- **Cobertura mínima:** 80% de todas as funcionalidades
- **Testes automatizados** em cada commit e pull request

### 🔍 Ferramentas de Qualidade

- **ESLint 8.56** - Análise estática de código
- **Prettier 3.1** - Formatação automática de código
- **TypeScript 5.3** - Verificação de tipos em tempo de compilação
- **Husky** - Git hooks para validação pré-commit

### 🚀 CI/CD Pipeline

O projeto utiliza GitHub Actions para automação completa:

| Workflow              | Trigger                    | Funcionalidades                |
| --------------------- | -------------------------- | ------------------------------ |
| **🚀 CI/CD Pipeline** | Push para `main`/`develop` | Lint, Testes, Build, Segurança |
| **🚀 Deploy**         | Push para `main`           | Deploy automático para Vercel  |
| **🔍 PR Check**       | Pull Requests              | Validação rápida + Comentários |

### 📈 Validações Automáticas

- ✅ **ESLint** - Análise de código
- ✅ **TypeScript** - Verificação de tipos
- ✅ **Prettier** - Formatação de código
- ✅ **Jest** - Testes unitários com cobertura mínima de 80%
- ✅ **Build** - Verificação de build do Next.js
- ✅ **Segurança** - Auditoria NPM + CodeQL
- ✅ **Deploy** - Deploy automático para produção

## 🚀 Projetos em Destaque

Aqui estão alguns projetos que desenvolvi para praticar e demonstrar minhas habilidades.

| Projeto                    | Descrição                                                       | Tecnologias         | Links                                                                                                                                              |
| :------------------------- | :-------------------------------------------------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| **💱 Conversor de Moedas** | Converte moedas em tempo real utilizando uma API externa.       | `React`, `API`      | [🔗 Ver Online](https://costacodesfullstack.github.io/conversor-moedas) • [📂 Código](https://github.com/CostaCodesFullStack/conversor-moedas)     |
| **🧮 Calculadora Online**  | Calculadora funcional com operações básicas e design moderno.   | `React`, `JS`       | [🔗 Ver Online](https://costacodesfullstack.github.io/Calculadora-Online) • [📂 Código](https://github.com/CostaCodesFullStack/Calculadora-Online) |
| **📊 Calculadora IMC**     | Calculadora de IMC com histórico, gráficos de evolução e metas. | `HTML`, `CSS`, `JS` | [🔗 Ver Online](https://costacodesfullstack.github.io/IMC-Online) • [📂 Código](https://github.com/CostaCodesFullStack/IMC-Online)                 |
| **☕ Landing Page**        | Landing page para uma cafeteria fictícia.                       | `HTML`, `CSS`, `JS` | [🔗 Ver Online](https://costacodesfullstack.github.io/landing-page) • [📂 Código](https://github.com/CostaCodesFullStack/landing-page)             |

> 💡 **Para ver todos os meus projetos, acesse o [meu GitHub](https://github.com/CostaCodesFullStack?tab=repositories).**

## 🎓 Formação e Certificações

- **Engenharia de Software** - Faculdade Anhanguera
  - _(Cursando - Previsão de conclusão em 2029)_
- **Certificações Relevantes (2025):**
  - HTML5 e CSS3 - _Curso em Vídeo_
  - JavaScript Moderno - _Curso em Vídeo_
  - React.js - _Aprendizado Prático_
  - Python para Backend - _Santander Open Academy_

## 🎯 Roadmap Futuro

- [x] ~~Conectar formulário de contato a um backend funcional~~ ✅ **CONCLUÍDO**
- [x] ~~Implementar testes automatizados com Jest~~ ✅ **CONCLUÍDO**
- [ ] Adicionar blog técnico com artigos sobre desenvolvimento
- [ ] Integrar CMS para gerenciamento de conteúdo dos projetos
- [ ] Implementar internacionalização (i18n)
- [ ] Adicionar modo escuro/claro dinâmico

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js v18.x ou superior
- `npm` ou `yarn`

### Passos para Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/CostaCodesFullStack/Portfolio.git

# 2. Navegue até o diretório
cd Portfolio

# 3. Instale as dependências
npm install

# 4. Configure as variáveis de ambiente (opcional)
cp env.example .env.local
# Edite .env.local com suas credenciais de email

# 5. Execute em modo de desenvolvimento
npm run dev
# Acesse http://localhost:3000 no seu navegador
```

### 🧪 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run start        # Servidor de produção

# Qualidade de Código
npm run lint         # Executar ESLint
npm run lint:fix     # Corrigir problemas do ESLint
npm run format       # Formatar código com Prettier
npm run format:check # Verificar formatação
npm run type-check   # Verificar tipos TypeScript

# Testes
npm run test         # Executar testes
npm run test:watch   # Executar testes em modo watch
npm run test:coverage # Executar testes com cobertura
npm run test:ci      # Executar testes para CI
npm run test:smoke   # Executar testes de smoke

# CI/CD
npm run ci           # Pipeline completo (lint + type-check + test:ci)
npm run pre-commit   # Preparar commit (lint:fix + format + test:ci)
```

### 🔧 Configuração do Ambiente de Desenvolvimento

1. **Instale as dependências:**

   ```bash
   npm install
   ```

2. **Configure o Prettier (opcional):**

   ```bash
   npm run format
   ```

3. **Execute os testes:**

   ```bash
   npm run test:coverage
   ```

4. **Verifique a qualidade do código:**
   ```bash
   npm run ci
   ```

### 📧 Configuração do Formulário de Contato

O formulário de contato está **totalmente funcional** e envia emails reais! Para configurar:

1. **Crie um arquivo `.env.local`** na raiz do projeto
2. **Configure suas credenciais de email**:
   ```env
   EMAIL_USER=seu-email@gmail.com
   EMAIL_PASS=sua-senha-de-app
   ```
3. **Para Gmail**: Ative verificação em duas etapas e gere uma senha de app
4. **Consulte** `env.example` para instruções detalhadas

> 💡 **Sem configuração de email**: O formulário ainda funciona, mas apenas simula o envio.

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

## 📞 Contato

**Cauã Costa**  
Estudante de Engenharia de Software

📧 **Email:** cauadevcosta@gmail.com  
💼 **GitHub:** [@CostaCodesFullStack](https://github.com/CostaCodesFullStack)  
📍 **Localização:** Matão, SP - Brasil

<div align="center">
💙 **Desenvolvido com paixão por Cauã Costa**  
Interessado em colaborar ou contratar? Vamos conversar!
</div>

---

## 🧪 Teste do Pipeline CI/CD

Esta seção demonstra o funcionamento do workflow de validação de Pull Request.

### O que o pipeline faz:

- ✅ **Validação Rápida** - ESLint + TypeScript + Prettier
- ✅ **Testes & Cobertura** - Jest com relatório de cobertura
- ✅ **Build Check** - Verificação de build do Next.js
- ✅ **Segurança** - Auditoria NPM + CodeQL
- ✅ **Comentário no PR** - Relatório automático de status

### Status esperado:

- Todos os jobs devem passar ✅
- Comentário automático no PR 📝
- Badge de status atualizado 🏷️

**Pipeline CI/CD funcionando perfeitamente!** 🚀
