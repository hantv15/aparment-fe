import instance from "./instance";
import { isAuthenticate } from "../auth";

export const getAll = () => {
    const url = '/departments';
    return instance.get(url);
}

export const get = (id) => {
    const url = `/departments/${id}`;
    return instance.get(url);
}

export const searchName = (keyWord) => {
    const url = `/departments?department_id=${keyWord}`;
    return instance.get(url);
}

export const edit = (item) => {
    const url = `/departments/${item.id}`;
    return instance.put(url, item);
};

export const getPagination = (page, limit) => {
    const url = `/departments?page=${page}&limit=${limit}`;
    return instance.get(url, page, limit);
}

export const fetchPagination = (currentPage, limit) => {
    const url = `/departments?page=${currentPage}&limit=${limit}`;
    return instance.get(url, currentPage, limit);
}

export const remove = (id) => {
    const url = `/departments/${id}`;
    return instance.delete(url);
}

export const add = (item) => {
    const url = "/departments";
    return instance.post(url, item);
}