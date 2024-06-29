import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Cartpage from './components/Cartpage';

const App = () => {
  return (
    <Provider store={store}>
      <Cartpage />
    </Provider>
  );
};

export default App;
