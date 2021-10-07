import React, {useEffect} from 'react'
import {Content, Spinner} from 'native-base'
import {useNavigation} from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import decode from 'jwt-decode'

const SplashView = () => {
    const navigation = useNavigation()

    useEffect(() => {
        const checkUser = async () => {
          if (await isAuthenticated()) {
            navigation.navigate('Catalog');
          } else {
            navigation.navigate('Login');
          }
        }
    
        checkUser();
    }, []);

    const isTokenExpired = (token) => {
      try {
          const decoded = decode(token);
          if(decoded.exp < Date.now() / 1000) {
              return true
          } else return false;
      } catch (error) {
          return false
      }
    }
    
    const setCredentials = async (token) => {
      try {
        await AsyncStorage.setItem('token', JSON.stringify(token))
      } catch (error) {
        console.log(error)
      }
    }
    
    const isAuthenticated = async () => {
      const token = await AsyncStorage.getItem('token');
      return !!token;
    }

    return (
        <>
          <Content>
              <Spinner color="black"/>
          </Content>
        </>
    )
}

export default SplashView
