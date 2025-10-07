#!/bin/bash

# Script para testar workflows do GitHub Actions localmente usando act
# Requisitos: act (https://github.com/nektos/act)

set -e

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Função para imprimir mensagens coloridas
print_message() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Verificar se act está instalado
check_act() {
    if ! command -v act &> /dev/null; then
        print_error "act não está instalado!"
        print_message "Instale o act: https://github.com/nektos/act"
        print_message "Ou use: brew install act (macOS) ou choco install act (Windows)"
        exit 1
    fi
    print_success "act está instalado"
}

# Verificar se estamos no diretório correto
check_directory() {
    if [ ! -f "package.json" ] || [ ! -d ".github/workflows" ]; then
        print_error "Execute este script na raiz do projeto!"
        exit 1
    fi
    print_success "Diretório correto detectado"
}

# Instalar dependências se necessário
install_dependencies() {
    if [ ! -d "node_modules" ]; then
        print_message "Instalando dependências..."
        npm install
        print_success "Dependências instaladas"
    else
        print_message "Dependências já instaladas"
    fi
}

# Testar workflow de CI
test_ci_workflow() {
    print_message "Testando workflow de CI..."
    
    # Simular push para develop
    act push -W .github/workflows/ci.yml \
        --eventpath .github/workflows/ci-push-develop.json \
        --secret-file .env.act \
        --env-file .env.act \
        --platform ubuntu-latest=catthehacker/ubuntu:act-latest \
        --artifact-server-path /tmp/artifacts \
        --verbose
}

# Testar workflow de PR
test_pr_workflow() {
    print_message "Testando workflow de PR..."
    
    # Simular pull request
    act pull_request -W .github/workflows/pr-check.yml \
        --eventpath .github/workflows/pr-check-event.json \
        --secret-file .env.act \
        --env-file .env.act \
        --platform ubuntu-latest=catthehacker/ubuntu:act-latest \
        --verbose
}

# Testar workflow de deploy
test_deploy_workflow() {
    print_message "Testando workflow de Deploy..."
    
    # Simular push para main
    act push -W .github/workflows/deploy.yml \
        --eventpath .github/workflows/deploy-push-main.json \
        --secret-file .env.act \
        --env-file .env.act \
        --platform ubuntu-latest=catthehacker/ubuntu:act-latest \
        --verbose
}

# Criar arquivos de evento para teste
create_event_files() {
    print_message "Criando arquivos de evento para teste..."
    
    # Evento de push para develop
    cat > .github/workflows/ci-push-develop.json << EOF
{
  "ref": "refs/heads/develop",
  "repository": {
    "name": "portifolio2",
    "owner": {
      "login": "jpepo"
    }
  },
  "head_commit": {
    "id": "abc123",
    "message": "Test commit for CI"
  }
}
EOF

    # Evento de pull request
    cat > .github/workflows/pr-check-event.json << EOF
{
  "pull_request": {
    "number": 1,
    "head": {
      "ref": "feature/test",
      "sha": "abc123"
    },
    "base": {
      "ref": "main"
    }
  },
  "repository": {
    "name": "portifolio2",
    "owner": {
      "login": "jpepo"
    }
  }
}
EOF

    # Evento de push para main
    cat > .github/workflows/deploy-push-main.json << EOF
{
  "ref": "refs/heads/main",
  "repository": {
    "name": "portifolio2",
    "owner": {
      "login": "jpepo"
    }
  },
  "head_commit": {
    "id": "abc123",
    "message": "Test commit for deploy"
  }
}
EOF

    print_success "Arquivos de evento criados"
}

# Criar arquivo de configuração do act
create_act_config() {
    print_message "Criando configuração do act..."
    
    # Arquivo .env.act para variáveis de ambiente
    cat > .env.act << EOF
# Variáveis de ambiente para teste local
NODE_VERSION=20
COVERAGE_THRESHOLD=80
NODE_ENV=test
EOF

    # Arquivo .secrets para secrets (não commitar!)
    cat > .secrets << EOF
# Secrets para teste local (substitua pelos valores reais)
VERCEL_TOKEN=your_vercel_token_here
VERCEL_ORG_ID=your_vercel_org_id_here
VERCEL_PROJECT_ID=your_vercel_project_id_here
GITHUB_TOKEN=your_github_token_here
EOF

    print_success "Configuração do act criada"
}

# Limpar arquivos temporários
cleanup() {
    print_message "Limpando arquivos temporários..."
    rm -f .github/workflows/*.json
    rm -f .env.act
    rm -f .secrets
    print_success "Limpeza concluída"
}

# Menu principal
show_menu() {
    echo -e "${BLUE}=== Testador de Workflows GitHub Actions ===${NC}"
    echo ""
    echo "1. Testar workflow de CI (develop)"
    echo "2. Testar workflow de PR"
    echo "3. Testar workflow de Deploy (main)"
    echo "4. Testar todos os workflows"
    echo "5. Configurar ambiente de teste"
    echo "6. Limpar arquivos temporários"
    echo "7. Sair"
    echo ""
    read -p "Escolha uma opção (1-7): " choice
}

# Função principal
main() {
    check_act
    check_directory
    install_dependencies
    
    while true; do
        show_menu
        case $choice in
            1)
                create_event_files
                create_act_config
                test_ci_workflow
                ;;
            2)
                create_event_files
                create_act_config
                test_pr_workflow
                ;;
            3)
                create_event_files
                create_act_config
                test_deploy_workflow
                ;;
            4)
                create_event_files
                create_act_config
                test_ci_workflow
                test_pr_workflow
                test_deploy_workflow
                ;;
            5)
                create_event_files
                create_act_config
                print_success "Ambiente configurado! Edite .env.act e .secrets com seus valores"
                ;;
            6)
                cleanup
                ;;
            7)
                print_message "Saindo..."
                exit 0
                ;;
            *)
                print_error "Opção inválida!"
                ;;
        esac
        echo ""
        read -p "Pressione Enter para continuar..."
    done
}

# Executar função principal
main "$@"
