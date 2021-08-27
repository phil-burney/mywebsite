import React from "react";
export default class Heading extends React.Component{
  constructor(props){
    super(props)
    this.style = {
      textAlign: "center"

    }
    

  }
  render() {
      switch(this.props.size){
        case 1:
          return <h1 style = {this.style}>{this.props.content}</h1>
        case 2:
          return <h2 style = {this.style}>{this.props.content}</h2>
        case 3:
          return <h3 style = {this.style}>{this.props.content}</h3>
        case 4:
          return <h4 style = {this.style}>{this.props.content}</h4>
        case 5:
          return <h5 style = {this.style}>{this.props.content}</h5>
        case 6:
          return <h6 style = {this.style}>{this.props.content}</h6>
          break;
        default:
          return <h3 style = {this.style}>{this.props.content}</h3>

      }

  }
}