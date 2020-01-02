import {createStore} from "redux";
import reducer from "../reducers";

const store = createStore(reducer);//, {contacts: contacts}); // contacts, is the initial state of the app

export default store;