import React from 'react'
import {TouchableOpacity} from 'react-native'
import {Text, Button, Content, List, ListItem} from 'native-base';
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
                <List>
                    <ListItem>
                        <TouchableOpacity onPress={() => navigation.navigate('FAQ')}>
                            <Text>FAQ</Text>
                        </TouchableOpacity>
                    </ListItem>
                    <ListItem>
                        <TouchableOpacity onPress={() => navigation.navigate('Feedback')}>
                            <Text>Send Feedback</Text>
                        </TouchableOpacity>
                    </ListItem>
                    <ListItem>
                        <TouchableOpacity onPress={() => navigation.navigate('Feedback')}>
                            <Text>Updates</Text>
                        </TouchableOpacity>
                    </ListItem>
                    <ListItem>
                        <TouchableOpacity onPress={() => navigation.navigate('Feedback')}>
                            <Text>Privacy Policy</Text>
                        </TouchableOpacity>
                    </ListItem>
                    <ListItem>
                        <TouchableOpacity onPress={() => navigation.navigate('Feedback')}>
                            <Text>License</Text>
                        </TouchableOpacity>
                    </ListItem>
                </List>
                <Button onPress={() => {logout()}}>
                    <Text>Log Out</Text>
                </Button>
            </Content>

            <BottomNavigation/>
        </>
    )
}

export default SettingView