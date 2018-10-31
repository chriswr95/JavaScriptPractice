class FontChooser extends React.Component {

  constructor(props) {
     super(props);
     this.state = {
       size: this.props.size,
       bold: (this.props.bold == 'true') ? true : false,
       hidden: true
     }
  }

  toggle(){
    this.setState({hidden: !this.state.hidden});
  }

  toggleBold(){
    this.setState({bold: !this.state.bold});
  }

  decrimentFontSize(){
    if(parseInt(this.state.size) > parseInt(this.props.min)){
      this.setState({size: this.state.size - 1});
    }
  }

  incrimentFontSize(){
    console.log(typeof this.state.size);
    if(parseInt(this.state.size) < parseInt(this.props.max)){
      this.setState({size: parseInt(this.state.size) + 1});
    }
  }

  dblclick(){
    this.setState({size: this.props.size});
  }

  render() {

    var style = {};
    if(this.state.bold == true){
      style.fontWeight = 'bold';
    }
    if(this.state.size == this.props.min || this.state.size == this.props.max){
      style.color = 'red';
    }
    style.fontSize = this.state.size + 'px';
    return(

	       <div>
	       <input type="checkbox"
            id="boldCheckbox"
            hidden={this.state.hidden}
            checked={this.state.bold}
            onChange={this.toggleBold.bind(this)}/>
	       <button id="decreaseButton" hidden={this.state.hidden} onClick={this.decrimentFontSize.bind(this)}>-</button>
	       <span id="fontSizeSpan" hidden={this.state.hidden} onDoubleClick={this.dblclick.bind(this)}> {this.state.size} </span>
	       <button id="increaseButton" hidden={this.state.hidden} onClick={this.incrimentFontSize.bind(this)}>+</button>
         <span id="textSpan" style={style} onClick={this.toggle.bind(this)}>{this.props.text}</span>
	       </div>
	      );
    }
}
