import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import interviewsReducer from 'containers/Interviews/redux/reducer';
import homeReducer from 'containers/Home/redux/reducer';

import rootSaga from './saga';

const bindMiddleware = (middleware) => {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
};

function configureStore(initialState = {}, { isServer = false, req = null }) {

    const sagaMiddleware = createSagaMiddleware({
        onError(err) {
            if (err && process && process.browser) {
                console.log(`err`, err)
            }
        },
    });

    const store = createStore(

        combineReducers({
            interviews: interviewsReducer,
            home: homeReducer,
        }),
        initialState,
        bindMiddleware([sagaMiddleware]),
    );

    if (req || !isServer) {
        store.sagaTask = sagaMiddleware.run(rootSaga);
    }

    store.subscribe(() => {});
    return store;
}

export default configureStore;
