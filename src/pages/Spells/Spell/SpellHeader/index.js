import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { GlobalContext } from '../../../../contexts/Global';
import { Row } from '../../../../components/Defaults';
import Favorite from '../../../../assets/icons/favorite.png';
import Unfavorite from '../../../../assets/icons/unfavorite.png';
import { slugify } from '../../../../utils/spellUtils';
import { SpellHeaderWrapper } from './styles';

export default function SpellHeader({ spell, showDetailLink = true }) {
  const { savedSpells, setSavedSpells, characters, activeCharacterId, updateCharacter } = useContext(GlobalContext);
  const isSaved = savedSpells.some(savedSpell => savedSpell.name === spell.name);
  const activeCharacter = characters.find(character => character.id === activeCharacterId) || characters[0] || null;
  const isInSpellbook = Boolean(activeCharacter?.spells?.some(entry => entry.spellName === spell.name));

  function handleFavorite() {
    setSavedSpells(current => current.some(savedSpell => savedSpell.name === spell.name)
      ? current.filter(savedSpell => savedSpell.name !== spell.name)
      : [spell, ...current]);
  }

  function handleAddToSpellbook() {
    if (!activeCharacter || isInSpellbook) return;
    updateCharacter(activeCharacter.id, current => {
      const spells = Array.isArray(current.spells) ? current.spells : [];
      if (spells.some(entry => entry.spellName === spell.name)) return current;
      return { ...current, spells: [...spells, { spellName: spell.name, status: 'known' }] };
    });
  }

  return (
    <SpellHeaderWrapper>
      <Row className="spellTitleRow">
        <div className="spellTitle">
          <h2>{spell.name}</h2>
          <h3 className="originalName">({spell.originalName})</h3>
        </div>
        <div className="spellActions">
          {showDetailLink && (
            <Link
              className="detailLink"
              to={`/spells/${slugify(spell.name)}`}
              aria-label={`Abrir ficha de ${spell.name}`}
              title="Abrir ficha da magia"
            >
              <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24">
                <path d="M10 13.9a1 1 0 0 0 1.4 0l4.2-4.2a3 3 0 0 0-4.2-4.2l-2.1 2.1a1 1 0 0 0 1.4 1.4l2.1-2.1a1 1 0 0 1 1.4 1.4L10 12.5a1 1 0 0 0 0 1.4Z" fill="currentColor" />
                <path d="M14 10.1a1 1 0 0 0-1.4 0l-4.2 4.2a3 3 0 0 0 4.2 4.2l2.1-2.1a1 1 0 1 0-1.4-1.4l-2.1 2.1a1 1 0 0 1-1.4-1.4l4.2-4.2a1 1 0 0 0 0-1.4Z" fill="currentColor" />
              </svg>
            </Link>
          )}
          <button
            type="button"
            className="spellbookAction"
            onClick={handleAddToSpellbook}
            disabled={!activeCharacter || isInSpellbook}
            aria-label={activeCharacter
              ? (isInSpellbook ? `${spell.name} já está no grimório de ${activeCharacter.name}` : `Adicionar ${spell.name} ao grimório de ${activeCharacter.name}`)
              : 'Crie um personagem para usar seu grimório'}
            title={activeCharacter?.name ? `Grimório de ${activeCharacter.name}` : 'Crie um personagem para usar seu grimório'}
          >
            <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24">
              <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 0 4 22V5.5Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
              <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H8v17H6.5A2.5 2.5 0 0 0 4 22V5.5ZM12 8h4m-4 3h4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
          </button>
          <button type="button" onClick={handleFavorite} aria-pressed={isSaved} aria-label={isSaved ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}>
            <img src={isSaved ? Favorite : Unfavorite} alt="" />
          </button>
        </div>
      </Row>
      <h3>{spell.type}{spell.isRitual && ' (RITUAL)'}</h3>
      <span>
        <span className="field">Classes:</span>
        &nbsp;{spell.classes.join(', ')}
      </span>
      <span>
        <span className="field">Componentes:</span>
        {spell.components.isVerbal && <span className="component verbal">V</span>}
        {spell.components.isSomatic && <span className="component somatic">S</span>}
        {spell.components.isMaterial && <span className="component material">M</span>}
      </span>
      {spell.components.isMaterial && (
        <span>
          <span className="field">Materiais:</span>
          &nbsp;{spell.components.material.description}
        </span>
      )}
      {spell.duration.concentration && <span className="concentration">concentração</span>}
    </SpellHeaderWrapper>
  );
}
