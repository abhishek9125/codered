import React, { useEffect } from 'react';
import PageLayout from 'components/PageLayout';
import withReduxSaga from 'next-redux-saga';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import createStore from '../store';
import axios from 'axios';
import config from 'config/env';
import { setUserData } from 'containers/Auth/redux/actions';
import { customAxios } from 'config/axios';

function MyApp({ Component, pageProps, store }) {

	useEffect(async () => {

        const userData = JSON.parse(window.localStorage.getItem('user'));
		
		if(userData) {
			customAxios(userData.token)
			window.__NEXT_REDUX_STORE__.dispatch(setUserData(userData));
			console.log(`response`, response)
            const response = await axios.get(`${config.apiUrl}/auth/fetchUserDetails`);

		}

    },[])

	return (
		<Provider store={store}>
			<PageLayout>
				<Component {...pageProps} />
			</PageLayout>
		</Provider>
	)
}

export default withRedux(createStore)(withReduxSaga(MyApp));