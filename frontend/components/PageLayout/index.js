import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import { ThemeProvider } from "styled-components";
import theme from '../../theme';

function PageLayout({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <Fragment>
                <Header />
                {children}
                <Footer />
            </Fragment>
        </ThemeProvider>
    )
}

export default PageLayout;
