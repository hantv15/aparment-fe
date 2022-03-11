import instance from "../common/instance";

export const get = (param) => {
    const url = `/service?${param}`;
    return instance.get(url);
}

export const removeService = (id) => {
    const url = `/ar`
}