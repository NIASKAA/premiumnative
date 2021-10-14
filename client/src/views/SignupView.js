import React, {useState} from 'react'
import {Alert, ActivityIndicator, StyleSheet, View, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useMutation} from '@apollo/client'
import {useNavigation} from '@react-navigation/native'
import {ADD_USER} from '../utils/mutations'
import {Content, Form, Item, Button, Text, Input} from 'native-base'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

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
        <KeyboardAwareScrollView>
            <View style={styles.form}>
                <TextInput 
                    placeholder="Username"
                    value={username} 
                    onChangeText={setUsername}
                    style={styles.textInput}
                />

                <TextInput
                    placeholder="Email" 
                    value={email}
                    onChangeText={setEmail}
                    style={styles.textInput}
                />

                <TextInput
                    placeholder="Password" 
                    value={password}
                    onChangeText={setPassword}
                    style={styles.textInput}
                />
        
                <Button
                    bordered danger
                    onPress={handleFormSubmit}
                    style={styles.signupBtn}
                    ><Text style={styles.text}>Sign Up</Text>
                </Button>
            </View>
            <Button
                bordered danger
                onPress={() => {navigation.navigate('Login')}}
                style={styles.login}
                ><Text style={styles.text}>Already have an account? Sign In Here!</Text>
            </Button>
            {loading && <ActivityIndicator size="large" />}
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1
    },
    form: {
        marginTop: '40%'
    },
    textInput: {
        height: 70,
        margin: '4%'
    },
    signupBtn: {
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        left: '40%',
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
