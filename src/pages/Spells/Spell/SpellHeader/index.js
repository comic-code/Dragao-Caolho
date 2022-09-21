import { useContext, useState, useEffect } from 'react';

import { GlobalContext } from '../../../../contexts/Global';
import { Row } from '../../../../components/Defaults';
import Favorite from '../../../../assets/icons/favorite.png';
import Unfavorite from '../../../../assets/icons/unfavorite.png';
import { SpellHeaderWrapper } from './styles';

export default function SpellHeader({ spell }) {
  const { savedSpells, setSavedSpells } = useContext(GlobalContext);
  const [isSaved, setIsSaved] = useState(savedSpells.some(savedSpell => savedSpell.name === spell.name));

  function handleFavorite() {
    setIsSaved(!isSaved);
    if (isSaved) {
      setSavedSpells(savedSpells => savedSpells.filter(savedSpell => savedSpell.name !== spell.name));
    } else {
      setSavedSpells(savedSpells => [spell, ...savedSpells]);
    }
  }

  useEffect(() => {
    setIsSaved(savedSpells.some(savedSpell => savedSpell.name === spell.name));
  }, [savedSpells, spell.name]);
  return (
    <SpellHeaderWrapper>
      <Row>
        <h2>{spell.name}</h2>
        <h3>&nbsp;({spell.originalName})</h3>
        <button onClick={handleFavorite}>
          <img src={isSaved ? Favorite : Unfavorite} alt={isSaved ? 'Desfavoritar' : 'Favoritar'} />
        </button>
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
