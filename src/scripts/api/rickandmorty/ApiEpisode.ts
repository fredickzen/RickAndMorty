
import { Axios } from "@config/axios";
import { IEpisode } from "@interfaces/models/IEpisode";
import { IGlobalResponse } from "@interfaces/response/IGlobalResponse";

const endpoint = "episode";

//Como se usa en esta API
const GetPage = async (url: string) => {
    return await Axios().get<IGlobalResponse<IEpisode>>(url);
};

//Como se usa generalmente
const GetAll = async () => {
    return await Axios().get<IGlobalResponse<IEpisode>>(endpoint);
};

const GetSingle = async (id: number) => {
    return await Axios().get<IEpisode>(`${endpoint}/${id}`);
};


export const ApiEpisode = {
    GetPage,
    GetAll,
    GetSingle,
};
