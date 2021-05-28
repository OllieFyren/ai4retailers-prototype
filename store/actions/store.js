export const FIND_STORE = 'FIND_STORE';
export const FIND_SELECTION = 'FIND_SELECTION';

export const findStore = (zipCode) => {
    return async dispatch => {
        const response = await fetch('http://192.168.0.14:8080/api/app/store/find/' + zipCode);
        const resData = await response.json();
        dispatch({
            type: FIND_STORE,
            stores: resData
        })
    }
};

export const findSelection = (storeId) => {
    return async dispatch => {
        const response = await fetch('http://192.168.0.14:8080/api/app/selection/find/' + storeId);
        const resData = await response.json();
        dispatch({
            type: FIND_SELECTION,
            selection: resData
        })

    }
};