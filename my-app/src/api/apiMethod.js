import axios from "../config/endpoint";

const getAll = () => {
    return axios.get('/user');
};
const create = (data) => {
    return axios.post('/user',data);
};
const update = (id, data) => {
    return axios.put(`/user/${id}`,data);
};
const getById = (id) => {
    return axios.get(`/user/${id}`);
};
const remove = (id) => {
    return axios.delete(`/user/${id}`)
}
// const get = id => {
//     return axios.get()
// }

const ApiMethod = {
    getAll,
    create,
    update,
    getById,
    remove
}

export default ApiMethod;