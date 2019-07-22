import axios from 'axios';
import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACITON} from './actionTypes';

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddTodoItem = () => ({
    type: ADD_TODO_ITEM
})

export const getDeleteTodoItem = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})

export const initListAction = (index) => ({
    type: INIT_LIST_ACITON,
    index
})

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/todolist.json').then((res) => {
            const data = res.data;
            const action = initListAction(data);
            dispatch(action);

        })
    }
}