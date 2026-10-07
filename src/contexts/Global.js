import { createContext, useEffect, useState } from 'react';
import { createCharacterRecord, normalizeCharacter } from '../utils/characterUtils';

export const GlobalContext = createContext({});

const CHARACTERS_KEY = 'dragao-caolho.characters.v1';
const ACTIVE_CHARACTER_KEY = 'dragao-caolho.active-character.v1';

function readStoredArray(key, normalize = value => value) {
  try {
    if (typeof window === 'undefined') return [];
    const parsed = JSON.parse(window.localStorage.getItem(key) || '[]');
    return Array.isArray(parsed) ? parsed.map(normalize) : [];
  } catch {
    return [];
  }
}

function readStoredId() {
  try {
    return typeof window === 'undefined' ? '' : window.localStorage.getItem(ACTIVE_CHARACTER_KEY) || '';
  } catch {
    return '';
  }
}

function persist(key, value) {
  try {
    if (typeof window !== 'undefined') window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Não foi possível salvar ${key} no armazenamento local.`, error);
  }
}

export default function GlobalProvider({ children }) {
  const [characters, setCharacters] = useState(() => readStoredArray(CHARACTERS_KEY, normalizeCharacter));
  const [activeCharacterId, setActiveCharacterId] = useState(readStoredId);

  useEffect(() => persist(CHARACTERS_KEY, characters), [characters]);
  useEffect(() => {
    try {
      if (typeof window === 'undefined') return;
      if (activeCharacterId) window.localStorage.setItem(ACTIVE_CHARACTER_KEY, activeCharacterId);
      else window.localStorage.removeItem(ACTIVE_CHARACTER_KEY);
    } catch (error) {
      console.error('Não foi possível salvar o personagem ativo.', error);
    }
  }, [activeCharacterId]);

  function createCharacter(details) {
    const character = createCharacterRecord(details);
    setCharacters(current => [...current, character]);
    setActiveCharacterId(character.id);
    return character;
  }

  function updateCharacter(characterId, update) {
    setCharacters(current => current.map(character => {
      if (character.id !== characterId) return character;
      return typeof update === 'function' ? update(character) : { ...character, ...update };
    }));
  }

  function deleteCharacter(characterId) {
    setCharacters(current => current.filter(character => character.id !== characterId));
    setActiveCharacterId(current => current === characterId ? '' : current);
  }

  return (
    <GlobalContext.Provider value={{
      characters,
      activeCharacterId,
      setActiveCharacterId,
      createCharacter,
      updateCharacter,
      deleteCharacter,
    }}>
      {children}
    </GlobalContext.Provider>
  );
}
