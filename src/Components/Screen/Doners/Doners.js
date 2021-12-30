
import React, { useState, useEffect } from 'react';
import { View, ScrollView, FlatList, Text, StyleSheet, ActivityIndicator } from 'react-native';

import { DataTable } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Button } from 'react-native-elements/dist/buttons/Button';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Doners = ({ navigation }) => {

    const [doners, setDoners] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://sleepy-tundra-65290.herokuapp.com/doners')
            const doners = await response.json();
            setDoners(doners);
        }
        fetchData();
    }, [])
    //Delete 

    const handleDelete = (id) => {


        const url = `https://sleepy-tundra-65290.herokuapp.com/doners/${id}`;
        console.log(url);
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted successfully')
                    const remaining = doners.filter(doner => doner._id !== id);
                    setDoners(remaining);
                }
            })

    }
    const renderDonerItem = ({ item, index }) => {
        const { donerName, _id } = item;
        return (
            <ScrollView >

                <DataTable >


                    <DataTable.Row>
                        <DataTable.Cell>{item.donerName}</DataTable.Cell>
                        <DataTable.Cell>{item.bloodGroup}</DataTable.Cell>
                        <DataTable.Cell>{item.contactNo}</DataTable.Cell>


                        <DataTable.Cell>  <Button
                            onPress={() => handleDelete(_id)}
                            buttonStyle={{ backgroundColor: "blue" }}

                            title="Delete"
                            icon={
                                <AntDesign
                                    name="delete"
                                    size={13}
                                    color="white"
                                />
                            }



                        /></DataTable.Cell>

                    </DataTable.Row>




                </DataTable>

            </ScrollView>
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

                <Text h1 style={{ marginTop: 50, fontSize: 30, marginLeft: 12, backgroundColor: "skyblue", color: "white" }}>Doners List</Text>
                <FlatList style={{ marginTop: 50 }}
                    data={doners}
                    renderItem={renderDonerItem}
                    keyExtractor={(item, index) => index.toString()}
                />

            </View>

        </ScrollView>
    );
};

export default Doners;