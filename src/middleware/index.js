// copied from chirper-app example
import thunk from "redux-thunk";
import logger from "./logger";
import { applyMiddleware } from "redux";

export default applyMiddleware(thunk, logger);
