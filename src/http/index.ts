import axios from "axios";
import {API_URL} from "../constants/api";

const $api = axios.create({
    withCredentials: false,
    baseURL: API_URL,
})

export {$api};