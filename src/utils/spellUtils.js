const COMPONENT_FIELDS = {
  V: 'isVerbal',
  S: 'isSomatic',
  M: 'isMaterial',
};

export const EMPTY_SPELL_FILTERS = {
  name: '',
  classe: '',
  level: '',
  school: '',
  ritual: false,
  concentration: false,
  component: '',
  castingTime: '',
  range: '',
  duration: '',
};

export function normalizeText(value) {
  return String(value ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toLowerCase();
}

export function formatCastingTime(spell) {
  const { time, unit } = spell.casting;
  return `${time == null ? '' : `${time} `}${unit || ''}`.trim();
}

export function formatRange(spell) {
  const { value, unit } = spell.range;
  return `${value == null ? '' : `${value} `}${unit || ''}`.trim();
}

export function formatDuration(spell) {
  const { value, unit } = spell.duration;
  return `${!value ? '' : `${value} `}${unit || ''}`.trim();
}

const SINGULAR_UNITS = {
  dias: 'dia',
  horas: 'hora',
  minutos: 'minuto',
  metros: 'metro',
  rodadas: 'rodada',
};

function normalizeSpellMetric(value) {
  const normalized = normalizeText(value);
  const singularUnit = normalized.match(/^1 (dias|horas|minutos|metros|rodadas)$/);
  return singularUnit ? `1 ${SINGULAR_UNITS[singularUnit[1]]}` : normalized;
}

function formatSpellMetricLabel(value) {
  const normalized = normalizeText(value);
  const singularUnit = normalized.match(/^1 (dias|horas|minutos|metros|rodadas)$/);
  if (singularUnit) return `1 ${SINGULAR_UNITS[singularUnit[1]]}`;
  if (normalized === '1 acao bonus') return '1 ação bônus';

  const label = String(value ?? '').trim();
  return label ? `${label.charAt(0).toLocaleUpperCase('pt-BR')}${label.slice(1)}` : '';
}

export function getSpellFilterOptions(spells = []) {
  function optionsFor(formatter) {
    const options = new Map();
    spells.forEach(spell => {
      const formatted = formatter(spell);
      if (!formatted) return;
      const value = normalizeSpellMetric(formatted);
      if (!options.has(value)) options.set(value, formatSpellMetricLabel(formatted));
    });

    return [...options]
      .map(([value, label]) => ({ value, label }))
      .sort((left, right) => left.label.localeCompare(right.label, 'pt-BR', { numeric: true, sensitivity: 'base' }));
  }

  return {
    castingTimes: optionsFor(formatCastingTime),
    ranges: optionsFor(formatRange),
    durations: optionsFor(formatDuration),
  };
}

export function hasActiveSpellFilters(filters) {
  const textFields = ['name', 'classe', 'level', 'school', 'component', 'castingTime', 'range', 'duration'];
  return textFields.some(field => String(filters[field] ?? '').trim() !== '')
    || filters.ritual
    || filters.concentration;
}

export function filterSpells(spells, filters = EMPTY_SPELL_FILTERS) {
  const search = normalizeText(filters.name);
  const selectedClass = normalizeText(filters.classe);
  const selectedSchool = normalizeText(filters.school);
  const componentField = COMPONENT_FIELDS[filters.component];
  const castingTime = normalizeSpellMetric(filters.castingTime);
  const range = normalizeSpellMetric(filters.range);
  const duration = normalizeSpellMetric(filters.duration);

  return spells.filter(spell => {
    const names = normalizeText(`${spell.name} ${spell.originalName}`);
    if (search && !names.includes(search)) return false;
    if (selectedClass && !spell.classes.some(value => normalizeText(value) === selectedClass)) return false;
    if (filters.level !== '' && String(spell.level) !== String(filters.level)) return false;
    if (selectedSchool && !normalizeText(spell.school).includes(selectedSchool)) return false;
    if (filters.ritual && !spell.isRitual) return false;
    if (filters.concentration && !spell.duration?.concentration) return false;
    if (componentField && !spell.components?.[componentField]) return false;
    if (castingTime && normalizeSpellMetric(formatCastingTime(spell)) !== castingTime) return false;
    if (range && normalizeSpellMetric(formatRange(spell)) !== range) return false;
    if (duration && normalizeSpellMetric(formatDuration(spell)) !== duration) return false;
    return true;
  });
}

export function slugify(value) {
  return normalizeText(value)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
