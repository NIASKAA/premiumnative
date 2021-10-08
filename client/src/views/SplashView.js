import React, {useEffect} from 'react'
import {StyleSheet, View} from 'react-native'
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
      }
    }
    checkUser();
  }, [])


  const isAuthenticated = async () => {
    const token = await AsyncStorage.getItem('token');
    return !!token;
  }

  return (
      <>
        <Content>
          <View style={styles.content}> 
            <Spinner style={styles.loading}/>
          </View>
        </Content>
      </>
  )
}

const styles= StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    borderColor: 'white',
    textAlign: 'center',
  }
})

export default SplashView
