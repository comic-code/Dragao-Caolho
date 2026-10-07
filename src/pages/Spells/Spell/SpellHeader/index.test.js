import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { GlobalContext } from '../../../../contexts/Global';
import SpellHeader from './index';

jest.mock('../../../../assets/icons/favorite.png', () => 'legacy-grimoire-closed');
jest.mock('../../../../assets/icons/openGrimoire.png', () => 'legacy-grimoire-open');

const spell = {
  name: 'Adivinhação',
  originalName: 'Divination',
  type: '4º nível de adivinhação',
  isRitual: false,
  classes: ['clérigo'],
  components: { isVerbal: true, isSomatic: true, isMaterial: false },
  duration: { concentration: false },
};

const character = {
  id: 'aelthar',
  name: 'Aelthar',
  spells: [],
};

function renderHeader(activeCharacter) {
  const updateCharacter = jest.fn();
  render(
    <GlobalContext.Provider value={{
      characters: [activeCharacter],
      activeCharacterId: activeCharacter.id,
      updateCharacter,
    }}>
      <MemoryRouter>
        <SpellHeader spell={spell} />
      </MemoryRouter>
    </GlobalContext.Provider>
  );
  return updateCharacter;
}

describe('SpellHeader grimoire action', () => {
  test('uses the old book icon and adds the spell to the active character only', () => {
    const updateCharacter = renderHeader(character);
    const button = screen.getByRole('button', { name: 'Adicionar Adivinhação ao grimório de Aelthar' });

    expect(button.querySelector('img')).toHaveAttribute('src', 'legacy-grimoire-closed');
    expect(screen.queryByRole('button', { name: 'Adicionar aos favoritos' })).not.toBeInTheDocument();

    fireEvent.click(button);

    expect(updateCharacter).toHaveBeenCalledWith('aelthar', expect.any(Function));
    const update = updateCharacter.mock.calls[0][1];
    expect(update(character).spells).toEqual([{ spellName: 'Adivinhação', status: 'known' }]);
  });

  test('shows the old open-book icon for a spell already in the character grimoire', () => {
    const savedCharacter = {
      ...character,
      spells: [{ spellName: 'Adivinhação', status: 'known' }],
    };
    renderHeader(savedCharacter);
    const button = screen.getByRole('button', { name: 'Adivinhação já está no grimório de Aelthar' });

    expect(button).toBeDisabled();
    expect(button.querySelector('img')).toHaveAttribute('src', 'legacy-grimoire-open');
  });
});
