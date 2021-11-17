import { configureStore } from "@reduxjs/toolkit";
import orderSlice, { addCheckInDate, removeCheckInDate, addCheckOutDate, removeCheckOutDate, addHotelId, addRoomId, addCost, removeHotelId, removeRoomId, removeCost } from "./OrderReducer";

const orderStore = configureStore({
    reducer: orderSlice.reducer
})

const getCheckInDate = () => {
    return (orderStore.getState().CheckInDate !== null && orderStore.getState().CheckInDate.payload);
}

const getCheckOutDate = () => {
    return (orderStore.getState().CheckOutDate !== null && orderStore.getState().CheckOutDate.payload);
}

const getHotelId = () => {
    return (orderStore.getState().hotelId !== null && orderStore.getState().hotelId.payload);
}

const getRoomId = () => {
    return (orderStore.getState().roomId !== null && orderStore.getState().roomId.payload);
}

const getCost = () => {
    return (orderStore.getState().cost !== null && orderStore.getState().cost.payload);
}

const setCheckInDate = (newCheckInDate) => {
    orderStore.dispatch(addCheckInDate(newCheckInDate));
}

const setCheckOutDate = (newCheckOutDate) => {
    orderStore.dispatch(addCheckOutDate(newCheckOutDate));
}

const setHotelId = (newHotelId) => {
    orderStore.dispatch(addHotelId(newHotelId));
}

const setRoomId = (newRoomId) => {
    orderStore.dispatch(addRoomId(newRoomId));
}

const setCost = (newCost) => {
    orderStore.dispatch(addCost(newCost));
}

const deleteCheckInDate = () => {
    orderStore.dispatch(removeCheckInDate());
}

const deleteCheckOutDate = () => {
    orderStore.dispatch(removeCheckOutDate());
}

const deleteHotelId = () => {
    orderStore.dispatch(removeHotelId());
}

const deleteRoomId = () => {
    orderStore.dispatch(removeRoomId());
}

const deleteCost = () => {
    orderStore.dispatch(removeCost());
}


export {
    getCheckInDate,
    getCheckOutDate,
    getHotelId,
    getRoomId,
    getCost,
    setCheckInDate,
    setCheckOutDate,
    setHotelId,
    setRoomId,
    setCost,
    deleteCheckInDate, 
    deleteCheckOutDate,
    deleteHotelId,
    deleteRoomId, 
    deleteCost
}