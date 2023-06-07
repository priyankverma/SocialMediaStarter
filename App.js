import React from 'react';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import Routes from './src/routes';
function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
