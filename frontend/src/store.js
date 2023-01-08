import { createStore, combineReducers, applyMiddleware } from "redux";
// createStore is for creating our 
// combineReducers will help us to combine all reducers into one unit 
// applyMiddleware  will help us to apply Middleware into our application 
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer } from "./reducers/userReducers";

const reducer = combineReducers({
    userLogin: userLoginReducer
});

const initialState = {};
const middleware = [thunk];

const store = createStore(
    reducer, initialState, composeWithDevTools(applyMiddleware(...middleware))
);

export default store;













