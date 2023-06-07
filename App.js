import React from 'react';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import DummyCounter from './src/components/dummyCounter';
function App() {
  return (
    <Provider store={store}>
      <DummyCounter />
    </Provider>
  );
}

export default App;
