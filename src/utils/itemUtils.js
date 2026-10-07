import Armors from '../pages/Items/assets/armors';
import Weapons from '../pages/Items/assets/weapons';

export const ITEM_CATALOG = [
  ...Armors.map(item => ({ ...item, id: `armadura:${item.label}`, category: 'armor', weightKg: parseWeightKg(item.weight), priceGold: parsePriceInGold(item.price) })),
  ...Weapons.map(item => ({ ...item, id: `arma:${item.label}`, category: 'weapon', weightKg: parseWeightKg(item.weight), priceGold: parsePriceInGold(item.price) })),
];

export function getCatalogItem(itemId) {
  return ITEM_CATALOG.find(item => item.id === itemId) || null;
}

export function parseWeightKg(weight) {
  if (typeof weight === 'number' && Number.isFinite(weight)) return weight;
  const match = String(weight ?? '').trim().match(/^(\d+(?:[,.]\d+)?)\s*kg$/i);
  return match ? Number(match[1].replace(',', '.')) : null;
}

export function parsePriceInGold(price) {
  const match = String(price ?? '').trim().match(/^(\d+(?:[,.]\d+)?)\s*(pc|pp|pe|po|pl)$/i);
  if (!match) return null;
  const valueInGold = { pc: 0.01, pp: 0.1, pe: 0.5, po: 1, pl: 10 }[match[2].toLowerCase()];
  return Number(match[1].replace(',', '.')) * valueInGold;
}

export function addItemToInventory(inventory, itemId) {
  const existing = inventory.find(entry => entry.itemId === itemId);
  if (existing) {
    return inventory.map(entry => entry.itemId === itemId
      ? { ...entry, quantity: Math.max(1, Number(entry.quantity) || 1) + 1 }
      : entry);
  }
  return [...inventory, { itemId, quantity: 1, equipped: false }];
}

export function calculateInventoryWeight(inventory) {
  return inventory.reduce((total, entry) => {
    const item = getCatalogItem(entry.itemId);
    const quantity = Math.max(0, Number(entry.quantity) || 0);
    return total + (item?.weightKg ?? 0) * quantity;
  }, 0);
}

export function calculateInventoryValueGold(inventory) {
  return inventory.reduce((total, entry) => {
    const item = getCatalogItem(entry.itemId);
    const quantity = Math.max(0, Number(entry.quantity) || 0);
    return total + (item?.priceGold ?? 0) * quantity;
  }, 0);
}

export function filterCatalogItems(items, query, category = 'all') {
  const normalizedQuery = String(query ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  return items.filter(item => {
    if (category !== 'all' && item.category !== category) return false;
    const searchable = [item.label, item.type, item.properties, item.damage, item.price]
      .filter(Boolean)
      .join(' ')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
    return !normalizedQuery || searchable.includes(normalizedQuery);
  });
}
