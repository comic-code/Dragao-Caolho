import styled from 'styled-components';

export const ItemsContainer = styled.main`
  width: min(100% - 2rem, 1200px);
  margin: 2rem auto 5rem;
  padding-bottom: 2rem;

  .pageIntro { display: flex; justify-content: space-between; align-items: end; gap: 1rem; margin-bottom: 1.25rem; }
  .pageIntro .eyebrow { color: #70502b; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em; }
  .pageIntro h1 { margin: 0.25rem 0; color: var(--blueDark); }
  .pageIntro p { color: #5a5b63; }
  .createCharacterLink { padding: 0.65rem 0.9rem; border: 1px solid var(--blueDark); border-radius: 0.45rem; background: var(--brown); color: var(--white); font-weight: 700; white-space: nowrap; }
  .resultCount { margin: 0.6rem 0; color: #67686e; font-size: 0.85rem; }
  .itemSection { margin-top: 1.5rem; }
  .itemSection h2 { display: flex; align-items: center; gap: 0.5rem; color: var(--blueDark); font-size: 1.35rem; }
  .itemSection h2 span { padding: 0.15rem 0.5rem; border-radius: 999px; background: #eee4d2; color: var(--blueDark); font-family: 'Montserrat', sans-serif; font-size: 0.75rem; }
  .tableScroll { width: 100%; overflow-x: auto; border: 1px solid #d5d0c7; border-radius: 0.5rem; background: var(--white); }
  .emptyItems { margin: 2rem 0; padding: 1rem; border-radius: 0.5rem; background: #eee4d2; text-align: center; }
  .srOnly { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }

  @media (max-width: 600px) {
    width: min(100% - 1rem, 1200px);
    margin-top: 1.2rem;
    .pageIntro { align-items: flex-start; flex-direction: column; }
    .createCharacterLink { width: 100%; text-align: center; }
  }
`;

export const Toolbar = styled.section`
  display: grid;
  grid-template-columns: ${props => props.$hasCharacter ? '1fr 1.6fr 1fr 0.7fr' : '1.6fr 1fr 0.7fr'};
  align-items: end;
  gap: 0.75rem;
  padding: 1rem;
  border: 1px solid rgba(46, 56, 78, 0.3);
  border-radius: 0.65rem;
  background: #fffefa;
  box-shadow: 0 5px 16px rgba(40, 42, 54, 0.08);

  label { display: flex; flex-direction: column; gap: 0.3rem; min-width: 0; font-size: 0.82rem; font-weight: 700; }
  input, select { min-width: 0; width: 100%; background: white; }

  @media (max-width: 850px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 480px) { grid-template-columns: 1fr; padding: 0.75rem; }
`;

export const Table = styled.table`
  width: 100%;
  min-width: 680px;
  border-collapse: collapse;
  margin: 0;
  font-size: 0.9rem;
  text-align: left;

  th { position: sticky; top: 0; z-index: 1; }
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
  &:hover { background-color: #f1eee6; }
  &:last-child { border-bottom: 0; }

  &.groupRow td { background: #eee4d2; color: var(--blueDark); font-weight: 700; text-align: center; }
`;

export const TableHeader = styled.th`
  background-color: var(--brown);
  color: var(--white);
  padding: 0.65rem 0.55rem;
  white-space: nowrap;
`;

export const TableCell = styled.td`
  padding: 0.5rem 0.55rem;
  vertical-align: middle;

  .itemName { display: flex; align-items: center; gap: 0.55rem; min-width: 9rem; }
  .itemGlyph { display: grid; flex: 0 0 1.75rem; place-items: center; color: #8a622e; }
`;

export const AddButton = styled.button`
  width: 2rem;
  height: 2rem;
  display: grid;
  place-items: center;
  border: 1px solid var(--brown);
  border-radius: 50%;
  color: var(--blueDark);
  background: #fffefa;

  svg { width: 1.1rem; height: 1.1rem; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; }
  &:hover, &:focus-visible { background: var(--brown); color: var(--white); }
  &:focus-visible { outline: 2px solid var(--blueDark); outline-offset: 2px; }
`;
