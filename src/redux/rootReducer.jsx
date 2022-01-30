import { configureStore } from '@reduxjs/toolkit';
import OrderReducer from './Reducers/OrderReducer';
import JWTreducer from './Reducers/JWTreducer';
import RefreshReducer from './Reducers/RefreshReducer';
import RoomReducer from './Reducers/RoomReducer';
import FacilitiesReducer from './Reducers/FacilitiesReducer';

export default configureStore({
    reducer: {
        jwtReducer: JWTreducer,
        refreshReducer: RefreshReducer,
        orderReducer: OrderReducer,
        roomReducer: RoomReducer,
        facilityReducer: FacilitiesReducer,
    },
});