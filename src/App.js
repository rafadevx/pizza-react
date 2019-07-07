import './config/ReactotronConfig';
import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import Routes from './routes';
import GlobalStyle from './styles/global';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <GlobalStyle />
        <Routes />
        <ReduxToastr timeOut={4000} closeOnToastrClick progressBar />
      </Fragment>
    </Provider>
  );
}

export default App;
