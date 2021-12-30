import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { auth } from '../../firebase';
import RegisterScreen from '../RegisterScreen/RegisterScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo'



const LogInScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate("BottomNavigator")

            }
        })
        return unsubscribe

    }, [])
    const handleLogIn = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                console.log(user.email)
            })
            .catch(error => alert(error.message))
    }
    return (
        <ScrollView style={{ backgroundColor: "white", height: "100%" }}>
            <Image style={{ width: "100%", top: 3 }} source={require('../../../Images/image4.jpg')} />
            <Text style={{ fontSize: 30, marginTop: 50, backgroundColor: "skyblue" }}>LOGIN YOUR ACCOUNT</Text>


            <View style={styles.main}>
                <Input
                    placeholder='Enter your email'
                    leftIcon={{ type: 'ant-design', name: 'mail' }}
                    onChangeText={value => this.setState({ comment: value })}
                    value={email}
                    onChangeText={text => setEmail(text)}
                />




                <Input
                    placeholder="Enter your password"
                    leftIcon={{ type: 'ant-design', name: 'lock' }}
                    onChangeText={value => this.setState({ comment: value })}
                    value={password}
                    onChangeText={text => setPassword(text)}

                />
                <Button
                    onPress={handleLogIn}

                    buttonStyle={{ backgroundColor: "blue" }}
                    title="LogIn"
                    icon={
                        <AntDesign style={{ marginRight: 9 }}
                            name="login"
                            size={25}
                            color="red"
                        />
                    }
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate("RegisterScreen")}
                >
                    <Button
                        buttonStyle={{ backgroundColor: "purple", marginTop: 10, width: "50%", marginLeft: "25%" }}
                        title="Register"
                        icon={
                            <Entypo style={{ marginRight: 9 }}
                                name="arrow-bold-right"
                                size={25}
                                color="red"
                            />
                        }
                    />



                </TouchableOpacity>
            </View>






        </ScrollView>
    );
};
const styles = {
    main: {
        top: 50
    }
}

export default LogInScreen;