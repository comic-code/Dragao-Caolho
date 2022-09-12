import styled from 'styled-components';

export const MenuWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--blueDark);
  border-bottom: 2px solid var(--brown);
  padding: 0.5rem 1rem;
  img {
    width: 10rem;
  }
  nav {
    display: flex;

    a {
      font-family: 'Spectral SC', cursive;
      font-weight: bold;
      color: var(--brown);
      transition: 0.3s;

      &:hover {
        color: var(--white);
      }
    }
  }
`;
