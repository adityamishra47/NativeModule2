
import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    NativeModules,
    NativeEventEmitter
} from 'react-native';

import { useNavigation } from "@react-navigation/native";
import { useDispatch } from 'react-redux'
import { loginData, signinData } from "./redux/profileSlice"

export default function AuthPage() {

    const { LoginSignupModule } = NativeModules;
    const eventEmitter = new NativeEventEmitter();
    const navigation = useNavigation()
    const dispatch = useDispatch();

    useEffect(() => {
        let eventListener = eventEmitter.addListener("loginEvent", (param) => {
            console.log(param);
            dispatch(loginData(param));
            navigation.navigate("Dashboard", param);
        })

        return () => {
            eventListener.remove();
        }
    }, []);

    useEffect(() => {
        let eventListener = eventEmitter.addListener("signupEvent", (param) => {
            param.navigateFrom = 'Signup';
            navigation.navigate("Dashboard", param);
        })

        return () => {
            eventListener.remove();
        }
    }, []);

    return (
        <View style={styles.root}>

            <Text
                style={styles.btnStyle}
                onPress={() => navigation.navigate('OtpView')}>Login with otp</Text>

            <Text
                style={styles.btnStyle}
                onPress={() => LoginSignupModule.openLoginPage()}>Login with email</Text>

            <Text
                style={styles.btnStyle}
                onPress={() => LoginSignupModule.openSignupPage()}>Signup</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "lightblue",
        alignItems: "center",
        justifyContent: "center"
    },
    btnStyle: {
        padding: 10,
        margin: 10,
        color: "#222222",
        borderWidth: 1,
        width: "40%",
        textAlign: "center",
        fontWeight: "500",
        fontSize: 16
    },
});