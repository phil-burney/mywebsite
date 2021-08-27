import React from "react"
class Background extends React.Component {
  constructor(props) {
    super(props)
    this.style = {
      position: "absolute",
 
      height: "100%",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      width:"100%",
      zIndex: -2
      
    }

  }
  render(){
    return (
      <div>
        <div id="tint"style={{...this.style, zIndex: -1, backgroundColor : "rgba(200, 0, 0, 0.5)"}}></div>
        <div id="background"style={{...this.style, backgroundImage: "url(" + this.props.image + ")" }}></div>
      </div>
    )
    }
}
export default Background