import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import {HomeStackScreen, ProfileStackScreen, MessageStackScreen, PostStackScreen, NotificationStackScreen} from './stack/Stack'

import {decode, encode} from 'base-64'

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }


const Tab = createBottomTabNavigator();

export default function App() {
  return (
   
<NavigationContainer>
  <Tab.Navigator  
  screenOptions={({ route }) => ({
          tabBarIcon: ({  color }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home' ;
            } else if (route.name === 'Message') {
              iconName = 'message';
            } else if (route.name === 'Post') {
              iconName = 'add-circle-outline';
            } else if (route.name === 'Notification') {
              iconName = 'notifications-none';
            } else if (route.name === 'Profile') {
              iconName = 'account-circle';
            }

            // You can return any component that you like here!
            return <MaterialIcons name={iconName} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'gray',
          style: {
            backgroundColor: '#66BEFD'
          }
        }}
        >
    <Tab.Screen name="Home" component={HomeStackScreen}></Tab.Screen>
    <Tab.Screen name="Message" component={MessageStackScreen}></Tab.Screen>
    <Tab.Screen name="Post" component={PostStackScreen}></Tab.Screen>
    <Tab.Screen name="Notification" component={NotificationStackScreen}></Tab.Screen>
    <Tab.Screen name="Profile" component={ProfileStackScreen}></Tab.Screen>
  </Tab.Navigator>
</NavigationContainer>
   

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


