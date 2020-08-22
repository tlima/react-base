import { all } from 'redux-saga/effects';

import todos from 'store/sagas/todos';

export default function* rootSaga() {
  yield all([
    ...todos,
  ]);
}
