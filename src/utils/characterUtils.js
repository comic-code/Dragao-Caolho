export const SPELLCASTING_CLASSES = [
  'bardo',
  'bruxo',
  'clérigo',
  'druida',
  'feiticeiro',
  'mago',
  'paladino',
  'patrulheiro',
];

export const CHARACTER_CLASSES = [
  'artífice',
  'bárbaro',
  'bardo',
  'bruxo',
  'clérigo',
  'druida',
  'feiticeiro',
  'guerreiro',
  'ladino',
  'mago',
  'monge',
  'paladino',
  'patrulheiro',
];

export const COIN_TYPES = [
  { key: 'pc', label: 'Cobre (PC)', valueInGold: 0.01 },
  { key: 'pp', label: 'Prata (PP)', valueInGold: 0.1 },
  { key: 'pe', label: 'Electro (PE)', valueInGold: 0.5 },
  { key: 'po', label: 'Ouro (PO)', valueInGold: 1 },
  { key: 'pl', label: 'Platina (PL)', valueInGold: 10 },
];

export const EMPTY_COINS = { pc: 0, pp: 0, pe: 0, po: 0, pl: 0 };

export function createId() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export function createCharacterRecord({ name, className, subclass, level }) {
  return {
    id: createId(),
    name: name.trim(),
    className,
    subclass: subclass.trim(),
    level: Number(level) || 1,
    spells: [],
    inventory: [],
    coins: { ...EMPTY_COINS },
  };
}

export function normalizeCharacter(character) {
  const level = Number(character.level);
  return {
    ...character,
    id: character.id || createId(),
    name: typeof character.name === 'string' ? character.name : '',
    className: typeof character.className === 'string' ? character.className : SPELLCASTING_CLASSES[0],
    subclass: typeof character.subclass === 'string' ? character.subclass : '',
    level: Number.isFinite(level) ? Math.min(20, Math.max(1, level)) : 1,
    spells: Array.isArray(character.spells) ? character.spells : [],
    inventory: Array.isArray(character.inventory) ? character.inventory : [],
    coins: { ...EMPTY_COINS, ...(character.coins || {}) },
  };
}

export function calculateCoinsInGold(coins = EMPTY_COINS) {
  return COIN_TYPES.reduce((total, coin) => {
    const quantity = Math.max(0, Number(coins[coin.key]) || 0);
    return total + quantity * coin.valueInGold;
  }, 0);
}
