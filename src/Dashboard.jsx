import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, memo, useEffect } from 'react'

import { useRoute } from "@react-navigation/native";
import Header from './component/Header';
// import DATA from './component/DATA'

const Dashboard = () => {
    // const { username, password } = useRoute()?.params;
    const [refreshing, setRefreshing] = useState(false)
    const [selectedItem, setSelectedItem] = useState(-1)
    const [userData, setUserData] = useState([])

    useEffect(() => {
        fetchUserData()
    }, [])

    useEffect(() => {
        return () => {
            setTimeout(() => {
                setRefreshing(false)
            }, 1000)
        }
    }, [refreshing])

    const fetchUserData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(response => {
                setUserData(response)
            })
    }

    const renderItem = ({ item }) => {
        const bgColor = (selectedItem === item.id) ? "#6e3b6e" : "#f9c2ff";
        return (
            <TouchableOpacity
                onPress={() => {
                    setSelectedItem(item.id)
                }}
                style={[styles.listItem, { backgroundColor: bgColor }]}>

                <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <Header title='Dashboard' />
            <View style={styles.list}>
                <FlatList
                    // data={DATA}
                    data={userData}
                    style={styles.list}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    extraData={selectedItem}
                    refreshing={refreshing}
                    onRefresh={() => {
                        console.log("onRefresh...");
                        setSelectedItem(-1);
                        setRefreshing(true)
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingVertical: 8
    },
    listItem: {
        height: 80,
        backgroundColor: "#f9c2ff",
        marginBottom: 8,
        marginHorizontal: 12,
        justifyContent: "center",
        alignItems: "center"
    },
    itemText: {
        color: "#2e2e2e",
        fontSize: 15,
        fontWeight: "400",
        fontStyle: "italic"
    }
})

// export default Dashboard;
export default memo(Dashboard);