import axios, { AxiosInstance } from "axios";
import { ApiUrl } from "./env";

//En estos apartados igual podemos inyectar el token, ya sea del propio redux, como del sesion/local storage

export const Axios = (): AxiosInstance => {

    const axiosCreated = axios.create({
        baseURL: ApiUrl()
    });

    axiosCreated.interceptors.request.use(
        (request) => {
            console.log( "Usando interceptors:", request);
            return request;
        }
    );

    return axiosCreated;
};

export const AxiosFormData = (): AxiosInstance => {

    const axiosCreated = axios.create({
        baseURL: ApiUrl()
    });

    axiosCreated.interceptors.response.use(
        (response) => {
            console.log( "Usando interceptors:", response);
            return response;
        }
    )

    return axiosCreated;
};



export const AxiosExecute = (): AxiosInstance => {

    const axiosCreated = axios.create({});
    axiosCreated.interceptors.request.use(
        (response) => {
            console.log( "Usando interceptors:", response);
            return response;
        }
    );
    return axiosCreated;
};