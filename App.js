import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import MyContextProvider from './src/context/MyContext';
import AddScreen from './src/screens/AddScreen';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <MyContextProvider>
        <Stack.Navigator>
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: "Нэвтрэх", headerShown: false }} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: "НЭГДСЭН СУДАЛГАА", headerShown: false }} />
          <Stack.Screen name="AddScreen" component={AddScreen} options={{ title: "СУДАЛГАА БӨГЛӨХ" }} />
        </Stack.Navigator>
      </MyContextProvider>
    </NavigationContainer>
  );
}
