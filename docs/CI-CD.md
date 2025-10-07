# 🚀 Documentação CI/CD

Este documento descreve a implementação completa do pipeline de CI/CD para o projeto Portfolio.

## 📋 Visão Geral

O projeto implementa um pipeline automatizado usando **GitHub Actions** que garante qualidade de código, executa testes e faz deploy automático para produção.

## 🔄 Workflows Implementados

### 1. 🚀 CI/CD Pipeline (`ci.yml`)

**Triggers:**

- Push para branches `main` e `develop`
- Pull requests para `main` e `develop`
- Execução manual (`workflow_dispatch`)

**Jobs:**

1. **Lint & Validação** - ESLint, TypeScript, Prettier
2. **Testes** - Jest com cobertura mínima de 80%
3. **Build** - Verificação de build do Next.js
4. **Segurança** - Auditoria NPM + CodeQL
5. **Deploy** - Deploy automático para Vercel (apenas main)
6. **Notificação** - Resumo do pipeline

### 2. 🚀 Deploy para Produção (`deploy.yml`)

**Triggers:**

- Push para branch `main`
- Execução manual com seleção de ambiente

**Jobs:**

1. **Validação Pré-Deploy** - Validações rápidas
2. **Build de Produção** - Build otimizado
3. **Deploy Vercel** - Deploy para produção
4. **Testes de Smoke** - Verificação pós-deploy
5. **Notificação** - Status do deploy

### 3. 🔍 Validação de PR (`pr-check.yml`)

**Triggers:**

- Pull requests para `main` e `develop`
- Reviews de PR

**Jobs:**

1. **Validação Rápida** - Lint e TypeScript
2. **Testes & Cobertura** - Jest com relatório
3. **Build Check** - Verificação de build
4. **Segurança** - Auditoria e CodeQL
5. **Comentário no PR** - Relatório automático
6. **Status Final** - Resumo da validação

## 🛠️ Configuração

### Secrets Necessários

Configure os seguintes secrets no GitHub:

| Secret              | Descrição              | Como Obter                                            |
| ------------------- | ---------------------- | ----------------------------------------------------- |
| `VERCEL_TOKEN`      | Token de API da Vercel | [Vercel Dashboard](https://vercel.com/account/tokens) |
| `VERCEL_ORG_ID`     | ID da organização      | `vercel teams ls` ou Dashboard                        |
| `VERCEL_PROJECT_ID` | ID do projeto          | `vercel project ls` ou Dashboard                      |

### Variáveis de Ambiente

| Variável             | Valor | Descrição                  |
| -------------------- | ----- | -------------------------- |
| `NODE_VERSION`       | `20`  | Versão do Node.js          |
| `COVERAGE_THRESHOLD` | `80`  | Cobertura mínima de testes |

## 🧪 Testando Localmente

### Pré-requisitos

1. **Instalar act:**

   ```bash
   # Windows (Chocolatey)
   choco install act

   # Windows (Winget)
   winget install act

   # macOS (Homebrew)
   brew install act

   # Linux
   curl https://raw.githubusercontent.com/nektos/act/master/install.sh | sudo bash
   ```

2. **Docker Desktop** (necessário para act)

### Scripts de Teste

#### Windows (PowerShell)

```powershell
# Configurar ambiente
.\scripts\test-workflows.ps1 -Setup

# Testar workflow específico
.\scripts\test-workflows.ps1 -Workflow ci
.\scripts\test-workflows.ps1 -Workflow pr
.\scripts\test-workflows.ps1 -Workflow deploy

# Testar todos os workflows
.\scripts\test-workflows.ps1 -Workflow all

# Limpar arquivos temporários
.\scripts\test-workflows.ps1 -Cleanup
```

#### Linux/Mac (Bash)

```bash
# Tornar executável
chmod +x scripts/test-workflows.sh

# Executar menu interativo
./scripts/test-workflows.sh
```

### Teste Manual com act

```bash
# Testar CI workflow
act push -W .github/workflows/ci.yml --eventpath .github/workflows/ci-push-develop.json

# Testar PR workflow
act pull_request -W .github/workflows/pr-check.yml --eventpath .github/workflows/pr-check-event.json

# Testar Deploy workflow
act push -W .github/workflows/deploy.yml --eventpath .github/workflows/deploy-push-main.json
```

## 📊 Métricas e Qualidade

### Cobertura de Testes

- **Mínimo:** 80%
- **Atual:** Verificado automaticamente
- **Relatório:** Gerado em cada execução

### Performance

- **Tempo de Pipeline:** < 10 minutos
- **Tempo de Deploy:** < 5 minutos
- **Cache:** Node modules e dependências

### Segurança

- **Auditoria NPM:** Executada em cada build
- **CodeQL:** Análise de segurança do código
- **Secrets:** Gerenciados pelo GitHub

## 🔧 Manutenção

### Atualizando Dependências

1. **Atualizar package.json:**

   ```bash
   npm update
   ```

2. **Verificar vulnerabilidades:**

   ```bash
   npm audit
   ```

3. **Testar localmente:**
   ```bash
   npm run ci
   ```

### Modificando Workflows

1. **Editar arquivos YAML** em `.github/workflows/`
2. **Testar localmente** com act
3. **Fazer commit** e verificar execução

### Troubleshooting

#### Pipeline Falhando

1. **Verificar logs** no GitHub Actions
2. **Executar localmente** com act
3. **Verificar secrets** configurados
4. **Testar comandos** individualmente

#### Deploy Falhando

1. **Verificar tokens** da Vercel
2. **Confirmar projeto** configurado
3. **Verificar build** local
4. **Consultar logs** da Vercel

## 📚 Recursos Adicionais

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vercel CLI Documentation](https://vercel.com/docs/cli)
- [act Documentation](https://github.com/nektos/act)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [ESLint Documentation](https://eslint.org/docs/latest/)

## 🤝 Contribuindo

Para contribuir com melhorias no CI/CD:

1. **Fork** o repositório
2. **Crie uma branch** para sua feature
3. **Teste localmente** com act
4. **Faça commit** das mudanças
5. **Abra um PR** com descrição detalhada

---

**Última atualização:** Janeiro 2025  
**Versão:** 1.0.0
