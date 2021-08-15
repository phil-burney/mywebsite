import React from "react";
import { Link } from "react-router-dom";


class Button extends React.Component{
    constructor(props){
        super(props);
        this.style = {
            textDecoration:"none",
            color:"black",
            textAlign:"center",
            padding: 20,
            backgroundColor: "white"
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
        
        return (<div  style = {this.style} className="button" id = {this.props.id} onMouseOver={this.mouseOver} 
        onMouseOut={this.setDefault.bind(this)} onMouseDown={this.mouseDown} onMouseUp={this.setDefault} onClick={this.props.onClick}>
                {this.props.text} 
            </div>)
    }

}
export default Button;