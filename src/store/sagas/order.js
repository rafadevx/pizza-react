import { call, put } from 'redux-saga/effects';

import { actions as toastrActions } from 'react-redux-toastr';

import api from '../../services/api';

import OrderActions from '../ducks/order';

export function* loadOrders() {
  try {
    const response = yield call(api.get, 'app/order/');

    yield put(OrderActions.loadOrdersSuccess(response.data));
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha ao recupear pedidos',
        message: 'Verifique sua conexão',
      }),
    );
  }
}
