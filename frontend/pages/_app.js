import withReduxSaga from 'next-redux-saga';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import { ThemeProvider } from "styled-components";
import createStore from '../store';
import theme from '../theme';

function MyApp({ Component, pageProps, store }) {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</Provider>
	)
}

export default withRedux(createStore)(withReduxSaga(MyApp));