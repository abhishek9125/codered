import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_HOME_PAGE_DATA } from './constants';

function* getHomePageDataSaga({ payload }) {
    // const userId = yield select(makeSelectUserId());
    // const requestURL = `${catalogServiceUrl}/categories/id/${freeSkuId}/products`;
    try {
    //   const data = yield call(request, requestURL);
      const data = [1,2,3,4];
      // yield put(setInterviewsList(data));
    } catch (err) {
      console.log(`Error Fetching Free Products List: `, err)
    }
}

export default [
    takeLatest(GET_HOME_PAGE_DATA, getHomePageDataSaga),
];
