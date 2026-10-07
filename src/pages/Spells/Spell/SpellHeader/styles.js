import styled from 'styled-components';

export const SpellHeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid var(--blueDark);
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  justify-content: center;
  position: relative;

  .spellTitleRow {
    align-items: flex-start;
    gap: 0.5rem;
    padding-right: 2.75rem;
  }

  .spellTitle { min-width: 0; }

  h2 {
    font-size: 1.2rem;
    font-family: 'Cinzel Decorative', cursive;
    font-weight: bold;
    overflow-wrap: anywhere;
  }

  h3 {
    font-family: 'Spectral SC', serif;
    font-weight: bold;
    font-size: 0.8rem;

    &.originalName {
      font-size: 0.8rem;
      color: #888;
      font-weight: 400;
      overflow-wrap: anywhere;
    }
  }

  .spellActions {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    gap: 0.25rem;
  }

  .spellActions button {
    width: 2.1rem;
    height: 2.1rem;
    display: grid;
    place-items: center;
    border-radius: 0.35rem;
    color: var(--blueDark);

    &:hover, &:focus-visible { background: rgba(189, 141, 76, 0.2); }
    &:focus-visible { outline: 2px solid var(--brown); }
  }

  .spellActions button img { width: 1.8rem; height: 1.8rem; object-fit: contain; }
  .spellActions button:disabled { cursor: default; opacity: 0.55; }

  span.field { font-weight: bold; }

  span.concentration {
    background: var(--brown);
    border: 2px solid var(--blueDark);
    padding: 0.1rem 0.3rem;
    color: var(--white);
    display: flex;
    align-self: flex-end;
    margin-top: 0.25rem;
    align-items: center;
    justify-content: center;
  }

  span.component {
    margin-left: 0.3rem;
    padding: 0 0.55rem;
    color: var(--white);
    border-radius: 0.5rem;

    &.verbal { background-color: #397c50; }
    &.somatic { background-color: #7539bd; }
    &.material { background-color: #286b91; }
  }
`;
