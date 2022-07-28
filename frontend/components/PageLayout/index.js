import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import { ThemeProvider } from "styled-components";
import GlobalStyle from 'theme/GlobalStyles';
import theme from '../../theme';
import Promotions from './Promotions';

function PageLayout({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <Fragment>
                <Header />
                <Promotions />
                {children}
                <Footer />
                <GlobalStyle />
            </Fragment>
        </ThemeProvider>
    )
}

export default PageLayout;
