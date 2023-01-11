import { createStore, combineReducers, applyMiddleware } from "redux";
// createStore is for creating our 
// combineReducers will help us to combine all reducers into one unit 
// applyMiddleware  will help us to apply Middleware into our application 
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";
import { noteListReducer, noteCreateReducer, noteUpdateReducer, noteDeleteReducer } from "./reducers/notesReducers";

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    noteList: noteListReducer,
    noteCreate: noteCreateReducer,
    noteUpdate: noteUpdateReducer,
    noteDelete: noteDeleteReducer
});

const userInformation = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null

const initialState = {
    userLogin: { userInfo: userInformation }
};
const middleware = [thunk];

const store = createStore(
    reducer, initialState, composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
