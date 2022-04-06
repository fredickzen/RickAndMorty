import { ICharacter } from "@interfaces/models/ICharacter";
import { IGlobalResponse } from "@interfaces/response/IGlobalResponse";
import { createAction } from "@reduxjs/toolkit";

export const CharacterInitAction = createAction(
    "CHARACTER_CHANGE_INIT",
    (reponse: IGlobalResponse<ICharacter>) => {
        return {
            payload: reponse,
        };
    }
);

export const CharacterChangePageAction = createAction(
    "CHARACTER_CHANGE_PAGE",
    (reponse: IGlobalResponse<ICharacter>) => {
        return {
            payload: reponse,
        };
    }
);

export const CharacterSelectAction = createAction(
    "CHARACTER_SELECT",
    (character: ICharacter | null) => {
        return {
            payload: character,
        };
    }
);
