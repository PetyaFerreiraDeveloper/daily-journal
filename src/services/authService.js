import * as request from "./requester";

const baseUrl = 'http://localhost:3030';


export const login = (values) => request.post(`${baseUrl}/users/login`, values);



