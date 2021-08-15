import React from "react";

class TextAreaBox extends React.Component{
  constructor(props){
    super(props);
    this.style = {
      width: "100%",
      height:"100%",
      boxSizing:"border-box",
      resize: "none",
      alignContent: "stretch"
    }
  }
  handleChange(e) {
    this.props.parentCallback(e.target.value)
    
  }
  render() {
      return (
        <textarea type="text" id={this.props.name} onBlur={this.handleChange.bind(this)} style={this.style} className="textbox"></textarea>

    )
  }

}
export default TextAreaBox;