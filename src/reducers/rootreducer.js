import counterReducer from "./counterreducer";
import itemReducer from "./itemreducer";
//import loginReducer from "./loginReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  count: counterReducer,
  fakeStore: itemReducer,
  // login: loginReducer,
});

export default rootReducer;