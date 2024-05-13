import styled from 'styled-components';

export const SpellHeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid var(--blueDark);
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  justify-content: center;
  position: relative;

  h2 {
    font-size: 1.2rem;
    font-family: 'Cinzel Decorative', cursive;
    font-weight: bold;
  }

  h3 {
    font-family: 'Spectral SC', serif;
    font-weight: bold;
    font-size: 0.8rem;
    
    &.originalName {
      font-size: 0.8rem;
      color: #888;
      font-weight: 400;
    }
  }

  button {
    top: 0;
    right: 0;
    position: absolute;

    img {
      width: 40px;
    }
  }

  span.field {
    font-weight: bold;
  }

  span.concentration {
    background: var(--brown);
    border: 2px solid var(--blueDark);
    /* border-radius: 0.5rem; */
    padding: 0.1rem;
    color: var(--white);
    position: absolute;
    display: flex;
    right: -10px;
    bottom: -2px;
    align-items: center;
    justify-content: center;
  }

  span.component {
    margin-left: 0.3rem;
    padding: 0 0.75rem;
    color: var(--white);
    border-radius: 0.5rem;

    &.verbal {
      background-color: #5ebd79;
    }

    &.somatic {
      background-color: #7539bd;
    }

    &.material {
      background-color: #4b91bd;
    }
  }
`;
