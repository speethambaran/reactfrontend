import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
<<<<<<< HEAD
=======
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
>>>>>>> 782cbe17d919fcaf34694c90c1d2889418a7af26
import { userDeleteReducer, userListReducer } from "./reducers/userReducers";

const initialState = {};
const reducer = combineReducers({
<<<<<<< HEAD
  userList: userListReducer,
  deleteUser: userDeleteReducer
=======
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
>>>>>>> 782cbe17d919fcaf34694c90c1d2889418a7af26
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
