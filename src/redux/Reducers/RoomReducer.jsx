import { createSlice } from "@reduxjs/toolkit";

const roomSlice = createSlice({
    name: 'room',
    initialState: {
        rooms: [],
        createdRooms: [],
        selectedRooms: [],
    },
    reducers: {
        addRooms: (state, room) => {
            state.rooms.unshift(room.payload)
        },
        addRoomsRange: (state, newRooms) => {
            state.rooms = state.rooms.concat(newRooms.payload);
        },
        removeRooms: (state, room) => {
            const index = state.rooms.findIndex((facil) => facil.id === room.payload.id);
            state.rooms.splice(index, 1);
        },
        updateRoomState: (state, room) => {
            const index = state.rooms.findIndex((facil) => facil.id === room.payload.id);

            if (index < 0) {
                state.rooms.unshift(room.payload);
            }
            else if (room.payload.count < 1) {
                state.rooms.splice(index, 1);
            }
            else {
                state.rooms[index].count = room.payload.count;
            }
        },
        clearRooms: (state) => {
            state.rooms = [];
        },

        addCreatedRoom: (state, room) => {
            state.createdRooms.push(room.payload)
        },
        addCreatedRoomsRange: (state, rooms) => {
            state.createdRooms = rooms.payload;
        },
        removeCreatedRoom: (state, index) => {
            state.createdRooms.splice(index, 1);
        },
        updateCreatedRoom: (state, roomState) => {
            const room = roomState.payload.room;
            const index = roomState.payload.index;

            state.createdRooms[index] = room;
        },
        clearCreatedRooms: (state) => {
            state.createdRooms = [];
        },

        addSelectedRoom: (state, room) => {
            state.selectedRooms.push(room.payload)
        },
        removeSelectedRoom: (state, room) => {
            const index = state.selectedRooms.findIndex((facil) => facil.id === room.payload.id);
            state.selectedRooms.splice(index, 1);
        },
        updateSelectedRoom: (state, room) => {
            const index = state.selectedRooms.findIndex((facil) => facil.id === room.payload.id);

            if (index < 0) {
                state.selectedRooms.push(room.payload);
            }
            else {
                state.selectedRooms[index] = room.payload;
            }
        },
        clearSelectedRooms: (state) => {
            state.selectedRooms = [];
        },
    }
})

export const {
    addRooms,
    addRoomsRange,
    removeRooms,
    updateRoomState,
    clearRooms,

    addCreatedRoom,
    addCreatedRoomsRange,
    removeCreatedRoom,
    updateCreatedRoom,
    clearCreatedRooms,

    addSelectedRoom,
    removeSelectedRoom,
    updateSelectedRoom,
    clearSelectedRooms,
} = roomSlice.actions

export default roomSlice.reducer