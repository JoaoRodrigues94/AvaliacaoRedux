import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
    numeros: function (state, action) {
        switch (action.type) {
            case 'NEW_VALUE':
                return {
                    ...state,
                    newValue: action.payload
                }
                break;

            default:
                return {
                    newValue: 0
                }
                break;
        }
    }
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig;