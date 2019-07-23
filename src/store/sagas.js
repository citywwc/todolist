import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import { initListAction } from './actionCreators';



// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getInitList() {
    const res = yield axios.get('http://localhost.charlesproxy.com:3000/list');
    const action = initListAction(res.data);
    yield put(action);
 }

//generator function
function* todoSagas() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}

export default todoSagas;