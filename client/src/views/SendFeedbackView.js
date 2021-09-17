import React from 'react'
import {View, StyleSheet} from 'react-native'
import {Content, Text, Button} from 'native-base'
import email from 'react-native-email'

const SendFeedbackView = () => {

    const handleEmail = () => {
        const to = ['mkman751@yahoo.com']
        email(to, {
  
            cc: [''],
            bcc: '',
            subject: '',
            body: ''
        }).catch(console.error)
    }

    return (
        <Content style={styles.content}>
            <View>
                <Text>If you encountered any bugs, please report it here!</Text>
                <Text>Feedbacks are also welcome here!</Text>
                <Button onPress={handleEmail} style={styles.mail}><Text>To Mail</Text></Button>
            </View>
        </Content>
    )
}

const styles = StyleSheet.create({
    content: {
        margin: 20
    },
    mail: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop: 30
    }
})

export default SendFeedbackView
