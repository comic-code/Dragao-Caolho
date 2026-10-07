import { useContext, useState } from 'react';
import { GlobalContext } from '../../contexts/Global';
import CharacterForm from './CharacterForm';
import Spellbook from './Spellbook';
import Inventory from './Inventory';
import { CharacterWorkspace, CharactersPage, PageHeader, Panel } from './styles';

export default function Characters() {
  const {
    characters,
    activeCharacterId,
    setActiveCharacterId,
    createCharacter,
    updateCharacter,
    deleteCharacter,
  } = useContext(GlobalContext);
  const [showForm, setShowForm] = useState(false);
  const selectedCharacter = characters.find(character => character.id === activeCharacterId) || characters[0] || null;

  function handleCreate(details) {
    const character = createCharacter(details);
    setActiveCharacterId(character.id);
    setShowForm(false);
  }

  function updateField(field, value) {
    if (!selectedCharacter) return;
    updateCharacter(selectedCharacter.id, { [field]: value });
  }

  function handleDelete() {
    if (!selectedCharacter || !window.confirm(`Excluir ${selectedCharacter.name} e seus dados locais?`)) return;
    deleteCharacter(selectedCharacter.id);
  }

  return (
    <CharactersPage>
      <PageHeader>
        <div>
          <span className="eyebrow">SUA MESA, SUAS FICHAS</span>
          <h1>Personagens</h1>
          <p>Grimório e mochila independentes, salvos neste navegador.</p>
        </div>
        <button className="headerAction" type="button" onClick={() => setShowForm(current => !current)}>
          {showForm ? 'Fechar formulário' : '+ Novo personagem'}
        </button>
      </PageHeader>

      {showForm && <CharacterForm onCreate={handleCreate} onCancel={() => setShowForm(false)} />}

      {!selectedCharacter
        ? (
          <Panel className="emptyCharacter">
            <h2>Comece criando um aventureiro</h2>
            <p>Depois, você poderá montar um grimório pessoal e controlar equipamentos e moedas.</p>
            <button className="primary" type="button" onClick={() => setShowForm(true)}>Criar personagem</button>
          </Panel>
        )
        : (
          <>
            <Panel className="profilePanel">
              <div className="profileToolbar">
                <label>
                  Personagem ativo
                  <select value={selectedCharacter.id} onChange={event => setActiveCharacterId(event.target.value)}>
                    {characters.map(character => <option key={character.id} value={character.id}>{character.name}</option>)}
                  </select>
                </label>
                <button className="deleteCharacter" type="button" onClick={handleDelete}>Excluir personagem</button>
              </div>
              <div className="profileFields">
                <label>
                  Nome
                  <input maxLength={50} value={selectedCharacter.name} onChange={event => updateField('name', event.target.value)} />
                </label>
                <label>
                  Classe conjuradora
                  <select value={selectedCharacter.className} onChange={event => updateField('className', event.target.value)}>
                    {['bardo', 'bruxo', 'clérigo', 'druida', 'feiticeiro', 'mago', 'paladino', 'patrulheiro'].map(className => (
                      <option key={className} value={className}>{className}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Subclasse
                  <input maxLength={60} value={selectedCharacter.subclass} onChange={event => updateField('subclass', event.target.value)} placeholder="Opcional" />
                </label>
                <label>
                  Nível
                  <input type="number" min="1" max="20" value={selectedCharacter.level} onChange={event => updateField('level', Math.min(20, Math.max(1, Number(event.target.value) || 1)))} />
                </label>
              </div>
            </Panel>

            <CharacterWorkspace>
              <Spellbook character={selectedCharacter} onUpdate={updateCharacter} />
              <Inventory character={selectedCharacter} onUpdate={updateCharacter} />
            </CharacterWorkspace>
          </>
        )
      }
    </CharactersPage>
  );
}
