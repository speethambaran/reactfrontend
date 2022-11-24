import Axios from "axios";
import { BASE_URL } from "../constants/AppliationConstants";
import {
  ORGANIZATION_LIST_FAIL,
  ORGANIZATION_LIST_REQUEST,
  ORGANIZATION_LIST_SUCCESS,
} from "../constants/organisationConstants";

export const listOrganization = () => async (dispatch) => {
  dispatch({
    type: ORGANIZATION_LIST_REQUEST,
  });
  try {
    const data = await Axios.get(`${BASE_URL}/getorganization/`);
    dispatch({ type: ORGANIZATION_LIST_SUCCESS, payload: data.data.message });
  } catch (error) {
    dispatch({ type: ORGANIZATION_LIST_FAIL, payload: error.message });
  }
};
