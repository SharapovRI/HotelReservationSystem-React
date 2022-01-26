import { createSlice } from "@reduxjs/toolkit";

const roomSlice = createSlice({
    name: 'room',
    initialState: {
        rooms: [],
        createdRooms: [],
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
        },
        addCreatedRoom: (state, room) => {
            console.log("asdasdasd");
            state.createdRooms.push(room.payload)
        },
        removeCreatedRoom: (state, index) => {
            state.createdRooms.splice(index, 1);
            console.log("asdasdasd");
        },
        updateCreatedRoom: (state, roomState) => {
            //const index = state.rooms.findIndex((facil) => facil.id === room.payload.id);
            console.log("asdasdasd", roomState.payload.index);
            console.log("asdasdasd", roomState.payload.room);

            const room = roomState.payload.room;
            const index = roomState.payload.index;

            state.createdRooms[index] = room;
        }
    }
})

export const {
    addRooms,
    removeRooms,
    updateRoomState,
    addCreatedRoom,
    removeCreatedRoom,
    updateCreatedRoom,
} = roomSlice.actions

export default roomSlice.reducer