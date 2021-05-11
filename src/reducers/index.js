import {combineReducers} from 'redux';
import products from './productReducer';
import cart from './cartReducer';

var appReducers = combineReducers({
    products : products,
    cart : cart
});

export default appReducers;