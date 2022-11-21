import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { deviceListReducer } from "./reducers/deviceReducers";
import { organizationListReducer } from "./reducers/organisationReducer";
import { userDeleteReducer, userListReducer } from "./reducers/userReducers";

const initialState = {};
const reducer = combineReducers({
  userList: userListReducer,
  deleteUser: userDeleteReducer,
  organizationList: organizationListReducer,
  deviceList: deviceListReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
