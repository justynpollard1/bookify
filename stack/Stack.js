
import React from 'react'
import Home from '../components/Home'
import Post from '../components/Post'
import Message from '../components/Message'
import Notification from '../components/Notification'
import Profile from '../components/Profile'

import { createStackNavigator } from '@react-navigation/stack';
import PostV2 from '../components/PostV2'

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
        backgroundColor: '#66BEFD'
      },
      headerTitleStyle: {
        color: '#FFFFFF'
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
        headerStyle: {
        backgroundColor: '#66BEFD'
      },
      headerTitleStyle: {
        color: '#FFFFFF'
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
        headerStyle: {
        backgroundColor: '#66BEFD'
      },
      headerTitleStyle: {
        color: '#FFFFFF'
      }
    }}
      
      />
      <PostStack.Screen name ="PostV2" component={PostV2}/>
    </PostStack.Navigator>
  );
}



const NotificationStack = createStackNavigator();

export function NotificationStackScreen() {
  return (
    <NotificationStack.Navigator>
      <NotificationStack.Screen name="Notification" component={Notification} 
      options={{
        headerStyle: {
        backgroundColor: '#66BEFD'
      },
      headerTitleStyle: {
        color: '#FFFFFF'
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
        headerStyle: {
        backgroundColor: '#66BEFD'
      },
      headerTitleStyle: {
        color: '#FFFFFF'
      }
    }}
      />
    </ProfileStack.Navigator>
  );
}