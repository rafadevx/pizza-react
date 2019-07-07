import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { reducer as toastr } from 'react-redux-toastr';
import { reducer as login } from './login';
import { reducer as order } from './order';

export default history => combineReducers({
  login,
  order,
  toastr,
  router: connectRouter(history),
});
