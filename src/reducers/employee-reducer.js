import {RestClientService} from "../service/RestClientService";

export const getEmployee = (url, payload) => {
    return async (dispatch, getState) => {
        // const state = getState();

        let response = await RestClientService.post(url, payload);
        console.log("RES:"+ JSON.stringify(response));
        if (response) {
           }
    };
};
