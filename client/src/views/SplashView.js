import React, {useEffect} from 'react'
import {StyleSheet, Image, View} from 'react-native'
import {Content} from 'native-base'
import {useNavigation} from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import decode from 'jwt-decode'

const SplashView = () => {
    const navigation = useNavigation()

    async function getVerifiedKeys (keys) {
      console.log('Loading keys from storage')
    
      if (keys) {
        console.log('checking access')
    
        if (!isTokenExpired(keys.access)) {
          console.log('returning access')
    
          return keys
        } else {
          console.log('access expired')
    
          console.log('checking refresh expiry')
    
          if (!isTokenExpired(keys.refresh)) {
            console.log('fetching access using refresh')
    
            const response = await getAccessUsingRefresh(keys.refresh)
    
            await AsyncStorage.setItem('keys', JSON.stringify(response))
    
            console.log('UPDATED ONE')
    
            return response
          } else {
            console.log('refresh expired, please login')
            navigation.navigate('Login')
          }
        }
      } else {
        console.log('access not available please login')
        navigation.navigate('Login')
      }
    }
    
    function isTokenExpired (token) {
      var decoded = decode(token)
    
      if (decoded.exp < Date.now() / 1000) {
        return true
      } else {
        return false
      }
    }
    
    const setCredentials = async keys => {
      try {
        await AsyncStorage.setItem('token', JSON.stringify(keys))
      } catch (e) {
        console.log(e)
      }
    }
    
    const getCredentials = async () => {
      try {
        let credentials = await AsyncStorage.getItem('token')
    
        let cred = await getVerifiedKeys(JSON.parse(credentials))
    
        if (credentials != null && cred != null) {
          return cred
        } else {
          return null
        }
      } catch (e) {
        console.log(e)
      }
    
      return null
    }
    
    setCredentials();
    getCredentials();

    return (
        <>
          <Content>
            <View style={styles.content}> 
              <Image source={require('../assets/img/gunpla.png')} style={styles.images}/>
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
  images: {
    borderColor: 'white',
    textAlign: 'center',
  }
})

export default SplashView
