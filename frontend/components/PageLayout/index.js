import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import { ThemeProvider } from "styled-components";
import GlobalStyle from 'theme/GlobalStyles';
import theme from '../../theme';
import Promotions from './Promotions';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';

function PageLayout({ children }) {

    const router = useRouter();
    const showLayout = !router.asPath.includes('register');

    return (
        <ThemeProvider theme={theme}>
            <Fragment>
                <Toaster 
                    containerStyle={{
                        top: showLayout ? 60 : 10,
                        right: 20,
                    }}
                />
                {showLayout && <Header />}
                {/* {showLayout && <Promotions />} */}
                {children}
                {showLayout && <Footer />}
                <GlobalStyle />
            </Fragment>
        </ThemeProvider>
    )
}

export default PageLayout;
