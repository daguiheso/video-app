import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Loading from './src/sections/components/Loading';
import {store, persistor} from './store';
import AppLayout from './src/App';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Text} from 'react-native';

const StackParent = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <NavigationContainer>
          <StackParent.Navigato>
            <StackParent.Screen name="Home" component={<Text>Pepe</Text>} />
          </StackParent.Navigato>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
