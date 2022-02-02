import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SettingsView, 
  ProfileView, 
  CatalogView, 
  SplashView, 
  LoginView, 
  SignupView, 
  FAQView, 
  SendFeedbackView, 
  PrivacyView, 
  UpdateView
} from '../views'
import {
  HighGradeView, 
  RealGradeView, 
  RE100OtherView, 
  MasterGradeView, 
  PerfectGradeView, 
  SDGradeView, 
  ConvergeView,
  EnsembleView,
  GFrameView,
} from '../views/AllCatalogView'
import {
  ConvergeInfoView, 
  HighGradeInfoView, 
  MasterGradeInfoView, 
  RE100OtherInfoView, 
  RealGradeInfoView, 
  PerfectGradeInfoView, 
  SDGradeInfoView,
  EnsembleInfoView,
  GFrameInfoView
} from '../views/InfoViews'

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
            />

            <Stack.Screen
              name="RealGrades"
              component={RealGradeView}
            />

            <Stack.Screen
              name="RE100Others"
              component={RE100OtherView}
            />

            <Stack.Screen
              name="MasterGrades"
              component={MasterGradeView}
            />

            <Stack.Screen
              name="PerfectGrades"
              component={PerfectGradeView}  
            />

            <Stack.Screen
              name="SDGrades"
              component={SDGradeView}    
            />

            <Stack.Screen
              name="Converges"
              component={ConvergeView}          
            />

            <Stack.Screen
              name="Ensembles"
              component={EnsembleView} 
            />

            <Stack.Screen 
              name="GFrame"
              component={GFrameView}
            />
            
            <Stack.Screen
              name="ConvergeInfoView"
              component={ConvergeInfoView}
              options={{title: 'More-Info'}}
            />

            <Stack.Screen
              name="HighGradeInfoView"
              component={HighGradeInfoView}
              options={{title: 'More-Info'}}
            />

            <Stack.Screen
              name="RealGradeInfoView"
              component={RealGradeInfoView}
              options={{title: 'More-Info'}}
            />

            <Stack.Screen
              name="RE100OtherInfoView"
              component={RE100OtherInfoView}
              options={{title: 'More-Info'}}
            />

            <Stack.Screen
              name="MasterGradeInfoView"
              component={MasterGradeInfoView}
              options={{title: 'More-Info'}}
            />

            <Stack.Screen
              name="PerfectGradeInfoView"
              component={PerfectGradeInfoView}
              options={{title: 'More-Info'}}
            />

            <Stack.Screen
              name="SDGradeInfoView"
              component={SDGradeInfoView}
              options={{title: 'More-Info'}}
            />

            <Stack.Screen
              name="EnsembleInfoVIew"
              component={EnsembleInfoView}
              options={{title: 'More-Info'}}
            />

            <Stack.Screen
              name="GFrameInfoView"
              component={GFrameInfoView}
              options={{title: 'More-Info'}}
            />

            <Stack.Screen
              name="FAQ"
              component={FAQView}
              options={{title: 'FAQs'}}
            />

            <Stack.Screen
              name="Feedback"
              component={SendFeedbackView}
              options={{title: 'Feedbacks'}}
            />

            <Stack.Screen
              name="Privacy"
              component={PrivacyView}
              options={{title: 'About'}}
            />

            <Stack.Screen
              name="Updates"
              component={UpdateView}
            />
      </Stack.Navigator>
    )
}