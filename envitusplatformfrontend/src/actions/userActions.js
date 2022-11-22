import Axios from "axios";
import { BASE_URL } from "../constants/AppliationConstants";
import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
} from "../constants/userConstants";

export const listUsers = () => async (dispatch) => {
  dispatch({
    type: USER_LIST_REQUEST,
  });
  try {
    const data = await Axios.get(`${BASE_URL}/getusers/`);
    dispatch({ type: USER_LIST_SUCCESS, payload: data.data.message });
  } catch (error) {
    dispatch({ type: USER_LIST_FAIL, payload: error.message });
  }
};

export const deleteUser = (userId) => async (dispatch) => {
  dispatch({ type: USER_DELETE_REQUEST, payload: userId });
  try {
    const data = await Axios.post(`${BASE_URL}/users/deleteuser/`);
    console.log("data : ", data);
    dispatch({ type: USER_DELETE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload:
        error.response && error.response.message
          ? error.response.data.message
          : error.message,
    });
  }
};
