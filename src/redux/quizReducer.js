import {
  get_quizData_Failure,
  get_quizData_Request,
  get_quizData_Success,
} from "./ActionTypes";

const inititialState = {
  quizData: [],
  isLoading: false,
  isError: false,
};

export const quizReducer = (state = inititialState, action) => {
  switch (action.type) {
    case get_quizData_Request:
      return {
        ...state,
        isLoading: true,
      };
    case get_quizData_Failure:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case get_quizData_Success:
      return {
        ...state,
        isLoading: false,
        quizData: action.payload,
      };
    default:
      return state;
  }
};
