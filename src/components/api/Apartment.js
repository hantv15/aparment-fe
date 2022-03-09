import instance from "./instance";

export const getApartment = (param) => {
    const url = `/apartment?${param}`;
    return instance.get(url);
}