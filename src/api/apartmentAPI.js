import instance from "../common/instance";

export const addApartment = (data) => {
    const url = `/apartment`;
    return instance.post(url, data);
}
