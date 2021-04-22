import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice ({
    name: "user",                       //Name of store is "user"
    initialState: {
        user: null,                     //Initial value for user is null - user hasn't logged in
    },
    reducers: {                         //This will update our user state
        login: (state, action) => {
            state.user = action.payload;  //We are taking the state to update it. (action.payload) Update the payload to the user
        },
        logout: (state) => {                //We don't need to update state with any value. Don't need a payload. Just need state back to null.
            state.user = null;
        },
    },
});

//export the actions
export const { login, logout } = userSlice.actions;

//export the state using hook (selectUser)
export const selectUser = (state) => state.user.user;

//export reducer
export default userSlice.reducer;