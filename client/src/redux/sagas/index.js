import { fork, all } from 'redux-saga/effects';
import sagasProducts from './products';

export default function* rootSaga() {
    yield all([
        fork(sagasProducts),
    ]);
}