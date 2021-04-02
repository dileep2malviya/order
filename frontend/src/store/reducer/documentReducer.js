import * as actionType from "../constants";

const initialState = {
    loading: false,
    documentdata: [],
    error: "",
};

export const DocumentReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case actionType.FETCH_DATA_SUCCESS:
            return {
                loading: false,
                documentdata: action.payload,
                error: "",
            };
        case actionType.FETCH_DATA_FAIL:
            return {
                loading: false,
                documentdata: [],
                error: action.payload,
            };
        default:
            return state;
            
    }
};