import { IGlobalResponse } from "@interfaces/response/IGlobalResponse";

export interface IRickAndMortyReducer<Type> {
    list: IGlobalResponse<Type> | null
    selected: Type | null
}