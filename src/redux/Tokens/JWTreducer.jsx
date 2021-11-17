import { createSlice } from "@reduxjs/toolkit";

const jwtSlice = createSlice({
    name: 'jwt',
    initialState: {
        value: ''
    },
    reducers: {
        add: (state, newValue) => {
            state.value = newValue
        },
        remove: (state) => {
            state.value = ''
        }
    }
})

export const { add, remove } = jwtSlice.actions

export default jwtSlice