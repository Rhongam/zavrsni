import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from './../api/index';

const initialState = {
    data: [],
    status: 'idle',
    error: null,
};

export const fetchLocations = createAsyncThunk('locations/fetchlocations', async () => {
    const response = await API.locations.getAllLocations();
    return response.data;
})

export const locationsSlice = createSlice({
    name: 'locations',
    initialState,

    extraReducers: (builder) => {
        builder
            .addCase(fetchLocations.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchLocations.rejected, (state) => {
                state.status = 'failed';
                state.error = '';
            })
            .addCase(fetchLocations.fulfilled, (state, action) => {
                state.status = 'complete';
                state.data = action.payload;
            });
    }
});

export const selectAllLocations = (state) => state.locations.data;

export const selectLocation = (state, locationId) => {
    return state.locations.find(location => location.id === locationId)
}

export default locationsSlice.reducer;