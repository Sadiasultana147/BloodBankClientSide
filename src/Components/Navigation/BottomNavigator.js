import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Components/Screen/HomeScreen/HomeScreen';
import BloodGroup from '../../Components/Screen/BloodGroup/BloodGroup';

import DonationRequestScreen from '../../Components/Screen/DonationRequestScree/DonationRequestScreen';
import { Icon } from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AddBlood from '../Screen/AddBlood/AddBlood'
import Doners from '../Screen/Doners/Doners';
import AddDoners from '../Screen/AddDoners/AddDoners';
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const Tab = createMaterialBottomTabNavigator();

const BottomNavigator = () => {
    return (


        <Tab.Navigator >

            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: () => <Feather name='home' size={24} color="black" />,



                }}
            />
            <Tab.Screen name="BloodCollection" component={BloodGroup}
                options={{
                    tabBarIcon: () => <Fontisto name='blood-drop' size={24} color="black" />,


                }}
            />

            <Tab.Screen name="addBlood" component={AddBlood}
                options={{
                    tabBarIcon: () => <AntDesign name='pluscircleo' size={24} color="black" />,


                }}
            />
            <Tab.Screen name="Doners" component={Doners}
                options={{
                    tabBarIcon: () => <FontAwesome name='group' size={24} color="black" />,


                }}
            />
            <Tab.Screen name="AddDoners" component={AddDoners}
                options={{
                    tabBarIcon: () => <AntDesign name='adduser' size={24} color="black" />,


                }}
            />
            <Tab.Screen name="DonationRequest" component={DonationRequestScreen}
                options={{
                    tabBarIcon: () => <AntDesign name='rightcircleo' size={24} color="black" />,


                }}
            />



        </Tab.Navigator>

    );
};


export default BottomNavigator;