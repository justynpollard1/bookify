
import React from 'react'
import Home from '../components/Home'
import Post from '../components/Post'
import Message from '../components/Message'
import Notification from '../components/Notification'
import Profile from '../components/Profile'
import {PRIMARY_COLOR } from '../constants/colors'

import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();

export function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
      name="Home" 
      component={Home}
      options={{
        title: 'Bookify',
        headerStyle: {
          borderBottomColor: PRIMARY_COLOR,
          borderWidth: 0.5
          
      },
      headerTitleStyle: {
        color: PRIMARY_COLOR
      }
    }}

       />
    </HomeStack.Navigator>
  );
}

const MessageStack = createStackNavigator();

export function MessageStackScreen() {
  return (
    <MessageStack.Navigator>
      <MessageStack.Screen name="Message" component={Message} 
       options={{
        title: 'Message',
        headerStyle: {
          borderBottomColor: PRIMARY_COLOR,
          borderWidth: 0.5
          
      },
      headerTitleStyle: {
        color: PRIMARY_COLOR
      }
    }}
      />
    </MessageStack.Navigator>
  );
}


const PostStack = createStackNavigator();

export function PostStackScreen() {
  return (
    <PostStack.Navigator>
      <PostStack.Screen name="Post" component={Post} 
       options={{
        title: 'Create a Post',
        headerStyle: {
          borderBottomColor: PRIMARY_COLOR,
          borderWidth: 0.5
          
      },
      headerTitleStyle: {
        color: PRIMARY_COLOR
      }
    }}
      
      />
    </PostStack.Navigator>
  );
}



const NotificationStack = createStackNavigator();

export function NotificationStackScreen() {
  return (
    <NotificationStack.Navigator>
      <NotificationStack.Screen name="Notification" component={Notification} 
       options={{
        title: 'Notification',
        headerStyle: {
          borderBottomColor: PRIMARY_COLOR,
          borderWidth: 0.5
          
      },
      headerTitleStyle: {
        color: PRIMARY_COLOR
      }
    }}
      
      />
    </NotificationStack.Navigator>
  );
}


const ProfileStack = createStackNavigator();

 export function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} 
      options={{
        title: 'Profile',
        headerStyle: {
          borderBottomColor: PRIMARY_COLOR,
          borderWidth: 0.5
          
      },
      headerTitleStyle: {
        color: PRIMARY_COLOR
      }
    }}
      />
    </ProfileStack.Navigator>
  );
}