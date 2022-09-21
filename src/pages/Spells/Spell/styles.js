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
  position: relative;
  font-size: 0.85rem;

  span.mark {
    position: absolute;
    top: 0;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;    
    width: 1rem;
    height: 2.75rem;
    right: 3rem;
    background-color: var(--red);
    color: var(--white);
    float: right;
    border: 2px solid var(--blueDark);
    border-top-width: 0;
  }
`;
