import {
  ORGANIZATION_LIST_FAIL,
  ORGANIZATION_LIST_REQUEST,
  ORGANIZATION_LIST_SUCCESS,
} from "../constants/organisationConstants";

export const organizationListReducer = (
  state = { loading: true, organizations: [] },
  action
) => {
  switch (action.type) {
    case ORGANIZATION_LIST_REQUEST:
      return { loading: true };
    case ORGANIZATION_LIST_SUCCESS:
      return { loading: false, organizations: action.payload };
    case ORGANIZATION_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
