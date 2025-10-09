<!-- b1959051-b30f-4c73-bcc2-5e99d024cfb8 2cde0745-9861-4fe5-8635-f18c23c7e31f -->

# Redesign da Seção "Jornada Acadêmica"

## Visão Geral

Substituir completamente o componente `Experience.tsx` por uma nova estrutura com 4 subsecções hierarquizadas: Formação Acadêmica (destaque), Experiência Prática, Certificações Oficiais e Tecnologias Dominadas.

## Implementação

### 1. Atualizar TranslationContext.tsx

- Remover React da lista de certificações oficiais (linha 83-89 aprox.)
- Manter apenas certificações com instituição formal: HTML/CSS, JavaScript e Python
- Adicionar novas traduções para a seção "Tecnologias Dominadas" com categorias (Frontend, Backend, Ferramentas)
- Corrigir descrição da graduação para "2025-2029" (atualmente diz 2025)
- Adicionar traduções para badges de tecnologias (React, HTML5, CSS3, JavaScript, Python, C, LUA, Git/GitHub, APIs REST, MySQL)
- Adicionar tradução para botão CTA "Ver Todos os Projetos"

### 2. Redesenhar Experience.tsx

Substituir completamente a estrutura atual por:

**A) Card Grande - Formação Acadêmica**

- Ocupar largura total ou destaque visual
- Incluir badge "Em andamento"
- Barra de progresso mostrando ano atual (1 de 4)
- Cores: `bg-blue-600` (azul forte #2563eb)
- Ícone: `FaGraduationCap`
- Dados: Engenharia de Software, Anhanguera, 2025-2029, Matão/SP

**B) Cards Médios - Experiência Prática**

- Grid 2 colunas (lado a lado)
- Card 1: Desenvolvimento de Projetos Web (verde #10b981)
- Principais realizações em lista
- Ícone: `HiCode`
- Card 2: Mods MTA/FIVEM (roxo/violeta #8b5cf6)
- Principais realizações em lista
- Ícone: `FaGamepad` ou similar

**C) Cards Pequenos - Certificações Oficiais**

- Grid 3 colunas
- Apenas 3 certificações: HTML5/CSS3, JavaScript, Python
- Cards compactos com ícone de certificado
- Cor dourada/amarela (#f59e0b)
- Ícone de verificação ✓

**D) Seção Tecnologias Dominadas**

- Badges/tags interativas organizadas por categoria
- Categorias: Frontend (React, HTML5, CSS3, JavaScript), Backend (Python, C, LUA), Ferramentas (Git/GitHub, APIs REST, MySQL)
- Badges arredondados com hover effect (scale)
- Cor roxa (#8b5cf6)

**E) CTA Final**

- Botão "Ver Todos os Projetos" linkando para #projects

### 3. Estilos e Animações

- Usar classes Tailwind existentes: `card`, `btn-primary`, `gradient-text`
- Hover effects: `hover:scale-105`, `transition-transform duration-300`
- Glassmorphism: `backdrop-blur-sm`, `bg-white/50 dark:bg-dark-800/50`
- Border-radius: `rounded-xl` (12px)
- Animações com `framer-motion`: fade-in, slide-up com delays escalonados
- Responsividade: cards empilham verticalmente em mobile

### 4. Ícones Necessários

Importar de `react-icons`:

- `FaGraduationCap` (formação)
- `HiCode` (projetos web)
- `FaGamepad` (mods)
- `FaCertificate` (certificações)
- `HiCheckCircle` (verificação)
- Ícones de tecnologias: `SiReact`, `SiHtml5`, `SiCss3`, `SiJavascript`, `SiPython`, `SiC`, `SiLua`, `SiGit`, `SiMysql`

## Arquivos Modificados

- `contexts/TranslationContext.tsx` - Atualizar traduções PT/EN
- `components/sections/Experience.tsx` - Redesign completo da estrutura

## Resultado Esperado

Seção visualmente hierarquizada com destaque para formação acadêmica, separação clara entre certificações oficiais e habilidades práticas, design moderno com glassmorphism, totalmente responsiva e com animações sutis.

### To-dos

- [ ] Atualizar TranslationContext.tsx removendo React das certificações e adicionando seção de Tecnologias Dominadas
- [ ] Redesenhar completamente Experience.tsx com nova estrutura hierarquizada (4 subsecções)
- [ ] Verificar responsividade e animações em diferentes tamanhos de tela
