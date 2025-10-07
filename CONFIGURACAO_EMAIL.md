# Configuração do Formulário de Contato

## Visão Geral

O formulário de contato agora está conectado a um backend funcional que envia emails reais. Esta documentação explica como configurar o serviço de email.

## Funcionalidades Implementadas

✅ **API Route** (`/api/contact`) para processar formulários  
✅ **Validação de dados** no backend e frontend  
✅ **Integração com Nodemailer** para envio de emails  
✅ **Feedback visual** com mensagens de erro e sucesso  
✅ **Tratamento de erros** robusto  

## Configuração do Email

### 1. Configurar Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```env
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-app
```

### 2. Configuração do Gmail

Para usar o Gmail como provedor de email:

1. **Ative a verificação em duas etapas** na sua conta Google
2. **Gere uma senha de app específica**:
   - Vá para [myaccount.google.com](https://myaccount.google.com)
   - Segurança → Verificação em duas etapas
   - Senhas de app → Gerar senha
   - Use essa senha no `EMAIL_PASS` (não sua senha normal)

### 3. Outros Provedores

Para usar outros provedores, modifique a configuração em `app/api/contact/route.ts`:

```typescript
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'outlook', // ou 'yahoo', 'hotmail', etc.
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })
}
```

## Como Funciona

### Fluxo do Formulário

1. **Usuário preenche** o formulário de contato
2. **Validação frontend** limpa erros ao digitar
3. **Envio para API** via POST `/api/contact`
4. **Validação backend** verifica dados
5. **Envio de email** via Nodemailer
6. **Feedback visual** para o usuário

### Validações Implementadas

- **Nome**: mínimo 2 caracteres
- **Email**: formato válido
- **Assunto**: mínimo 3 caracteres  
- **Mensagem**: mínimo 10 caracteres

### Tratamento de Erros

- **Erros de validação**: mostrados em lista
- **Erros de conexão**: mensagem genérica
- **Erros de servidor**: log detalhado no console
- **Feedback visual**: animações suaves

## Testando o Formulário

### 1. Desenvolvimento Local

```bash
npm run dev
```

Acesse `http://localhost:3000` e teste o formulário.

### 2. Verificar Logs

Monitore o console do servidor para ver logs de envio:

```
Email enviado com sucesso: {
  from: 'usuario@exemplo.com',
  subject: 'Teste',
  timestamp: '2024-01-01T12:00:00.000Z'
}
```

### 3. Teste de API

Teste diretamente a API:

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Teste",
    "email": "teste@exemplo.com",
    "subject": "Teste API",
    "message": "Esta é uma mensagem de teste"
  }'
```

## Personalização

### Modificar Template de Email

Edite o HTML em `app/api/contact/route.ts` na seção `mailOptions.html`.

### Adicionar Campos

1. Atualize o estado `formData` no componente
2. Adicione validação na API
3. Inclua no template de email

### Alterar Validações

Modifique a função `validateFormData` em `app/api/contact/route.ts`.

## Segurança

- ✅ **Validação de entrada** no backend
- ✅ **Sanitização** de dados
- ✅ **Rate limiting** (recomendado para produção)
- ✅ **HTTPS** obrigatório em produção
- ✅ **Variáveis de ambiente** para credenciais

## Deploy em Produção

### Vercel

1. Configure as variáveis de ambiente no painel da Vercel
2. Deploy normalmente

### Outros Provedores

1. Configure as variáveis de ambiente
2. Certifique-se de que o serviço de email está acessível
3. Teste o formulário após o deploy

## Troubleshooting

### Email não enviado

1. Verifique as variáveis de ambiente
2. Confirme a senha de app do Gmail
3. Verifique os logs do servidor
4. Teste com outro provedor

### Erro de validação

1. Verifique os dados do formulário
2. Confirme as regras de validação
3. Teste com dados válidos

### Problemas de CORS

A API está configurada para aceitar requisições do mesmo domínio. Para outros domínios, configure CORS adequadamente.

## Suporte

Para dúvidas ou problemas:

1. Verifique os logs do console
2. Teste a API diretamente
3. Confirme a configuração de email
4. Consulte a documentação do Nodemailer
