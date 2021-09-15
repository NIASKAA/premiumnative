import { createStore } from "redux";
import {reducers} from "./reducers";

const initialState = {
    getConverges: [],
    getHG: [],
    getRG: [],
    getMG: [],
    getPG: [],
    getSD: [],
    getOthers: [],
    getHGWish: [],
}

export default createStore(reducers, initialState);