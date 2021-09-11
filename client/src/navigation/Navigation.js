import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SettingsView, ProfileView, CatalogView, SplashView, LoginView, SignupView} from '../views'
import {HighGradeView, RealGradeView, RE100OtherView, MasterGradeView, PerfectGradeView, SDGradeView, ConvergeView} from '../views/AllCatalogView'

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

            <Stack.Screen
              name="RealGrades"
              component={RealGradeView}
              options={{title: 'Real-Grades'}}
            />

            <Stack.Screen
              name="RE100Others"
              component={RE100OtherView}
              options={{title: 'RE100/Others'}}
            />

            <Stack.Screen
              name="MasterGrades"
              component={MasterGradeView}
              options={{title: 'Master-Grades'}}
            />

            <Stack.Screen
              name="PerfectGrades"
              component={PerfectGradeView}
              options={{title: 'Perfect-Grades'}}
            />
      </Stack.Navigator>
    )
}