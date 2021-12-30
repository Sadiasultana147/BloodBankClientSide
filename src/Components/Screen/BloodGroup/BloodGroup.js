import React, { useState, useEffect } from 'react';
import { View, ScrollView, FlatList, Text, StyleSheet, ActivityIndicator } from 'react-native';
import AddBlood from '../AddBlood/AddBlood';
import { DataTable } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Button } from 'react-native-elements/dist/buttons/Button';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';



const Tab = createMaterialBottomTabNavigator();
const ProfileScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(true);
    const [bloods, setBloods] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://sleepy-tundra-65290.herokuapp.com/bloodGroupList')
            const bloods = await response.json();
            setBloods(bloods);
        }
        fetchData();
    }, [])
    //Delete 

    const handleDelete = (id) => {


        const url = `https://sleepy-tundra-65290.herokuapp.com/bloodGroupList/${id}`;
        console.log(url);
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted successfully')
                    const remaining = bloods.filter(blood => blood._id !== id);
                    setBloods(remaining);
                }
            })

    }
    const renderBloodItem = ({ item, index }) => {
        const { bloodGroup, _id } = item;
        return (
            <View >

                <DataTable>


                    <DataTable.Row>
                        <DataTable.Cell >{item.bloodGroup}</DataTable.Cell>
                        <DataTable.Cell>  <Button
                            onPress={() => handleDelete(_id)}
                            buttonStyle={{ backgroundColor: "blue" }}

                            title="Delete"
                            icon={
                                <AntDesign
                                    name="delete"
                                    size={15}
                                    color="white"
                                />
                            }


                        /></DataTable.Cell>

                    </DataTable.Row>




                </DataTable>

            </View>
        )
    }
    return (


        <ScrollView style={{ marginTop: 50 }}>

            <View>


                <Button
                    onPress={() => navigation.navigate("BottomNavigator")}
                    buttonStyle={{ backgroundColor: "purple", width: "50%", marginLeft: "15%" }}
                    icon={
                        <AntDesign
                            name="back"
                            size={15}
                            color="white"
                        />
                    }
                    title="Back To Previous Page"

                />

                <Text h1 style={{ marginTop: 60, fontSize: 30, marginLeft: 12, backgroundColor: "skyblue", color: "white" }}>Collected BloodGroup</Text>
                <FlatList style={{ marginTop: 50, marginLeft: 30 }}
                    data={bloods}
                    renderItem={renderBloodItem}
                    keyExtractor={(item, index) => index.toString()}
                />

            </View>

        </ScrollView>







    );
};


const styles = StyleSheet.create({
    main: {
        height: "10%",

    },
    container: { flex: 1, backgroundColor: 'white' },

});

export default ProfileScreen;