import updateList from "./updateList";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  list: updateList,
});

export default allReducers;
