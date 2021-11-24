import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        room: null,
        CheckInDate: null,
        CheckOutDate: null,
        hotelId: '',
        roomId: '',
        cost: null,
        facilities: [],
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
        },
        addRoom: (state, room) => {
            state.room = room.payload
        },
        addFacilities: (state, facility) => {
            state.facilities.push(facility.payload)
        },
        removeFacility: (state, facility) => {
            const index = state.facilities.indexOf(facility);
            state.facilities.splice(index, 1);
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
    removeCost,
    addRoom,
    addFacilities,
    removeFacility,
} = orderSlice.actions

export default orderSlice.reducer