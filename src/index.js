// import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize/modern-normalize.css';
// import './styles.scss';
// import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
// import { store, persistor } from './redux/store';
import { store } from './redux/store';
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <App />
    {/* </PersistGate> */}
  </Provider>
  // </React.StrictMode>
);
