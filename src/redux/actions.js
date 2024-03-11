import {
  get_quizData_Failure,
  get_quizData_Request,
  get_quizData_Success,
} from "./ActionTypes";

export const fetch_quizData_Request = () => ({
  type: get_quizData_Request,
});

export const fetch_quizData_Failure = () => ({
  type: get_quizData_Failure,
});

export const fetch_quizData_Success = (quizData) => ({
  type: get_quizData_Success,
  payload: quizData,
});
