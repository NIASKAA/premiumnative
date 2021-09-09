import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigation from '../components/Footer'
import {WelcomeView} from '../views/WelcomeView'
import {ProfileView} from '../views/ProfileView'

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
                name="Home"
                component={WelcomeView}
                options={{ title: 'Welcome' }}
            />
            
            <Stack.Screen
                name="Profile"
                component={ProfileView}
                options={{ title: 'Profile' }}
            />
      </Stack.Navigator>
    )
}