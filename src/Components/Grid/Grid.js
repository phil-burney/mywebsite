import React from "react";

class Grid extends React.Component{
  constructor(props){
    super(props);

    this.style = {
      padding: this.props.padding,
      backgroundColor: this.props.color
    }
  }
  render(){
  
  return (
    <div className="form" style={this.style}>{this.props.children}</div>)
  }
  



}
export default Grid;