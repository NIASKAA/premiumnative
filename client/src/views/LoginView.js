import React, {useState} from 'react'
import {ActivityIndicator, StyleSheet, View, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useMutation} from '@apollo/client'
import {useNavigation} from '@react-navigation/native'
import {LOGIN} from '../utils/mutations'
import {Button, Text} from 'native-base'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const LoginView = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [login, {data, error, loading}] = useMutation(LOGIN)

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
            <View style={styles.form}>
                <TextInput 
                    placeholder="Email" 
                    value={email}
                    onChangeText={setEmail}
                    autoCorrect={false}
                    style={styles.textInput}
                />
                <TextInput 
                    placeholder="Password" 
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    autoCorrect={false}
                    style={styles.textInput}
                />
                <Button
                    bordered danger
                    onPress={handleFormSubmit}
                    style={styles.loginBtn}
                ><Text style={styles.text}>Login</Text>
                </Button>
            </View>
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
        height: 70,
        margin: '4%'
    },
    loginBtn: {
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        left: '55%',
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
