import styled from 'styled-components';

export const SpellWrapper = styled.div`
  border: 2px solid var(--blueDark);
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin: 0.5rem;
  flex-direction: column;
  min-width: 25%;
  max-width: 450px;
  align-self: baseline;
  font-size: 0.85rem;

  span.page {
    border-bottom-right-radius: 0.3rem;
    padding: 0.1rem;
    background-color: var(--brown);
    color: var(--white);
    float: right;
    margin-top: -10px;
    margin-bottom: -10px;
    margin-right: -10px;
    border: 2px solid var(--blueDark);
  }
`;
