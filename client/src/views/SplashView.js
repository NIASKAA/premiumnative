import React, {useEffect} from 'react'
import {StyleSheet, View} from 'react-native'
import {Content, Spinner} from 'native-base'
import {useNavigation} from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import decode from 'jwt-decode'

const SplashView = () => {
    const navigation = useNavigation()

    async function getVerifiedKeys (token) {
      console.log('Loading keys from storage')
    
      if (token) {
        console.log('checking access')
    
        if (!isTokenExpired(token.access)) {
          console.log('returning access')
          navigation.navigate('Catalog')
          return token
        } else {
          console.log('access expired')
    
          console.log('checking refresh expiry')
    
          if (!isTokenExpired(token.refresh)) {
            console.log('fetching access using refresh')
    
            const response = await getAccessUsingRefresh(token.refresh)
    
            await AsyncStorage.setItem('token', JSON.stringify(response))
    
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
    
    const setCredentials = async token => {
      try {
        await AsyncStorage.setItem('token', JSON.stringify(token))
      } catch (error) {
        console.log(error)
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
      } catch (error) {
        console.log(error)
      }
    
      return null
    }

    setCredentials();
    getCredentials();

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
