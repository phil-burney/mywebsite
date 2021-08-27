import React from "react"
import BackGround from "../Components/Background"
class Body extends React.Component {
  constructor(props) {
    super(props)
    this.style = {
        height: "100%",
       
        
    
      
      
    }

  }
  render(){
    return (

      <div id="body" style = {this.style}>{this.props.children}</div>

    )
    }
}
export default Body