import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../components/LoginScreen';
import Dashboard from '../components/Dashboard';
import { colors } from '../constants/colorPallete';

function Routes() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          statusBarColor: colors.appBackgroundColor,
          statusBarStyle: 'light',
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
