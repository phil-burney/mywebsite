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
  render() {
      return (
        <textarea type="text" id={this.props.name} style={this.style} className="textbox"></textarea>

    )
  }

}
export default TextAreaBox;