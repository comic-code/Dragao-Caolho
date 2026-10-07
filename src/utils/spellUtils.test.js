import { EMPTY_SPELL_FILTERS, filterSpells, getSpellFilterOptions, slugify } from './spellUtils';

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

  test('filters metrics by exact normalized values instead of partial text matches', () => {
    const metricSpells = [
      {
        ...makeSpell({ name: 'Ação normal' }),
        casting: { time: 1, unit: 'ação' },
        range: { value: 18, unit: 'metros' },
        duration: { value: 1, unit: 'minutos', concentration: false },
      },
      {
        ...makeSpell({ name: 'Ação bônus' }),
        casting: { time: 1, unit: 'ação bonus' },
        range: { value: 9, unit: 'metros' },
        duration: { value: 10, unit: 'minutos', concentration: false },
      },
      {
        ...makeSpell({ name: 'Dez minutos' }),
        casting: { time: 10, unit: 'minutos' },
        range: { value: 18, unit: 'metros' },
        duration: { value: 10, unit: 'minutos', concentration: false },
      },
      {
        ...makeSpell({ name: 'Um metro' }),
        casting: { time: 1, unit: 'ação' },
        range: { value: 1, unit: 'metros' },
        duration: { value: 1, unit: 'minuto', concentration: false },
      },
    ];
    const namesForMetrics = metricFilters => filterSpells(
      metricSpells,
      { ...EMPTY_SPELL_FILTERS, ...metricFilters }
    ).map(spell => spell.name);

    expect(namesForMetrics({ castingTime: '1 acao' })).toEqual(['Ação normal', 'Um metro']);
    expect(namesForMetrics({ castingTime: '1 acao bonus' })).toEqual(['Ação bônus']);
    expect(namesForMetrics({ range: '18 metros' })).toEqual(['Ação normal', 'Dez minutos']);
    expect(namesForMetrics({ range: '1 metro' })).toEqual(['Um metro']);
    expect(namesForMetrics({ duration: '1 minuto' })).toEqual(['Ação normal', 'Um metro']);
  });

  test('builds unique filter options with normalized labels from spell data', () => {
    const metricSpells = [
      {
        ...makeSpell({ name: 'Bônus sem acento' }),
        casting: { time: 1, unit: 'ação bonus' },
        range: { value: 1, unit: 'metros' },
        duration: { value: 1, unit: 'minutos', concentration: false },
      },
      {
        ...makeSpell({ name: 'Bônus com acento' }),
        casting: { time: 1, unit: 'ação bônus' },
        range: { value: 1, unit: 'metro' },
        duration: { value: 1, unit: 'minuto', concentration: false },
      },
    ];
    const options = getSpellFilterOptions(metricSpells);

    expect(options.castingTimes.filter(option => option.value === '1 acao bonus'))
      .toEqual([{ value: '1 acao bonus', label: '1 ação bônus' }]);
    expect(options.ranges.filter(option => option.value === '1 metro'))
      .toEqual([{ value: '1 metro', label: '1 metro' }]);
    expect(options.durations.filter(option => option.value === '1 minuto'))
      .toEqual([{ value: '1 minuto', label: '1 minuto' }]);
  });
});

describe('slugify', () => {
  test('removes accents and turns punctuation and whitespace into single hyphens', () => {
    expect(slugify('  Acalmar Emoções / Calm Emotions!  ')).toBe('acalmar-emocoes-calm-emotions');
  });
});
