import { Link, useParams } from 'react-router-dom';
import Spell from '../Spells/Spell';
import SpellList from '../Spells/spells';
import { slugify } from '../../utils/spellUtils';
import { DetailPage, BackLink, NotFound } from './styles';

export default function SpellDetail() {
  const { spellSlug } = useParams();
  const spell = SpellList.find(entry => slugify(entry.name) === spellSlug);

  return (
    <DetailPage>
      <BackLink to="/spells">← Voltar ao grimório</BackLink>
      {spell
        ? <Spell spell={spell} detail />
        : (
          <NotFound>
            <h1>Magia não encontrada</h1>
            <p>Esse endereço pode estar desatualizado.</p>
            <Link to="/spells">Ver todas as magias</Link>
          </NotFound>
        )
      }
    </DetailPage>
  );
}
