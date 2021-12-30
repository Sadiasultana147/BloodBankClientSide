import React from 'react';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { ScrollView, Text, View } from 'react-native';
import { TextInput, SafeAreaView, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo'



const AddBlood = ({ navigation }) => {

    const [bloodGroup, setBloodGroup] = React.useState("");

    const handlebloodGroup = () => {

        console.log(bloodGroup)



        const blood = { bloodGroup: bloodGroup }
        fetch('https://sleepy-tundra-65290.herokuapp.com/bloodGroupList', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(blood)

        })

            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the new bloodGroup.');
                    navigation.navigate("BloodGroup")


                }



            })



    }
    return (
        <SafeAreaView>
            <ScrollView>

                <Text h1 style={{ marginTop: 60, fontSize: 30, marginLeft: 12, backgroundColor: "skyblue", color: "white" }}>ADD NEW BLOODGROUP </Text>
                <TextInput
                    style={styles.input}
                    value={bloodGroup}
                    onChangeText={text => setBloodGroup(text)}
                    placeholder='Enter A BloodGroup'


                />


                <Button onPress={handlebloodGroup}
                    buttonStyle={{ backgroundColor: "purple", width: "50%", marginLeft: "25%" }}
                    icon={
                        <Entypo
                            name="add-to-list"
                            size={15}
                            color="white"
                        />
                    }
                    title="ADD"
                />






            </ScrollView>
        </SafeAreaView>


    );
};


const styles = StyleSheet.create({
    input: {
        marginTop: 100,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default AddBlood;