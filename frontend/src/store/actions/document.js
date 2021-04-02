import axios from "axios";

import {
    FETCH_DATA_FAIL,
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
} from "../constants";

var appUrl = "http://localhost:8080/order-get";


export const fetchDataRequest = () => {
    return {
        type: FETCH_DATA_REQUEST,
    };
};

export const fetchDataSuccess = (data) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data,
    };
};

export const fetchDataFail = (error) => {
    return {
        type: FETCH_DATA_FAIL,
        payload: error,
    };
};


export const fetchdata = () => {
    return (dispatch) => {
        dispatch(fetchDataRequest());
        axios.get(`${appUrl}`)
            .then(({data}) => dispatch(fetchDataSuccess(data)))
            .catch((error) => {
                dispatch(fetchDataFail(error.message));
            });
    };
};
