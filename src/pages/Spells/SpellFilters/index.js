import { useState } from 'react';
import { SpellFIltersWrapper, FilterIcon, DownIcon, UpIcon, Filter } from './styles';
import filters from './filters';
import SpellList from '../spells';
import { getSpellFilterOptions } from '../../../utils/spellUtils';

const spellFilterOptions = getSpellFilterOptions(SpellList);

export default function SpellFilters({ filters: values, onChange, onClear }) {
  const [show, setShow] = useState(false);
  const activeFilterCount = Object.values(values).filter(value => (
    typeof value === 'boolean' ? value : String(value ?? '').trim() !== ''
  )).length;

  function field(name) {
    return event => onChange(name, event.target.value);
  }

  return (
    <SpellFIltersWrapper>
      <button
        className="toggleFilter"
        type="button"
        aria-expanded={show}
        aria-controls="spell-filter-fields"
        aria-label={activeFilterCount ? `Filtros, ${activeFilterCount} ativos` : 'Filtros'}
        onClick={() => setShow(current => !current)}
      >
        <span><FilterIcon size={20} /> Filtros{activeFilterCount > 0 && <span className="filterCount">{activeFilterCount}</span>}</span>
        {show ? <UpIcon size={20} aria-hidden="true" /> : <DownIcon size={20} aria-hidden="true" />}
      </button>

      <Filter id="spell-filter-fields" $show={show}>
        <label>
          Nome
          <input type="search" value={values.name} onChange={field('name')} placeholder="Português ou inglês" />
        </label>
        <label>
          Classe
          <select value={values.classe} onChange={field('classe')}>
            <option value="">Todas</option>
            {filters.classes.map(classe => <option key={classe} value={classe}>{classe}</option>)}
          </select>
        </label>
        <label>
          Nível
          <select value={values.level} onChange={field('level')}>
            <option value="">Todos</option>
            {filters.levels.map(level => (
              <option key={level} value={level}>{level === 0 ? 'Truque' : `Nível ${level}`}</option>
            ))}
          </select>
        </label>
        <label>
          Escola
          <select value={values.school} onChange={field('school')}>
            <option value="">Todas</option>
            {filters.schools.map(school => <option key={school} value={school}>{school}</option>)}
          </select>
        </label>
        <label>
          Componente
          <select value={values.component} onChange={field('component')}>
            <option value="">Qualquer</option>
            <option value="V">Verbal (V)</option>
            <option value="S">Somático (S)</option>
            <option value="M">Material (M)</option>
          </select>
        </label>
        <label>
          Tempo de conjuração
          <select value={values.castingTime} onChange={field('castingTime')}>
            <option value="">Qualquer tempo</option>
            {spellFilterOptions.castingTimes.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </label>
        <label>
          Alcance
          <select value={values.range} onChange={field('range')}>
            <option value="">Qualquer alcance</option>
            {spellFilterOptions.ranges.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </label>
        <label>
          Duração
          <select value={values.duration} onChange={field('duration')}>
            <option value="">Qualquer duração</option>
            {spellFilterOptions.durations.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </label>
        <div className="checkFilters">
          <label className="check">
            <input type="checkbox" checked={values.ritual} onChange={event => onChange('ritual', event.target.checked)} />
            Ritual
          </label>
          <label className="check">
            <input type="checkbox" checked={values.concentration} onChange={event => onChange('concentration', event.target.checked)} />
            Exige concentração
          </label>
        </div>
        <div className="filterActions">
          <button type="button" onClick={onClear} disabled={activeFilterCount === 0}>Limpar filtros</button>
        </div>
      </Filter>
    </SpellFIltersWrapper>
  );
}