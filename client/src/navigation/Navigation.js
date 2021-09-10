import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigation from '../components/Footer'
import {SettingView, ProfileView, CatalogView, SplashView, LoginView, SignupView} from '../views'

export default function Navigation() {
    return (
      <NavigationContainer>
        <RootNavigator />
        <BottomNavigation/>
      </NavigationContainer>
    );
  }
  
const Stack = createNativeStackNavigator();

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
              name="Splash"
              component={SplashView}
              options={{headerShown: false}}
            />
            <Stack.Screen 
              name="SignUp"
              component={SignupView}
              options={{title: 'Sign-Up'}}
            />
            <Stack.Screen
              name="Login"
              component={LoginView}
              options={{title: 'Login'}}
            />
            <Stack.Screen
              name="Catalog"
              component={CatalogView}
              options={{title: 'Catalog'}}
            />

            <Stack.Screen
              name="Profile"
              component={ProfileView}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="Settings"
              component={SettingView}
              options={{title: 'Settings'}}
            />
      </Stack.Navigator>
    )
}