import React from "react";

class TextInputBox extends React.Component{
  constructor(props){
    super(props);
    this.style = {
      width: "100%",
      height:"100%",
      boxSizing:"border-box",
      flex: 0
    }
  }
  render() {
      return (

        <input type="text" id={this.props.name} style={this.style} className="textbox"></input>

    )
  }

}
export default TextInputBox;