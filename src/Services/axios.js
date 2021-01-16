import axios from "axios";
import {AXIOS_CONFIG} from "../Config";

export const AXIOS = axios.create(AXIOS_CONFIG);