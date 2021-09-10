import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigation from '../components/Footer'
import {WelcomeView} from '../views/WelcomeView'
import {ProfileView} from '../views/ProfileView'
import {CatalogView} from '../views/CatalogView'
import {SettingView} from '../views/SettingsView'

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
                name="Catalog"
                component={CatalogView}
                options={{ title: 'Catalog' }}
            />

            <Stack.Screen
                name="Profile"
                component={ProfileView}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="Settings"
                component={SettingView}
                options={{ title: 'Settings' }}
            />

            <Stack.Screen
                name="Home"
                component={WelcomeView}
                options={{ title: 'Welcome' }}
            />
      </Stack.Navigator>
    )
}