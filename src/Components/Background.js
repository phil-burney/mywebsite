import React from "react"
class Background extends React.Component {
  constructor(props) {
    super(props)
    this.style = {
      backgroundImage: "url(" + this.props.image + ")",
      zIndex: -2 
    }

  }
  render(){
    return (
      <div>
      <div id="background"style={{backgroundColor:"rgba(255,255,255,0.5", zIndex: -1}}></div>
      <div id="background"style={this.style}></div>
      </div>
    )
    }
}
export default Background