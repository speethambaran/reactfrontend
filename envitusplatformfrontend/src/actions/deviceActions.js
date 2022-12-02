import {
  DASHBOARD_DATA_FAIL,
  DASHBOARD_DATA_REQUEST,
  DASHBOARD_DATA_SUCCESS,
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

export const getDashboardData = () => async (dispatch) => {
  dispatch({ type: DASHBOARD_DATA_REQUEST })
  try {
    let finalRes
    const deviceData = await Axios.get(`${BASE_URL}/getdevice`)
    let {data} = await Axios.get(`${BASE_URL}/getlivedata?deviceId=patnaenvtest`)
    data = data.message

    function compare( a, b ) {
      if ( a.receivedTime < b.receivedTime ){
        return -1;
      }
      if ( a.receivedTime > b.receivedTime ){
        return 1;
      }
      return 0;
    }
    let result = data.sort(compare)
    
    dispatch({type: DASHBOARD_DATA_SUCCESS,payload:result.pop()})
  } catch (error) {
    dispatch({ type: DASHBOARD_DATA_FAIL, payload: error.message })
  }
}

// var counts = [4, 9, 15, 6, 2],
//   goal = 5;

// var closest = counts.reduce(function(prev, curr) {
//   return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
// });

// console.log(closest);