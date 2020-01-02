import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import ButtonGroup from "./ButtonGroup";
import * as unique_source from './store';


class App extends Component {
  render() {
  	return [
    	<HelloWorld key={1} tech={unique_source.store.getState().tech} />,
    	<ButtonGroup key={2} technologies={["React", "Elm", "React-redux"]} />,
    ];
  }
} // class App

export default App;
