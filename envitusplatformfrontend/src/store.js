import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
	dashboardDataReducer,
	dashboardDataTestReducer,
	deviceDetailsReducer,
	deviceListReducer,
	getDeviceReducers,
	sampleDashDataReducer,
} from "./reducers/deviceReducers";
import { organizationListReducer } from "./reducers/organisationReducer";
import {
	liveDataReducer,
	sensorParameterListReducer,
	sensorTypeListReducer,
} from "./reducers/sensorReducers";
import { userDeleteReducer, userListReducer } from "./reducers/userReducers";

const initialState = {};
const reducer = combineReducers({
	userList: userListReducer,
	deleteUser: userDeleteReducer,
	organizationList: organizationListReducer,
	deviceList: deviceListReducer,
	sensorList: sensorTypeListReducer,
	sensorParameterList: sensorParameterListReducer,
	livedata: liveDataReducer,
	dashboardData: dashboardDataReducer,
	getDevice: getDeviceReducers,
	deviceDetails: deviceDetailsReducer,
	dashboarddatatest: dashboardDataTestReducer,
	sampleDashData: sampleDashDataReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducer,
	initialState,
	composeEnhancer(applyMiddleware(thunk))
);

export default store;
