import * as request from '../lib/request';

const url = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3030'
    : 'https://nikkivasilev-server-exam-deployment.onrender.com' // Add deployed server url

const baseUrl = `${url}/data/comments`;

export const getAll = async (productId) => {
    const query = new URLSearchParams({
        where: `productId="${productId}"`,
        load: `owner=_ownerId:users`,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const getOne = async (commentId) => {
    const result = await request.get(`${baseUrl}/${commentId}`, );

    return result;
}


export const create = async (productId, text) => {
    const newComment = await request.post(baseUrl, {
        productId,
        text,
    });

    return newComment;
};

export const edit = async (comment) => {
    const commentId = comment._id
    const text = comment.text
    if (!text) {
        throw "Empty fields are not allowed!"
    }
    const result = await request.put(`${baseUrl}/${commentId}`, {
        text
    });

    return result
}


export const remove = async (commentId) => {
    
    request.remove(`${baseUrl}/${commentId}`)
};