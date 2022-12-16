import {
	DASHBOARD_DATA_FAIL,
	DASHBOARD_DATA_REQUEST,
	DASHBOARD_DATA_SUCCESS,
	DEVICE_DATA_FAIL,
	DEVICE_DATA_REQUEST,
	DEVICE_DETAILS_FAIL,
	DEVICE_DETAILS_REQUEST,
	DEVICE_DETAILS_SUCCESS,
	DEVICE_LIST_FAIL,
	DEVICE_LIST_REQUEST,
	DEVICE_LIST_SUCCESS,
} from "../constants/deviceConstants";
import {
	SAMPLE_GRAPH_FAIL,
	SAMPLE_GRAPH_REQUEST,
	SAMPLE_GRAPH_SUCCESS,
} from "../constants/sensorConstants";

export const deviceListReducer = (
	state = { loading: true, device: [] },
	action
) => {
	switch (action.type) {
		case DEVICE_LIST_REQUEST:
			return { loading: true };
		case DEVICE_LIST_SUCCESS:
			return { loading: false, device: action.payload };
		case DEVICE_LIST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const getDeviceReducers = (
	state = { device_loading: true, device_details: {} },
	action
) => {
	switch (action.type) {
		case DEVICE_DATA_REQUEST:
			return { device_loading: true };
		case DEVICE_LIST_SUCCESS:
			return { device_loading: false, device_details: action.payload };
		case DEVICE_DATA_FAIL:
			return { device_loading: false, error: action.payload };
		default:
			return state;
	}
};

export const deviceDetailsReducer = (
	state = { device_details_loading: true, device_data: [] },
	action
) => {
	switch (action.type) {
		case DEVICE_DETAILS_REQUEST:
			return { device_details_loading: true };
		case DEVICE_DETAILS_SUCCESS:
			return { device_details_loading: false, device_data: action.payload };
		case DEVICE_DETAILS_FAIL:
			return { device_details_loading: false, error: action.payload };
		default:
			return state;
	}
};

export const sampleDashDataReducer = (
	state = { sample_loading: true, sampleDashData: [] },
	action
) => {
	switch (action.type) {
		case SAMPLE_GRAPH_REQUEST:
			return { sample_loading: true };
		case SAMPLE_GRAPH_SUCCESS:
			return { sample_loading: false, sampleDashData: action.payload };
		case SAMPLE_GRAPH_FAIL:
			return { sample_loading: false, error: action.payload };
		default:
			return state;
	}
};

export const dashboardDataReducer = (
	state = { loadingTime: true, dashboardData: [] },
	action
) => {
	switch (action.type) {
		case DASHBOARD_DATA_REQUEST:
			return { loadingTime: true };
		case DASHBOARD_DATA_SUCCESS:
			return { loadingTime: false, dashboardData: action.payload };
		case DASHBOARD_DATA_FAIL:
			return { loadingTime: false, error: action.payload };
		default:
			return state;
	}
};

export const dashboardDataTestReducer = (
	state = { loadingTimetest: true, liveDataforDashboardtest: [] },
	action
) => {
	switch (action.type) {
		case DASHBOARD_DATA_REQUEST:
			return { loadingTimetest: true };
		case DASHBOARD_DATA_SUCCESS:
			return {
				loadingTimetest: false,
				liveDataforDashboardtest: action.payload,
			};
		case DASHBOARD_DATA_FAIL:
			return { loadingTimetest: false, error: action.payload };
		default:
			return state;
	}
};
