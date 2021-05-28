export const STORE_ORDER = 'STORE_ORDER';
export const CREATE_ORDER = 'CREATE_ORDER';

export const storeOrder = (orderDetails) => {
    return dispatch => {
        const order = {
            scoops: orderDetails.scoops,
            selectedFlavours: orderDetails.selectedFlavours,
            selectedToppings: orderDetails.selectedToppings
        }
        dispatch({
            type: STORE_ORDER,
            order: order
        })
    }
}

export const createOrder = (orderDetails) => {
    return async dispatch => {
        try{const response = await fetch('http://192.168.0.14:8080/api/app/order/create', {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                userId: orderDetails.id,
                firstChoice: orderDetails.first,
                secondChoice: orderDetails.second,
                thirdChoice: orderDetails.third,
                firstTopping: orderDetails.firstTop,
                secondTopping: orderDetails.secondTop
            })
        })
        dispatch({
            type: CREATE_ORDER
        })} catch(err) {
            setError(err.message);
        }
    }
}