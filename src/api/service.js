import instance from "../common/instance";

export const get = (param) => {
    const url = `/service?${param}`;
    return instance.get(url);
}

export const addService = (data) => {
    const url = `/service/add`;
    return instance.post(url, data);
}