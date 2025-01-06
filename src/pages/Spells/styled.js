import styled from 'styled-components';

export const SpellsContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  padding-bottom: 5rem;

  .noSpells {
    margin-top: 5rem;
    font-size: 2rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    color: var(--white);
    background-color: var(--blueDark);
    border-radius: 0.5rem;

    @media (max-width: 500px) {
      font-size: 1.5rem;
    }

    img {
      margin: 0.5rem;

      @media (max-width: 500px) {
        width: 50px;
      }
    }
  }
`;

export const Grimoire = styled.img`
  cursor: pointer;
  position: fixed;
  transition: 0.3s;
  bottom: 0.5rem;
  right: 0.5rem;
  background-color: var(--pink);
  border: 2px solid var(--blueDark);
  border-radius: 1rem;
  padding: 0.35rem;
  max-width: 5rem;
  max-height: 5rem;

  &:hover {
    filter: brightness(1.2);
  }
`;
