import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const composeEnhancers = composeWithDevTools({});

const initialState = {
    cartReducer : {
        cartItems : JSON.parse(localStorage.getItem('cartItems')) ?? []
    }
}
export const store = createStore(rootReducer, initialState, composeEnhancers());