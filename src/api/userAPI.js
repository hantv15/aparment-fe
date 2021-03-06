import instance from "../common/instance";

export const getUsers = (param) => {
    const url = `/user/list?${param}`;
    return instance.get(url);
}

export const NoGetPageService = (param) => {
    const url = `/user/list?${param}`;
    return instance.get(url);
}

export const getUser = (id) => {
    const url = `/user/${id}`;
    return instance.get(url);
}