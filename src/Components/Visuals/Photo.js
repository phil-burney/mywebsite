import React from "react"
class Photo extends React.Component {
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
      <div class="photo"style={this.style}></div>
      </div>
    )
    }
}
export default Photo