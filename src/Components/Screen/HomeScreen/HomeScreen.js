import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import { Text, Dimensions, StyleSheet } from 'react-native';

import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { Card, CardTitle } from 'react-native-cards';
import { Button } from 'react-native-elements/dist/buttons/Button';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { auth } from '../../firebase';

const HomeScreen = ({ navigation }) => {
    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace("LogInScreen")
            })
            .catch(error => alert(error.message))
    }
    return (
        <ScrollView style={styles.main}>
            <View style={{ marginTop: 100, marginLeft: 100, marginBottom: 50 }}>
                <Text h1 style={{ fontSize: 20 }}> UserEmail: {auth.currentUser.email}</Text>
            </View>
            <Button
                onPress={handleSignOut}

                buttonStyle={{ backgroundColor: "blue" }}
                title="LogOut"
                icon={
                    <AntDesign style={{ marginRight: 9 }}
                        name="logout"
                        size={25}
                        color="red"
                    />
                }
            />
            <View style={styles.container}>

                <SwiperFlatList autoplay autoplayDelay={2} autoplayLoop index={2} showPagination>
                    <View style={[styles.child, { backgroundColor: 'tomato' }]}>
                        <Image style={styles.image} source={require('../../../Images/image5.jpg')} />
                    </View>
                    <View style={[styles.child, { backgroundColor: 'thistle' }]}>
                        <Image style={styles.image} source={require('../../../Images/image-6.jpg')} />
                    </View>
                    <View style={[styles.child, { backgroundColor: 'skyblue' }]}>
                        <Image style={styles.image} source={require('../../../Images/image7.jpg')} />
                    </View>

                </SwiperFlatList>
            </View>

            <View>

                <Text h1 style={{ marginTop: 50, fontSize: 30, marginLeft: 12, backgroundColor: "skyblue", color: "white" }}>Partnership With Hospital</Text>
                <Card >

                    <CardTitle style={{ backgroundColor: "thistle" }}
                        subtitle="United Hospitale"
                    />
                    <CardTitle style={{ marginTop: 20, backgroundColor: "thistle" }}
                        subtitle="Square Hospitale"
                    />
                    <CardTitle style={{ marginTop: 20, backgroundColor: "thistle" }}
                        subtitle="Anwar Khan Modern Hospitale"
                    />
                    <CardTitle style={{ marginTop: 20, backgroundColor: "thistle" }}
                        subtitle="Ibne-Sina Hospitale"
                    />
                    <CardTitle style={{ marginTop: 20, backgroundColor: "thistle" }}
                        subtitle="Impulse Hospitale"
                    />
                    <CardTitle style={{ marginTop: 20, backgroundColor: "thistle" }}
                        subtitle="Ayesha Memorial Hospitale"
                    />
                    <CardTitle style={{ marginTop: 20, backgroundColor: "thistle" }}
                        subtitle="BRB Hospitale"
                    />
                    <CardTitle style={{ marginTop: 20, backgroundColor: "thistle" }}
                        subtitle="MetroPoliton Hospitale"
                    />
                    <CardTitle style={{ marginTop: 20, backgroundColor: "thistle" }}
                        subtitle="NeuroScience Hospitale"
                    />

                </Card>

            </View>

        </ScrollView>
    );
};
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    main: {
        height: "100%",

    },
    container: { flex: 1, backgroundColor: 'white', top: 10 },
    child: { width, justifyContent: 'center' },
    text: { fontSize: width * 0.5, textAlign: 'center' },

});

export default HomeScreen;