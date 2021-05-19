import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import LoginScreen from "../screens/LoginScreen"
import CreateAccountScreen from "../screens/CreateAccountScreen"
import UploadScreen from "../screens/UploadScreen"
import HomeScreen from "../screens/HomeScreen"
import AccountScreen from "../screens/AccountScreen"

const stack = createStackNavigator()
const StackNavigator = () => (
  <stack.Navigator>
    <stack.Screen name="login"
      component={LoginScreen}
      options={{ headerShown: false }} />
    <stack.Screen name="register"
      component={CreateAccountScreen}
      options={{ gestureEnabled: true, headerTitleAlign: "center" }} />
  </stack.Navigator>
)

const tab = createBottomTabNavigator();
const BottomTabNavigator = () => (
  <tab.Navigator
    tabBarOptions={{
      activeTintColor: "tomato",
      activeBackgroundColor: "#F3F4F6",
      labelStyle: { fontSize: 16, padding: 0 }
    }}>
    <tab.Screen name="feed" component={HomeScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home-analytics" size={size} color={color} />
        )
      }}
    />
    <tab.Screen name="upload" component={UploadScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="upload" size={size} color={color} />
        )
      }}
    />
    <tab.Screen name="account" component={AccountScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        )
      }}
    />
  </tab.Navigator>
)
export { StackNavigator, BottomTabNavigator }