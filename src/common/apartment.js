import instance from "./instance";

export const get = (param) => {
    const url = `/apartment?${param}`;
    return instance.get(url);
}