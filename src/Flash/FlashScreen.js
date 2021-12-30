import { useNavigation } from '@react-navigation/native';
import React, { useRef, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';
import { ImageBackground } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import OnBoardScreen from '../Components/Screen/OnBoardScreen/OnBoardScreen';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createMaterialBottomTabNavigator();

const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
    const navigation = useNavigation();

    React.useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 5000,
            }
        ).start();
    }, [fadeAnim])
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("OnBoardScreen")

        }, 5000);
    }, [])

    return (
        <Animated.View                 // Special animatable View
            style={{
                ...props.style,
                opacity: fadeAnim,         // Bind opacity to animated value
            }}
        >
            {props.children}
        </Animated.View>
    );
}

// You can then use your `FadeInView` in place of a `View` in your components:
export default () => {
    return (
        <View>

            <FadeInView style={{ width: "100%", height: "100%", backgroundColor: 'powderblue' }}>

                <ImageBackground style={{ width: "100%", height: "85%", resizwMode: "stretch" }} source={require('../Images/image3.jpg')}


                />
                <Tab.Navigator  >
                    <Tab.Screen name="Next" component={OnBoardScreen}

                    />
                    {/* <Tab.Screen name="BloodCollection" component={BloodGroup}
                    options={{
                        tabBarIcon: () => <MaterialIcons name='storage' size={24} color="black" />,


                    }}
                />
                <Tab.Screen name="addBlood" component={AddBlood}
                    options={{
                        tabBarIcon: () => <AntDesign name='pluscircleo' size={24} color="black" />,


                    }}
                />
                <Tab.Screen name="Doners" component={Doners}
                    options={{
                        tabBarIcon: () => <AntDesign name='user' size={24} color="black" />,


                    }}
                />
                <Tab.Screen name="AddDoners" component={AddDoners}
                    options={{
                        tabBarIcon: () => <AntDesign name='pluscircleo' size={24} color="black" />,


                    }}
                />
                <Tab.Screen name="DonationRequest" component={DonationRequestScreen}
                    options={{
                        tabBarIcon: () => <AntDesign name='rightcircleo' size={24} color="black" />,


                    }}
                /> */}

                </Tab.Navigator>

            </FadeInView>

        </View>




    )
}