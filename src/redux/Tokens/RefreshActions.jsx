import { configureStore } from "@reduxjs/toolkit";
import refreshSlice, { add, remove } from "./RefreshReducer";

const refreshStore = configureStore({
    reducer: refreshSlice.reducer
})

const getRefresh = () => {
    return refreshStore.getState().value.payload;
}

const setRefresh = (newRefresh) => {
    refreshStore.dispatch(add(newRefresh));
}

const removeRefresh = () => {
    refreshStore.dispatch(remove());
}

export {
    getRefresh,
    setRefresh,
    removeRefresh
}