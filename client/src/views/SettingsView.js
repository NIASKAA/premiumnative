import React from 'react'
import {StyleSheet, TouchableOpacity} from 'react-native'
import {Text, Button, Content, List, ListItem, View} from 'native-base';
import {useNavigation} from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomNavigation from '../components/Footer'
import Icon from 'react-native-vector-icons/MaterialIcons'

const SettingView = () => {
    const navigation = useNavigation()
    const logout = async () => {
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
                        <TouchableOpacity onPressOut={() => navigation.navigate('FAQ')}>
                            <View style={styles.view}>
                                <Text style={styles.view}>FAQ</Text>
                                <Icon name="arrow-forward-ios" style={styles.icons}/>
                            </View>
                        </TouchableOpacity>
                    </ListItem>
                    <ListItem>
                        <TouchableOpacity onPress={() => navigation.navigate('Feedback')}>
                            <View style={styles.view}>
                                <Text>Send Feedback</Text>
                                <Icon name="arrow-forward-ios" style={styles.icons}/>
                            </View>
                        </TouchableOpacity>
                    </ListItem>
                    <ListItem>
                        <TouchableOpacity onPress={() => navigation.navigate('Updates')}>
                            <View style={styles.view}>
                                <Text>Updates</Text>
                                <Icon name="arrow-forward-ios" style={styles.icons}/>
                            </View>
                        </TouchableOpacity>
                    </ListItem>
                    <ListItem>
                        <TouchableOpacity onPress={() => navigation.navigate('Privacy')}>
                            <View style={styles.view}>
                                <Text>About</Text>
                                <Icon name="arrow-forward-ios" style={styles.icons}/>
                            </View>
                        </TouchableOpacity>
                    </ListItem>
                </List>
                <Button onPress={() => {logout()}} style={styles.logout}>
                    <Text>Log Out</Text>
                </Button>
            </Content>

            <BottomNavigation/>
        </>
    )
}

const styles = StyleSheet.create({
    view: {
        justifyContent: 'center',
        top: 2
    },
    icons: {
        left: 350,
        bottom: 15,
        justifyContent: 'center'
    },
    logout: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop: 30
    }
})

export default SettingView