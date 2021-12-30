import React, { useState } from 'react';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { ScrollView, Text } from 'react-native';
import { TextInput, View, SafeAreaView, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AllRequest from '../AllRequest/AllRequest';


const DonationRequestScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const [email, setEmail] = useState("");
    const [contactNo, setContactNo] = useState("");


    const handleDonationRequest = (e) => {

        // console.log(text)



        const DonationRequest = { userName: name, bloodGroup: bloodGroup, email: email, contactNo: contactNo }
        console.log(DonationRequest)
        fetch('https://sleepy-tundra-65290.herokuapp.com/donerRequestStore', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(DonationRequest)


        })

            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully send the request.');
                    navigation.navigate("AllRequest")


                }
            })
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <Text h1 style={{ marginTop: 60, fontSize: 30, marginLeft: 12, backgroundColor: "skyblue", color: "white" }}>Send Your Information</Text>
                <Text h3 style={{ marginTop: 10, fontSize: 30, marginLeft: 12, color: "indigo" }}>We will contact with you as soon as possible</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={text => setName(text)}
                    placeholder='Name'


                />
                <TextInput
                    style={styles.input1}
                    value={bloodGroup}
                    onChangeText={text => setBloodGroup(text)}
                    placeholder='Needed BloodGroup'


                />
                <TextInput
                    style={styles.input1}
                    value={email}
                    onChangeText={text => setEmail(text)}
                    placeholder='Email'


                />
                <TextInput
                    style={styles.input1}
                    value={contactNo}
                    onChangeText={text => setContactNo(text)}
                    keyboardType='numeric'
                    placeholder='ContactNo'


                />


                <Button
                    onPress={handleDonationRequest}
                    buttonStyle={{ backgroundColor: "blue" }}
                    title="SEND"
                />




                <AllRequest></AllRequest>


            </ScrollView>

        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    input: {
        marginTop: 40,

        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    input1: {


        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default DonationRequestScreen;