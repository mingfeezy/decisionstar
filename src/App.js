import React from 'react';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

function App() {

  const store = configureStore();

  return (
    <Provider store={store}>
    <Main />
    </Provider>
  );
}

export default App;
