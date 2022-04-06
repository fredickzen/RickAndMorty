
import { Axios } from "@config/axios";
import { ICharacter } from "@interfaces/models/ICharacter";
import { IGlobalResponse } from "@interfaces/response/IGlobalResponse";

const endpoint = "character";

//Como se usa en esta API
const GetPage = async (url: string) => {
    return await Axios().get<IGlobalResponse<ICharacter>>(url);
};

//Como se usa generalmente
const GetAll = async () => {
    return await Axios().get<IGlobalResponse<ICharacter>>(endpoint);
};

const GetSingle = async (id: number) => {
    return await Axios().get<ICharacter>(`${endpoint}/${id}`);
};

export const ApiCharacter = {
    GetPage,
    GetAll,
    GetSingle,
};
