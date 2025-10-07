import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Exemplo de teste básico
describe('Exemplo de Teste', () => {
  it('deve renderizar um texto simples', () => {
    render(<div>Olá, mundo!</div>);
    expect(screen.getByText('Olá, mundo!')).toBeInTheDocument();
  });

  it('deve verificar se um botão está presente', () => {
    render(<button type="button">Clique aqui</button>);
    expect(
      screen.getByRole('button', { name: 'Clique aqui' })
    ).toBeInTheDocument();
  });

  it('deve testar o pipeline CI/CD', () => {
    const pipeline = {
      name: 'CI/CD Pipeline',
      status: 'funcionando',
      jobs: ['lint', 'test', 'build', 'deploy']
    };
    
    expect(pipeline.name).toBe('CI/CD Pipeline');
    expect(pipeline.status).toBe('funcionando');
    expect(pipeline.jobs).toHaveLength(4);
  });
});
