import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from 'react-redux'
import { store } from './src/redux/store'

import AuthPage from './src/AuthPage';
import ProfileInfo from './src/ProfileInfo';
import Dashboard from './src/Dashboard';
import OtpView from './src/OtpView';

function App() {

  const Stack = createNativeStackNavigator()

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}>

          <Stack.Screen
            name='AuthPage'
            component={AuthPage} />

          <Stack.Screen
            name='OtpView'
            component={OtpView} />

          <Stack.Screen
            name='Dashboard'
            component={Dashboard}
          />

          <Stack.Screen
            name='ProfileInfo'
            component={ProfileInfo}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


export default App;
