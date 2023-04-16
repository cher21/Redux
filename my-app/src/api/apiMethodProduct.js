import axios from "../config/endpoint";

const getAll = () => {
    return axios.get('/product');
};
const create = (data) => {
    return axios.post('product/upload',data, {
        headers:{
            "Content-Type":'multipart/form-data'
        }
    })
};
const update = (id, data) => {
    return axios.put(`/product/upload/${id}`,data, {
        headers:{
            "Content-Type":'multipart/form-data'
        }
    });
    
};
const getById = (id) => {
    return axios.get(`/product/${id}`);
};
const remove = (id) => {
    return axios.delete(`/product/upload/${id}`)
}


const ApiMethodProduct = {
    getAll,
    create,
    update,
    getById,
    remove,
}

export default ApiMethodProduct;