import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Menu from './index';

describe('Menu', () => {
  test('labels the equipment navigation link in Portuguese', () => {
    render(
      <MemoryRouter>
        <Menu />
      </MemoryRouter>
    );

    expect(screen.getByRole('link', { name: 'Equipamento' })).toHaveAttribute('href', '/items');
    expect(screen.queryByRole('link', { name: 'Items' })).not.toBeInTheDocument();
  });
});
