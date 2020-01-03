import {getMessages} from "../static-data";
import {SEND_MESSAGE} from "../constants/action-types";

export default function messages(state=getMessages(10), action) {
	switch(action.type){
	   case SEND_MESSAGE:
	   		return "";
	   default:
       		return state;
	}
};