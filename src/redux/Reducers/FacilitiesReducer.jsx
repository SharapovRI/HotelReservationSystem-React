import { createSlice } from "@reduxjs/toolkit";

const facilitySlice = createSlice({
    name: 'facility',
    initialState: {
        facilities: [],
        createdFacilities: [],
    },
    reducers: {
        // addRooms: (state, room) => {
        //     state.rooms.unshift(room.payload)
        // },
        // removeRooms: (state, room) => {
        //     const index = state.rooms.findIndex((facil) => facil.id === room.payload.id);
        //     state.rooms.splice(index, 1);
        // },
        // updateRoomState: (state, room) => {
        //     const index = state.rooms.findIndex((facil) => facil.id === room.payload.id);

        //     if (index < 0) {
        //         state.rooms.unshift(room.payload);
        //     }
        //     else if (room.payload.count < 1) {
        //         state.rooms.splice(index, 1);
        //     }
        //     else {
        //         state.rooms[index].count = room.payload.count;
        //     }
        // },
        addCreatedFacility: (state, facility) => {
            state.createdFacilities.push(facility.payload)
        },
        addCreatedFacilitiesRange: (state, facilities) => {
            state.createdFacilities = facilities.payload;
        },
        removeCreatedFacility: (state, index) => {
            state.createdFacilities.splice(index, 1);
        },
        updateCreatedFacility: (state, facilityState) => {

            const facility = facilityState.payload.facility;
            const index = facilityState.payload.index;

            state.createdFacilities[index] = facility;
        }
    }
})

export const {
    addCreatedFacility,
    addCreatedFacilitiesRange,
    removeCreatedFacility,
    updateCreatedFacility,
} = facilitySlice.actions

export default facilitySlice.reducer