import { createGlobalStyle } from "styled-components";

export const AppReset = createGlobalStyle`
  :root {
    --root-scale: 3;
    --root-size: calc(var(--root-scale) * 1vh);
    --root-min: 16px;
    --root-max: 20px;
  }

  @media (orientation: portrait) {
    --root-size: calc(var(--root-scale) * 1vw);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
  }

  html,
  body,
  #root,
  main {
    width: 100%;
    height: 100%;
  }

  html {
    font-size: clamp(var(--root-min), var(--root-size), var(--root-max));
    font-family:"proxima-nova";
    font-weight: normal;
    line-height: 1em;
    text-rendering: geometricPrecision;
    background-color: rgb(26	56	81);
    color: white;
    font-size: 2.8vw;
    line-height: 4.6vw;
  }

  main {
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  b {
    font-weight: bold;
  }

  button {
    border: 0;
    background-color: rgb(253	200	29);
    color: black;
    font-weight: bold;
  }
  
  `;
