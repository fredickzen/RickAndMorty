import { ILocation } from "@interfaces/models/ILocation";
import { IGlobalResponse } from "@interfaces/response/IGlobalResponse";
import { createAction } from "@reduxjs/toolkit";

export const LocationInitAction = createAction(
    "LOCATION_CHANGE_INIT",
    (reponse: IGlobalResponse<ILocation>) => {
        return {
            payload: reponse,
        };
    }
);

export const LocationChangePageAction = createAction(
    "LOCATION_CHANGE_PAGE",
    (reponse: IGlobalResponse<ILocation>) => {
        return {
            payload: reponse,
        };
    }
);

export const LocationSelectAction = createAction(
    "LOCATION_SELECT",
    (location: ILocation | null) => {
        return {
            payload: location,
        };
    }
);
