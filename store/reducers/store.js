import { FIND_STORE, FIND_SELECTION } from '../actions/store';

const initialState = {
    availableStores: [],
    selection: [],
    filteredSelection: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FIND_STORE:
            return {
                ...state,
                availableStores: action.stores
            };
        case FIND_SELECTION:
            return {
                ...state,
                selection: action.selection[0],
                filteredSelection: [
                    action.selection[0].firstFlavour,
                    action.selection[0].secondFlavour,
                    action.selection[0].thirdFlavour,
                    action.selection[0].fourthFlavour,
                    action.selection[0].fifthFlavour,
                    action.selection[0].sixthFlavour,
                    action.selection[0].seventhFlavour,
                    action.selection[0].eighthFlavour,
                ]
            }
    }
    return state;
}