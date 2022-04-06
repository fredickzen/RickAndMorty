import { ICharacter } from "@interfaces/models/ICharacter";
import { IRickAndMortyReducer } from "@interfaces/redux/IRickAndMortyReducer";
import {
    CharacterChangePageAction,
    CharacterInitAction,
    CharacterSelectAction,
} from "@redux/actions/CharacterAction";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IRickAndMortyReducer<ICharacter> = {
    list: null,
    selected: null,
};

const slice = createSlice({
    name: "character",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(CharacterInitAction, (state, action) => {
                state.list = action.payload;
            })
            .addCase(CharacterChangePageAction, (state, action) => {
                let currentState = { ...state.list };

                if (currentState?.results) {
                    state.list = {
                        ...action.payload,
                        results: [...currentState?.results, ...action.payload.results],
                    };
                }
            })
            .addCase(CharacterSelectAction, (state, action) => {
                state.selected = action.payload;
            })
            .addDefaultCase((_state) => { });
    },
});

export default slice.reducer;
