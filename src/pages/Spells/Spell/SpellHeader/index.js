import { useContext } from 'react';

import { GlobalContext } from '../../../../contexts/Global';
import { Row } from '../../../../components/Defaults';
import GrimoireIcon from '../../../../assets/icons/favorite.png';
import OpenGrimoireIcon from '../../../../assets/icons/openGrimoire.png';

import { SpellHeaderWrapper } from './styles';

export default function SpellHeader({ spell, characterId }) {
  const { characters, activeCharacterId, updateCharacter } = useContext(GlobalContext);
  const activeCharacter = characterId
    ? characters.find(character => character.id === characterId) || null
    : characters.find(character => character.id === activeCharacterId) || characters[0] || null;
  const isInSpellbook = Boolean(activeCharacter?.spells?.some(entry => entry.spellName === spell.name));

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
            <img src={isInSpellbook ? OpenGrimoireIcon : GrimoireIcon} alt="" />
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
