import React from 'react'
import {Footer, FooterTab, Button, Text, Icon} from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation, CommonActions } from '@react-navigation/native';

export default function BottomNavigation() {
    Ionicons.loadFont()
    FontAwesome.loadFont()
    const navigation = useNavigation();

    const resetProfile = () => {
        navigation.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [
                    {name: 'Catalog'},
                    {
                        name: 'Profile'
                    }
                ]
            })
        )
    }
    return (
        <>
            <Footer>
                <FooterTab>
                    <Button onPress={() => navigation.navigate('Catalog')}>
                        <Icon name="list"/>
                        <Text>Catalog</Text>
                    </Button>
                    <Button onPress={resetProfile}>
                        <Icon name="person" />
                        <Text>User</Text>
                    </Button>
                    <Button onPress={() => navigation.navigate('Settings')}>
                        <Icon name="settings"/>
                        <Text>Settings</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </>
    )
}