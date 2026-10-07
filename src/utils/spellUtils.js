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
  const castingTime = normalizeText(filters.castingTime);
  const range = normalizeText(filters.range);
  const duration = normalizeText(filters.duration);

  return spells.filter(spell => {
    const names = normalizeText(`${spell.name} ${spell.originalName}`);
    if (search && !names.includes(search)) return false;
    if (selectedClass && !spell.classes.some(value => normalizeText(value) === selectedClass)) return false;
    if (filters.level !== '' && String(spell.level) !== String(filters.level)) return false;
    if (selectedSchool && !normalizeText(spell.school).includes(selectedSchool)) return false;
    if (filters.ritual && !spell.isRitual) return false;
    if (filters.concentration && !spell.duration?.concentration) return false;
    if (componentField && !spell.components?.[componentField]) return false;
    if (castingTime && !normalizeText(formatCastingTime(spell)).includes(castingTime)) return false;
    if (range && !normalizeText(formatRange(spell)).includes(range)) return false;
    if (duration && !normalizeText(formatDuration(spell)).includes(duration)) return false;
    return true;
  });
}

export function slugify(value) {
  return normalizeText(value)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
