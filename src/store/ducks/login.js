import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  loginRequest: ['email', 'password'],
  loginSuccess: ['data'],
  logout: null,
});

export const LoginTypes = Types;
export default Creators;

const INITIAL_STATE = Immutable({
  loggedIn: !!localStorage.getItem('@pizza:token'),
  token: localStorage.getItem('@pizza:token') || null,
  userName: localStorage.getItem('@pizza:user') || '',
});

export const success = (state, { data }) => state.merge({
  loggedIn: true,
  token: data.token,
  userName: data.user.name,
});

export const logout = state => state.merge({
  loggedIn: false,
  token: '',
  userName: '',
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGOUT]: logout,
});
