export const ApiUrl = () => {
    return process.env.NODE_ENV === "development" ?  "https://rickandmortyapi.com/api": "https://rickandmortyapi.com/api"
}