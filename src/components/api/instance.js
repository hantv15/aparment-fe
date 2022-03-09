const axios = require('axios');
const { API } = require('../../config');

const instance = axios.create({
    baseURL: API,
})

export default instance;