import { applyMiddleware, createStore } from "redux";
import { quizReducer } from "./quizReducer";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

export const store = createStore(quizReducer, applyMiddleware(thunk, logger));
