import { createGlobalStyle, keyframes } from "styled-components";

const ls = keyframes`
  
  100%{transform: rotate(1turn)}

`;

const animateTitle = keyframes`
  0%{
   width:10%;
   left:0;
   transform:translateX(-50%);
   opacity: 0;

  }
  50%{
    width:10%;
  }
  100%{
    
    width:50%;
    left:50%;
   transform:translateX(-50%);
   opacity:1;
   
  }
`;

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

*:disabled {
  cursor: not-allowed;
}

.sticky {
  position:fixed;
  box-shadow:0 2px 4px rgba(0,0,0,0.04);
}

/* HTML: <div class="loader"></div> */
.loader {
  width: 80px;
  aspect-ratio: 1;
  color: #8d7958;
  background:
    linear-gradient(currentColor 0 0) 50%/100% 15px,
    linear-gradient(currentColor 0 0) 50%/15px 100%,
    radial-gradient(circle 15px,currentColor 94%,#0000);
  background-repeat: no-repeat;
  -webkit-mask: radial-gradient(circle 5px,#0000 90%,#000);
  clip-path: polygon(0 30px,calc(100% - 30px) 0,100% calc(100% - 30px),30px 100%);
  animation: ${ls} 1.5s infinite linear;
}

.reloader {
  position: absolute;
  top:5rem ;
  right: 2rem;
}

.hide-title {
  opacity:0;
  transform: translateY(-100px);
  transition: opacity 1000ms, transform 3000ms;
}

.show-title {
  opacity: 1;
  transform:translateY(0);
}
  
.title-after::after {
    content: "";
    position: absolute;
    display: inline-block;
    opacity:1;
    top: 105%;
    height: 2px;
    width: 50%;
    left:50%;
   transform:translateX(-50%);
    background-color: orangered;
    animation-name: ${animateTitle};
    animation-direction: normal;
    animation-iteration-count: initial;
    animation-duration: 2000ms;
  }
`;

export default GlobalStyles;
