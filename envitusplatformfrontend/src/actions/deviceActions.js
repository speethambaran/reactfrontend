import {
	DASHBOARD_DATA_FAIL,
	DASHBOARD_DATA_REQUEST,
	DASHBOARD_DATA_SUCCESS,
	DEVICE_DATA_FAIL,
	DEVICE_DATA_REQUEST,
	DEVICE_DATA_SUCCESS,
	DEVICE_DETAILS_FAIL,
	DEVICE_DETAILS_REQUEST,
	DEVICE_DETAILS_SUCCESS,
	DEVICE_LIST_FAIL,
	DEVICE_LIST_REQUEST,
	DEVICE_LIST_SUCCESS,
	DEVICE_LIVEDATA_FAIL,
	DEVICE_LIVEDATA_REQUEST,
	DEVICE_LIVEDATA_SUCCESS,
} from "../constants/deviceConstants";

import Axios from "axios";
import { BASE_URL } from "../constants/AppliationConstants";
import {
	SAMPLE_GRAPH_FAIL,
	SAMPLE_GRAPH_REQUEST,
	SAMPLE_GRAPH_SUCCESS,
} from "../constants/sensorConstants";

export const listDevices = () => async (dispatch) => {
	dispatch({
		type: DEVICE_LIST_REQUEST,
	});
	try {
		const data = await Axios.get(`${BASE_URL}/getdevice`);
		let deviceData = data.data.message;
		for (let i = 0; i < deviceData.length; i++) {
			if (
				new Date().valueOf() - deviceData[i].lastDataReceiveTime <
				15 * 60 * 1000
			) {
				deviceData[i].isOnline = true;
			} else {
				deviceData[i].isOnline = false;
			}
		}
		dispatch({ type: DEVICE_LIST_SUCCESS, payload: deviceData });
	} catch (error) {
		dispatch({ type: DEVICE_LIST_FAIL, payload: error.message });
	}
};

export const getDevice = (deviceId) => async (dispatch) => {
	dispatch({ type: DEVICE_DATA_REQUEST });
	try {
		const data = await Axios.get(`${BASE_URL}/getdevice`);
		let details = data.data.message;
		let deviceDetails = details.find((x) => {
			return x.deviceId == deviceId;
		});

		dispatch({ type: DEVICE_DATA_SUCCESS, payload: deviceDetails });
	} catch (error) {
		dispatch({ type: DEVICE_DATA_FAIL, payload: error.message });
	}
};

export const listLivedata = () => async (dispatch) => {
	dispatch({
		type: DEVICE_LIVEDATA_REQUEST,
	});
	try {
		const data = await Axios.get(`${BASE_URL}/getlivedata`);
		dispatch({ type: DEVICE_LIVEDATA_SUCCESS, payload: data.data.message });
	} catch (error) {
		dispatch({ type: DEVICE_LIVEDATA_FAIL, payload: error.message });
	}
};

const splitKeyValue = (obj) => {
	const keys = Object.keys(obj);
	const res = [];
	for (let i = 0; i < keys.length; i++) {
		res.push({
			x: keys[i],
			y: obj[keys[i]],
		});
	}
	return res;
};

const splitKeyTestValue = (obj) => {
	const keys = Object.keys(obj);
	const res = [];
	for (let i = 0; i < keys.length; i++) {
		res.push({
			x: keys[i],
			y: obj[keys[i]],
		});
	}
	return res;
};

