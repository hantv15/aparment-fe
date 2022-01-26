import { API } from '../config'
export const sigIn = (user) => {
    return fetch(`https://6129f47c068adf001789b9ad.mockapi.io/user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}

export const sigUp = (user) => {
    return fetch(`${API}/user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .catch(error => console.log(error))
}

export const authenticate = (data, next) => {
    if ( typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(data));
        next();
    }
}

export const sigOut = (next) => {
    if ( typeof window !== 'undefined') {
        localStorage.removeItem('user')
        next()
        // return fetch(`${API}/signout`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // })
        // .then(response => response.json())
        // .catch(error => console.log(error))
    }
}

export const isAuthenticate = () => {
    if (typeof window == 'undefined') {
        return false
    }
    if (localStorage.getItem('user')) {
        return JSON.parse(localStorage.getItem('user'))
    } else {
        return false
    }
}