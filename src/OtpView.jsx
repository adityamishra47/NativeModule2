import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState, useRef, useCallback, useEffect } from 'react'

const OtpView = () => {

    const [showOtpContainer, setShowOtpContainer] = useState(true);
    const [otp, setOtp] = useState("")
    const OTP_INPUT_LENGTH = 6;

    useEffect(() => {
        console.log('---useEffect, otp: ', otp);

    }, [otp])

    const otpInput = Array(OTP_INPUT_LENGTH)
        .fill(null)
        .map(() => useRef(null));

    const OtpContainer = useCallback(() => {
        return (
            <View style={styles.otpContainer}>
                {
                    otpInput.map((inputRef, index) => {
                        return (
                            <TextInput
                                maxLength={1}
                                key={index}
                                style={styles.otpTextInput}
                                keyboardType='numeric'
                                ref={inputRef}
                                onKeyPress={(e) => {
                                    let key = e.nativeEvent.key;
                                    // console.log("key: ", key, ", index: ", index);

                                    if (key === 'Backspace' && index > 0) {
                                        setOtp(prevState => prevState.substring(0, prevState.length))
                                        otpInput[index - 1].current.focus();
                                    } else if (key !== '' &&
                                        key !== ' ' &&
                                        key !== '.' &&
                                        key !== ',' &&
                                        key !== 'Backspace' &&
                                        index < OTP_INPUT_LENGTH - 1
                                    ) {
                                        setOtp(prevState => prevState + key)
                                        otpInput[index + 1].current.focus();
                                    } else if (key !== '' &&
                                        key !== ' ' &&
                                        key !== '.' &&
                                        key !== ',' &&
                                        key !== 'Backspace' &&
                                        index === OTP_INPUT_LENGTH - 1) {
                                        setOtp(prevState => prevState + key)
                                        Keyboard.dismiss()
                                    }
                                }}
                            />
                        )
                    })
                }
            </View>
        )
    }, [])


    return (
        <View style={styles.root}>
            <Text style={styles.headingText}>Mobile Number</Text>
            <TextInput
                placeholder='mobile number'
                style={styles.inputMobileNumber}
            />
            {showOtpContainer ? <OtpContainer /> : null}
            <TouchableOpacity
                onPress={() => otpInput[0].current.focus()}
                style={styles.otp}
            >
                <Text style={styles.timerText}>Get Otp</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "lightblue",
        alignItems: "center",
        justifyContent: "center"
    },
    headingText: {
        color: "#222222",
        fontSize: 16,
        width: "95%",
        paddingVertical: 10,
    },
    otp: {
        padding: 10,
        margin: 10,
        color: "#222222",
        borderWidth: 1,
        width: "40%",
        alignItems: "center",
        borderRadius: 4
    },
    timerText: {
        color: "#222222",
        textAlign: "center",
        // fontWeight: "500",
        fontSize: 16,
    },
    inputMobileNumber: {
        width: "95%",
        padding: 10,
        borderWidth: 1,
        marginVertical: 10,
        borderRadius: 4
    },
    otpContainer: {
        flexDirection: "row",
        width: "90%",
        marginVertical: 10
    },
    otpTextInput: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 4,
        marginHorizontal: 10,
        textAlign: "center",
    }
})

export default OtpView;