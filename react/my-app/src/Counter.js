import React from 'react';

class Counter extends React.Component { 

  constructor(props) {
    super(props);
      this.state = { 
        count : 0 
      };
    this.incrementCountInter = this.incrementCount.bind(this);
    } // constructor

    incrementCount () { 
      this.setState({ 
               count: this.state.count + 1 
        });
      }
      
      
      render () { // invoked when setState is called
        return ( 
          <div>Count: { this.state.count } 
          < button type = "button" onClick = { this.incrementCountInter } > Increment </button> </div>
        );
      } 
}; // class Counter 

export default Counter;