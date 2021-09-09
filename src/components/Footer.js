import React from 'react'
import {Footer, FooterTab, Button, Text} from 'native-base'
import { useNavigation } from '@react-navigation/native';

export default function BottomNavigation() {

    const navigation = useNavigation();

    return (
        <>
            <Footer>
                <FooterTab>
                    <Button>
                        <Text>Catalog</Text>
                    </Button>
                    <Button onPress={() => navigation.navigate('Profile')}>
                        <Text>User</Text>
                    </Button>
                    <Button>
                        <Text>Settings</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </>
    )
}