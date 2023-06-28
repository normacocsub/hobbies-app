import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StyleSheet } from 'react-native';

import RegisterScreen from './pages/registrar_actividad';
import HomeScreen from './pages/home';
import { NativeBaseProvider, Box } from "native-base";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>

  );
}


