import { ICharacter } from "@interfaces/models/ICharacter";
import { IGlobalResponse } from "@interfaces/response/IGlobalResponse";

export interface ICharacterReducer {
    list: IGlobalResponse<ICharacter> | null
    selected: ICharacter
}