// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Typeanimation from './src/Screens/Typeanimation';
import Progress from './src/Screens/Progress';
import ScrollTest from './src/Screens/ScrollTest';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ScrollTest" component={ScrollTest} />
        <Stack.Screen
          name="Progress"
          component={Progress}
          //options={{headerShown: false}}
        />
        <Stack.Screen
          name="Typeanimation"
          component={Typeanimation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
