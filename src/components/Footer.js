import React from 'react'
import {Footer, FooterTab, Button, Text} from 'native-base'
import { useNavigation } from '@react-navigation/native';

export default function BottomNavigation() {

    const navigation = useNavigation();

    return (
        <>
            <Footer>
                <FooterTab>
                    <Button onPress={() => navigation.navigate('Catalog')}>
                        <Text>Catalog</Text>
                    </Button>
                    <Button onPress={() => navigation.navigate('Profile')}>
                        <Text>User</Text>
                    </Button>
                    <Button onPress={() => navigation.navigate('Settings')}>
                        <Text>Settings</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </>
    )
}