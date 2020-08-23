import { put, takeEvery, all, call, select } from 'redux-saga/effects';

import { FETCH_TODO } from 'store/actions/types';
import { fetchTodoSuccessAction, fetchTodoErrorAction } from 'store/actions/todos';
import { getItem } from 'store/selectors/todosSelector';
import { get } from 'lib/httpService';

function* fetchTodoItem(action) {
  const item = yield select(getItem(action.payload));

  if (item) yield put(fetchTodoSuccessAction(item));
  else {
    try {
      const result = yield call(get, `https://jsonplaceholder.typicode.com/todos/${action.payload}`);
      yield put(fetchTodoSuccessAction(result.data));
    } catch (ex) {
      yield put(fetchTodoErrorAction(action.payload));
    }
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
