import instance from "../common/instance";

export const get = (param) => {
     const url = `/bill?${param}`;

     return instance.get(url);
}

export const NoGetPage = (param) => {
     const url = `/bill?${param}`;

     return instance.get(url);
}