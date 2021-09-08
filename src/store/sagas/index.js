import { all } from 'redux-saga/effects';

import colorsSaga from 'store/sagas/colorsSaga';

export default function* rootSaga() {
  yield all([
    colorsSaga(),
  ]);
}
