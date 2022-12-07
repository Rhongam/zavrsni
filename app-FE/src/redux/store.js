import locationsReducer from './locationsSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        locations: locationsReducer,
    }
})