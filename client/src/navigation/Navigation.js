import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SettingsView, ProfileView, CatalogView, SplashView, LoginView, SignupView} from '../views'
import {HighGradeView} from '../views/AllCatalogView'

export default function Navigation() {
    return (
      <NavigationContainer>
        <RootNavigator />
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
              options={{headerShown: false,}}
            />
            <Stack.Screen
              name="Login"
              component={LoginView}
              options={{
                title: 'Login',
                headerShown: false
              }}
            />
            <Stack.Screen 
              name="SignUp"
              component={SignupView}
              options={{
                headerShown: false,
                title: 'Sign-Up'
              }}
            />
            <Stack.Screen
              name="Catalog"
              component={CatalogView}
              options={{
                title: 'Catalog',
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="Profile"
              component={ProfileView}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="Settings"
              component={SettingsView}
              options={{title: 'Settings'}}
            />

            <Stack.Screen
              name="HighGrades"
              component={HighGradeView}
              options={{title: 'High-Grades'}}
            />
      </Stack.Navigator>
    )
}