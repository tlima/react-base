import { createAction, FETCH_TODO, FETCH_TODO_SUCCESS, FETCH_TODO_ERROR } from 'store/actions/types';

export const fetchTodoAction = (id = Math.round(Math.random() * 250)) => createAction(FETCH_TODO, id);

export const fetchTodoSuccessAction = (todo) => createAction(FETCH_TODO_SUCCESS, todo);

export const fetchTodoErrorAction = (error) => createAction(FETCH_TODO_ERROR, error);
