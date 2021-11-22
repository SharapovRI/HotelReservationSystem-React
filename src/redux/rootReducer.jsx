import { configureStore } from '@reduxjs/toolkit';
import OrderReducer from './Reducers/OrderReducer';
import JWTreducer from './Reducers/JWTreducer';
import RefreshReducer from './Reducers/RefreshReducer';

export default configureStore({
    reducer: {
        jwtReducer: JWTreducer,
        refreshReducer: RefreshReducer,
        orderReducer: OrderReducer,
    },
});