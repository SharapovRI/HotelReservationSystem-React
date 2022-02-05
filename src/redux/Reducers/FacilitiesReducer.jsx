import { createSlice } from "@reduxjs/toolkit";

const facilitySlice = createSlice({
    name: 'facility',
    initialState: {
        facilities: [],
        createdFacilities: [],
    },
    reducers: {
        addFacilities: (state, facilities) => {
            state.facilities = facilities.payload;
        },


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
        },
        clearCreatedFacilities: (state) => {
            state.createdFacilities = [];
        },
    }
})

export const {
    addFacilities,
    
    addCreatedFacility,
    addCreatedFacilitiesRange,
    removeCreatedFacility,
    updateCreatedFacility,
    clearCreatedFacilities,
} = facilitySlice.actions

export default facilitySlice.reducer