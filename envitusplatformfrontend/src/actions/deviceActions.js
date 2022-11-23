import {
  DEVICE_LIST_FAIL,
  DEVICE_LIST_REQUEST,
  DEVICE_LIST_SUCCESS,
} from "../constants/deviceConstants";

import Axios from "axios";

export const listDevices = () => async (dispatch) => {
  dispatch({
    type: DEVICE_LIST_REQUEST,
  });
  try {
    const data = await Axios.get(`/getdevice`);
    console.log("DATA============", JSON.stringify(data.data).JSON());
    dispatch({ type: DEVICE_LIST_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: DEVICE_LIST_FAIL, payload: error.message });
  }
};
