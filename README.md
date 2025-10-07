# 🚀 Portfolio Profissional - Cauã Costa

<div align="center">

![Prévia do Portfólio](https://github.com/CostaCodesFullStack/Portfolio/blob/main/public/images/portifolio.gif?raw=true )

</div>

<div align="center">
  
  ![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js )
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript )
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css )
  ![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-pink?style=for-the-badge&logo=framer )
  
  **Portfólio de um estudante de Engenharia de Software apaixonado por desenvolvimento web moderno.**
  
  [🌐 **Ver Portfólio Online**](https://portfolio-one-gold-6xch6vskv8.vercel.app ) • [📧 **Contato**](mailto:cauadevcosta@gmail.com) • [💼 **GitHub**](https://github.com/CostaCodesFullStack )

</div>

---

## 👋 Sobre o Projeto

Este portfólio foi desenvolvido para apresentar minha jornada e minhas habilidades como estudante de Engenharia de Software. Sou um desenvolvedor apaixonado por criar soluções web modernas, com foco em **frontend, backend escalável, APIs e automação**.

O projeto foi construído com **Next.js 14, TypeScript e Tailwind CSS**, seguindo as melhores práticas de desenvolvimento para garantir performance, acessibilidade e uma excelente experiência de usuário.

## ✨ Destaques Técnicos

-   **🎨 Interface Moderna:** Design profissional com tema escuro, totalmente responsivo e animações suaves com **Framer Motion**.
-   **⚡ Performance Otimizada:** Carregamento rápido utilizando o **Next.js App Router** e build otimizado para deploy na Vercel.
-   **🧩 Arquitetura Escalável:** Estrutura de projeto baseada em componentes, facilitando a manutenção e a adição de novas funcionalidades.
-   **♿ Acessibilidade (A11y):** Desenvolvimento seguindo as diretrizes WCAG para garantir que o site seja acessível a todos.
-   **📧 Formulário Funcional:** Sistema completo de contato com validação, envio de emails reais e feedback visual.

## 🛠️ Stack Tecnológica

| Categoria | Tecnologias |
| :--- | :--- |
| **Core** | `Next.js 14`, `React 18`, `TypeScript`, `Tailwind CSS` |
| **Backend** | `Next.js API Routes`, `Nodemailer`, `Email Validation` |
| **Animação e Estilo** | `Framer Motion`, `React Icons`, `PostCSS`, `Autoprefixer` |
| **Qualidade de Código** | `ESLint`, `Prettier` |
| **Deploy** | `Vercel`, `Git`, `GitHub` |

## 📂 Estrutura do Projeto

portfolio/
├── app/                # Rotas, layouts e páginas (App Router)
├── components/         # Componentes reutilizáveis (Navbar, Footer)
│   └── sections/       # Componentes de cada seção da página
├── public/             # Assets estáticos (imagens, fontes)
├── lib/                # Funções utilitárias (se necessário)
├── tailwind.config.js  # Configuração do Tailwind CSS
└── tsconfig.json       # Configuração do TypeScript
Plain Text

## 🚀 Projetos em Destaque

Aqui estão alguns projetos que desenvolvi para praticar e demonstrar minhas habilidades.

| Projeto | Descrição | Tecnologias | Links |
| :--- | :--- | :--- | :--- |
| **💱 Conversor de Moedas** | Converte moedas em tempo real utilizando uma API externa. | `React`, `API` | [🔗 Ver Online](https://costacodesfullstack.github.io/conversor-moedas ) • [📂 Código](https://github.com/CostaCodesFullStack/conversor-moedas ) |
| **🧮 Calculadora Online** | Calculadora funcional com operações básicas e design moderno. | `React`, `JS` | [🔗 Ver Online](https://costacodesfullstack.github.io/Calculadora-Online ) • [📂 Código](https://github.com/CostaCodesFullStack/Calculadora-Online ) |
| **📊 Calculadora IMC** | Calculadora de IMC com histórico, gráficos de evolução e metas. | `HTML`, `CSS`, `JS` | [🔗 Ver Online](https://costacodesfullstack.github.io/IMC-Online ) • [📂 Código](https://github.com/CostaCodesFullStack/IMC-Online ) |
| **☕ Landing Page** | Landing page para uma cafeteria fictícia. | `HTML`, `CSS`, `JS` | [🔗 Ver Online](https://costacodesfullstack.github.io/landing-page ) • [📂 Código](https://github.com/CostaCodesFullStack/landing-page ) |

> 💡 **Para ver todos os meus projetos, acesse o [meu GitHub](https://github.com/CostaCodesFullStack?tab=repositories ).**

## 🎓 Formação e Certificações

-   **Engenharia de Software** - Faculdade Anhanguera
    -   *(Cursando - Previsão de conclusão em 2029)*
-   **Certificações Relevantes (2025):**
    -   HTML5 e CSS3 - *Curso em Vídeo*
    -   JavaScript Moderno - *Curso em Vídeo*
    -   React.js - *Aprendizado Prático*
    -   Python para Backend - *Santander Open Academy*

## 🎯 Roadmap Futuro
-   [x] ~~Conectar formulário de contato a um backend funcional~~ ✅ **CONCLUÍDO**
-   [ ] Adicionar blog técnico com artigos sobre desenvolvimento
-   [ ] Integrar CMS para gerenciamento de conteúdo dos projetos
-   [ ] Escrever testes automatizados com Jest e React Testing Library

## 🚀 Como Executar o Projeto

### Pré-requisitos
-   Node.js v18.x ou superior
-   `npm` ou `yarn`

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
Acesse http://localhost:3000 no seu navegador.
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
