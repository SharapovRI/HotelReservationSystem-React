import { createSlice } from "@reduxjs/toolkit";

const jwtSlice = createSlice({
    name: 'jwt',
    initialState: {
        token: localStorage.getItem("jwtToken")
    },
    reducers: {
        addJwt: (state, newValue) => {
            state.token = newValue.payload
        },
        removeJwt: (state) => {
            state.token = ''
        },
    },
});

export const { addJwt, removeJwt } = jwtSlice.actions;

export default jwtSlice.reducer;