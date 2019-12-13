class FontChooser extends React.Component {

    constructor(props) {
    super(props);
    this.state = { 
            oculto : true,
            fontsize: parseInt(this.props.size),
            bold : (this.props.bold === 'true')
        };
    } //constructor
    
    resetFontsize(){
        this.setState(
            {fontsize: parseInt(this.props.size)}
        );    
    }

    toggleBold() {
        this.setState( { bold : !this.state.bold } );
    }

    toggle() {
        this.setState(
            {oculto: !this.state.oculto}
        );
    }

    increase() {
        if (this.state.fontsize < parseInt(this.props.max)) {
            this.setState(
                {
                    fontsize: this.state.fontsize+1,
                }
            );    
        } //if
    }

    decrease() {
        if (this.state.fontsize > parseInt(this.props.min)) {
            this.setState(
                {
                    fontsize: this.state.fontsize-1,
                }
            );    
        } // IF
    }

    checkLimits() {
        var answer = false;
        if ((this.state.fontsize == parseInt(this.props.max)) || (this.state.fontsize == parseInt(this.props.min))) {
            answer = true;
        }
        return answer
    }

    render() {
        var bold = this.state.bold ? 'bold' : 'normal' ;
        var color = this.checkLimits() ? 'red' : 'black';
        return(
               <div>
                   <div className={this.state.oculto ? 'hidden' : ''}>
                       <input type="checkbox" id="boldCheckbox" onChange={this.toggleBold.bind(this)} checked={this.state.bold} />

                       <button id="decreaseButton" onClick={this.decrease.bind(this)}>-</button>
                       <span id="fontSizeSpan" onDoubleClick={this.resetFontsize.bind(this)} style={{color: color}}>{this.state.fontsize}</span>
                       <button id="increaseButton" onClick={this.increase.bind(this)}>+</button>

                   </div>    
                   <span id="textSpan" onClick={this.toggle.bind(this)} style={{fontSize: this.state.fontsize, fontWeight:bold}}>
                    {this.props.text}
                   </span>
               </div>
        );
    }
}
