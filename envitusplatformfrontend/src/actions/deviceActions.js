import {
  DEVICE_LIST_FAIL,
  DEVICE_LIST_REQUEST,
  DEVICE_LIST_SUCCESS,
  DEVICE_LIVEDATA_FAIL,
  DEVICE_LIVEDATA_REQUEST,
  DEVICE_LIVEDATA_SUCCESS,
} from "../constants/deviceConstants";

import Axios from "axios";
import { BASE_URL } from "../constants/AppliationConstants";

export const listDevices = () => async (dispatch) => {
  dispatch({
    type: DEVICE_LIST_REQUEST,
  });
  try {
    const data = await Axios.get(`${BASE_URL}/getdevice`);
    dispatch({ type: DEVICE_LIST_SUCCESS, payload: data.data.message });
  } catch (error) {
    dispatch({ type: DEVICE_LIST_FAIL, payload: error.message });
  }
};


export const listLivedata = () => async (dispatch) => {
  dispatch({
    type: DEVICE_LIVEDATA_REQUEST
  })
  try {
    const data = await Axios.get(`${BASE_URL}/getlivedata`)
    dispatch({ type: DEVICE_LIVEDATA_SUCCESS, payload: data.data.message })
  } catch (error) {
    dispatch({ type: DEVICE_LIVEDATA_FAIL, payload: error.message })
  }
}