import React, {useState} from 'react'
import {Alert, Pressabl, ActivityIndicator} from 'react-native';
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
        <Content>
            <Form>
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
                <Pressable 
                    onPress={handleFormSubmit}
                    style={{ 
                        height: 50,
                        borderRadius: 5,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 30,
                    }}
                    ><Text>Sign Up</Text>
                </Pressable>
            </Form>
            <Button
                onPress={() => {navigation.navigate('Login')}}
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 30,
                }}
                ><Text>Already have an account? Sign In Here!</Text>
            </Button>
            {loading && <ActivityIndicator size="large" />}
        </Content>
    )
}

export default SignupView
