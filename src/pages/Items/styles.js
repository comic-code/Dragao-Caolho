import styled from "styled-components";

export const ItemsContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  padding-bottom: 4rem;
`;

export const Table = styled.table`
  width: 80%;
  border-collapse: collapse;
  margin: 2rem 0;
  font-size: 1rem;
  text-align: left;
  border: 1px solid #ddd;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const TableHeader = styled.th`
  background-color: var(--brown);
  color: white;
  padding: 0.5rem;

  @media (max-width: 800px) {
    font-size: 0.8rem;
    padding: 0.25rem;
  }
`;

export const TableCell = styled.td`
  padding: 0.5rem;
  /* border-bottom: 1px solid #ddd; */

  @media (max-width: 800px) {
    font-size: 0.8rem;
    padding: 0.25rem;
  }
`;
