import React from "react";
import Dropdown from "../UserInput/Dropdown"

export const FormatButtonContext = React.createContext()
export class ButtonBar extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
          screenWidth: window.innerWidth,
          
          
        }
        this.style = {
          padding: this.props.padding,
          backgroundColor: this.props.color,
          marginBottom: 50,
          display:"flex",
          alignItems:"flex-end"

        }
        this.buttonstyle = {
          width: this.props.buttonMinWidth,
          textDecoration:"none",
          color:"black",
          borderBottom: "4px solid black",
          textAlign: "center",
          minHeight: 25,
          padding: 25,
          
          
          
          
        }
        this.shownChildren = []
        this.unshownChildren = []
        this.handleScreenChange()
        
      }
      handleScreenChange(){
        let childCounter = 0;
        this.shownChildren = [];
        this.unshownChildren = [];
        

        React.Children.forEach(this.props.children, (child) => {
          if(this.state.screenWidth > childCounter * ((this.buttonstyle.width + this.buttonstyle.padding)* 2)){
            this.shownChildren.push(child)
          }
          else {
            this.unshownChildren.push(child);
          }
          childCounter++;
        })
        
      }
      componentDidMount() {
        window.addEventListener('resize', this.setWindowWidth.bind(this));
        this.setState({screenWidth: window.innerWidth})
      }
      componentWillUnmount() {
        this.setState({screenWidth: window.innerWidth})
        window.removeEventListener('resize', this.setWindowWidth.bind(this));
      }
      setWindowWidth() {
        this.setState({screenWidth: window.innerWidth})
        this.handleScreenChange()
      }

      
 
    render(){
        let dropDown;
        if(this.unshownChildren.length > 0){
          dropDown = <Dropdown text={"More ∨"} buttonstyle = {this.buttonstyle}>{this.unshownChildren}</Dropdown>
        }

        return (
          <FormatButtonContext.Provider value = {{buttonstyle: this.buttonstyle}}>
          <div id="buttongroup"  style={this.style}>
            
            {this.shownChildren}
            {dropDown}
            
          </div>
          
          </FormatButtonContext.Provider>
              
        )}

}
export default ButtonBar;
