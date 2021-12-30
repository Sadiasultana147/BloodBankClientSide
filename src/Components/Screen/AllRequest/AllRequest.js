
import React, { useState, useEffect } from 'react';
import { View, ScrollView, FlatList, Text, StyleSheet, ActivityIndicator } from 'react-native';

import { DataTable } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Button } from 'react-native-elements/dist/buttons/Button';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';

const AllRequest = ({ navigation }) => {
    const [request, setRequest] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://sleepy-tundra-65290.herokuapp.com/donerRequestStore')
            const donrequesters = await response.json();
            setRequest(donrequesters);
        }
        fetchData();
    }, [])
    const renderRequestItem = ({ item, index }) => {
        const { information, _id } = item;
        return (
            <View >

                <DataTable>


                    <DataTable.Row>
                        <DataTable.Cell> {item.userName}</DataTable.Cell>

                        <DataTable.Cell>{item.bloodGroup}</DataTable.Cell>
                        <DataTable.Cell>{item.email}</DataTable.Cell>
                        <DataTable.Cell>{item.contactNo}</DataTable.Cell>


                    </DataTable.Row>




                </DataTable>

            </View>
        )
    }
    return (
        <ScrollView>

            <View>
                <Text h1 style={{ marginTop: 30, fontSize: 30, marginLeft: 12, backgroundColor: "skyblue", color: "white" }}>UserRequestList</Text>
                <FlatList style={{ marginTop: 20 }}
                    data={request}
                    renderItem={renderRequestItem}
                    keyExtractor={(item, index) => index.toString()}
                />

            </View>
            <Button
                onPress={() => navigation.navigate("BottomNavigator")}
                buttonStyle={{ backgroundColor: "purple", width: "50%", marginLeft: "15%", marginTop: 10, marginBottom: 10 }}
                icon={
                    <AntDesign
                        name="back"
                        size={15}
                        color="white"
                    />
                }
                title="Back To Previous Page"

            />

        </ScrollView>
    );
};

export default AllRequest;