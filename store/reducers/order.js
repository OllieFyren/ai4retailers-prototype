import { STORE_ORDER, CREATE_ORDER } from "../actions/order"


const initialState = {
    order: {
        scoops: '',
        selectedFlavours: [],
        selectedToppings: [],
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case STORE_ORDER:
            return {
                ...state,
                order: action.order
            }
        case CREATE_ORDER:
            return {
                ...state
            }
    }
    return state;
}