import { put, takeEvery, all, call } from 'redux-saga/effects';

import { FETCH_TODO } from 'store/actions/types';
import { fetchTodoSuccessAction, fetchTodoErrorAction } from 'store/actions/todos';
import { get } from 'lib/httpService';

function* fetchTodoItem(action) {
  try {
    const result = yield call(get, `https://jsonplaceholder.typicode.com/todos/${action.payload}`);
    yield put(fetchTodoSuccessAction(result.data));
  } catch (ex) {
    yield put(fetchTodoErrorAction(action.payload));
  }
}

function* watchFetchTodoItem() {
  yield takeEvery(FETCH_TODO, fetchTodoItem);
}

export default function* todosSaga() {
  yield all([
    watchFetchTodoItem(),
  ]);
}
