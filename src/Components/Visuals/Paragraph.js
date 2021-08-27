import React from "react";
export default class Paragraph extends React.Component{
  constructor(props){
    super(props)
    
    

  }
  render() {
      return (<div style = {this.props.style}>{this.props.content}</div>)
  }
}