# 📧 Configuração Centralizada de Contato

## Visão Geral

Criei um sistema centralizado para gerenciar todas as informações de contato do portfólio, incluindo o email de destino para o formulário. Isso facilita a manutenção e garante consistência em todo o projeto.

## 🗂️ Arquivo de Configuração

### `lib/config.ts`

Este arquivo centraliza todas as informações de contato e configurações do portfólio:

```typescript
export const portfolioConfig = {
  contact: {
    email: 'cauadevcosta@gmail.com',
    phone: '+55 (16) 98857-2014',
    location: 'Matão, SP - Brasil',
    social: {
      github: 'https://github.com/CostaCodesFullStack',
      linkedin: 'https://www.linkedin.com/in/caua-costa-222900278',
      email: 'cauadevcosta@gmail.com'
    }
  },
  email: {
    destination: 'cauadevcosta@gmail.com',
    subjectPrefix: '[Portfólio]',
    service: 'gmail'
  }
}
```

## 🔧 Funções Disponíveis

### 1. `getDestinationEmail()`
Retorna o email de destino para mensagens do formulário.

```typescript
import { getDestinationEmail } from '@/lib/config'

const email = getDestinationEmail() // 'cauadevcosta@gmail.com'
```

### 2. `getEmailConfig()`
Retorna todas as configurações de email.

```typescript
import { getEmailConfig } from '@/lib/config'

const config = getEmailConfig()
// {
//   destination: 'cauadevcosta@gmail.com',
//   subjectPrefix: '[Portfólio]',
//   service: 'gmail',
//   from: 'seu-email@gmail.com'
// }
```

### 3. `generateEmailSubject(userSubject)`
Gera o assunto do email com prefixo padrão.

```typescript
import { generateEmailSubject } from '@/lib/config'

const subject = generateEmailSubject('Nova proposta')
// '[Portfólio] Nova proposta'
```

### 4. `getContactInfo()`
Retorna todas as informações de contato.

```typescript
import { getContactInfo } from '@/lib/config'

const info = getContactInfo()
// {
//   email: 'cauadevcosta@gmail.com',
//   phone: '+55 (16) 98857-2014',
//   location: 'Matão, SP - Brasil',
//   social: { ... }
// }
```

## 📍 Onde as Funções São Usadas

### Backend (API Route)
```typescript
// app/api/contact/route.ts
import { getEmailConfig, generateEmailSubject, getDestinationEmail } from '@/lib/config'

// Usar email centralizado
const destinationEmail = getDestinationEmail()
const subject = generateEmailSubject(userSubject)
```

### Frontend (Componente)
```typescript
// components/sections/Contact.tsx
import { getContactInfo } from '@/lib/config'

const contactInfo = getContactInfo()
// Usar contactInfo.email, contactInfo.phone, etc.
```

## ✅ Vantagens da Centralização

1. **Manutenção Fácil**: Alterar o email em um lugar só
2. **Consistência**: Mesmo email em todo o projeto
3. **Reutilização**: Funções podem ser usadas em qualquer lugar
4. **Type Safety**: TypeScript garante tipos corretos
5. **Configuração Única**: Um arquivo para todas as configurações

## 🔄 Como Alterar o Email

Para alterar o email de destino, edite apenas o arquivo `lib/config.ts`:

```typescript
export const portfolioConfig = {
  contact: {
    email: 'novo-email@gmail.com', // ← Altere aqui
    // ... resto das configurações
  },
  email: {
    destination: 'novo-email@gmail.com', // ← E aqui também
    // ... resto das configurações
  }
}
```

**Todas as outras partes do código serão atualizadas automaticamente!**

## 🚀 Exemplo de Uso Completo

```typescript
// Em qualquer arquivo do projeto
import { 
  getDestinationEmail, 
  getEmailConfig, 
  generateEmailSubject,
  getContactInfo 
} from '@/lib/config'

// Obter email de destino
const email = getDestinationEmail()

// Configurar envio de email
const config = getEmailConfig()
const transporter = nodemailer.createTransport({
  service: config.service,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

// Enviar email
await transporter.sendMail({
  from: config.from,
  to: email,
  subject: generateEmailSubject('Teste'),
  text: 'Mensagem de teste'
})

// Usar informações de contato no frontend
const info = getContactInfo()
console.log(`Entre em contato: ${info.email}`)
```

## 📝 Notas Importantes

- **Sempre use as funções** em vez de valores hardcoded
- **Mantenha consistência** entre `contact.email` e `email.destination`
- **Teste após alterações** para garantir que tudo funciona
- **Use TypeScript** para verificação de tipos automática

## 🔍 Verificação

Para verificar se tudo está funcionando:

1. **Build do projeto**: `npm run build`
2. **Teste da API**: Envie um formulário de contato
3. **Verifique logs**: Confirme que o email correto está sendo usado
4. **Teste visual**: Verifique se as informações aparecem corretamente no frontend

---

**Resultado**: Agora você tem um sistema centralizado e fácil de manter para todas as informações de contato do seu portfólio! 🎉
