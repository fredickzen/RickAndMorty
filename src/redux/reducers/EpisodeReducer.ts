import { IEpisode } from "@interfaces/models/IEpisode";
import { IRickAndMortyReducer } from "@interfaces/redux/IRickAndMortyReducer";
import { EpisodeChangePageAction, EpisodeInitAction, EpisodeSelectAction } from "@redux/actions/EpisodeAction";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IRickAndMortyReducer<IEpisode> = {
    list: null,
    selected: null,
};

const slice = createSlice({
    name: "episode",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(EpisodeInitAction, (state, action) => {
                state.list = action.payload;
            })
            .addCase(EpisodeChangePageAction, (state, action) => {
                let currentState = { ...state.list };

                if (currentState?.results) {
                    state.list = { ...action.payload, results: [...currentState?.results, ...action.payload.results] };
                }
            })
            .addCase(EpisodeSelectAction, (state, action) => {
                state.selected = action.payload;
            })
            .addDefaultCase((_state) => { });
    },
});

export default slice.reducer;
