
import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthPage from './src/AuthPage';
import ProfileInfo from './src/ProfileInfo';

function App() {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}>

        <Stack.Screen
          name='AuthPage'
          component={AuthPage} />

        <Stack.Screen
          name='ProfileInfo'
          component={ProfileInfo}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
