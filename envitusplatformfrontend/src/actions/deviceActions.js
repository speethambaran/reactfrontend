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
    const deviceData = await Axios.get(`${BASE_URL}/getdevice`).then(async(response)=>{
      let {data} = await Axios.get(`${BASE_URL}/getlivedata`)
      // console.log('LIVE DATA----------',data.message)
      finalRes = data.message
      for (let i = 0;i<finalRes.length;i++){
        if (finalRes[i].deviceId == response.data.message[i].deviceId){
          finalRes[i].AQI = response.data.message[i].latestAQI
          // console.log('HELLO FOUND')
        }else{
          // console.log('NOT FOUND')
        }
        return finalRes
      }
    })
    //  console.log('DEVICE DATA---------->', finalRes)
    dispatch({type: DASHBOARD_DATA_SUCCESS,payload: deviceData.data.message})
  } catch (error) {
    dispatch({ type: DASHBOARD_DATA_FAIL, payload: error.message })
  }
}