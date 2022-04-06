import { IEpisode } from "@interfaces/models/IEpisode";
import { IGlobalResponse } from "@interfaces/response/IGlobalResponse";

export interface IEpisodeReducer {
    list: IGlobalResponse<IEpisode>
    selected: IEpisode
}