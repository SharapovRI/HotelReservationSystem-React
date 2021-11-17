import { configureStore } from "@reduxjs/toolkit";
import jwtSlice, { add, remove } from "./JWTreducer";

const jwtStore = configureStore({
    reducer: jwtSlice.reducer
})

const getJwt = () => {
    return jwtStore.getState().value.payload;
}

const setJwt = (newJwt) => {
    jwtStore.dispatch(add(newJwt));
}

const removeJwt = () => {
    jwtStore.dispatch(remove());
}

export {
    getJwt,
    setJwt,
    removeJwt
}