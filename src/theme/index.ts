import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --max-width: 1100px;
  --border-radius: 12px;
  --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',
    'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',
    'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;

  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 214, 219, 220;
  --background-end-rgb: 255, 255, 255;

  --primary-glow: conic-gradient(
    from 180deg at 50% 50%,
    #16abff33 0deg,
    #0885ff33 55deg,
    #54d6ff33 120deg,
    #0071ff33 160deg,
    transparent 360deg
  );
  --secondary-glow: radial-gradient(
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  );

  --tile-start-rgb: 239, 245, 249;
  --tile-end-rgb: 228, 232, 233;
  --tile-border: conic-gradient(
    #00000080,
    #00000040,
    #00000030,
    #00000020,
    #00000010,
    #00000010,
    #00000080
  );

  --callout-rgb: 238, 240, 241;
  --callout-border-rgb: 172, 175, 176;
  --card-rgb: 180, 185, 188;
  --card-border-rgb: 131, 134, 135;

  --brand01: #4529E6;
  --brand02: #5126EA;
  --brand03: #B0A6F0;
  --brand04: #EDEAFD;

  --grey00: #0B0D0D;
  --grey01: #212529;
  --grey02: #495057;
  --grey03: #868E96;
  --grey04: #ADB5BD;
  --grey05: #CED4DA;
  --grey06: #DEE2E6;
  --grey07: #E9ECEF;
  --grey08: #F1F3F5;
  --grey09: #F8F9FA;
  --grey10: #FDFDFD;
 
  --whiteFixed: #FFFFFF;
  --white: #FFFFFF;
  --alert01: #CD2B31;
  --alert02: #FDD8D8;
  --alert03: #FFE5E5;

  --sucess01: #18794E;
  --sucess02: #CCEBD7;
  --sucess03: #DDF3E4;

  --random01: #E34D8C;
  --random02: #C04277;
  --random03: #7D2A4D;
  --random04: #7000FF;
  --random05: #6200E3;
  --random06: #36007D;
  --random07: #349974;
  --random08: #2A7D5F;
  --random09: #153D2E;
  --random10: #6100FF;
  --random11: #5700E3;
  --random12: #30007D;
}

@media (prefers-color-scheme: dark) {
  :root {
    --foreground-rgb: 255, 255, 255;
    --background-start-rgb: 0, 0, 0;
    --background-end-rgb: 0, 0, 0;

    --primary-glow: radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0));
    --secondary-glow: linear-gradient(
      to bottom right,
      rgba(1, 65, 255, 0),
      rgba(1, 65, 255, 0),
      rgba(1, 65, 255, 0.3)
    );

    --tile-start-rgb: 2, 13, 46;
    --tile-end-rgb: 2, 5, 19;
    --tile-border: conic-gradient(
      #ffffff80,
      #ffffff40,
      #ffffff30,
      #ffffff20,
      #ffffff10,
      #ffffff10,
      #ffffff80
    );

    --callout-rgb: 20, 20, 20;
    --callout-border-rgb: 108, 108, 108;
    --card-rgb: 100, 100, 100;
    --card-border-rgb: 200, 200, 200;
  }
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Inter', sans-serif;
  color: black;
}
html, body, #root{
  min-height: 100vh;
}

button{
  cursor: pointer;
  border: none;
  background:none;
}

ul{
  list-style: none;
}
body {
  min-height: 100vh;
  background:var(--grey08);
}

a {
  text-decoration: none;
}
`;
