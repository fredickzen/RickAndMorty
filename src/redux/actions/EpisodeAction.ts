import { IEpisode } from "@interfaces/models/IEpisode";
import { IGlobalResponse } from "@interfaces/response/IGlobalResponse";
import { createAction } from "@reduxjs/toolkit";


export const EpisodeInitAction = createAction(
    "EPISODE_CHANGE_INIT",
    (reponse: IGlobalResponse<IEpisode>) => {
        return {
            payload: reponse,
        };
    }
);

export const EpisodeChangePageAction = createAction(
    "EPISODE_CHANGE_PAGE",
    (reponse: IGlobalResponse<IEpisode>) => {
        return {
            payload: reponse,
        };
    }
);

export const EpisodeSelectAction = createAction(
    "EPISODE_SELECT",
    (episode: IEpisode | null) => {
        return {
            payload: episode,
        };
    }
);
