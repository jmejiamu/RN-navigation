import { landscapeTypes, loadAddressTypes } from "../types/index";

const { ADD_LANDSCAPE } = landscapeTypes;
const { LOAD_ADDRESS } = loadAddressTypes;

const initialState = {
  landscape: [],
};

const AddLandscapeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LANDSCAPE:
      return {
        ...state,
        landscape: [...state.landscape, { ...action.save }],
      };
    case LOAD_ADDRESS:
      return {
        landscape: action.address,
      };
    default:
      return state;
  }
};

export default AddLandscapeReducer;
