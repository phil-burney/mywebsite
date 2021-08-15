import React from "react";

class ErrorMessage extends React.Component{
  constructor(props){
    super(props);
    this.style = {
      color: "red"
    }
  }
  
  render() {
    
    return (<div>{this.props.message}</div>)
  }

}
export default ErrorMessage;