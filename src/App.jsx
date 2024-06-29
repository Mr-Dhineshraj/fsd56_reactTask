import React from 'react';
import { QuantityProvider } from './components/QuantityContext';
import Cartpage from './components/Cartpage';

const App = () => {
  return (
    <QuantityProvider>
      <Cartpage />
    </QuantityProvider>
  );
};

export default App;
