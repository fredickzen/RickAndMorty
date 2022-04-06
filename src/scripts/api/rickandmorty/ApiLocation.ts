
import { Axios } from "@config/axios";
import { ILocation } from "@interfaces/models/ILocation";
import { IGlobalResponse } from "@interfaces/response/IGlobalResponse";

const endpoint = "location";


//Como se usa en esta API
const GetPage = async (url: string) => {
    return await Axios().get<IGlobalResponse<ILocation>>(url);
};

//Como se usa generalmente

const GetAll = async () => {
    return await Axios().get<IGlobalResponse<ILocation>>(endpoint);
};

const GetSingle = async (id: number) => {
    return await Axios().get<ILocation>(`${endpoint}/${id}`);
};


export const ApiLocation = {
    GetPage,
    GetAll,
    GetSingle,
};
