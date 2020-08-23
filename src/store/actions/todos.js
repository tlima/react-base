import { createAction, FETCH_TODO, FETCH_TODO_SUCCESS, FETCH_TODO_ERROR } from 'store/actions/types';

export const fetchTodoAction = (id = 1 + Math.round(Math.random() * 199)) => createAction(FETCH_TODO, id);

export const fetchTodoSuccessAction = (todo) => createAction(FETCH_TODO_SUCCESS, todo);

export const fetchTodoErrorAction = (id) => createAction(FETCH_TODO_ERROR, id);
