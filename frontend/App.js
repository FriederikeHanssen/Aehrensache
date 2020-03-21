import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './views/Welcome';
import Map from './views/Map';
import WelcomeLandwirt from './views/WelcomeLandwirt';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen
        name="Landwirt"
        component={WelcomeLandwirt}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen
        name="Map"
        component={Map}
        options={{ title: 'Welcome' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
