import { EMPTY_SPELL_FILTERS, filterSpells, slugify } from './spellUtils';

function makeSpell({
  name,
  originalName = name,
  classes = ['mago'],
  level = 1,
  school = 'abjuração',
  isRitual = false,
  concentration = false,
  components = ['V', 'S'],
}) {
  return {
    name,
    originalName,
    classes,
    level,
    school,
    isRitual,
    components: {
      isVerbal: components.includes('V'),
      isSomatic: components.includes('S'),
      isMaterial: components.includes('M'),
    },
    casting: { time: 1, unit: 'ação' },
    range: { value: 9, unit: 'metros' },
    duration: { value: 1, unit: 'minutos', concentration },
  };
}

const spells = [
  makeSpell({
    name: 'Acalmar Emoções',
    originalName: 'Calm Emotions',
    classes: ['bardo', 'clérigo'],
    level: 2,
    school: 'encantamento',
    concentration: true,
  }),
  makeSpell({
    name: 'Adivinhação',
    originalName: 'Divination',
    classes: ['clérigo'],
    level: 4,
    school: 'adivinhação',
    isRitual: true,
    components: ['V', 'S', 'M'],
  }),
  makeSpell({
    name: 'Alarme',
    originalName: 'Alarm',
    classes: ['mago'],
    isRitual: true,
    components: ['V', 'S', 'M'],
  }),
  makeSpell({
    name: 'Ataque Certeiro',
    originalName: 'True Strike',
    concentration: true,
    components: ['S'],
  }),
  makeSpell({
    name: 'Ajuda',
    originalName: 'Aid',
    classes: ['clérigo', 'paladino'],
    components: ['V', 'S', 'M'],
  }),
];

function namesFor(filters) {
  return filterSpells(spells, { ...EMPTY_SPELL_FILTERS, ...filters }).map(spell => spell.name);
}

describe('filterSpells', () => {
  test('matches accented Portuguese names and class names without accents', () => {
    expect(namesFor({ name: 'emocoes', classe: 'clerigo' })).toEqual(['Acalmar Emoções']);
    expect(namesFor({ name: 'calm emotions', classe: 'bardo' })).toEqual(['Acalmar Emoções']);
    expect(namesFor({ name: 'emocoes', classe: 'mago' })).toEqual([]);
  });

  test('filters ritual spells', () => {
    expect(namesFor({ ritual: true })).toEqual(['Adivinhação', 'Alarme']);
  });

  test('filters concentration spells', () => {
    expect(namesFor({ concentration: true })).toEqual(['Acalmar Emoções', 'Ataque Certeiro']);
  });

  test.each([
    ['V', ['Acalmar Emoções', 'Adivinhação', 'Alarme', 'Ajuda']],
    ['S', ['Acalmar Emoções', 'Adivinhação', 'Alarme', 'Ataque Certeiro', 'Ajuda']],
    ['M', ['Adivinhação', 'Alarme', 'Ajuda']],
  ])('filters spells with the %s component', (component, expectedNames) => {
    expect(namesFor({ component })).toEqual(expectedNames);
  });

  test('combines ritual and material-component filters', () => {
    expect(namesFor({ ritual: true, component: 'M' })).toEqual(['Adivinhação', 'Alarme']);
  });
});

describe('slugify', () => {
  test('removes accents and turns punctuation and whitespace into single hyphens', () => {
    expect(slugify('  Acalmar Emoções / Calm Emotions!  ')).toBe('acalmar-emocoes-calm-emotions');
  });
});
