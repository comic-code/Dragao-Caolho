import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --black: #282a36;
    --blue: #8be9fd;
    --blueDark: #2e384e;
    --brown: #BD8D4C;
    --gray: #bfbfbf;
    --green: #50fa7b;
    --pink: #ff80bf;
    --purple: #bd93f9;
    --red: #ff5555;
    --white: #F8F8F2;
    --yellow: #f1fa8c;
  }

  body {
    background: var(--white);
  }

  * {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    color: var(--black);
    /* font-family: 'Cinzel Decorative', cursive;
    font-family: 'Spectral SC', serif; */
  }

  h1, h2, h3 {
    font-family: 'Cinzel Decorative', cursive;
    font-weight: 500;
  }

  a {
    text-decoration: none;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;    
    justify-content: flex;
    align-items: center;
    justify-content: center;
  }

  table {
    margin: 0.5rem 0;
    border-radius: 5px;
    border: 1px solid var(--black);
    
    caption { font-weight: bold };
    thead {
      background-color: var(--brown);
      th {
        color: var(--white);
      }
    }

    td {
      padding: 0.25rem;
    }
  }

  input, select {
    border: 2px solid var(--blueDark);
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-size: 1rem;
  }


  .animationLeft {
    opacity: 0;
    transform: translateX(-20px);
    animation: animationShow 0.7s forwards; 
  }
  .animationRight {
    opacity: 0;
    transform: translateX(20px);
    animation: animationShow 0.7s forwards; 
  }
  .animationDown {
    opacity: 0;
    transform: translateY(-20px);
    animation: animationShow 0.5s forwards; 
  }
  .animationUp {
    opacity: 0;
    transform: translateY(20px);
    animation: animationShow 0.5s forwards; 
  }
  .animationShow {
    opacity: 0;
    animation: animationShow 0.5s forwards; 
  }
  .animationPulsate {
    animation: animationPulsate 1.5s ease-in-out infinite both;
  }

  @keyframes animationShow {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`;

export default GlobalStyle;
