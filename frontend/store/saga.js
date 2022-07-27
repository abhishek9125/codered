import { all } from 'redux-saga/effects';
import interviewSagas from '../containers/Interviews/redux/saga';
import homeSagas from '../containers/Home/redux/saga';


function* rootSaga() {
  yield all([
    ...interviewSagas,
    ...homeSagas,
  ]);
}

export default rootSaga;
