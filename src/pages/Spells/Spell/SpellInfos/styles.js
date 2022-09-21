import styled from 'styled-components';
import { Row } from '../../../../components/Defaults';

export const SpellInfosWrapper = styled(Row)`
  justify-content: space-between;

  span.card {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 0.9rem;
    border: 2px solid var(--blueDark);
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-weight: bold;
    min-width: 7.5rem;

    img {
      width: 30px;
    }
  }
`;
