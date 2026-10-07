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
  default: ({ spell }) => {
    const React = require('react');
    return React.createElement('article', null, spell.name);
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
});
