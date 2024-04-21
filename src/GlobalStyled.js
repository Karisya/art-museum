import styled from "styled-components";
import LexendDeca from "./assets/LexendDeca-Regular.ttf";

export const GlobalStyles = styled.div`
  * {
    border: none;
  }

  @font-face {
    font-family: "LexendDeca";
    src: url(${LexendDeca}) format("truetype");
  }

  *::before,
  *::after {
    box-sizing: inherit;
  }

  /* Links */
  a,
  a:link,
  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  /* Common */
  aside,
  nav,
  footer,
  header,
  section,
  main {
    display: block;
  }

  ul,
  ul li {
    list-style: none;
  }

  img {
    max-width: 100%;
  }

  /* Form */
  input,
  textarea,
  button,
  select {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background-color: transparent;
  }

  input::-ms-clear {
    display: none;
  }

  button,
  input[type="submit"] {
    display: inline-block;
    box-shadow: none;
    background-color: transparent;
    background: none;
    cursor: pointer;
  }

  input:focus,
  input:active,
  button:focus,
  button:active {
    outline: none;
  }

  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  label {
    cursor: pointer;
  }
`;

export const GlobalContainer = styled.div`
  max-width: 67%;
  margin: 0 auto;
  padding: 0px 15px;

  @media (max-width: 1024px) {
    max-width: 75%;
  }

  @media (max-width: 769px) {
    max-width: 85%;
  }

  @media (max-width: 481 px) {
    max-width: 95%;
  }
`;
