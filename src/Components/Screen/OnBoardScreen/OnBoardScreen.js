
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';
import { getMyStringValue, setStringValue } from '../../../../Global/AsyncStorage/AsyncStorage';



const OnBoardScreen = () => {
    const navigation = useNavigation();
    const OnBoardingDone = async () => {
        try {
            await setStringValue("Onboarding", "true")
            await navigation.navigate("LogInScreen")
        }
        catch {

        }

    }
    React.useEffect(async () => {

        const stringValue = await getMyStringValue("Onboarding")
        if (stringValue === "true") {
            navigation.navigate("LogInScreen")
        }
    })
    return (
        <View style={styles.main}>
            <StatusBar backgroundColor="white"
                barStyle="light-content"></StatusBar>

            <Onboarding
                pages={[
                    {
                        backgroundColor: '#fff',
                        image: <Image style={styles.image} source={require('../../../Images/blood.jpg')} />,
                        title: 'Find  Blood Donners',
                        subtitle: ' We are here for You'

                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image style={styles.image} source={require('../../../Images/image1.jpg')} />,
                        title: 'Send Your Information',
                        subtitle: ' We will response as soon as possible',
                    }
                ]}
                onSkip={() => OnBoardingDone()}
                onDone={() => OnBoardingDone()}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: "100%"
    },
    image: {
        width: "100%",
        height: "70%"
    }
});



export default OnBoardScreen;