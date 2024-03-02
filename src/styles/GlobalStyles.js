import { createGlobalStyle } from "styled-components";



const GlobalStyles = createGlobalStyle`
:root {
    --color-primary: rgb(254, 27, 27);
    --color-primary-dark: rgb(106, 3, 3);
    --color-black:#120d0d;
}


*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  color: #333;

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}
`;

export default GlobalStyles;
