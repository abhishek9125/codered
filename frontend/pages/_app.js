import PageLayout from 'components/PageLayout';
import withReduxSaga from 'next-redux-saga';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import createStore from '../store';

function MyApp({ Component, pageProps, store }) {
	return (
		<Provider store={store}>
			<PageLayout>
				<Component {...pageProps} />
			</PageLayout>
		</Provider>
	)
}

export default withRedux(createStore)(withReduxSaga(MyApp));