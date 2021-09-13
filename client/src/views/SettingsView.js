import React from 'react'
import {TouchableOpacity, StyleSheet} from 'react-native'
import {Text, Button, Content, List, ListItem, View, Right} from 'native-base';
import {useNavigation} from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomNavigation from '../components/Footer'
import Icon from 'react-native-vector-icons/MaterialIcons'

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
                            <View style={styles.view}>
                                <Text>FAQ</Text>
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
                        <TouchableOpacity onPress={() => navigation.navigate('Feedback')}>
                            <View style={styles.view}>
                                <Text>Updates</Text>
                                <Icon name="arrow-forward-ios" style={styles.icons}/>
                            </View>
                        </TouchableOpacity>
                    </ListItem>
                    <ListItem>
                        <TouchableOpacity onPress={() => navigation.navigate('Feedback')}>
                            <View style={styles.view}>
                                <Text>Privacy Policy</Text>
                                <Icon name="arrow-forward-ios" style={styles.icons}/>
                            </View>
                        </TouchableOpacity>
                    </ListItem>
                    <ListItem>
                        <TouchableOpacity onPress={() => navigation.navigate('Feedback')}>
                            <View style={styles.view}>
                                <Text>License</Text>
                            </View>
                                <Icon name="arrow-forward-ios" style={styles.icons}/>
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

const styles = StyleSheet.create({
    view: {
        justifyContent: 'space-between'
    },
    icons: {
        left: 350
    }
})

export default SettingView