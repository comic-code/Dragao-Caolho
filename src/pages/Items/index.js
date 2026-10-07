import { Fragment, useContext, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../contexts/Global';
import ItemIcon from '../../components/ItemIcon';
import { ITEM_CATALOG, addItemToInventory, filterCatalogItems } from '../../utils/itemUtils';
import { ItemsContainer, Table, TableRow, TableHeader, TableCell, Toolbar, AddButton } from './styles';

function AddToInventory({ item, character, onAdd }) {
  if (!character) return null;
  return (
    <AddButton type="button" onClick={() => onAdd(item)} aria-label={`Adicionar ${item.label} ao inventário de ${character.name}`} title={`Adicionar ${item.label}`}>
      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" /></svg>
    </AddButton>
  );
}

function ItemName({ item }) {
  return (
    <span className="itemName">
      <span className="itemGlyph"><ItemIcon item={item} size={22} /></span>
      <span>{item.label}</span>
    </span>
  );
}

export default function Items() {
  const { characters, activeCharacterId, setActiveCharacterId, updateCharacter } = useContext(GlobalContext);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');
  const activeCharacter = characters.find(character => character.id === activeCharacterId) || characters[0] || null;

  const visibleItems = useMemo(() => filterCatalogItems(ITEM_CATALOG, search, category)
    .sort((left, right) => left.label.localeCompare(right.label, 'pt-BR', { sensitivity: 'base' }) * (sortOrder === 'asc' ? 1 : -1)), [search, category, sortOrder]);
  const armorItems = visibleItems.filter(item => item.category === 'armor');
  const weaponItems = visibleItems.filter(item => item.category === 'weapon');
  const groupedWeapons = weaponItems.reduce((groups, weapon) => {
    groups[weapon.type] = [...(groups[weapon.type] || []), weapon];
    return groups;
  }, {});

  function addItem(item) {
    if (!activeCharacter) return;
    updateCharacter(activeCharacter.id, current => ({
      ...current,
      inventory: addItemToInventory(current.inventory || [], item.id),
    }));
  }

  return (
    <ItemsContainer>
      <header className="pageIntro">
        <div>
          <span className="eyebrow">ARSENAL DA AVENTURA</span>
          <h1>Equipamentos</h1>
          <p>Consulte as opções e adicione itens direto à mochila do personagem ativo.</p>
        </div>
        {!activeCharacter && <Link className="createCharacterLink" to="/characters">Criar personagem</Link>}
      </header>

      <Toolbar $hasCharacter={characters.length > 0}>
        {characters.length > 0 && (
          <label>
            Adicionar a
            <select value={activeCharacter?.id || ''} onChange={event => setActiveCharacterId(event.target.value)}>
              {characters.map(character => <option key={character.id} value={character.id}>{character.name || 'Sem nome'}</option>)}
            </select>
          </label>
        )}
        <label className="searchField">
          Buscar
          <input type="search" value={search} onChange={event => setSearch(event.target.value)} placeholder="Nome, propriedade ou dano" />
        </label>
        <label>
          Categoria
          <select value={category} onChange={event => setCategory(event.target.value)}>
            <option value="all">Todas</option>
            <option value="weapon">Armas</option>
            <option value="armor">Armaduras e escudos</option>
          </select>
        </label>
        <label>
          Ordem
          <select value={sortOrder} onChange={event => setSortOrder(event.target.value)}>
            <option value="asc">A–Z</option>
            <option value="desc">Z–A</option>
          </select>
        </label>
      </Toolbar>

      <p className="resultCount">{visibleItems.length} itens encontrados</p>

      {armorItems.length > 0 && (
        <section className="itemSection">
          <h2>Armaduras e escudos <span>{armorItems.length}</span></h2>
          <div className="tableScroll" role="region" aria-label="Tabela de armaduras e escudos" tabIndex="0">
            <Table>
              <thead><TableRow><TableHeader>Item</TableHeader><TableHeader>Preço</TableHeader><TableHeader>CA</TableHeader><TableHeader>Furtividade</TableHeader><TableHeader>Peso</TableHeader><TableHeader>Tipo</TableHeader><TableHeader><span className="srOnly">Ação</span></TableHeader></TableRow></thead>
              <tbody>
                {armorItems.map(item => (
                  <TableRow key={item.id}>
                    <TableCell><ItemName item={item} /></TableCell>
                    <TableCell>{item.price || '—'}</TableCell>
                    <TableCell>{item.armorClass}</TableCell>
                    <TableCell>{item.stealth || '—'}</TableCell>
                    <TableCell>{item.weight || '—'}</TableCell>
                    <TableCell>{item.type}</TableCell>
                    <TableCell><AddToInventory item={item} character={activeCharacter} onAdd={addItem} /></TableCell>
                  </TableRow>
                ))}
              </tbody>
            </Table>
          </div>
        </section>
      )}

      {Object.keys(groupedWeapons).length > 0 && (
        <section className="itemSection">
          <h2>Armas <span>{weaponItems.length}</span></h2>
          <div className="tableScroll" role="region" aria-label="Tabela de armas" tabIndex="0">
            <Table>
              <thead><TableRow><TableHeader>Item</TableHeader><TableHeader>Preço</TableHeader><TableHeader>Dano</TableHeader><TableHeader>Peso</TableHeader><TableHeader>Propriedades</TableHeader><TableHeader><span className="srOnly">Ação</span></TableHeader></TableRow></thead>
              <tbody>
                {Object.entries(groupedWeapons).map(([weaponType, weapons]) => (
                  <Fragment key={weaponType}>
                    <TableRow className="groupRow"><TableCell colSpan="6">{weaponType}</TableCell></TableRow>
                    {weapons.map(item => (
                      <TableRow key={item.id}>
                        <TableCell><ItemName item={item} /></TableCell>
                        <TableCell>{item.price || '—'}</TableCell>
                        <TableCell>{item.damage ? `${item.damage} ${item.damageType || ''}` : '—'}</TableCell>
                        <TableCell>{item.weight || '—'}</TableCell>
                        <TableCell>{item.properties || '—'}</TableCell>
                        <TableCell><AddToInventory item={item} character={activeCharacter} onAdd={addItem} /></TableCell>
                      </TableRow>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </Table>
          </div>
        </section>
      )}

      {visibleItems.length === 0 && <p className="emptyItems">Nenhum equipamento corresponde à busca.</p>}
    </ItemsContainer>
  );
}
