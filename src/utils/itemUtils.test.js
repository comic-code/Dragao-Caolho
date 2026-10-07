import {
  ITEM_CATALOG,
  addItemToInventory,
  calculateInventoryValueGold,
  calculateInventoryWeight,
  filterCatalogItems,
  getCatalogItem,
  parsePriceInGold,
  parseWeightKg,
} from './itemUtils';

describe('parseWeightKg', () => {
  test.each([
    ['4kg', 4],
    ['6,5kg', 6.5],
    [' 0.125 KG ', 0.125],
    [2.5, 2.5],
  ])('parses %p as %p kg', (input, expected) => {
    expect(parseWeightKg(input)).toBe(expected);
  });

  test.each([null, undefined, '', '6 lb', '6,5'])('returns null for unsupported weight %p', input => {
    expect(parseWeightKg(input)).toBeNull();
  });
});

describe('parsePriceInGold', () => {
  test.each([
    ['5pc', 0.05],
    ['100pc', 1],
    ['25pp', 2.5],
    ['3pe', 1.5],
    ['2,75po', 2.75],
    ['1.2pl', 12],
    [' 2 PO ', 2],
  ])('converts %p to %p gold pieces', (price, expected) => {
    expect(parsePriceInGold(price)).toBe(expected);
  });

  test.each([null, undefined, '', '4', '3gp'])('returns null for unsupported price %p', price => {
    expect(parsePriceInGold(price)).toBeNull();
  });
});

describe('catalog and inventory helpers', () => {
  test('catalog entries expose parsed weights and prices', () => {
    expect(getCatalogItem('arma:Adaga')).toMatchObject({
      category: 'weapon',
      weightKg: 0.5,
      priceGold: 2,
    });
    expect(getCatalogItem('armadura:Couro Batido')).toMatchObject({
      category: 'armor',
      weightKg: 6.5,
      priceGold: 45,
    });
    expect(getCatalogItem('arma:Desarmado')).toMatchObject({
      weightKg: null,
      priceGold: null,
    });
    expect(getCatalogItem('arma:missing')).toBeNull();
  });

  test('calculates total inventory weight and gold value from quantities', () => {
    const inventory = [
      { itemId: 'arma:Adaga', quantity: '3' },
      { itemId: 'armadura:Couro Batido', quantity: 2 },
      { itemId: 'arma:Desarmado', quantity: 10 },
      { itemId: 'arma:missing', quantity: 100 },
    ];

    expect(calculateInventoryWeight(inventory)).toBe(14.5);
    expect(calculateInventoryValueGold(inventory)).toBe(96);
  });

  test('stacks an existing item without mutating the inventory', () => {
    const inventory = [
      { itemId: 'arma:Adaga', quantity: '2', equipped: true },
      { itemId: 'arma:Cajado', quantity: 4, equipped: false },
    ];

    const updated = addItemToInventory(inventory, 'arma:Adaga');

    expect(updated).toEqual([
      { itemId: 'arma:Adaga', quantity: 3, equipped: true },
      { itemId: 'arma:Cajado', quantity: 4, equipped: false },
    ]);
    expect(updated).not.toBe(inventory);
    expect(inventory[0].quantity).toBe('2');
  });

  test('adds a new item with quantity one and unequipped status', () => {
    expect(addItemToInventory([], 'arma:Adaga')).toEqual([
      { itemId: 'arma:Adaga', quantity: 1, equipped: false },
    ]);
  });

  test('searches catalog labels accent-insensitively and respects category', () => {
    const armorMatches = filterCatalogItems(ITEM_CATALOG, 'gibao', 'armor');

    expect(armorMatches.map(item => item.label)).toEqual(['Gibão de Peles']);
    expect(filterCatalogItems(ITEM_CATALOG, 'gibao', 'weapon')).toEqual([]);
    expect(filterCatalogItems(ITEM_CATALOG, 'arremesso', 'weapon')).toEqual(
      expect.arrayContaining([expect.objectContaining({ label: 'Adaga' })]),
    );
  });
});
