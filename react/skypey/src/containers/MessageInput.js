import React from "react";
import store from "../store";
import { setTypingValue, sendMessage } from "../actions";
import "./MessageInput.css";
   
const MessageInput = ({ value }) => {
	const handleChange = e => {
	       store.dispatch(setTypingValue(e.target.value));
	};
	const handleSubmit = e => {
		e.preventDefault();
		//const {activeUserId} = store.state.activeUserId;
		//const {typing} = store.state.typing;
		const elestado = store.getState();
		const { typing, activeUserId } = elestado;
		store.dispatch(sendMessage(typing, activeUserId));

	};
	     return (
	       <form className="Message" onSubmit={handleSubmit}>
	         <input
	           className="Message__input"
	           onChange={handleChange}
	           value={value}
	           placeholder="write a message"
	/> 
			</form>
	); 
};

export default MessageInput;