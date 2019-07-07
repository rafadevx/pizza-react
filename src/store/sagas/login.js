import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '../../services/api';

import LoginActions from '../ducks/login';

export function* login({ email, password }) {
  try {
    const response = yield call(api.post, '/signin', { email, password });

    if (!response.data.user.admin) {
      const error = { message: 'Não permitido' };
      throw error;
    }

    localStorage.setItem('@pizza:token', response.data.token);
    localStorage.setItem('@pizza:user', response.data.user.name);

    yield put(LoginActions.loginSuccess(response.data));
    yield put(push('/'));
  } catch (err) {
    console.log(err);
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha no login',
        message: err.message || 'Verifique seu e-mail/senha!',
      }),
    );
  }
}

export function* logout() {
  localStorage.removeItem('@pizza:token');
  localStorage.removeItem('@pizza:user');

  yield put(push('/login'));
}
