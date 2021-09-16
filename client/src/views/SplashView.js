import React, {useEffect} from 'react'
import {Content, Spinner} from 'native-base'
import {useNavigation} from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

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
