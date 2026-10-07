import styled from 'styled-components';

export const MenuWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  min-height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background: var(--blueDark);
  border-bottom: 2px solid var(--brown);
  padding: 0.5rem clamp(0.75rem, 3vw, 1.5rem);

  .brand {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;

    img { display: block; width: min(10rem, 34vw); height: auto; }
    &:focus-visible { outline: 2px solid var(--brown); outline-offset: 4px; }
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: clamp(0.55rem, 2vw, 1.5rem);

    a {
      padding: 0.4rem 0;
      font-family: 'Spectral SC', cursive;
      font-weight: bold;
      color: var(--brown);
      transition: color 0.2s;

      &:hover, &:focus-visible, &.active { color: var(--white); }
      &:focus-visible { outline: 2px solid var(--brown); outline-offset: 3px; }
    }
  }

  @media (max-width: 560px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 0.25rem;

    nav {
      width: 100%;
      justify-content: space-between;
      gap: 0.5rem;
      a { font-size: 0.88rem; }
    }
  }
`;
