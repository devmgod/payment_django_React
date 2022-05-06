import * as types from "./action.type";

const INIT_STATE = {
  userName: "",
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.USER_NAME:
      return { ...state, userName: action.payload };
    default:
      return state;
  }
};
export default reducer;
