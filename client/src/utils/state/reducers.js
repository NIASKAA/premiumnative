import {GET_CONVERGES, GET_HGS, GET_RGS, GET_MGS, GET_PGS, GET_SDS, GET_OTHERS} from './actions'

export const reducers = (state, action) => {
    switch (action.type) {
        case GET_CONVERGES:
            return {
                ...state,
                getConverges: action.payload
            };
        
        case  GET_HGS: 
            return {
                ...state,
                getHG: action.payload
            };

        case GET_RGS:
            return {
                ...state,
                getRG: action.payload
            };

        case GET_MGS: 
            return {
                ...state,
                getMG: action.payload
            };

        case GET_PGS:
            return {
                ...state,
                getPG: action.payload
            };

        case GET_SDS:
            return {
                ...state,
                getSD: action.payload
            };
        case GET_OTHERS: 
            return {
                ...state,
                getOther: action.payload
            }
        default: 
            return state;
    }
}