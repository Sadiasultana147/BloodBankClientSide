import React from 'react';
import OnBoardScreen from '../Screen/OnBoardScreen/OnBoardScreen';
import LogInScreen from '../Screen/LogInScreen/LogInScreen';
import RegisterScreen from '../Screen/RegisterScreen/RegisterScreen';
import BottomNavigator from '../Navigation/BottomNavigator';
import DrawerNavigator from '../Navigation/DrawerNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import FlashScreen from '../../Flash/FlashScreen';
import BloodGroup from '../Screen/BloodGroup/BloodGroup';
import AllRequest from '../Screen/AllRequest/AllRequest'
const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <View style={{ width: "100%", height: "100%" }}>
            <Stack.Navigator  >
                <Stack.Screen name="Welcome" component={FlashScreen}
                    options={{ headerMode: false }}
                />
                <Stack.Screen name="OnBoardScreen" component={OnBoardScreen}
                    options={{ headerMode: false }}
                />
                <Stack.Screen name="BloodGroup" component={BloodGroup}
                    options={{ headerMode: false }}
                />
                <Stack.Screen name="AllRequest" component={AllRequest}
                    options={{ headerMode: false }}
                />
                <Stack.Screen name="LogInScreen" component={LogInScreen}
                    options={{ headerMode: false }}
                />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerMode: false }} />
                <Stack.Screen name="BottomNavigator" component={BottomNavigator}
                    options={{ headerMode: false }}

                />
                <Stack.Screen name="DonerReques" component={DrawerNavigator} />
            </Stack.Navigator>
        </View>

    );
};

export default StackNavigator;