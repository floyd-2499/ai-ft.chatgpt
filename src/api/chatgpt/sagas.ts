import { all, put, takeEvery } from "redux-saga/effects";
import { AxiosError, AxiosResponse } from "axios";

import { ChatResponseTypes } from "./types";
import actionTypes from "./actions";
import ChatGPTApiClient from "../client";
import { ResponseTypes } from "../types";

function* getChatSaga({ payload }: { payload: string; type: string }) {
  try {
    const response: AxiosResponse<ResponseTypes<ChatResponseTypes>> =
      yield ChatGPTApiClient.get("davinci/completions", {
        params: {
          max_tokens: 2000,
          n: 1,
          prompt: payload,
          stop: null,
          temperature: 0.7,
        },
      });

    yield put({
      type: actionTypes.GET_ANSWER_SUCCESS,
      chat: response?.data?.data,
      success: response?.data?.success,
      message: response?.data?.message,
    });
  } catch (error) {
    const errorResponse = (error as AxiosError<ResponseTypes<unknown>>)
      .response;
    if (errorResponse?.data?.message) {
      yield put({
        type: actionTypes.GET_ANSWER_FAIL,
        error: errorResponse?.data,
      });
    } else {
      const errorMessage = "Error in loading chat response";
      yield put({
        type: actionTypes.GET_ANSWER_FAIL,
        error: {
          success: false,
          message: errorMessage,
          data: {},
        },
      });
    }
  }
}

export default function* watcherSaga(): Generator {
  yield all([takeEvery(actionTypes.GET_ANSWER, getChatSaga)]);
}
