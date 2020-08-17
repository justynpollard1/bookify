import React from 'react'
import { View, Text } from 'react-native'
import Login from '../components/Login/Login'
import  Signup  from  '../components/Signup/Signup'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export  const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen 
            name = 'Login'
            component={Login}
             />
               <Stack.Screen 
            name = 'SignUp'
            component={Signup}
             />
        </Stack.Navigator>
    )
}


