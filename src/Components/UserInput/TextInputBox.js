import React from "react";
import ErrorMessage from "./ErrorMessage";

class TextInputBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      error: false
    }
    this.style = {
      width: "100%",
      height:"100%",
      boxSizing:"border-box",
      flex: 0
    }
  }
  handleChange(e) {
    this.setState({error: this.props.parentCallback(e.target.value)})
    
  }
  render() {
    let error
    if(this.state.error){
      error = <ErrorMessage message= {this.props.message}/>
      console.log("a")
    }
      return (

        <input type="text" id={this.props.name} onBlur = {this.handleChange.bind(this)} style={this.style} className="textbox">{error}</input>
        
    )
  }

}
export default TextInputBox;