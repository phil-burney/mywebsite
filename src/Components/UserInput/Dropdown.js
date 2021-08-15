import React from "react";
export default class Dropdown extends React.Component{
  constructor(props){
    super(props)
    this.style = {

    }
    this.state = {showChildren: false}
    this.dropStyle = {

      position: "absolute",
      backgroundColor: "#696969",
      display: "flex",
      flexFlow: "column",
      minWidth: 150,
      zIndex: 1,
      marginTop: 29,
      marginLeft: -25
      
   
    }

  }
  mouseOver(e) {

    this.setState({showChildren: true})   
        
  }
  setDefault(e) {
    e.currentTarget.style.borderBottom = "4px solid black"
    this.setState({showChildren: false}) 
    
  }
  
  render(){
    let children 
    
    if(this.state.showChildren){
      children  = this.props.children
      // <div>
      // <div>Opt1</div>
      // <div>Opt2</div>
      // <div>Opt3</div>
      // </div>
      
    
    }
    return(
      // <div onMouseOver={this.mouseOver.bind(this)} onMouseOut={this.setDefault.bind(this)}>
      //   <div style={this.props.buttonStyle}  >
      //     {this.props.text}
      //   </div>
      //   <div style = {this.dropStyle} >
      //     {children}
      //   </div>
      // </div>
     <div style={this.props.buttonstyle }  onMouseOver={this.mouseOver.bind(this)} onMouseLeave={this.setDefault.bind(this)}>
      
      <div>    
         {this.props.text}
         </div>
            <div style = {this.dropStyle} >
           {children}
         </div>
      </div>
      
      
     
      
    )
  }
  
}