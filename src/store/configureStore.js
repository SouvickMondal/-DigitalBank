import {createStore,combineReducers} from 'redux';
import carDealsReducer from '../reducers/cars/Deals.js';
import carFiltersReducer from '../reducers/cars/Filters.js';
import carDealsData from '../data/CarDeals.js'
import User from '../data/user.js'
import loginReducer from '../reducers/users/loginReducer.js'
import setPasswordReducer from '../reducers/users/setPasswordReducer.js'
//Store Creation

const configureStore = function() {
    const store = createStore(
        combineReducers({
            carDeals : carDealsReducer,
            carFilters : carFiltersReducer,
            loginData: loginReducer,
            setPasswordData: setPasswordReducer
            
        }),
        {
            carDeals:carDealsData,
            loginData:User,
            setPasswordData:User
        },
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};
export default configureStore;