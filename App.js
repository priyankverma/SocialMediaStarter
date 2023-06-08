import React from 'react';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import Routes from './src/routes';
import FlashMessage from 'react-native-flash-message';
function App() {
  return (
    <Provider store={store}>
      <Routes />
      <FlashMessage style={{zIndex:120}} autoHide duration={2000} position="top" />
    </Provider>
  );
}

export default App;
