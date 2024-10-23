import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header({ title = 'Header' }) {
    return (
        <View style={styles.root}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        height: 56,
        backgroundColor: 'dodgerblue',
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        color: "white"
    }
})