import styled from "styled-components";

export const SpellsQuestionsWrapper = styled.legend`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0.5rem;
  border-radius: 5px;
  margin-top: 1rem;

  p {
    &:not(:first-child) {
      margin-top: 0.25rem;
    }
    span {
      border: 2px solid var(--blueDark);
      display: inline-flex;
      font-weight: bold;
      color: #efff;
      justify-content: center;
      width: 6rem;
      border-radius: 5px;
      margin-right: 0.5rem;

      &.verbal {
        background-color: #5ebd79;
      }

      &.somatic {
        background-color: #7539bd;
      }

      &.material {
        background-color: #4b91bd;
      }
    }
  }
`