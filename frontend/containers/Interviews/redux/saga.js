import { call, put, select, takeLatest } from 'redux-saga/effects';
import { setInterviewsList } from './actions';
import { GET_INTERVIEW_LIST } from './constants';

function* getInterViewListSaga({ payload }) {
    // const userId = yield select(makeSelectUserId());
    // const requestURL = `${catalogServiceUrl}/categories/id/${freeSkuId}/products`;
    try {
    //   const data = yield call(request, requestURL);
      const data = [1,2,3,4];
      yield put(setInterviewsList(data));
    } catch (err) {
      console.log(`Error Fetching Free Products List: `, err)
    }
}

export default [
    takeLatest(GET_INTERVIEW_LIST, getInterViewListSaga),
];
