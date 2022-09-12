import styled from 'styled-components';

export const SpellHeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--blueDark);
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  justify-content: center;

  h2 {
    font-size: 1.2rem;
    font-family: 'Cinzel Decorative', cursive;
    font-weight: bold;
  }

  h3 {
    font-family: 'Spectral SC', serif;
    font-size: 0.8rem;
    font-weight: 400;
  }

  button {
    top: 0.5rem;
    right: 0.5rem;
    position: absolute;

    img {
      width: 40px;
    }
  }

  span.field {
    font-weight: bold;
  }
`;
