import * as types from "./action.type";

export const setUserName = (payload) => {
  return {
    type: types.USER_NAME,
    payload,
  };
};
