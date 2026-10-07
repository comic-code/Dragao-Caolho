import styled from 'styled-components';

export const SpellWrapper = styled.article`
  display: flex;
  flex: 1 1 320px;
  flex-direction: column;
  border: 2px solid var(--blueDark);
  border-radius: 0.5rem;
  padding: 0.75rem;
  margin: 0.5rem;
  min-width: min(25%, 300px);
  max-width: 450px;
  align-self: flex-start;
  position: relative;
  font-size: 0.85rem;
  background: var(--white);

  span.mark {
    position: absolute;
    top: 0;
    right: 2.5rem;
    width: 0.8rem;
    height: 2.2rem;
    border: 2px solid var(--blueDark);
    border-top: 0;
    border-bottom-left-radius: 0.45rem;
    border-bottom-right-radius: 0.45rem;
    background-color: var(--red);
    pointer-events: none;
  }

  &.spellDetail {
    flex: none;
    width: min(100% - 1.5rem, 800px);
    max-width: 800px;
    margin: 1rem auto 3rem;
    font-size: 1rem;
  }

  @media (max-width: 640px) {
    flex-basis: min(100% - 1rem, 480px);
    min-width: min(100% - 1rem, 300px);

    &.spellDetail { width: calc(100% - 1rem); }
  }
`;
