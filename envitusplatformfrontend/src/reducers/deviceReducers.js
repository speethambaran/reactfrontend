import {
  DEVICE_LIST_FAIL,
  DEVICE_LIST_REQUEST,
  DEVICE_LIST_SUCCESS,
} from "../constants/deviceConstants";

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
