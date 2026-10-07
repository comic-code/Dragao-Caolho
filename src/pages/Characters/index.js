import { useContext, useState } from 'react';
import { GlobalContext } from '../../contexts/Global';
import CharacterClassIcon from '../../components/CharacterClassIcon';
import CharacterForm from './CharacterForm';
import Spellbook from './Spellbook';
import Inventory from './Inventory';
import { CHARACTER_CLASSES } from '../../utils/characterUtils';
import { CharacterCard, CharacterDetailHeader, CharacterList, CharacterWorkspace, CharactersPage, PageHeader, Panel } from './styles';

export default function Characters() {
  const {
    characters,
    setActiveCharacterId,
    createCharacter,
    updateCharacter,
    deleteCharacter,
  } = useContext(GlobalContext);
  const [showForm, setShowForm] = useState(false);
  const [openedCharacterId, setOpenedCharacterId] = useState(null);
  const [showProfileEditor, setShowProfileEditor] = useState(false);
  const selectedCharacter = characters.find(character => character.id === openedCharacterId) || null;

  function handleCreate(details) {
    const character = createCharacter(details);
    setActiveCharacterId(character.id);
    setShowForm(false);
    setOpenedCharacterId(null);
    setShowProfileEditor(false);
  }

  function openCharacter(character) {
    setActiveCharacterId(character.id);
    setOpenedCharacterId(character.id);
    setShowForm(false);
    setShowProfileEditor(false);
  }

  function showCharacterList() {
    setOpenedCharacterId(null);
    setShowProfileEditor(false);
  }

  function updateField(field, value) {
    if (!selectedCharacter) return;
    updateCharacter(selectedCharacter.id, { [field]: value });
  }

  function handleDelete() {
    if (!selectedCharacter || !window.confirm(`Excluir ${selectedCharacter.name} e seus dados locais?`)) return;
    deleteCharacter(selectedCharacter.id);
    setOpenedCharacterId(null);
    setShowProfileEditor(false);
  }

  return (
    <CharactersPage>
      {!selectedCharacter
        ? (
          <>
            <PageHeader>
              <div>
                <span className="eyebrow">SUAS FICHAS LOCAIS</span>
                <h1>Personagens</h1>
                <p>Escolha um aventureiro para abrir o grimório e os equipamentos.</p>
              </div>
              <button className="headerAction" type="button" onClick={() => setShowForm(current => !current)}>
                {showForm ? 'Fechar formulário' : '+ Novo personagem'}
              </button>
            </PageHeader>

            {showForm && <CharacterForm onCreate={handleCreate} onCancel={() => setShowForm(false)} />}

            {characters.length > 0
              ? (
                <CharacterList aria-label="Personagens cadastrados">
                  {characters.map(character => {
                    const spells = Array.isArray(character.spells) ? character.spells : [];
                    const inventory = Array.isArray(character.inventory) ? character.inventory : [];
                    const preparedCount = spells.filter(entry => entry.status === 'prepared').length;
                    return (
                      <CharacterCard key={character.id}>
                        <div className="characterCardTitle">
                          <div className="characterCardIdentity">
                            <CharacterClassIcon characterClass={character.className} size="3rem" />
                            <div className="characterCardCopy">
                              <h2>{character.name || 'Personagem sem nome'}</h2>
                              <p>{character.className}{character.subclass ? ` · ${character.subclass}` : ''}</p>
                            </div>
                          </div>
                          <span className="levelBadge">Nível {character.level}</span>
                        </div>
                        <div className="characterCardStats">
                          <span>{spells.length} {spells.length === 1 ? 'magia' : 'magias'}</span>
                          <span>{preparedCount} preparadas</span>
                          <span>{inventory.length} {inventory.length === 1 ? 'item' : 'itens'}</span>
                        </div>
                        <button
                          className="cardOpen"
                          type="button"
                          aria-label={`Abrir ficha de ${character.name || 'personagem sem nome'}`}
                          onClick={() => openCharacter(character)}
                        />
                      </CharacterCard>
                    );
                  })}
                </CharacterList>
              )
              : !showForm && (
                <Panel className="emptyCharacter">
                  <h2>Ainda não há personagens</h2>
                  <p>Crie uma ficha para organizar seu grimório e seus equipamentos.</p>
                  <button className="primary" type="button" onClick={() => setShowForm(true)}>Criar personagem</button>
                </Panel>
              )
            }
          </>
        )
        : (
          <>
            <CharacterDetailHeader>
              <div className="detailIdentity">
                <CharacterClassIcon characterClass={selectedCharacter.className} size="4rem" />
                <div className="detailTitle">
                  <button className="backButton" type="button" aria-label="Voltar para personagens" onClick={showCharacterList}>
                    ← Personagens
                  </button>
                  <span className="eyebrow">FICHA DO AVENTUREIRO</span>
                  <h1>{selectedCharacter.name || 'Personagem sem nome'}</h1>
                  <p>{selectedCharacter.className}{selectedCharacter.subclass ? ` · ${selectedCharacter.subclass}` : ''} · Nível {selectedCharacter.level}</p>
                </div>
              </div>
              <div className="detailActions">
                <button className="editCharacter" type="button" onClick={() => setShowProfileEditor(current => !current)}>
                  {showProfileEditor ? 'Fechar edição' : 'Editar ficha'}
                </button>
                <button className="deleteCharacter" type="button" onClick={handleDelete}>Excluir personagem</button>
              </div>
            </CharacterDetailHeader>

            {showProfileEditor && (
              <Panel className="profilePanel">
                <div className="panelHeading">
                  <div>
                    <span className="eyebrow">DADOS DO PERSONAGEM</span>
                    <h2>Editar ficha</h2>
                  </div>
                </div>
                <div className="profileFields">
                  <label>
                    Nome
                    <input maxLength={50} value={selectedCharacter.name} onChange={event => updateField('name', event.target.value)} />
                  </label>
                  <label>
                    Classe
                    <select value={selectedCharacter.className} onChange={event => updateField('className', event.target.value)}>
                      {CHARACTER_CLASSES.map(className => (
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
            )}

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
