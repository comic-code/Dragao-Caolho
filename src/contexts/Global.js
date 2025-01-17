import { useEffect } from 'react';
import { createContext, useState } from 'react';

export const GlobalContext = createContext({});

export default function GlobalProvider({ children }) {
  const [savedSpells, setSavedSpells] = useState([]);
  const [savedItems, setSavedItems] = useState([]);
  const [isFilteringSpells, setIsFilteringSpells] = useState(false);

  useEffect(() => {
    savedSpells.length > 0 && localStorage.setItem('spells', JSON.stringify(savedSpells));
  }, [savedSpells]);

  useEffect(() => {
    const spells = localStorage.getItem('spells');
    spells && setSavedSpells(JSON.parse(spells));

    
    const items = localStorage.getItem('items');
    items && setSavedItems(JSON.parse(items));
  }, []);

  return (
    <GlobalContext.Provider value={{ 
      savedSpells, setSavedSpells, 
      isFilteringSpells, setIsFilteringSpells,
      savedItems, setSavedItems
    }}>
      {children}
    </GlobalContext.Provider>
  ) 
}
