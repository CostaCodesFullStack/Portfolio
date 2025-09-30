# Pasta de Imagens

Esta pasta contém todas as imagens utilizadas no portfólio.

## Estrutura de Arquivos

### Foto de Perfil
- **Arquivo**: `profile-photo.jpg`
- **Localização**: Seção Hero (página inicial)
- **Recomendações**:
  - Formato: JPG ou PNG
  - Dimensões: 400x400px (quadrada)
  - Tamanho: Máximo 500KB
  - Fundo: Preferencialmente neutro ou transparente
  - Qualidade: Alta resolução para boa aparência

### Imagens de Projetos
- **Pasta**: `projects/`
- **Uso**: Screenshots dos projetos na seção de projetos
- **Recomendações**:
  - Formato: JPG ou PNG
  - Dimensões: 600x400px (proporção 3:2)
  - Tamanho: Máximo 1MB por imagem
  - Nome: Use o mesmo nome do projeto (ex: `meu-projeto.jpg`)

## Como Adicionar Imagens aos Projetos

1. **Prepare a imagem**:
   - Tire um screenshot do seu projeto em funcionamento
   - Edite para ficar na proporção 3:2 (600x400px)
   - Otimize o tamanho do arquivo

2. **Salve na pasta**:
   - Coloque a imagem na pasta `public/images/projects/`
   - Use um nome descritivo (ex: `conversor-moedas.jpg`)

3. **Atualize o componente**:
   - Edite o arquivo `components/sections/Projects.tsx`
   - Adicione o caminho da imagem no array `projects`:
   ```javascript
   {
     id: 3,
     title: 'Meu Projeto',
     image: '/images/projects/meu-projeto.jpg',
     // ... outros campos
   }
   ```

4. **Fallback automático**:
   - Se a imagem não existir, será exibido um ícone padrão
   - O sistema detecta automaticamente erros de carregamento

## Como Adicionar Sua Foto

1. **Prepare sua foto**:
   - Tire uma foto profissional ou use uma existente
   - Edite para ficar quadrada (400x400px)
   - Otimize o tamanho do arquivo

2. **Salve na pasta**:
   - Renomeie o arquivo para `profile-photo.jpg`
   - Coloque na pasta `public/images/`

3. **Formatos aceitos**:
   - `.jpg` (recomendado)
   - `.jpeg`
   - `.png`
   - `.webp`

## Fallback

Se a imagem não for encontrada, o portfólio mostrará automaticamente um placeholder com suas iniciais "CC".

## Otimização

Para melhor performance, considere:
- Comprimir as imagens antes de adicionar
- Usar ferramentas como TinyPNG ou ImageOptim
- Manter o tamanho dos arquivos pequeno para carregamento rápido
