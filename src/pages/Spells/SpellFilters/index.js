import { useEffect, useState, useContext } from "react";
import { SpellFIltersWrapper, FilterIcon, DownIcon, UpIcon, Filter } from "./styles";
import filters from './filters';
import {GlobalContext} from '../../../contexts/Global';

export default function SpellFilters({ setFilteredSpells, spellList, justSavedSpells, savedSpells }) {
  const { setIsFilteringSpells } = useContext(GlobalContext);
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [classe, setClasse] = useState('');
  const [school, setSchool] = useState(''); 
  const [level, setLevel] = useState(''); 
  
  function handleClear() {
    setName(''); setClasse(''); setSchool(''); setLevel('');
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
      
      let filtered =  []
      
      if(name) {
        filtered = toFilter.filter(spell => {
          const nameLowercase = spell.name.toLowerCase();
          const originalNameLowercase = spell.originalName.toLowerCase();
  
          return (nameLowercase.includes(name.toLocaleLowerCase()) || originalNameLowercase.includes(name.toLocaleLowerCase()))

        });
      }

      if(classe) {
        filtered = filtered.length 
          ? filtered.filter(spell => spell.classes.includes(classe)) 
          : toFilter.filter(spell => spell.classes.includes(classe)) 
      }
      
      if(level !== "") {
        filtered = filtered.length 
        ? filtered.filter(spell => spell.level == level) 
        : toFilter.filter(spell => spell.level == level) 
      }

      if(school) {
        filtered = filtered.length 
        ? filtered.filter(spell => spell.school.includes(school)) 
        : toFilter.filter(spell => spell.school.includes(school)) 
      }
      setIsFilteringSpells(name || classe || level !== "" || school ? true : false);
      setFilteredSpells(filtered);
    }
  }, [name, classe, school, level, show, justSavedSpells, savedSpells, spellList, setFilteredSpells]);

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
          Nível:
          <select value={level} onChange={e => setLevel(e.target.value)}>
            <option value="">Todos</option>
            {filters.levels.map(level => <option key={level} value={level}>
              {level === 0 
                ? 'Truque'
                : `Nível ${level}`
              }
            </option>)}
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