import instance from "./instance";
import { isAuthenticate } from "../auth";

export const getAll = () => {
    const url = '/departments';
    return instance.get(url);
}

export const remove = (id) => {
    const url = `/departments/${id}`;
    return instance.delete(url);
}

export const add = (item) => {
    const url = "/departments";
    return instance.post(url, item);
}