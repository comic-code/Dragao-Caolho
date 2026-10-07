import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DetailPage = styled.main`
  width: 100%;
  padding: 1rem 0 3rem;
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  margin: 0.5rem max(1rem, calc((100% - 800px) / 2));
  color: var(--blueDark);
  font-weight: 700;
  &:hover, &:focus-visible { color: #70502b; text-decoration: underline; }
`;

export const NotFound = styled.section`
  width: min(100% - 2rem, 42rem);
  margin: 4rem auto;
  padding: 2rem;
  border: 2px solid var(--brown);
  border-radius: 0.75rem;
  background: var(--white);
  text-align: center;

  h1 { color: var(--blueDark); }
  p { margin: 0.75rem 0; }
  a { color: #70502b; font-weight: 700; text-decoration: underline; }
`;
