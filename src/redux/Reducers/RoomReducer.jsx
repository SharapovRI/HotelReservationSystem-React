import { createSlice } from "@reduxjs/toolkit";

const roomSlice = createSlice({
    name: 'room',
    initialState: {
        rooms: [],
    },
    reducers: {
        addRooms: (state, room) => {
            state.rooms.unshift(room.payload)
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
        }
    }
})

export const {
    addRooms,
    removeRooms,
    updateRoomState,
} = roomSlice.actions

export default roomSlice.reducer