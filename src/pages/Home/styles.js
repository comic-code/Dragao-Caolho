import styled from 'styled-components';

import Dragon from '../../assets/dragon.png';
import Knight from '../../assets/knight.png';

export const HomeWrapper = styled.main`
  display: flex;
  margin-top: 2rem;
  width: 100%;
  max-width: 1100px;
  height: 40vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  background: url(${Dragon}), url(${Knight});
  background-position: left, right;
  background-repeat: no-repeat;
  background-size: contain;

  @media (max-width: 600px) {
    background: url(${Dragon}) no-repeat left;
    background-size: contain;
  }

  h3 {
    font-size: 2.5rem;
    margin-top: 1rem;
    font-weight: bold;
  }
`;
