# ⚡ Instalação Rápida - Portfólio Cauã Costa

## 🚀 Começar em 5 minutos

### 1. Instalar dependências
```bash
npm install
```

### 2. Executar em desenvolvimento
```bash
npm run dev
```

### 3. Abrir no navegador
Acesse: [http://localhost:3000](http://localhost:3000)

## 📝 Personalização Básica

### Alterar informações pessoais
1. Edite `components/sections/Hero.tsx` - Nome e descrição
2. Edite `components/sections/About.tsx` - História pessoal
3. Edite `components/sections/Contact.tsx` - Informações de contato

### Adicionar projetos
1. Edite `components/sections/Projects.tsx`
2. Adicione suas imagens em `public/images/projects/`
3. Atualize os links do GitHub e demonstrações

### Personalizar cores
1. Edite `tailwind.config.js`
2. Modifique as cores na seção `colors`

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu GitHub à Vercel
2. Deploy automático a cada push

### Netlify
1. Conecte seu GitHub à Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`

## 📚 Documentação Completa

- [README.md](README.md) - Documentação completa
- [GUIA_PERSONALIZACAO.md](GUIA_PERSONALIZACAO.md) - Guia detalhado de personalização

## 🆘 Problemas Comuns

### Erro de dependências
```bash
rm -rf node_modules package-lock.json
npm install
```

### Erro de build
```bash
npm run lint
npm run build
```

### Porta ocupada
```bash
npm run dev -- -p 3001
```

---

**Pronto! Seu portfólio está funcionando! 🎉**
