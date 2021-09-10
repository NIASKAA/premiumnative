import React, {useState} from 'react'
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import {useMutation} from '@apollo/client'
import {useNavigation} from '@react-navigation/native'
import {ADD_USER} from '../utils/mutations'
import {Content, Form, Input, Item, Button} from 'native-base'

const SignupView = () => {
    const navigation = useNavigation()
    const [userForm, setUserForm] = useState({
        username: '',
        email: '',
        password: ''
    }) 
    const [addUser, {data, error}] = useMutation(ADD_USER)

    if(data) {
        AsyncStorage
        .setItem('token', data.addUser.token)
        .then(() => {
            navigation.navigate('Catalog')
        })
    }

    if(error) {
        Alert.alert('Error. Please try again.')
    }

    const handleFormSubmit = () => {
        addUser({
            variables: {
                username: userForm.username,
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
                            placeholder="Username"
                            value={userForm.username} 
                            onChangeText={(text) => {setUserForm({username: text})}}
                        />
                    </Item>
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
                    onPress={() => {navigation.navigate('Login')}}
                >
                    Already have an account? Sign In Here!
                </Button>
            </Content>
        </>
    )
}

export default SignupView
