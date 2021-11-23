import { createSlice } from "@reduxjs/toolkit";

const refreshSlice = createSlice({
    name: 'refresh',
    initialState: {
        value: ''
    },
    reducers: {
        addRefresh: (state, newValue) => {
            state.value = newValue
        },
        removeRefresh: (state) => {
            state.value = ''
        }
    }
})

export const { addRefresh, removeRefresh } = refreshSlice.actions

export default refreshSlice.reducer