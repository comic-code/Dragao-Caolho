import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import GlobalProvider from '../../contexts/Global';
import Characters from './index';

const CHARACTERS_KEY = 'dragao-caolho.characters.v1';
const ACTIVE_CHARACTER_KEY = 'dragao-caolho.active-character.v1';

function renderCharacters() {
  return render(
    <GlobalProvider>
      <MemoryRouter>
        <Characters />
      </MemoryRouter>
    </GlobalProvider>,
  );
}

describe('Characters page', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  test('lists characters and opens the selected character workspace', async () => {
    window.localStorage.setItem(CHARACTERS_KEY, JSON.stringify([
      { id: 'aelthar', name: 'Aelthar', className: 'mago', subclass: '', level: 3, spells: [], inventory: [], coins: {} },
      { id: 'mira', name: 'Mira', className: 'bardo', subclass: 'Lore', level: 2, spells: [], inventory: [], coins: {} },
    ]));
    window.localStorage.setItem(ACTIVE_CHARACTER_KEY, 'aelthar');
    renderCharacters();

    expect(screen.getByRole('button', { name: 'Abrir ficha de Aelthar' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Abrir ficha de Mira' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Magias' })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Equipamentos' })).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Abrir ficha de Mira' }));
    expect(screen.getByRole('heading', { name: 'Mira' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Magias' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Equipamentos' })).toBeInTheDocument();
    await waitFor(() => expect(window.localStorage.getItem(ACTIVE_CHARACTER_KEY)).toBe('mira'));

    fireEvent.click(screen.getByRole('button', { name: 'Voltar para personagens' }));
    expect(screen.getByRole('button', { name: 'Abrir ficha de Aelthar' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Magias' })).not.toBeInTheDocument();
  });

  test('creates a character, prepares a class spell, adds an item, and restores saved data', async () => {
    const { unmount } = renderCharacters();

    fireEvent.click(screen.getByRole('button', { name: '+ Novo personagem' }));
    const form = screen.getByRole('heading', { name: 'Novo personagem' }).closest('form');

    fireEvent.change(within(form).getByLabelText('Nome'), { target: { value: 'Aelthar' } });
    fireEvent.change(within(form).getByLabelText('Classe conjuradora'), { target: { value: 'mago' } });
    fireEvent.change(within(form).getByLabelText('Nível'), { target: { value: '3' } });
    fireEvent.change(within(form).getByLabelText('Subclasse (opcional)'), { target: { value: 'Evocação' } });
    fireEvent.click(within(form).getByRole('button', { name: 'Criar personagem' }));

    const characterCard = screen.getByRole('button', { name: 'Abrir ficha de Aelthar' });
    expect(characterCard).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Magias' })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Equipamentos' })).not.toBeInTheDocument();
    fireEvent.click(characterCard);

    expect(screen.getByRole('heading', { name: 'Magias' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Equipamentos' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Editar ficha' }));
    expect(screen.getByLabelText('Nome')).toHaveValue('Aelthar');
    expect(screen.getByLabelText('Classe conjuradora')).toHaveValue('mago');

    const spellSearch = screen.getByLabelText('Adicionar magia por nome');
    fireEvent.change(spellSearch, { target: { value: 'Ajuda' } });
    expect(await screen.findByText('Nenhuma magia desta classe corresponde. Tente outro nome ou classe.')).toBeInTheDocument();

    fireEvent.change(spellSearch, { target: { value: 'armadura arcana' } });
    fireEvent.click(await screen.findByRole('button', { name: 'Adicionar Armadura Arcana ao grimório' }));
    const spellStatus = screen.getByLabelText('Estado de Armadura Arcana');
    fireEvent.change(spellStatus, { target: { value: 'prepared' } });

    expect(spellStatus).toHaveValue('prepared');
    expect(screen.getByText('1 conhecidas · 1 preparadas')).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText('Buscar item'), { target: { value: 'Adaga' } });
    expect(screen.getByLabelText('Do catálogo')).toHaveValue('arma:Adaga');
    fireEvent.click(screen.getByRole('button', { name: 'Adicionar', exact: true }));
    expect(screen.getByLabelText('Quantidade de Adaga')).toHaveValue(1);

    let savedCharacters;
    await waitFor(() => {
      savedCharacters = JSON.parse(window.localStorage.getItem(CHARACTERS_KEY) || '[]');
      expect(savedCharacters).toHaveLength(1);
      expect(savedCharacters[0]).toMatchObject({
        name: 'Aelthar',
        className: 'mago',
        subclass: 'Evocação',
        level: 3,
        spells: [{ spellName: 'Armadura Arcana', status: 'prepared' }],
        inventory: [{ itemId: 'arma:Adaga', quantity: 1, equipped: false }],
      });
    });
    expect(window.localStorage.getItem(ACTIVE_CHARACTER_KEY)).toBe(savedCharacters[0].id);

    fireEvent.click(screen.getByRole('button', { name: 'Voltar para personagens' }));
    expect(screen.getByRole('button', { name: 'Abrir ficha de Aelthar' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Magias' })).not.toBeInTheDocument();

    unmount();
    renderCharacters();

    const restoredCharacterCard = screen.getByRole('button', { name: 'Abrir ficha de Aelthar' });
    fireEvent.click(restoredCharacterCard);
    expect(screen.getByLabelText('Estado de Armadura Arcana')).toHaveValue('prepared');
    expect(screen.getByLabelText('Quantidade de Adaga')).toHaveValue(1);
    fireEvent.click(screen.getByRole('button', { name: 'Editar ficha' }));
    expect(screen.getByLabelText('Nome')).toHaveValue('Aelthar');
  });
});
