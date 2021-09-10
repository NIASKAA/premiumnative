import React, {useState} from 'react'
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import {useMutation} from '@apollo/client'
import {useNavigation} from '@react-navigation/native'
import {LOGIN} from '../utils/mutations'
import {Content, Form, Input, Item, Button} from 'native-base'

const LoginView = () => {
    const navigation = useNavigation()
    const [userForm, setUserForm] = useState({email: '', password: ''})
    const [login, {data, error}] = useMutation(LOGIN)

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
                email: userForm.email,
                password: userForm.password
            }
        })
    }

    return (
        <>
            <Content>
                <Form onSubmit={handleFormSubmit}>
                    <Item>
                        <Input 
                            placeholder="Email" 
                            value={userForm.email}
                            onChangeText={(text) => {setUserForm({email: text})}}
                        />
                    </Item>
                    <Item last>
                        <Input 
                            placeholder="Password" 
                            value={userForm.password}
                            onChangeText={(text) => {setUserForm({password: text})}}
                        />
                    </Item>
                    <Button>Sign Up</Button>
                </Form>
                <Button 
                    onPress={() => {navigation.navigate('SignUp')}}
                >
                    Don't have an account? Sign up here!
                </Button>
            </Content>
        </>
    )
}

export default LoginView
