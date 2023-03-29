import { AnyAction } from "redux";

import ChatResponseStateTypes, { ChatResponseTypes } from "./types";
import actionTypes from "./actions";

export const initialState: ChatResponseStateTypes = {
  loading: false,
  chat: [],
  success: false,
  message: "",
  error: undefined,
};

function getChatReducer(
  state = initialState,
  action: AnyAction
): ChatResponseStateTypes {
  switch (action.type) {
    case actionTypes.GET_ANSWER:
      return {
        ...initialState,
        loading: true,
      };
    case actionTypes.GET_ANSWER_SUCCESS:
      return {
        ...initialState,
        loading: false,
        chat: action.chat,
        success: action.success,
        message: action.message,
      };
    case actionTypes.GET_ANSWER_FAIL:
      return {
        ...initialState,
        loading: false,
        error: action.error,
        success: action.error?.success,
        message: action.error?.message,
      };
    case actionTypes.GET_ANSWER_RESET:
      return initialState;

    default:
      return state;
  }
}
