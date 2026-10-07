import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { GlobalContext } from '../../contexts/Global';
import Spells from './index';

jest.mock('./spells', () => ({
  __esModule: true,
  default: [{
    name: 'Raio de Fogo',
    originalName: 'Fire Bolt',
    level: 0,
    school: 'evocação',
    type: 'truque de evocação',
    isRitual: false,
    classes: ['mago'],
    casting: { time: 1, unit: 'ação' },
    range: { value: 36, unit: 'metros' },
    components: { isVerbal: true, isSomatic: true, isMaterial: false },
    duration: { value: 0, unit: 'instantâneo', concentration: false },
  }],
}));

jest.mock('./Spell', () => ({
  __esModule: true,
  default: ({ spell, characterId }) => {
    const React = require('react');
    return React.createElement('article', { 'data-character-id': characterId || '' }, spell.name);
  },
}));

describe('Spells page', () => {
  test('shows the full catalogue without the former independent grimoire toggle', () => {
    render(
      <MemoryRouter>
        <GlobalContext.Provider value={{
          characters: [],
          activeCharacterId: '',
          setActiveCharacterId: jest.fn(),
        }}>
          <Spells />
        </GlobalContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText('Raio de Fogo')).toBeInTheDocument();
    expect(screen.getByText('1 magia encontrada')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Mostrar magias salvas' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Mostrar todas as magias' })).not.toBeInTheDocument();
  });

  test('opens only the selected character spells in a personal grimoire view', () => {
    const character = {
      id: 'lyra',
      name: 'Lyra',
      className: 'mago',
      subclass: '',
      spells: [{ spellName: 'Raio de Fogo', status: 'prepared' }],
    };
    const { container } = render(
      <MemoryRouter initialEntries={['/spells?view=grimoire&characterId=lyra']}>
        <GlobalContext.Provider value={{
          characters: [character],
          activeCharacterId: 'someone-else',
          setActiveCharacterId: jest.fn(),
        }}>
          <Spells />
        </GlobalContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: 'Grimório de Lyra' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Voltar ao catálogo de magias' })).toHaveAttribute('href', '/spells');
    expect(screen.getByText('Raio de Fogo')).toBeInTheDocument();
    expect(container.querySelector('article')).toHaveAttribute('data-character-id', 'lyra');
    expect(screen.queryByLabelText('Grimório ativo')).not.toBeInTheDocument();
    expect(screen.queryByText('1 magia encontrada')).not.toBeInTheDocument();
  });

  test('shows a catalog link when the selected character grimoire is empty', () => {
    const character = { id: 'lyra', name: 'Lyra', className: 'mago', spells: [] };
    render(
      <MemoryRouter initialEntries={['/spells?view=grimoire&characterId=lyra']}>
        <GlobalContext.Provider value={{
          characters: [character],
          activeCharacterId: 'lyra',
          setActiveCharacterId: jest.fn(),
        }}>
          <Spells />
        </GlobalContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText('O grimório de Lyra está vazio.')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Adicionar magias do catálogo' })).toHaveAttribute('href', '/spells');
  });
});
