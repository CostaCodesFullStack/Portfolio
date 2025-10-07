# 🚀 Portfolio Profissional - Cauã Costa

<div align="center">

![Prévia do Portfólio](https://github.com/CostaCodesFullStack/Portfolio/blob/main/public/images/portifolio.gif?raw=true)

</div>

<div align="center">
  
  ![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js )
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript )
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css )
  ![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16-pink?style=for-the-badge&logo=framer )
  
  **Portfólio de um estudante de Engenharia de Software apaixonado por desenvolvimento web moderno.**
  
  [🌐 **Ver Portfólio Online**](https://portfolio-one-gold-6xch6vskv8.vercel.app ) • [📧 **Contato**](mailto:cauadevcosta@gmail.com) • [💼 **GitHub**](https://github.com/CostaCodesFullStack )

</div>

<div align="center">

  <!-- Badges de CI/CD -->

![CI/CD Pipeline](https://github.com/CostaCodesFullStack/Portfolio/workflows/🚀%20CI/CD%20Pipeline/badge.svg)
![Deploy Status](https://github.com/CostaCodesFullStack/Portfolio/workflows/🚀%20Deploy%20para%20Produção/badge.svg)
![PR Check](https://github.com/CostaCodesFullStack/Portfolio/workflows/🔍%20Validação%20de%20Pull%20Request/badge.svg)

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

O projeto foi construído com **Next.js 14, TypeScript e Tailwind CSS**, seguindo as melhores práticas de desenvolvimento para garantir performance, acessibilidade e uma excelente experiência de usuário.

## ✨ Destaques Técnicos

- **🎨 Interface Moderna:** Design profissional com tema escuro, totalmente responsivo e animações suaves com **Framer Motion**.
- **⚡ Performance Otimizada:** Carregamento rápido utilizando o **Next.js App Router** e build otimizado para deploy na Vercel.
- **🧩 Arquitetura Escalável:** Estrutura de projeto baseada em componentes, facilitando a manutenção e a adição de novas funcionalidades.
- **♿ Acessibilidade (A11y):** Desenvolvimento seguindo as diretrizes WCAG para garantir que o site seja acessível a todos.
- **📧 Formulário Funcional:** Sistema completo de contato com validação, envio de emails reais e feedback visual.

## 🛠️ Stack Tecnológica

| Categoria               | Tecnologias                                               |
| :---------------------- | :-------------------------------------------------------- |
| **Core**                | `Next.js 15`, `React 18`, `TypeScript`, `Tailwind CSS`    |
| **Backend**             | `Next.js API Routes`, `Nodemailer`, `Email Validation`    |
| **Animação e Estilo**   | `Framer Motion`, `React Icons`, `PostCSS`, `Autoprefixer` |
| **Qualidade de Código** | `ESLint`, `Prettier`, `Jest`, `Testing Library`           |
| **CI/CD**               | `GitHub Actions`, `Vercel`, `CodeQL`, `Act`               |
| **Deploy**              | `Vercel`, `Git`, `GitHub`                                 |

## 📂 Estrutura do Projeto

```
portfolio/
├── .github/
│   └── workflows/      # Workflows de CI/CD
│       ├── ci.yml      # Pipeline principal
│       ├── deploy.yml  # Deploy para produção
│       └── pr-check.yml # Validações de PR
├── app/                # Rotas, layouts e páginas (App Router)
├── components/         # Componentes reutilizáveis (Navbar, Footer)
│   └── sections/       # Componentes de cada seção da página
├── public/             # Assets estáticos (imagens, fontes)
├── scripts/            # Scripts de automação
│   ├── test-workflows.sh    # Teste local (Linux/Mac)
│   └── test-workflows.ps1   # Teste local (Windows)
├── lib/                # Funções utilitárias
├── tailwind.config.js  # Configuração do Tailwind CSS
├── tsconfig.json       # Configuração do TypeScript
├── jest.config.js      # Configuração do Jest
├── .prettierrc         # Configuração do Prettier
└── package.json        # Dependências e scripts
```

## 🚀 CI/CD Pipeline

Este projeto implementa um pipeline completo de CI/CD usando **GitHub Actions** com as seguintes características:

### 🔄 Workflows Implementados

| Workflow              | Trigger                    | Funcionalidades                |
| --------------------- | -------------------------- | ------------------------------ |
| **🚀 CI/CD Pipeline** | Push para `main`/`develop` | Lint, Testes, Build, Segurança |
| **🚀 Deploy**         | Push para `main`           | Deploy automático para Vercel  |
| **🔍 PR Check**       | Pull Requests              | Validação rápida + Comentários |

### 📊 Validações Automáticas

- ✅ **ESLint** - Análise de código
- ✅ **TypeScript** - Verificação de tipos
- ✅ **Prettier** - Formatação de código
- ✅ **Jest** - Testes unitários com cobertura mínima de 80%
- ✅ **Build** - Verificação de build do Next.js
- ✅ **Segurança** - Auditoria NPM + CodeQL
- ✅ **Deploy** - Deploy automático para produção

### 🧪 Testando Localmente

Para testar os workflows localmente, use o script fornecido:

```bash
# Windows (PowerShell)
.\scripts\test-workflows.ps1 -Setup
.\scripts\test-workflows.ps1 -Workflow all

# Linux/Mac (Bash)
chmod +x scripts/test-workflows.sh
./scripts/test-workflows.sh
```

### 🔧 Configuração de Secrets

Configure os seguintes secrets no GitHub:

| Secret              | Descrição                                | Obrigatório |
| ------------------- | ---------------------------------------- | ----------- |
| `VERCEL_TOKEN`      | Token da Vercel                          | ✅ Sim      |
| `VERCEL_ORG_ID`     | ID da organização Vercel                 | ✅ Sim      |
| `VERCEL_PROJECT_ID` | ID do projeto Vercel                     | ✅ Sim      |
| `GITHUB_TOKEN`      | Token do GitHub (gerado automaticamente) | ❌ Não      |

**📋 Arquivos de Configuração:**

- `.secrets.example` - Exemplo de secrets para teste local
- `env.act.example` - Exemplo de variáveis de ambiente
- `.actrc` - Configuração do act para teste local

### 📈 Métricas de Qualidade

- **Cobertura de Testes:** Mínimo 80%
- **Tempo de Pipeline:** < 10 minutos
- **Deploy Time:** < 5 minutos
- **Disponibilidade:** 99.9% (Vercel)

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
- [ ] Adicionar blog técnico com artigos sobre desenvolvimento
- [ ] Integrar CMS para gerenciamento de conteúdo dos projetos
- [ ] Escrever testes automatizados com Jest e React Testing Library

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

O formulário de contato agora está **totalmente funcional** e envia emails reais! Para configurar:

1. **Crie um arquivo `.env.local`** na raiz do projeto
2. **Configure suas credenciais de email**:
   ```env
   EMAIL_USER=seu-email@gmail.com
   EMAIL_PASS=sua-senha-de-app
   ```
3. **Para Gmail**: Ative verificação em duas etapas e gere uma senha de app
4. **Consulte** `CONFIGURACAO_EMAIL.md` para instruções detalhadas

> 💡 **Sem configuração de email**: O formulário ainda funciona, mas apenas simula o envio.

📄 Licença
Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.
📞 Contato
Cauã Costa

Estudante de Engenharia de Software
📧 Email: cauadevcosta@gmail.com
💼 GitHub: @CostaCodesFullStack
📍 Localização: Matão, SP - Brasil

<div align="center">
💙 Desenvolvido com paixão por Cauã Costa
Interessado em colaborar ou contratar? Vamos conversar!
</div>
#   P i p e l i n e   C I / C D   f u n c i o n a n d o !  
 