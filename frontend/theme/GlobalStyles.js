

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    body {
        padding: 0;
        margin: 0;
        line-height: 1.62;
        background-color: ${({ theme }) => theme.general.bg};
        color: ${({ theme }) => theme.general.textgray};
        font-family: ${({ theme }) => theme.fonts.primary};

        &.noScroll {
            overflow: hidden;
        }
    }

    @font-face {
        font-family: "Ionicons";
        src: url("https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/fonts/ionicons.eot?v=2.0.0");
        src: url("https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/fonts/ionicons.eot?v=2.0.0#iefix")
            format("embedded-opentype"),
        url("https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/fonts/ionicons.ttf?v=2.0.0")
            format("truetype"),
        url("https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/fonts/ionicons.woff?v=2.0.0")
            format("woff"),
        url("https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/fonts/ionicons.svg?v=2.0.0#Ionicons")
            format("svg");
        font-weight: normal;
        font-style: normal;
  }

`;

export default GlobalStyle;
