import React, {useState} from 'react'
import {Alert, Pressable} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useMutation} from '@apollo/client'
import {useNavigation} from '@react-navigation/native'
import {LOGIN} from '../utils/mutations'
import {Content, Form, Input, Item, Button, Text} from 'native-base'

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
    if(error) {
        Alert.alert('Incorrect email or password')
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
        <Content>
            <Form>
                <Item>
                    <Input 
                        placeholder="Email" 
                        value={email}
                        onChangeText={setEmail}
                        autoCorrect={false}
                    />
                </Item>
                <Item>
                    <Input 
                        placeholder="Password" 
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        autoCorrect={false}
                    />
                </Item>
                <Pressable 
                    onPress={handleFormSubmit}
                    style={{ 
                        height: 50,
                        borderRadius: 5,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 30,
                      }}
                ><Text>Login</Text></Pressable>
            </Form>
            <Button onPress={() => {navigation.navigate('SignUp')}}><Text>
                Don't have an account? Sign up here!
            </Text></Button>
        </Content>
    )
}

export default LoginView
