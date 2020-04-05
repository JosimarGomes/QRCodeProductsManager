import { takeLatest, call, put } from 'redux-saga/effects';
import Api from 'services/api';
import { Types } from '../reducers/products';

const { PRODUCTS } = Types;

function* fetchProducts() {
    try {
        const result = yield call(Api.get, '/products');
        yield put({ type: PRODUCTS.LOAD_SUCCESS, payload: result.data });
    } catch (e) {
        yield put({ type: PRODUCTS.LOAD_FAILED, error: 'Não foi possível processar a solicitação' });
    }
}

export default function* sagasProducts() {
    yield takeLatest(PRODUCTS.LOAD, fetchProducts);
}