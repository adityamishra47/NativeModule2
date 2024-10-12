package com.nativemodules2;

import android.content.Intent;

import androidx.annotation.NonNull;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class LoginSignupModule extends ReactContextBaseJavaModule {
    private static ReactContext reactContext;

    public LoginSignupModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @NonNull
    @Override
    public String getName() {
        return "LoginSignupModule";
    }

    @ReactMethod
    public void openLoginPage() {
        Intent intent = new Intent(getReactApplicationContext(), LoginActivity.class);
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        reactContext.startActivity(intent);
    }

    @ReactMethod
    public void openSignupPage() {
        Intent intent = new Intent(getReactApplicationContext(), SignupActivity.class);
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        reactContext.startActivity(intent);
    }

    static void sendLoginData(String username, String password) {
        WritableMap param = Arguments.createMap();
        param.putString("username", username);
        param.putString("password", password);
        sendEvent(reactContext, "loginEvent", param);
    }

    static void sendSignupData(String username,
                               String password,
                               String email,
                               String mobileNumber) {
        WritableMap param = Arguments.createMap();
        param.putString("username", username);
        param.putString("password", password);
        param.putString("email", email);
        param.putString("mobileNumber", mobileNumber);
        sendEvent(reactContext, "signupEvent", param);
    }

    static void sendEvent(ReactContext reactContext, String event, WritableMap param) {
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(event, param);
    }
}
