import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import {
  HomeStackScreen,
  ProfileStackScreen,
  MessageStackScreen,
  PostStackScreen,
  NotificationStackScreen,
} from "./Stack";
import { PRIMARY_COLOR, LIGHT_GREY } from "../constants/colors";

const Tab = createBottomTabNavigator();


export const MainStack  =  () =>  {
      return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: PRIMARY_COLOR,
          inactiveTintColor: LIGHT_GREY,
          showLabel: false,
          style: {
            borderTopColor: PRIMARY_COLOR,
            borderWidth: 0.5,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarIcon: ({ color }) => {
              return (
                <MaterialCommunityIcons
                  name="home-outline"
                  size={24}
                  color={color}
                />
              );
            },
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Message"
          component={MessageStackScreen}
          options={{
            tabBarIcon: ({ color }) => {
              return (
                <MaterialCommunityIcons
                  name="message-text-outline"
                  size={24}
                  color={color}
                />
              );
            },
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Post"
          component={PostStackScreen}
          options={{
            tabBarIcon: ({ color }) => {
              return (
                <Ionicons
                  name="md-add-circle-outline"
                  size={24}
                  color={color}
                />
              );
            },
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Notification"
          component={NotificationStackScreen}
          options={{
            tabBarIcon: ({ color }) => {
              return (
                <MaterialIcons
                  name="notifications-none"
                  size={24}
                  color={color}
                />
              );
            },
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Profile"
          component={ProfileStackScreen}
          options={{
            tabBarIcon: ({ color }) => {
              return (
                <MaterialCommunityIcons
                  name="account-circle-outline"
                  size={24}
                  color={color}
                />
              );
            },
          }}
        ></Tab.Screen>
      </Tab.Navigator>
  );
}

// screenOptions={({ route }) => ({
//   tabBarIcon: ({  color }) => {
//     let iconName;

//     if (route.name === 'Home') {
//       iconName = 'home' ;
//     } else if (route.name === 'Message') {
//       iconName = 'message';
//     } else if (route.name === 'Post') {
//       iconName = 'add-circle-outline';
//     } else if (route.name === 'Notification') {
//       iconName = 'notifications-none';
//     } else if (route.name === 'Profile') {
//       iconName = 'account-circle';
//     }

//     // You can return any component that you like here!
//     return <MaterialIcons name={iconName} color={color}  size={24} />;
//   },
// })}
