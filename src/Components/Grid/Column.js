import React from "react";

class Column extends React.Component{
  constructor(props){
    super(props);
    this.style = {
      flex: this.props.size,
      paddingRight:20,
      maxWidth: this.props.maxWidth,
      minWidth: 80,
      marginTop:0,
      height: this.props.height

  

    }
  }

  render(){

  return (
    <div className="column" style={this.style}>{this.props.children}</div>

  )
  }

}
export default Column;