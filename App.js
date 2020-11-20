import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer} from "@react-navigation/native";
import  {AuthStack} from "./stack/AuthStack";
import  { MainStack } from "./stack/MainStack";
import {AuthContext} from './context/Auth'


import { decode, encode } from "base-64";
import Providers from "./stack";

//Needed this to run firestore  keeping this for now just in caase we might need to use later

// const  AuthContext  = React.createContext();


if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

export default function App() {

// return (
    
//     <NavigationContainer>
//       {/*<AuthStack/>*/}
//       {/*Pran Testing Post*/}
      
     
      
//     </NavigationContainer>
// );


  return (
<Providers/>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
