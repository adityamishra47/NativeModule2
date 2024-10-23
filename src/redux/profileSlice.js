import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    mobileNumber: "",
    email: "",
    username: "",
    password: "",
    gender: "",
    age: "",
}

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        loginData: (state, action) => {
            console.log('--loginData-- payload: ', action?.payload);

            state.username = action?.payload?.username;
            state.password = action?.payload?.password;
        },
        signinData: (state, action) => {
            state.username = action?.payload?.username;
            state.password = action?.payload?.password;
            state.email = action?.payload?.email;
            state.mobileNumber = action?.payload?.mobileNumber;
        }
    }
})

export const { loginData, signinData } = profileSlice.actions;
export default profileSlice.reducer;