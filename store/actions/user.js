export const LOG_IN = 'LOG_IN';
export const REGISTER = 'REGISTER'

export const logIn = (username, password) => {
    return async dispatch => {
        const response = await fetch('http://192.168.0.14:8080/api/app/user/login/'+ username + '/' + password);
        const resData = await response.json();
        dispatch({
            type: LOG_IN,
            userId: resData[0].userId,
            isLoggedIn: true,
        })
    }
}
export const register = (username, password) => {
    return async dispatch => {
        const response = await fetch('http://192.168.0.14:8080/api/app/user/create', {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        dispatch({
            type: REGISTER,
            registerSuccess: true,
        })
    }
}