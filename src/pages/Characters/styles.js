import styled from 'styled-components';

export const CharactersPage = styled.main`
  width: min(100% - 2rem, 1200px);
  margin: 2rem auto 5rem;
`;

export const PageHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1rem;
  margin-bottom: 1.25rem;

  .eyebrow { color: #70502b; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em; }
  h1 { margin: 0.25rem 0; color: var(--blueDark); }
  p { color: #5a5b63; }

  .headerAction {
    padding: 0.65rem 0.9rem;
    border: 1px solid var(--blueDark);
    border-radius: 0.45rem;
    background: var(--brown);
    color: var(--white);
    font-weight: 700;
    white-space: nowrap;
  }

  @media (max-width: 600px) {
    align-items: flex-start;
    flex-direction: column;
    .headerAction { width: 100%; }
  }
`;

export const CharacterList = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
  gap: 1rem;
  margin-top: 1.25rem;
`;

export const CharacterCard = styled.article`
  position: relative;
  width: 100%;
  display: grid;
  gap: 1rem;
  padding: 1.1rem;
  border: 1px solid rgba(46, 56, 78, 0.32);
  border-top: 3px solid var(--brown);
  border-radius: 0.7rem;
  background: #fffefa;
  box-shadow: 0 5px 16px rgba(40, 42, 54, 0.08);
  text-align: left;
  transition: transform 0.18s, box-shadow 0.18s;

  .characterCardTitle { display: flex; justify-content: space-between; align-items: flex-start; gap: 0.75rem; }
  .characterCardTitle > div { min-width: 0; }
  h2 { margin-bottom: 0.25rem; color: var(--blueDark); font-size: 1.2rem; overflow-wrap: anywhere; }
  p { color: #5a5b63; font-size: 0.9rem; overflow-wrap: anywhere; }
  .levelBadge { flex: 0 0 auto; padding: 0.3rem 0.55rem; border-radius: 999px; background: #eee4d2; color: var(--blueDark); font-size: 0.75rem; font-weight: 700; }
  .characterCardStats { display: flex; flex-wrap: wrap; gap: 0.4rem; }
  .characterCardStats span { padding: 0.3rem 0.5rem; border-radius: 999px; background: #f1eee6; color: #5a5b63; font-size: 0.75rem; font-weight: 700; }

  &:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(40, 42, 54, 0.14); }
  &:focus-within { outline: 3px solid var(--brown); outline-offset: 3px; }
  .cardOpen { position: absolute; inset: 0; width: 100%; height: 100%; border-radius: inherit; background: transparent; }
  .cardOpen:focus-visible { outline: 3px solid var(--brown); outline-offset: 3px; }
`;

export const CharacterDetailHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1rem;
  margin-bottom: 1.25rem;

  .detailTitle { display: grid; gap: 0.25rem; min-width: 0; }
  .backButton { justify-self: start; color: #70502b; font-weight: 700; text-decoration: underline; }
  .eyebrow { color: #70502b; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em; }
  h1 { margin: 0; color: var(--blueDark); overflow-wrap: anywhere; }
  p { color: #5a5b63; overflow-wrap: anywhere; }

  .detailActions { display: flex; flex-wrap: wrap; gap: 0.5rem; }
  .detailActions button { padding: 0.65rem 0.85rem; border: 1px solid var(--blueDark); border-radius: 0.45rem; font-weight: 700; }
  .editCharacter { background: var(--brown); color: var(--white); }
  .deleteCharacter { border-color: #a3493f !important; color: #8c322b; }
  .deleteCharacter:hover, .deleteCharacter:focus-visible { background: #f4e3df; }

  @media (max-width: 600px) {
    align-items: stretch;
    flex-direction: column;
    .detailActions { width: 100%; }
    .detailActions button { flex: 1; }
  }
`;

export const Panel = styled.section`
  min-width: 0;
  padding: 1.1rem;
  border: 1px solid rgba(46, 56, 78, 0.32);
  border-top: 3px solid var(--brown);
  border-radius: 0.7rem;
  background: #fffefa;
  box-shadow: 0 5px 16px rgba(40, 42, 54, 0.08);

  h2, h3 { color: var(--blueDark); }
  .panelHeading { display: flex; justify-content: space-between; align-items: center; gap: 0.5rem; margin-bottom: 1rem; }
  .panelHeading h2, .panelHeading h3 { margin-top: 0.15rem; }
  .eyebrow { color: #70502b; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.12em; }
  .countBadge { padding: 0.3rem 0.55rem; border-radius: 999px; background: #eee4d2; color: var(--blueDark); font-size: 0.75rem; font-weight: 700; text-align: center; }
  .muted, .emptyMessage { color: #696a70; font-size: 0.9rem; line-height: 1.5; }
  .emptyMessage { padding: 0.8rem; border-radius: 0.45rem; background: #f1eee6; text-align: center; }

  label { display: flex; flex-direction: column; gap: 0.3rem; font-size: 0.85rem; font-weight: 700; }
  input, select, textarea { width: 100%; min-width: 0; background: #fff; }
  input[type='checkbox'] { width: 1rem; height: 1rem; }

  .searchLabel { margin-bottom: 0.75rem; }
  .suggestions { list-style: none; max-height: 15rem; overflow-y: auto; margin-bottom: 1rem; border: 1px solid #ded7c8; border-radius: 0.45rem; }
  .suggestions li { display: flex; justify-content: space-between; align-items: center; gap: 0.6rem; padding: 0.5rem 0.65rem; border-bottom: 1px solid #e8e1d4; }
  .suggestions li:last-child { border-bottom: 0; }
  .suggestions small, .spellEntryName small { display: block; color: #777; font-weight: 400; }
  .suggestions button, .formActions button, .primary { padding: 0.55rem 0.8rem; border: 1px solid var(--blueDark); border-radius: 0.4rem; background: var(--brown); color: var(--white); font-weight: 700; }
  .primary:disabled { cursor: not-allowed; opacity: 0.5; }

  .spellEntries { display: grid; gap: 0.5rem; }
  .spellEntry { display: grid; grid-template-columns: minmax(0, 1fr) auto auto; align-items: center; gap: 0.5rem; padding: 0.55rem; border: 1px solid #e2dacb; border-radius: 0.45rem; }
  .spellEntryName { min-width: 0; overflow-wrap: anywhere; }
  .spellEntryName a { color: var(--blueDark); font-weight: 700; text-decoration: underline; }
  .spellEntry select { width: auto; max-width: 8.5rem; padding: 0.35rem; font-size: 0.8rem; }
  .removeButton { width: 2rem; height: 2rem; border: 1px solid #a3493f; border-radius: 50%; color: #8c322b; font-size: 1.35rem; line-height: 1; }
  .removeButton:hover, .removeButton:focus-visible { background: #f4e3df; }

  .addItemForm { display: grid; grid-template-columns: 1fr 1.3fr auto; align-items: end; gap: 0.6rem; margin-bottom: 1rem; }
  .inventoryTotals { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 0.4rem; }
  .inventoryList { display: grid; gap: 0.5rem; }
  .inventoryRow { display: grid; grid-template-columns: 2rem minmax(0, 1fr) 4.5rem auto 2rem; align-items: center; gap: 0.5rem; padding: 0.55rem; border: 1px solid #e2dacb; border-radius: 0.45rem; }
  .inventoryIcon { color: #8a622e; display: grid; place-items: center; }
  .inventoryName { min-width: 0; overflow-wrap: anywhere; }
  .inventoryName small { display: block; color: #777; }
  .quantityField { align-items: center; font-size: 0.72rem; }
  .quantityField input { padding: 0.35rem; text-align: center; }
  .equippedField { display: flex; flex-direction: row; align-items: center; gap: 0.35rem; white-space: nowrap; font-size: 0.8rem; }

  .coinPurse { margin-top: 1.25rem; padding-top: 1rem; border-top: 1px solid #ded7c8; }
  .coinGrid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 0.5rem; }
  .coinGrid input { padding: 0.45rem; }

  .profilePanel { margin-top: 1rem; }
  .profileToolbar { display: flex; justify-content: space-between; align-items: end; gap: 0.75rem; margin-bottom: 1rem; }
  .profileToolbar label { flex: 1; max-width: 30rem; }
  .deleteCharacter { padding: 0.5rem 0.7rem; border: 1px solid #a3493f; border-radius: 0.4rem; color: #8c322b; font-weight: 700; }
  .deleteCharacter:hover, .deleteCharacter:focus-visible { background: #f4e3df; }
  .profileFields { display: grid; grid-template-columns: 1.3fr 1fr 1.3fr 6rem; gap: 0.65rem; }
  .emptyCharacter { display: grid; justify-items: start; gap: 0.75rem; }
  .emptyCharacter p { color: #696a70; line-height: 1.5; }

  @media (max-width: 760px) {
    .profileFields { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }
  @media (max-width: 480px) {
    .profileToolbar { align-items: stretch; flex-direction: column; }
    .profileToolbar label { max-width: none; }
    .profileFields { grid-template-columns: 1fr; }
  }

  @media (max-width: 720px) {
    .inventoryRow { grid-template-columns: 1.75rem minmax(0, 1fr) 4rem 2rem; }
    .equippedField { grid-column: 2 / 4; }
    .coinGrid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  }

  @media (max-width: 480px) {
    padding: 0.85rem;
    .panelHeading { align-items: flex-start; }
    .addItemForm { grid-template-columns: 1fr; }
    .inventoryRow { grid-template-columns: 1.6rem minmax(0, 1fr) 3.75rem 1.8rem; gap: 0.35rem; padding: 0.4rem; }
    .equippedField { grid-column: 2 / 4; }
    .coinGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .spellEntry { grid-template-columns: minmax(0, 1fr) auto; }
    .spellEntry .removeButton { grid-column: 2; grid-row: 1; justify-self: end; }
    .spellEntry select { grid-column: 1; grid-row: 2; }
  }
`;

export const FormPanel = styled.form`
  width: min(100%, 44rem);
  display: grid;
  gap: 0.8rem;
  padding: 1.1rem;
  border: 2px solid var(--brown);
  border-radius: 0.7rem;
  background: #fffefa;
  box-shadow: 0 5px 16px rgba(40, 42, 54, 0.08);

  h2 { color: var(--blueDark); }
  label { display: flex; flex-direction: column; gap: 0.3rem; font-size: 0.85rem; font-weight: 700; }
  input, select { min-width: 0; background: #fff; }
  .formRow { display: grid; grid-template-columns: 1fr 7rem; gap: 0.7rem; }
  .formActions { display: flex; justify-content: flex-end; gap: 0.5rem; }
  .formActions button { padding: 0.55rem 0.8rem; border: 1px solid var(--blueDark); border-radius: 0.4rem; font-weight: 700; }
  .formActions .primary { background: var(--brown); color: var(--white); }

  @media (max-width: 480px) {
    .formRow { grid-template-columns: 1fr; }
    .formActions { flex-direction: column; }
  }
`;

export const CharacterWorkspace = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: start;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 900px) { grid-template-columns: 1fr; }
`;
