
import React, { useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    NativeModules,
    NativeEventEmitter
} from 'react-native';

import { useNavigation } from "@react-navigation/native";

export default function AuthPage() {

    const { LoginSignupModule } = NativeModules;
    const eventEmitter = new NativeEventEmitter();
    const navigation = useNavigation()

    useEffect(() => {
        let eventListener = eventEmitter.addListener("loginEvent", (param) => {
            param.navigateFrom = 'Login';
            navigation.navigate("ProfileInfo", param);
        })

        return () => {
            eventListener.remove();
        }
    }, []);

    useEffect(() => {
        let eventListener = eventEmitter.addListener("signupEvent", (param) => {
            param.navigateFrom = 'Signup';
            navigation.navigate("ProfileInfo", param);
        })

        return () => {
            eventListener.remove();
        }
    }, []);

    return (
        <View style={styles.root}>

            <Text
                style={styles.btnStyle}
                onPress={() => LoginSignupModule.openLoginPage()}>Login</Text>


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
    }
});