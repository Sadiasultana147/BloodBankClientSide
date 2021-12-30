import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { auth } from '../../firebase';
import Feather from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';




const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('')
    const handleRegister = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                console.log(user.email)
                console.log(user.password)

            })
            .catch(error => alert(error.message))

    }


    return (
        <View style={{ backgroundColor: "white", height: "100%" }}>

            <Text style={{ fontSize: 30, marginTop: 100, backgroundColor: "skyblue" }}>CREATE YOUR ACCOUNT</Text>

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
                    secureTextEntry
                />


                <Button onPress={handleRegister}
                    buttonStyle={{ backgroundColor: "blue" }}
                    title="Register"
                    icon={
                        <Feather style={{ marginRight: 9 }}
                            name="user-plus"
                            size={25}
                            color="red"
                        />
                    }
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate("LogInScreen")}
                >
                    <Button
                        buttonStyle={{ backgroundColor: "purple", marginTop: 10, width: "50%", marginLeft: "25%" }}
                        title="LogIn"
                        icon={
                            <AntDesign style={{ marginRight: 9 }}
                                name="login"
                                size={25}
                                color="red"
                            />
                        }
                    />



                </TouchableOpacity>
            </View>






        </View>
    );
};
const styles = {
    main: {
        top: 50
    }
}


export default RegisterScreen;