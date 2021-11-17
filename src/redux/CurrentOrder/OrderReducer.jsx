import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        CheckInDate: null,
        CheckOutDate: null,
        hotelId: '',
        roomId: '',
        cost: null
    },
    reducers: {
        addCheckInDate: (state, newValue) => {
            state.CheckInDate = newValue
        },
        removeCheckInDate: (state) => {
            state.CheckInDate = null
        },
        addCheckOutDate: (state, newValue) => {
            state.CheckOutDate = newValue
        },
        removeCheckOutDate: (state) => {
            state.CheckOutDate = null
        },
        addHotelId: (state, hotelId) => {
            state.hotelId = hotelId
        },
        removeHotelId: (state) => {
            state.hotelId = ''
        },
        addRoomId: (state, roomId) => {
            state.roomId = roomId
        },
        removeRoomId: (state) => {
            state.roomId = ''
        },
        addCost: (state, cost) => {
            state.cost = cost
        },
        removeCost: (state) => {
            state.cost = null
        }
    }
})

export const {
    addCheckInDate,
    removeCheckInDate,
    addCheckOutDate,
    removeCheckOutDate,
    addHotelId,
    removeHotelId,
    addRoomId,
    removeRoomId,
    addCost,
    removeCost
} = orderSlice.actions

export default orderSlice