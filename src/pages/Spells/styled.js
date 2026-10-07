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

  .emptyGrimoire {
    width: min(100% - 1rem, 1040px);
    min-width: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin: 0.5rem auto 1rem;
  }

  .emptyGrimoire .noSpells {
    max-width: 100%;
    justify-content: center;
    margin: 0.75rem 0 0;
  }

  .emptyGrimoireLink {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0.65rem 0.9rem;
    border: 1px solid var(--blueDark);
    border-radius: 0.45rem;
    background: var(--brown);
    color: var(--white);
    font-weight: 700;
  }

  .unavailableSpellNote {
    width: min(100% - 1rem, 1040px);
    margin: 0.5rem auto 1rem;
    color: #5a5b63;
    text-align: center;
  }

  .emptyGrimoire .unavailableSpellNote {
    width: 100%;
    margin: 0;
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

  &.grimoireView {
    align-items: center;

    .grimoireIdentity { display: flex; align-items: center; gap: 0.75rem; min-width: 0; }
    .grimoireIdentity > div { min-width: 0; }
    .eyebrow { color: #70502b; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; }
    h1 { margin: 0.1rem 0; color: var(--blueDark); font-size: clamp(1.15rem, 2.4vw, 1.65rem); overflow-wrap: anywhere; }
    p { margin: 0; color: #5a5b63; font-size: 0.85rem; }
    .catalogBackLink { display: inline-flex; flex: 0 0 auto; align-items: center; justify-content: center; padding: 0.6rem 0.8rem; border: 1px solid var(--blueDark); border-radius: 0.45rem; background: #f1eee6; color: var(--blueDark); font-weight: 700; text-align: center; }
    .catalogBackLink:hover, .catalogBackLink:focus-visible { background: #eee4d2; }
    .catalogBackLink:focus-visible { outline: 2px solid var(--brown); outline-offset: 2px; }
  }

  @media (max-width: 480px) {
    &.grimoireView { align-items: flex-start; }
    &.grimoireView .catalogBackLink { flex-basis: 100%; }
  }
`;
