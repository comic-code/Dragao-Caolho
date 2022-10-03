import styled from "styled-components";
import { FilterRight } from '@styled-icons/bootstrap';
import { DownArrow, UpArrow } from '@styled-icons/boxicons-regular';

export const SpellFIltersWrapper = styled.div`
  width: 80%;
  border: 3px solid var(--brown);
  margin: 1rem 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  max-height: ${props => props.show ? '13rem' : 'calc(2rem + 5px)'};
  transition: 0.2s max-height;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: hidden;

  @media (max-width: 700px) {
    width: 100%;
    
  }

  button.toggleFilter {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    border-radius: 0.3rem;
    border-bottom-left-radius: ${props => props.show ? '0' :'0.3rem'};
    border-bottom-right-radius: ${props => props.show ? '0' :'0.3rem'};
    border-bottom: ${props => props.show ? '3px solid var(--brown)' : '3px solid var(--blueDark)'};
    transition: 0.5s border-radius, 0.8s border-bottom;
    background: var(--blueDark);
    width: 100%;
    height: 2rem;
    font-weight: bold;
    div {
      color: var(--white);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const FilterIcon = styled(FilterRight)`
  fill: var(--white);
  margin-right: 0.25rem;
`

export const DownIcon = styled(DownArrow)`
  fill: var(--white);
`

export const UpIcon = styled(UpArrow)`
  fill: var(--white);
`

export const Filter = styled.label`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-weight: bold;
  margin: 0.5rem;

  label {
    margin: 0.25rem;

    input, select {
      margin-left: 0.25rem;
    }
  }

  button {
    margin: 0.25rem;
    margin-left: auto;
    border: 2px solid var(--blueDark);
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    background: var(--brown);
    color: var(--white);
    font-weight: bold;
  }
`