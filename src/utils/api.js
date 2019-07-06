/**
 * Description: Api creater
 * Date: 4/23/2019
 */

import axios from 'axios/index';

export const root = "http://localhost:3000";
export const apiRoot = root + "/search";

// export const defaultAvatar = root + '/employees/avatar/default-male.png';

export const xapi = (optional) => {

    let headers = {
        // Authorization: `Bearer ${localStorage.token}`,
        'Content-Type': optional
    }

    let xapi = axios.create({
        baseURL: apiRoot,
        headers: headers
    });

    return xapi;
};
