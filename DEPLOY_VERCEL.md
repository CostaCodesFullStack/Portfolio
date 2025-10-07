# 🚀 Deploy na Vercel - Configuração Completa

## ✅ Configurações Aplicadas

O projeto foi configurado especificamente para funcionar no link: **https://portfolio-one-gold-6xch6vskv8.vercel.app**

### 📁 Arquivos Configurados

1. **`lib/config.ts`** - URL da Vercel configurada como padrão
2. **`vercel.json`** - Configurações específicas da Vercel
3. **`app/api/contact/route.ts`** - CORS configurado para o domínio da Vercel
4. **`env.example`** - Variáveis de ambiente atualizadas

## 🔧 Configurações Implementadas

### 1. CORS Configurado
```typescript
const allowedOrigins = [
  'https://portfolio-one-gold-6xch6vskv8.vercel.app',
  'http://localhost:3000',
  'https://localhost:3000'
]
```

### 2. Headers de Segurança
- `Access-Control-Allow-Origin` configurado
- `Access-Control-Allow-Methods` para POST, GET, OPTIONS
- `Access-Control-Allow-Headers` para Content-Type

### 3. Configuração da Vercel
```json
{
  "functions": {
    "app/api/contact/route.ts": {
      "maxDuration": 30
    }
  }
}
```

## 🚀 Como Fazer o Deploy

### Opção 1: Deploy Automático (Recomendado)

1. **Conecte o repositório à Vercel**:
   - Acesse [vercel.com](https://vercel.com)
   - Importe seu repositório GitHub
   - A Vercel detectará automaticamente que é um projeto Next.js

2. **Configure as variáveis de ambiente**:
   - No painel da Vercel, vá em Settings → Environment Variables
   - Adicione:
     ```
     EMAIL_USER=seu-email@gmail.com
     EMAIL_PASS=sua-senha-de-app
     NEXT_PUBLIC_SITE_URL=https://portfolio-one-gold-6xch6vskv8.vercel.app
     ```

3. **Deploy automático**:
   - A Vercel fará deploy automaticamente a cada push
   - O link será: `https://portfolio-one-gold-6xch6vskv8.vercel.app`

### Opção 2: Deploy Manual

1. **Instale a CLI da Vercel**:
   ```bash
   npm i -g vercel
   ```

2. **Faça login**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel --prod
   ```

## 📧 Configuração do Email

### Para o formulário funcionar na Vercel:

1. **Configure as variáveis de ambiente** no painel da Vercel:
   - `EMAIL_USER`: Seu email do Gmail
   - `EMAIL_PASS`: Senha de app do Gmail (não sua senha normal)

2. **Para Gmail**:
   - Ative verificação em duas etapas
   - Gere uma senha de app específica
   - Use essa senha no `EMAIL_PASS`

## 🔍 Verificação do Deploy

### 1. Teste a API
Acesse: `https://portfolio-one-gold-6xch6vskv8.vercel.app/api/contact`

Deve retornar:
```json
{
  "message": "API de contato funcionando",
  "timestamp": "2025-01-27T...",
  "site": "https://portfolio-one-gold-6xch6vskv8.vercel.app"
}
```

### 2. Teste o Formulário
1. Acesse o site
2. Vá para a seção "Contato"
3. Preencha o formulário
4. Envie a mensagem
5. Verifique se recebeu o email

## 🛠️ Troubleshooting

### Problema: CORS Error
**Solução**: Verifique se o domínio está na lista `allowedOrigins` em `app/api/contact/route.ts`

### Problema: Email não enviado
**Solução**: 
1. Verifique as variáveis de ambiente na Vercel
2. Confirme a senha de app do Gmail
3. Verifique os logs da Vercel

### Problema: Build falha
**Solução**:
1. Execute `npm run build` localmente
2. Verifique se não há erros de TypeScript
3. Corrija os erros antes do deploy

## 📊 Status do Projeto

- ✅ **Build**: Funcionando
- ✅ **CORS**: Configurado para Vercel
- ✅ **API**: Pronta para produção
- ✅ **Formulário**: Integrado com backend
- ✅ **Configuração**: Centralizada

## 🎯 Próximos Passos

1. **Faça o deploy** na Vercel
2. **Configure as variáveis** de ambiente
3. **Teste o formulário** de contato
4. **Monitore os logs** para verificar funcionamento

---

**Resultado**: Seu portfólio está pronto para funcionar perfeitamente no link da Vercel! 🎉
