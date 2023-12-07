import * as request from "../lib/request";

const url = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3030'
    : 'http://localhost:3030' // Add deployed server url

const baseUrl = `${url}/data/products`

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return result;
};

export const getOne = async (productId) => {
    try {
        const result = await request.get(`${baseUrl}/${productId}`, );
        return result;
    } catch (error) {
        throw error.message
    }
    
}

export const create = async (productData) => {
    if (Object.values(productData).includes('')) {
        throw 'Empty fields are not allowed!'
    }

    const result = await request.post(baseUrl, productData);

    return result;
};

export const edit = async (productId, productData) => {
    if (Object.values(productData).includes('')) {
        throw 'Empty fields are not allowed!'
    }
    const result = await request.put(`${baseUrl}/${productId}`, productData);

    return result;
};

export const remove = async (productId) => {
    
    request.remove(`${baseUrl}/${productId}`)
};