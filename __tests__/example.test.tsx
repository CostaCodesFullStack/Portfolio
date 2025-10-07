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
});
