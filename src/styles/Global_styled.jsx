import { createGlobalStyle } from "styled-components";

export const theme = {
  bgColor: {
    body: "#f0f1f5",
    main: "#5534A5",
    main_alt: "#2c2c54",
  },
  fontColor: {
    main: "#5534A5",
    title: "#101010",
    desc: "#535c68",
  },
  borderColor: {
    main: "#5534a5",
  },
  tablet: "820px",
  mobile: "600px",
};

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }
    
    html {
      scroll-behavior: smooth;
    }

    body {
        background-color: ${({ theme }) => theme.bgColor.body};
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }

    input {
      outline: none;
      border: 0;
    }
`;
