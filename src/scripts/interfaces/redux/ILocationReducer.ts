import { ILocation } from "@interfaces/models/ILocation";
import { IGlobalResponse } from "@interfaces/response/IGlobalResponse";

export interface ILocationReducer {
    list: IGlobalResponse<ILocation> | null
    selected: ILocation | null
}