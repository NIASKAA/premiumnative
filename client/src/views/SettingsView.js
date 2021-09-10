import React from 'react'
import {Text, Button} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native'

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
            <Button onPress={() => {logout()}}>
                <Text>Log Out</Text>
            </Button>
        </>
    )
}

export default SettingView