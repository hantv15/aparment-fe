import instance from '../api/instance';
import axios from "axios";
export const signIn = (data) => {
    const url = '/login';
    return instance.post(url, data);
}

export const logOut = () => {
    const { data } = isAuthenticate();
    const url = '/logout';
    localStorage.removeItem('user');
    return instance.post(url, {
        headers: {
            Authorization: `Bearer ${data.token}`
        }
    });
}

export const authenticate = (data) => {
    if (typeof window != undefined) {
        localStorage.setItem('user', JSON.stringify(data));
    }
}

export const isAuthenticate = () => {
    if (typeof window == 'undefined') {
        return false;
    }

    if (localStorage.getItem('user')) {
        return JSON.parse(localStorage.getItem('user'));
    } else {
        return false;
    }
}
