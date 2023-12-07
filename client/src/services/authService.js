import * as request from '../lib/request';

const url = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3030'
    : 'http://localhost:3030' // Add deployed server url

const baseUrl = `${url}/users`;

export const login = async (email, password) => {
    const result = await request.post(`${baseUrl}/login`, {
        email,
        password,
    });

    return result;
};

export const register = (email, password, username, profilePictureUrl) => request.post(`${baseUrl}/register`, {
    email,
    password,
    username, 
    profilePictureUrl
});

export const logout = () => request.get(`${baseUrl}/logout`);