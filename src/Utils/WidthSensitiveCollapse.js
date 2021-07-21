import React from "react"
import Button from "../Components/UserInput/Button"

export default class WidthSensitiveCollapse extends React.Component {
  constructor(props){
    super(props);
    this.state = {screenWidth: window.innerWidth}
    this.style = {
      padding: this.props.padding,
      backgroundColor: this.props.color
    }
  }  
  componentDidMount() {
    window.addEventListener('resize', this.setWindowWidth.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.setWindowWidth.bind(this));
  }
  setWindowWidth() {
    this.setState({screenWidth: window.innerWidth})
  }

  render() {
    console.log(this.state.screenWidth)
    return <div>{this.props.children}</div>
    if(this.state.screenWidth < 800){
      
    }
    else{
      return <div></div>
    }
  }
}
