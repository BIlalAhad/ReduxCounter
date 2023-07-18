import { createStore } from "redux";
import combination from "./reducers";
const store=createStore(combination);
export default store;