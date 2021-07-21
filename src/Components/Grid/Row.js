import React from "react";


class Row extends React.Component{
  constructor(props){
    super(props);
    this.flexboxConfig = {
      display: "flex",
      flexWrap: "wrap",
      height: this.props.height,
      paddingTop: this.props.paddingTop
    }
  }
  render(){
  return (
    <div style={this.flexboxConfig} className="row">{this.props.children}</div>

)
  }
  

}
export default Row;