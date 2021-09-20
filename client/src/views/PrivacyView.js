import React from 'react'
import {View, Linking, StyleSheet} from 'react-native'
import {Content, Text, H3, Button} from 'native-base'

const PrivacyView = () => {
    const url = "https://premiumbandaitracker.herokuapp.com"

    const openUrl = () => {
        Linking.openURL(url)
    }
    return (
        <>
            <Content style={styles.content}>
                <H3 style={styles.title}>Privacy Policy</H3>
                <View>
                    <Text style={styles.text}>
                        At Premium-Bandai Gunpla Finder, we will only collect your email, username, and password. Passwords are encrypted and 
                        will not be ever asked for. Under no circumstances will we ask for any other information. 
                    </Text>
                </View>

                <H3 style={styles.title}>Website</H3>
                <View>
                    <Text style={styles.text}>
                        Premium-Bandai Gunpla Finder also exists in an web application format. Feel free to use that to save your Gunplas!
                    </Text>
                    <Button onPress={() => openUrl} style={styles.button}><Text>Go to Website!</Text></Button>
                </View>
            </Content>
        </>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        marginTop: '5%',
        marginLeft: 10,
    },
    text: {
        marginTop: '2%',
        marginLeft: 10,
        marginRight: 1
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop: 10
    }
})

export default PrivacyView