export const getDashboardData = (deviceId) => async (dispatch) => {
	dispatch({ type: DASHBOARD_DATA_REQUEST });
	try {
		let finalRes;
		const deviceData = await Axios.get(`${BASE_URL}/getdevice`);
		let { data } = await Axios.get(
			`${BASE_URL}/getlivedata?deviceId=${deviceId}`
		);
		data = data.message;

		function compare(a, b) {
			if (a.receivedTime < b.receivedTime) {
				return -1;
			}
			if (a.receivedTime > b.receivedTime) {
				return 1;
			}
			return 0;
		}
		let result = data.sort(compare);
		result = result.pop();
		let resArr = [];
		let dataArr = [];
		delete result.data["receivedTime"];
		dataArr.push(splitKeyValue(result.data));

		let resObj = {};
		resObj.id = "patnaenvtest";
		resObj.color = "hsl(214, 70%, 50%)";
		resObj.data = dataArr[0];
		resArr.push(resObj);

		// dispatch({type: DASHBOARD_DATA_SUCCESS,payload:result.pop()})
		dispatch({ type: DASHBOARD_DATA_SUCCESS, payload: resArr });
	} catch (error) {
		dispatch({ type: DASHBOARD_DATA_FAIL, payload: error.message });
	}
};

// {
// 	id: "Pressure",
// 	color: "hsl(504, 70%, 50%)",
// 	data: [
// 		{
// 			x: "1",
// 			y: 0,
// 		},
// 	]
// }

export const sampleLiveDataGraph = (deviceId) => async (dispatch) => {
	dispatch({ type: SAMPLE_GRAPH_REQUEST });
	try {
		let { data } = await Axios.get(`${BASE_URL}/getlivedata`);
		data = data.message;
		let testArr = [];
		function compare(a, b) {
			if (a.receivedTime < b.receivedTime) {
				return -1;
			}
			if (a.receivedTime > b.receivedTime) {
				return 1;
			}
			return 0;
		}
		let result = data.sort(compare);
		let lastTenData = result.slice(Math.max(result.length - 10, 0));

		// testArr.push(splitKeyTestValue(lastTenData.data));
		// console.log("TEST ARRAY-------------", lastTenData);
		dispatch({ type: SAMPLE_GRAPH_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: SAMPLE_GRAPH_FAIL, payload: error.message });
	}
};

export const dashboardDataTest = (deviceId) => async (dispatch) => {
	dispatch({ type: DASHBOARD_DATA_REQUEST });
	try {
		let finalRes;
		const deviceData = await Axios.get(`${BASE_URL}/getdevice`);
		let { data } = await Axios.get(
			`${BASE_URL}/getlivedata?deviceId=${deviceId}`
		);
		data = data.message;

		function compare(a, b) {
			if (a.receivedTime < b.receivedTime) {
				return -1;
			}
			if (a.receivedTime > b.receivedTime) {
				return 1;
			}
			return 0;
		}
		let result = data.sort(compare);
		let testvar = result;
		testvar = testvar.slice(Math.max(testvar.length - 10, 0));
		// console.log("type==========", typeof testvar);
		let testObj;
		for (let i = 0; i < testvar.length; i++) {
			const e = testvar[i].data;
			// Object.values(e).forEach((item) => {
			// 	console.log(`KEY : ${e[item]} ,value : ${item}`);
			// });
			let keys = Object.keys(e);
			// keys.forEach((val) => console.log(`There are ${e[val]} ${val}`));  There are 68.48 noise
			let singleObj = {};

			// keys.forEach((val) => {
			// 	console.log("VAL------------", val);
			// 	testObj.id = val;
			// 	if (val === 3) {
			// 		break;
			// 	}
			// });
			// console.log("test============", testObj);
			// console.log("soingle ---------", singleObj);
			// console.log("E==========", e);
		}
		// console.log("result==============", testvar);
		result = result.pop();
		let resArr = [];
		let dataArr = [];
		delete result.data["receivedTime"];
		dataArr.push(splitKeyValue(result.data));

		let resObj = {};
		resObj.id = "patnaenvtest";
		resObj.color = "hsl(214, 70%, 50%)";
		resObj.data = dataArr[0];
		resArr.push(resObj);

		// dispatch({type: DASHBOARD_DATA_SUCCESS,payload:result.pop()})
		dispatch({ type: DASHBOARD_DATA_SUCCESS, payload: resArr });
	} catch (error) {
		dispatch({ type: DASHBOARD_DATA_FAIL, payload: error.message });
	}
};
