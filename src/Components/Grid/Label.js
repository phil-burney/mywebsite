import React from "react";

class Label extends React.Component{
  render(){
  return (
    <label htmlFor={this.props.name}>{this.props.name}</label>
  )
  }


}
export default Label;