# 📋 Instruções de Instalação - Portfólio Cauã Costa

## ⚠️ Erros de Linting

Os erros de linting que você está vendo são normais e acontecem porque as dependências ainda não foram instaladas. Siga os passos abaixo para resolver:

## 🚀 Passo a Passo

### 1. Instalar Dependências
```bash
npm install
```

### 2. Verificar Instalação
```bash
npm list --depth=0
```

### 3. Executar o Projeto
```bash
npm run dev
```

### 4. Verificar se Funcionou
- Abra [http://localhost:3000](http://localhost:3000)
- O portfólio deve carregar sem erros

## 🔧 Se Ainda Houver Erros

### Limpar Cache e Reinstalar
```bash
rm -rf node_modules package-lock.json
npm install
```

### Verificar Versão do Node
```bash
node --version
# Deve ser 18+ ou 20+
```

### Instalar Dependências Específicas
```bash
npm install framer-motion react-icons react-intersection-observer
```

## 📁 Estrutura Após Instalação

```
portfolio/
├── node_modules/          # Dependências instaladas
├── .next/                 # Build do Next.js
├── app/                   # Código fonte
├── components/            # Componentes React
├── public/                # Arquivos estáticos
└── package.json           # Dependências
```

## ✅ Verificação Final

Após a instalação, execute:
```bash
npm run lint
```

Não deve haver erros de linting.

## 🚀 Deploy

Após resolver os erros locais:
```bash
npm run build
```

Se o build funcionar, você pode fazer deploy na Vercel ou Netlify.

---

**Os erros são temporários e serão resolvidos após a instalação das dependências! 🎉**
