import React, {useEffect, useState} from 'react'
import {ActivityIndicator, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useMutation} from '@apollo/client'
import {useNavigation} from '@react-navigation/native'
import {LOGIN} from '../utils/mutations'
import {Button, Text, Input, Form, Item} from 'native-base'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const LoginView = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [login, {data, error, loading}] = useMutation(LOGIN)

    useEffect(() => {
        fetchToken()
    }, [])

    const fetchToken = () => {
        try {
            AsyncStorage
            .getItem('token')
            .then(value => {
                if(value != null) {
                    navigation.navigate('Catalog')
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    if(data) {
        AsyncStorage
        .setItem('token', data.login.token)
        .then(() => {
            navigation.navigate('Catalog')
        })
    }

    const handleFormSubmit = () => {
        login({
            variables: {
                email,
                password
            }
        })
    }

    return (
        <KeyboardAwareScrollView>
            <Form style={styles.form}>
                <Item regular>
                    <Input 
                        placeholder="Email" 
                        value={email}
                        onChangeText={setEmail}
                        autoCorrect={false}
                        style={styles.textInput}
                    />
                </Item>
                <Item regular>
                    <Input 
                        placeholder="Password" 
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        autoCorrect={false}
                        style={styles.textInput}
                    />
                </Item>
                <Button
                    bordered danger
                    disabled={!(email || password)}
                    onPress={handleFormSubmit}
                    style={styles.loginBtn}
                ><Text style={styles.text}>Login</Text>
                </Button>
            </Form>
            <Button 
                bordered
                onPress={() => {navigation.navigate('SignUp')}}
                style={styles.signUpBtn}>
                    <Text style={styles.text}>
                        Don't have an account? Sign up here!
                    </Text>
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
        height: 30,
        margin: '4%',
    },
    loginBtn: {
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        left: '70%',
        marginBottom: 20
    },
    signUpBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        left: 38,
        borderColor: 'red',
    },
    text: {
        color: 'red'
    }
})

export default LoginView
