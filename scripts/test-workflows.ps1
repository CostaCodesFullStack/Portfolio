# Script PowerShell para testar workflows do GitHub Actions localmente usando act
# Requisitos: act (https://github.com/nektos/act)

param(
    [string]$Workflow = "all",
    [switch]$Setup,
    [switch]$Cleanup,
    [switch]$Help
)

# Cores para output
$Red = "Red"
$Green = "Green"
$Yellow = "Yellow"
$Blue = "Blue"

# Função para imprimir mensagens coloridas
function Write-Info {
    param([string]$Message)
    Write-Host "[INFO] $Message" -ForegroundColor $Blue
}

function Write-Success {
    param([string]$Message)
    Write-Host "[SUCCESS] $Message" -ForegroundColor $Green
}

function Write-Warning {
    param([string]$Message)
    Write-Host "[WARNING] $Message" -ForegroundColor $Yellow
}

function Write-Error {
    param([string]$Message)
    Write-Host "[ERROR] $Message" -ForegroundColor $Red
}

# Verificar se act está instalado
function Test-Act {
    try {
        $null = Get-Command act -ErrorAction Stop
        Write-Success "act está instalado"
        return $true
    }
    catch {
        Write-Error "act não está instalado!"
        Write-Info "Instale o act: https://github.com/nektos/act"
        Write-Info "Ou use: choco install act (Windows) ou winget install act"
        return $false
    }
}

# Verificar se estamos no diretório correto
function Test-Directory {
    if (-not (Test-Path "package.json") -or -not (Test-Path ".github/workflows")) {
        Write-Error "Execute este script na raiz do projeto!"
        exit 1
    }
    Write-Success "Diretório correto detectado"
}

# Instalar dependências se necessário
function Install-Dependencies {
    if (-not (Test-Path "node_modules")) {
        Write-Info "Instalando dependências..."
        npm install
        Write-Success "Dependências instaladas"
    }
    else {
        Write-Info "Dependências já instaladas"
    }
}

# Criar arquivos de evento para teste
function New-EventFiles {
    Write-Info "Criando arquivos de evento para teste..."
    
    # Evento de push para develop
    $ciEvent = @"
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
"@
    $ciEvent | Out-File -FilePath ".github/workflows/ci-push-develop.json" -Encoding UTF8

    # Evento de pull request
    $prEvent = @"
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
"@
    $prEvent | Out-File -FilePath ".github/workflows/pr-check-event.json" -Encoding UTF8

    # Evento de push para main
    $deployEvent = @"
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
"@
    $deployEvent | Out-File -FilePath ".github/workflows/deploy-push-main.json" -Encoding UTF8

    Write-Success "Arquivos de evento criados"
}

# Criar arquivo de configuração do act
function New-ActConfig {
    Write-Info "Criando configuração do act..."
    
    # Arquivo .env.act para variáveis de ambiente
    $envContent = @"
# Variáveis de ambiente para teste local
NODE_VERSION=20
COVERAGE_THRESHOLD=80
NODE_ENV=test
"@
    $envContent | Out-File -FilePath ".env.act" -Encoding UTF8

    # Arquivo .secrets para secrets (não commitar!)
    $secretsContent = @"
# Secrets para teste local (substitua pelos valores reais)
VERCEL_TOKEN=your_vercel_token_here
VERCEL_ORG_ID=your_vercel_org_id_here
VERCEL_PROJECT_ID=your_vercel_project_id_here
GITHUB_TOKEN=your_github_token_here
"@
    $secretsContent | Out-File -FilePath ".secrets" -Encoding UTF8

    Write-Success "Configuração do act criada"
}

# Testar workflow de CI
function Test-CIWorkflow {
    Write-Info "Testando workflow de CI..."
    
    act push -W .github/workflows/ci.yml `
        --eventpath .github/workflows/ci-push-develop.json `
        --secret-file .secrets `
        --env-file .env.act `
        --platform ubuntu-latest=catthehacker/ubuntu:act-latest `
        --artifact-server-path /tmp/artifacts `
        --verbose
}

# Testar workflow de PR
function Test-PRWorkflow {
    Write-Info "Testando workflow de PR..."
    
    act pull_request -W .github/workflows/pr-check.yml `
        --eventpath .github/workflows/pr-check-event.json `
        --secret-file .secrets `
        --env-file .env.act `
        --platform ubuntu-latest=catthehacker/ubuntu:act-latest `
        --verbose
}

# Testar workflow de deploy
function Test-DeployWorkflow {
    Write-Info "Testando workflow de Deploy..."
    
    act push -W .github/workflows/deploy.yml `
        --eventpath .github/workflows/deploy-push-main.json `
        --secret-file .secrets `
        --env-file .env.act `
        --platform ubuntu-latest=catthehacker/ubuntu:act-latest `
        --verbose
}

# Limpar arquivos temporários
function Remove-TempFiles {
    Write-Info "Limpando arquivos temporários..."
    Remove-Item -Path ".github/workflows/*.json" -Force -ErrorAction SilentlyContinue
    Remove-Item -Path ".env.act" -Force -ErrorAction SilentlyContinue
    Remove-Item -Path ".secrets" -Force -ErrorAction SilentlyContinue
    Write-Success "Limpeza concluída"
}

# Mostrar ajuda
function Show-Help {
    Write-Host "=== Testador de Workflows GitHub Actions ===" -ForegroundColor $Blue
    Write-Host ""
    Write-Host "Uso: .\scripts\test-workflows.ps1 [opções]"
    Write-Host ""
    Write-Host "Opções:"
    Write-Host "  -Workflow <nome>    Workflow específico (ci, pr, deploy, all)"
    Write-Host "  -Setup             Configurar ambiente de teste"
    Write-Host "  -Cleanup           Limpar arquivos temporários"
    Write-Host "  -Help              Mostrar esta ajuda"
    Write-Host ""
    Write-Host "Exemplos:"
    Write-Host "  .\scripts\test-workflows.ps1 -Setup"
    Write-Host "  .\scripts\test-workflows.ps1 -Workflow ci"
    Write-Host "  .\scripts\test-workflows.ps1 -Workflow all"
    Write-Host "  .\scripts\test-workflows.ps1 -Cleanup"
}

# Função principal
function Main {
    if ($Help) {
        Show-Help
        return
    }

    if ($Cleanup) {
        Remove-TempFiles
        return
    }

    if ($Setup) {
        Test-Directory
        Install-Dependencies
        New-EventFiles
        New-ActConfig
        Write-Success "Ambiente configurado! Edite .env.act e .secrets com seus valores"
        return
    }

    if (-not (Test-Act)) { return }
    Test-Directory
    Install-Dependencies
    New-EventFiles
    New-ActConfig

    switch ($Workflow.ToLower()) {
        "ci" {
            Test-CIWorkflow
        }
        "pr" {
            Test-PRWorkflow
        }
        "deploy" {
            Test-DeployWorkflow
        }
        "all" {
            Test-CIWorkflow
            Test-PRWorkflow
            Test-DeployWorkflow
        }
        default {
            Write-Error "Workflow inválido! Use: ci, pr, deploy ou all"
        }
    }
}

# Executar função principal
Main
