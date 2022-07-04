import { landscapeTypes } from "../types/index";

const { ADD_LANDSCAPE } = landscapeTypes;
const SIGN_UP = "SIGN_UP";
const SIGN_IN = "SIGN_IN";

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

    default:
      return state;
  }
};

export default AddLandscapeReducer;
