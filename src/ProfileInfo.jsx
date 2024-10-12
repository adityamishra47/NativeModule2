import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useRoute } from "@react-navigation/native";

export default function ProfileInfo() {
    const { username, password } = useRoute()?.params;

    return (
        <View>
            <Text
                style={{
                    fontSize: 20,
                    marginVertical: 10,
                    color: "#222222"
                }}>
                ProfileInfo</Text>
            <Text
                style={{
                    fontSize: 16,
                    marginVertical: 10,
                    color: "#222222"
                }}>
                username: {username}</Text>
            <Text
                style={{
                    fontSize: 16,
                    marginVertical: 10,
                    color: "#222222"
                }}>
                password: {password}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})