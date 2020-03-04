import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Loading from './src/sections/components/Loading';
import {store, persistor} from './store';
import AppLayout from './src/App';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <AppLayout />
      </PersistGate>
    </Provider>
  );
};

export default App;
