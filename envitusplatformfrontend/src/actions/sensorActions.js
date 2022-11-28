import Axios from "axios";
import { BASE_URL } from "../constants/AppliationConstants";
import {
    SENSOR_LIST_FAIL,
    SENSOR_LIST_REQUEST,
    SENSOR_LIST_SUCCESS,
    SENSOR_PARAMETER_FAIL,
    SENSOR_PARAMETER_REQUEST,
    SENSOR_PARAMETER_SUCCESS
}
    from '../constants/sensorConstants'

export const listSensors = () => async (dispatch) => {
    dispatch({
        type: SENSOR_LIST_REQUEST,
    });
    try {
        const data = await Axios.get(`${BASE_URL}/device/adddevicefamily`);
        dispatch({ type: SENSOR_LIST_SUCCESS, payload: data.data.message });
    } catch (error) {
        dispatch({ type: SENSOR_LIST_FAIL, payload: error.message });
    }
};

export const listSensorParameters = () => async (dispatch) => {
    dispatch({
        type: SENSOR_PARAMETER_REQUEST,
    })
    try {
        const data = await Axios.get(`${BASE_URL}/sensor/getsensor`)
        dispatch({ type: SENSOR_PARAMETER_SUCCESS, payload: data.data.data })
    } catch (error) {
        dispatch({ type: SENSOR_PARAMETER_FAIL, payload: error.message })
    }
}