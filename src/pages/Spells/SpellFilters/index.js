import { useEffect, useState } from "react";
import { SpellFIltersWrapper, FilterIcon, DownIcon, UpIcon, Filter } from "./styles";
import filters from './filters';

export default function SpellFilters({ setFilteredSpells, spellList, justSavedSpells, savedSpells }) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [classe, setClasse] = useState('');
  const [school, setSchool] = useState(''); 
  
  function handleClear() {
    setName(''); setClasse(''); setSchool('');
  }

  useEffect(() => {
    if(!show) {
      setFilteredSpells([]);
    } else {
      let toFilter;
      if(justSavedSpells) {
        toFilter = [...savedSpells]
      } else {
        toFilter = [...spellList];
      }
      
      const filtered = toFilter.filter(spell => {
        const nameLowercase = spell.name.toLowerCase();
        const originalNameLowercase = spell.originalName.toLowerCase();
        if(nameLowercase.includes(name.toLocaleLowerCase()) 
        || originalNameLowercase.includes(name.toLocaleLowerCase())) {
          if(!classe && !school) {
            return true
          } else if(classe && !school) {
            return spell.classes.includes(classe);
          } else if(!classe && school) {
            return spell.school === school
          } else {
            return spell.classes.includes(classe) && spell.school === school
          }
        } else {
          return false
        }
      })
      setFilteredSpells(filtered);
    }
  }, [name, classe, school, show, justSavedSpells, savedSpells, spellList, setFilteredSpells]);

  return (
    <SpellFIltersWrapper show={show}>
      <button className="toggleFilter" onClick={() => {setShow(!show)}}>
        <div>
          <FilterIcon size={20} /> Filtros
        </div>
        {show
          ? <UpIcon size={20} className="animationShow"/>
          : <DownIcon size={20} className="animationShow"/>
        }
      </button>
      <Filter>
        <label>
          Nome: 
          <input value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>
          Classe:
          <select value={classe} onChange={e => setClasse(e.target.value)}>
            <option value="">Todas</option>
            {filters.classes.map(classe => <option key={classe} value={classe}>{classe}</option>)}
          </select>
        </label>
        <label>
          Escola:
          <select value={school} onChange={e => setSchool(e.target.value)}>
            <option value="">Todas</option>
            {filters.schools.map(school => <option key={school} value={school}>{school}</option>)}
          </select>
        </label>

        <button onClick={handleClear}>Limpar</button>
      </Filter>
    </SpellFIltersWrapper>
  )
}