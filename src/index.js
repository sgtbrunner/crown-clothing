import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { DialogProvider } from './components/dialog/dialog.provider';
import { store, persistor } from './redux/store';
import * as serviceWorker from './serviceWorkerRegistration';

import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <Router basename="/">
      <PersistGate persistor={persistor}>
        <DialogProvider>
          <App />
        </DialogProvider>
      </PersistGate>
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
