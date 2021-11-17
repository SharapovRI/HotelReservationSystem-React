import { createSlice } from "@reduxjs/toolkit";

const refreshSlice = createSlice({
    name: 'refresh',
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

export const { add, remove } = refreshSlice.actions

export default refreshSlice