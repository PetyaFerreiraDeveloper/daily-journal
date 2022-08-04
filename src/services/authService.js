import * as request from "./requester";

const baseUrl = 'http://localhost:3030/users';


export const login = (values) => request.post(`${baseUrl}/login`, values);

export const logout = async (accessToken) => {
    try {
        const res = await fetch(`${baseUrl}/logout`, {
            headers: {
                'X-Authorization': accessToken
            }
        });
        return res;
    } catch (error) {
        console.log(error);
    }
}




