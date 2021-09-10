import React from 'react'
import {Text, Button, Content} from 'native-base';
import {useNavigation} from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomNavigation from '../components/Footer'

const SettingView = () => {
    const navigation = useNavigation()
    const logout = () => {
        AsyncStorage
        .removeItem('token')
        .then(() => {
            navigation.navigate('Login')
        })
    }
    
    return (
        <>
            <Content>
                <Button onPress={() => {logout()}}>
                    <Text>Log Out</Text>
                </Button>
            </Content>

            <BottomNavigation/>
        </>
    )
}

export default SettingView