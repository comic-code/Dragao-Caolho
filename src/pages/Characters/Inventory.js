import { useMemo, useState } from 'react';
import ItemIcon from '../../components/ItemIcon';
import { ITEM_CATALOG, addItemToInventory, calculateInventoryValueGold, calculateInventoryWeight, filterCatalogItems, getCatalogItem } from '../../utils/itemUtils';
import { COIN_TYPES, calculateCoinsInGold, EMPTY_COINS } from '../../utils/characterUtils';
import { Panel } from './styles';

export default function Inventory({ character, onUpdate }) {
  const [search, setSearch] = useState('');
  const [selectedItemId, setSelectedItemId] = useState('');
  const options = useMemo(() => filterCatalogItems(ITEM_CATALOG, search), [search]);
  const currentSelection = options.some(item => item.id === selectedItemId) ? selectedItemId : options[0]?.id || '';
  const inventory = Array.isArray(character.inventory) ? character.inventory : [];
  const coins = { ...EMPTY_COINS, ...(character.coins || {}) };
  const totalWeight = calculateInventoryWeight(inventory);
  const totalValue = calculateInventoryValueGold(inventory);
  const goldValue = calculateCoinsInGold(coins);

  function addItem() {
    if (!currentSelection) return;
    onUpdate(character.id, current => ({
      ...current,
      inventory: addItemToInventory(current.inventory || [], currentSelection),
    }));
  }

  function updateEntry(itemId, changes) {
    onUpdate(character.id, current => ({
      ...current,
      inventory: current.inventory.map(entry => entry.itemId === itemId ? { ...entry, ...changes } : entry),
    }));
  }

  function removeEntry(itemId) {
    onUpdate(character.id, current => ({
      ...current,
      inventory: current.inventory.filter(entry => entry.itemId !== itemId),
    }));
  }

  function updateCoin(key, value) {
    onUpdate(character.id, current => ({
      ...current,
      coins: { ...EMPTY_COINS, ...(current.coins || {}), [key]: Math.max(0, Number(value) || 0) },
    }));
  }

  return (
    <Panel>
      <div className="panelHeading">
        <div>
          <span className="eyebrow">MOCHILA</span>
          <h2>Equipamentos</h2>
        </div>
        <div className="inventoryTotals">
          <span className="countBadge">{totalWeight.toLocaleString('pt-BR', { maximumFractionDigits: 3 })} kg</span>
          <span className="countBadge">≈ {totalValue.toLocaleString('pt-BR', { maximumFractionDigits: 2 })} PO em itens</span>
        </div>
      </div>

      <div className="addItemForm">
        <label>
          Buscar item
          <input type="search" value={search} onChange={event => setSearch(event.target.value)} placeholder="Arma ou armadura" />
        </label>
        <label>
          Do catálogo
          <select value={currentSelection} onChange={event => setSelectedItemId(event.target.value)} disabled={options.length === 0}>
            {options.length === 0
              ? <option value="">Nenhum item encontrado</option>
              : options.map(item => <option key={item.id} value={item.id}>{item.label} — {item.category === 'armor' ? 'armadura' : 'arma'}</option>)}
          </select>
        </label>
        <button type="button" className="primary" onClick={addItem} disabled={!currentSelection}>Adicionar</button>
      </div>

      {inventory.length === 0
        ? <p className="emptyMessage">A mochila está vazia. Adicione itens do catálogo acima.</p>
        : (
          <div className="inventoryList">
            {inventory.map(entry => {
              const item = getCatalogItem(entry.itemId);
              if (!item) return null;
              const weight = item.weightKg;
              const price = item.priceGold;
              return (
                <div className="inventoryRow" key={entry.itemId}>
                  <span className="inventoryIcon"><ItemIcon item={item} size={22} /></span>
                  <div className="inventoryName">
                    <strong>{item.label}</strong>
                    <small>
                      {weight == null ? 'Peso não informado' : `${weight.toLocaleString('pt-BR')} kg cada`}
                      {' · '}
                      {price == null ? 'Preço não informado' : `${price.toLocaleString('pt-BR', { maximumFractionDigits: 2 })} PO cada`}
                    </small>
                  </div>
                  <label className="quantityField">
                    <span>Qtd.</span>
                    <input
                      type="number"
                      min="1"
                      step="1"
                      value={entry.quantity}
                      onChange={event => {
                        const quantity = Number(event.target.value);
                        if (Number.isInteger(quantity) && quantity > 0) updateEntry(entry.itemId, { quantity });
                      }}
                      aria-label={`Quantidade de ${item.label}`}
                    />
                  </label>
                  <label className="equippedField">
                    <input type="checkbox" checked={Boolean(entry.equipped)} onChange={event => updateEntry(entry.itemId, { equipped: event.target.checked })} />
                    Equipado
                  </label>
                  <button type="button" className="removeButton" onClick={() => removeEntry(entry.itemId)} aria-label={`Remover ${item.label}`}>×</button>
                </div>
              );
            })}
          </div>
        )
      }

      <div className="coinPurse">
        <div className="panelHeading">
          <div>
            <span className="eyebrow">BOLSA</span>
            <h3>Moedas</h3>
          </div>
          <span className="countBadge">≈ {goldValue.toLocaleString('pt-BR', { maximumFractionDigits: 2 })} PO</span>
        </div>
        <div className="coinGrid">
          {COIN_TYPES.map(coin => (
            <label key={coin.key}>
              {coin.label}
              <input type="number" min="0" step="1" value={coins[coin.key]} onChange={event => updateCoin(coin.key, event.target.value)} />
            </label>
          ))}
        </div>
      </div>
    </Panel>
  );
}
