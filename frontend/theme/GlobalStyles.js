import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    body {
        padding: 0;
        margin: 0;
        line-height: 1.62;
        /* background-color: ${({ theme }) => theme.general.bg}; */
        color: ${({ theme }) => theme.colors.general};
        font-family: ${({ theme }) => theme.fonts.secondary};

        &.noScroll {
            overflow: hidden;
        }
    }


`;

export default GlobalStyle;
