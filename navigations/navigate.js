import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import Profile from "../screens/Profile";
import Aboutus from "../screens/Aboutus";
import Home from "../screens/Home";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator    initialRouteName="Home" 
    activeColor="#f0edf6" 
    inactiveColor="#3e2465" 
    labeled={true}
    barStyle={{ backgroundColor: '#694fad', width:'90%', borderRadius:10, alignSelf:'center', overflow:'hidden', marginVertical:20 }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
  
            if (route.name === 'Home') {
              return <Ionicons name={"home"} size={20} color={color} />;
            } else if (route.name === 'Aboutus') {
              return <Ionicons name="game-controller" size={24} color={color}  />
            } else if (route.name === 'Profile') {
              return <Feather name="user" size={24} color={color}  />
            } 
  
            
          }
        })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Aboutus" component={Aboutus} />
      <Tab.Screen name="Profile" component={Profile} />

    </Tab.Navigator>
  );
}
export default MyTabs;
