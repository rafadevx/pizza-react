import { all, takeLatest } from 'redux-saga/effects';

import { login, logout } from './login';
import { LoginTypes } from '../ducks/login';
import { loadOrders } from './order';
import { OrderTypes } from '../ducks/order';

export default function* rootSaga() {
  yield all([
    takeLatest(LoginTypes.LOGIN_REQUEST, login),
    takeLatest(OrderTypes.LOAD_ORDERS_REQUEST, loadOrders),
    takeLatest(LoginTypes.LOGOUT, logout),
  ]);
}
