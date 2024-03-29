import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: clamp(40%, 1% + 2vw, 62.5%);

  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};

    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }

  body, input, textarea {
    font-family: 'Roboto', serif;
    outline: none;
  }

  button, h2  {
  font-family: "Poppins", sans-serif;
    outline: none;
  }


  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

    button:hover, a:hover {
      filter: brightness(0.9);
  }

`
