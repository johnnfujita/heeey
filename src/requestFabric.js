import axios from "axios";

const requestFabric = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export default requestFabric