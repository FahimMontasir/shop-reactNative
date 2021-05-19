import 'react-native-gesture-handler';
import React, { createContext, useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator, StackNavigator } from './Routes/navigation';

export const UserContext = createContext();

export default function App() {
  const [userData, setUserData] = useState(false);
  return (
    <UserContext.Provider value={setUserData}>
      <NavigationContainer>
        <PaperProvider>
          <StatusBar barStyle="dark-content" backgroundColor="white" />
          {userData ? <BottomTabNavigator /> : <StackNavigator />}
        </PaperProvider>
      </NavigationContainer>
    </UserContext.Provider>
  );
}
