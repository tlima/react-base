import { all } from 'redux-saga/effects';

import todosSaga from 'store/sagas/todosSaga';

export default function* rootSaga() {
  yield all([
    todosSaga(),
  ]);
}
