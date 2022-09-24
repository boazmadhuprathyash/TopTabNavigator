import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from './screens/Home';
import Profile from './screens/Profile';
import Search from './screens/Search';
import Update from './screens/Update';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { SearchBar } from "react-native-screens";
const Tab = createMaterialTopTabNavigator();

export default function App() {


  return (
  
    
    <NavigationContainer>
      
      <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
          tabBarActiveTintColor: 'black',
          tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
          tabBarStyle: { backgroundColor: 'skyblue' }
          
          }} >
            
            <Tab.Screen
              name="Home"
              component={Home}
              options={{ tabBarLabel: 'Home' }}
            />
            <Tab.Screen
              name="Update"
              component={Update}
              options={{ tabBarLabel: 'Update' }}
            />
            <Tab.Screen
              name="Profile"
              component={Profile}
              options={{
                tabBarActiveTintColor:'black',
                tabBarInactiveTintColor:'grey',
                tabBarIcon:({focused})=>
                focused ? <Icon name='home' size={15} color='blue'/> : <Icon name='home' size={15} color='gray'/>
              }}>
            </Tab.Screen>
            
      </Tab.Navigator>
      
      
    </NavigationContainer>
  );
}