import { ILocation } from "@interfaces/models/ILocation";
import { IRickAndMortyReducer } from "@interfaces/redux/IRickAndMortyReducer";
import {
    LocationChangePageAction,
    LocationInitAction,
    LocationSelectAction,
} from "@redux/actions/LocationAction";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IRickAndMortyReducer<ILocation> = {
    list: null,
    selected: null,
};

const slice = createSlice({
    name: "location",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(LocationInitAction, (state, action) => {
                state.list = action.payload;
            })
            .addCase(LocationChangePageAction, (state, action) => {
                let currentState = { ...state.list };

                if (currentState?.results) {
                    state.list = {
                        ...action.payload,
                        results: [...currentState?.results, ...action.payload.results],
                    };
                }
            })
            .addCase(LocationSelectAction, (state, action) => {
                state.selected = action.payload;
            })
            .addDefaultCase((_state) => { });
    },
});

export default slice.reducer;
