import { createStore } from "redux";
import {reducers} from "./reducers";

const initialState = {
    getConverges: [],
    getHG: [],
    getRG: [],
    getMG: [],
    getPG: [],
    getSD: [],
    getOthers: []
}

export default createStore(reducers, initialState);