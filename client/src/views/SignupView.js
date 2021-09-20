import React, {useState} from 'react'
import {Alert, ActivityIndicator, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useMutation} from '@apollo/client'
import {useNavigation} from '@react-navigation/native'
import {ADD_USER} from '../utils/mutations'
import {Content, Form, Item, Button, Text, Input} from 'native-base'

const SignupView = () => {
    const navigation = useNavigation()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [addUser, {data, error, loading}] = useMutation(ADD_USER)

    if(data) {
        AsyncStorage
        .setItem('token', data.addUser.token)
        .then(() => {
            navigation.navigate('Catalog')
        })
    }

    if(error) {
        Alert.alert('Error. Please try again.')
        console.log(error)
    }

    const handleFormSubmit = () => {
        addUser({
            variables: {
                username: username,
                email: email,
                password: password
            }
        })
    }

    return (
        <Content style={styles.content}>
            <Form style={styles.form}>
                <Item>
                    <Input 
                        placeholder="Username"
                        value={username} 
                        onChangeText={setUsername}
                    />
                </Item>
                <Item>
                    <Input
                        placeholder="Email" 
                        value={email}
                        onChangeText={setEmail}
                    />
                </Item>
                <Item last>
                    <Input
                        placeholder="Password" 
                        value={password}
                        onChangeText={setPassword}
                    />
                </Item>
                <Button
                    bordered danger
                    onPress={handleFormSubmit}
                    style={styles.signupBtn}
                    ><Text style={styles.text}>Sign Up</Text>
                </Button>
            </Form>
            <Button
                bordered danger
                onPress={() => {navigation.navigate('Login')}}
                style={styles.login}
                ><Text style={styles.text}>Already have an account? Sign In Here!</Text>
            </Button>
            {loading && <ActivityIndicator size="large" />}
        </Content>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1
    },
    form: {
        marginTop: '40%'
    },
    signupBtn: {
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        left: '62%',
        marginBottom: 10
    },
    login: {
        alignItems: 'center',
        justifyContent: 'center',
        left: 34,
    },
    text: {
        color: 'red'
    }
})

export default SignupView
