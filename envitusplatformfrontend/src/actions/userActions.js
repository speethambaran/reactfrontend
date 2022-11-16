import Axios from "axios";
import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
} from "../constants/userConstants";

export const listUsers = () => async (dispatch) => {
  dispatch({
    type: USER_LIST_REQUEST,
  });
  try {
    const data = await Axios.get(`/getusers/`);
    dispatch({ type: USER_LIST_SUCCESS, payload: data.data.message });
  } catch (error) {
    dispatch({ type: USER_LIST_FAIL, payload: error.message });
  }
};
