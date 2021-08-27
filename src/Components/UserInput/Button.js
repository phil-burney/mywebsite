import React from "react";


class Button extends React.Component{
    constructor(props){
        super(props);
        this.style = {
            textDecoration:"none",
            color:"black",
            textAlign:"center",
            padding: 25,
            backgroundColor: "white"
        }
        this.inactiveStyle = { 
            ...this.style,
            color:"grey",
            backgroundColor: "#000000"
        }
        this.link =  "/" + props.link;
        this.myRef = React.createRef()
        
    }
    mouseOver(e) {
        e.currentTarget.style.backgroundColor = "green"
        e.currentTarget.style.color = "white"       
    }
    mouseDown(e) {
        e.currentTarget.style.backgroundColor = "grey"       
    }
    setDefault(e) {
        e.currentTarget.style.backgroundColor = "white"
        e.currentTarget.style.color = "black" 
    }

    render() {
      
        if (this.props.active && this.props.active !== undefined) {
            return (<div  style = {this.style} className="button" id = {this.props.id} onMouseOver={this.mouseOver} 
        onMouseOut={this.setDefault.bind(this)} onMouseDown={this.mouseDown} onMouseUp={this.setDefault} onClick={this.props.onClick}>
                {this.props.text} 
            </div>)
        } else {
            return (<div  style = {this.inactiveStyle} className="button" id = {this.props.id} >
                {this.props.text}
            </div>)
        }

        
    }

}
export default Button;