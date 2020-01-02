import {createStore} from "redux";
import reducer from "../reducers";

const initialState = {tech : "Python & Php & Javascript"};
const store = createStore(reducer, initialState);
export {store};