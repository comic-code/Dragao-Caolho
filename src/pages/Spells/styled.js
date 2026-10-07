import styled from 'styled-components';

export const SpellsContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  padding: 0.5rem 0 1rem;

  .noSpells {
    margin: 3rem 1rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: clamp(1.1rem, 3vw, 1.8rem);
    font-weight: bold;
    color: var(--white);
    background-color: var(--blueDark);
    border-radius: 0.5rem;
    text-align: center;

    img { width: 2.5rem; height: auto; }
  }
`;

export const SpellControls = styled.div`
  flex: 0 0 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SpellContextBar = styled.section`
  width: min(100% - 1rem, 1040px);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: end;
  gap: 0.75rem;
  margin: 0.5rem auto 1rem;
  padding: 0.75rem;
  border: 1px solid rgba(46, 56, 78, 0.3);
  border-radius: 0.55rem;
  background: #fffefa;

  label { display: flex; flex: 1 1 14rem; flex-direction: column; gap: 0.3rem; font-size: 0.82rem; font-weight: 700; }
  select { width: 100%; min-width: 0; }
  p, .resultCount { margin: 0; color: #5a5b63; font-size: 0.88rem; }
  a { color: #70502b; font-weight: 700; text-decoration: underline; }
`;
