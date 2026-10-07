import styled from 'styled-components';
import { FilterRight } from '@styled-icons/bootstrap';
import { DownArrow, UpArrow } from '@styled-icons/boxicons-regular';

export const SpellFIltersWrapper = styled.section`
  width: min(100% - 1rem, 1040px);
  margin: 1rem auto;
  border: 2px solid var(--brown);
  border-radius: 0.65rem;
  overflow: hidden;
  background: var(--white);

  button.toggleFilter {
    width: 100%;
    min-height: 2.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0.75rem;
    background: var(--blueDark);
    color: var(--white);
    font-weight: 700;

    span {
      display: flex;
      align-items: center;
      gap: 0.35rem;
      color: inherit;
    }

    .filterCount {
      min-width: 1.25rem;
      min-height: 1.25rem;
      display: inline-grid;
      place-items: center;
      padding: 0 0.25rem;
      border-radius: 999px;
      background: var(--brown);
      color: var(--blueDark);
      font-size: 0.72rem;
    }

    svg { fill: var(--white); }
    &:focus-visible { outline: 3px solid var(--brown); outline-offset: -3px; }
  }
`;

export const FilterIcon = styled(FilterRight)`
  fill: var(--white);
`;

export const DownIcon = styled(DownArrow)`
  fill: var(--white);
`;

export const UpIcon = styled(UpArrow)`
  fill: var(--white);
`;

export const Filter = styled.div`
  display: ${props => props.$show ? 'grid' : 'none'};
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 175px), 1fr));
  align-items: end;
  gap: 0.75rem;
  padding: 1rem;

  label {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    min-width: 0;
    font-size: 0.9rem;
    font-weight: 700;
  }

  input, select {
    width: 100%;
    min-width: 0;
    background: white;
  }

  .checkFilters {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    align-items: center;
  }

  label.check {
    flex-direction: row;
    align-items: center;
    gap: 0.45rem;
    white-space: nowrap;

    input { width: 1rem; height: 1rem; }
  }

  .filterActions {
    display: flex;
    justify-content: flex-end;
    grid-column: 1 / -1;
  }

  .filterActions button {
    padding: 0.55rem 0.9rem;
    border: 1px solid var(--blueDark);
    border-radius: 0.4rem;
    background: var(--brown);
    color: var(--white);
    font-weight: 700;
  }
  .filterActions button:disabled { cursor: default; opacity: 0.55; }
`;
