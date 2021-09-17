import React from 'react';
import axios from 'axios';


const makeGetCall = async (url,_options) => {

    // console.log("GET request : "+ JSON.stringify(url));

    let options = _options? _options : {
        headers: {
            'Content-Type': 'application/json',
           // 'Authorization': localStorage.getItem("AUTH-TOKEN")
        }
    };

    try {
        const response = await axios.get(url, options);
        // console.log("GET Response : "+ JSON.stringify(response.data));
        // console.log(response.data);
        if(response.data) {
            return response.data
        }
        return null;
    } catch (error) {
        handleError(error);
        return error.response;
    }

};

const makePostCall = async (url, body, _options) => {
    console.log("POST request : "+ JSON.stringify(body));
    console.log("POST request body: "+ JSON.stringify(body));

    let options = _options? _options : {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer "+localStorage.getItem("AUTH-TOKEN" )
        }
    };

    try {
        const response = await axios.post(url, body, options);
        // console.log("POST Response : "+ JSON.stringify(response.data));
        // console.log(response.data);
        if(response.data) {
            return response.data
        }
        return null;
    } catch (error) {
        handleError(error);
        return error.response;
    }

};

const makePutCall = async (url, body, _options) => {
    console.log("PUT request : "+ JSON.stringify(body));


    let options = _options? _options : {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer "+localStorage.getItem("AUTH-TOKEN" )
        }
    };

    try {
        const response = await axios.put(url, body, options);
        if(response.data) {
            return response.data
        }
        return null;
    } catch (error) {
        handleError(error);
        return error.response;
    }

};

function handleError(error) {

    console.log(JSON.stringify(error));

    if (error.response) {
        if (error.response.status === 403) {
            localStorage.removeItem("AUTH-TOKEN" );
            /*  alert("Please wait, auto login in progress.");
              // logic to redirect to login page.
              login();*/
        }

        if (error.response.status === 401) {

            // AuthGuard.logout(()=>{});
            alert(error.response);
            /*
              // logic to redirect to login page.
              login();*/

        }
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        // console.log("ERROR:  "+ error.response.data);
        // console.log("ERROR:  "+error.response.status);
        // console.log("ERROR:  "+JSON.stringify(error.response.headers));
    } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log(error.request);
    } else {
        // Something happened in setting up the request and triggered an Error
        // console.log('Error', error.message);
    }

}


export const RestClientService = {
    post: makePostCall,
    get: makeGetCall,
    put:makePutCall
};
