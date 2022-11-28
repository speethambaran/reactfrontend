import {
    SENSOR_LIST_FAIL,
    SENSOR_LIST_REQUEST,
    SENSOR_LIST_SUCCESS,
    SENSOR_PARAMETER_FAIL,
    SENSOR_PARAMETER_REQUEST,
    SENSOR_PARAMETER_SUCCESS
}
    from "../constants/sensorConstants";

export const sensorTypeListReducer = (
    state = { loading: true, sensors: [] },
    action
) => {
    switch (action.type) {
        case SENSOR_LIST_REQUEST:
            return { loading: true };
        case SENSOR_LIST_SUCCESS:
            return { loading: false, sensors: action.payload };
        case SENSOR_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const sensorParameterListReducer = (
    state = { loading: true, parameters: [] },
    action
) => {
    switch (action.type) {
        case SENSOR_PARAMETER_REQUEST:
            return { loading: true };
        case SENSOR_PARAMETER_SUCCESS:
            return { loading: false, parameters: action.payload };
        case SENSOR_PARAMETER_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};