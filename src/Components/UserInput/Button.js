import React from "react";
import { Link } from "react-router-dom";


class Button extends React.Component{
    constructor(props){
        super(props);
        this.style = {
            textDecoration:"none",
            color:"black",
            borderBottom: "4px solid black"
        }
        this.link =  "/" + props.link;
        this.myRef = React.createRef()
        
    }
    mouseOver(e) {
        e.currentTarget.style.borderBottom = "4px solid white"        
    }
    mouseDown(e) {
        e.currentTarget.style.borderBottom= "4px solid #800085"        
    }
    setDefault(e) {
        e.currentTarget.style.borderBottom = "4px solid black"        
    }
    render() {
        
        return (<Link to={this.link} ref={this.myRef} style = {this.style} className="button" id = {this.props.id} onMouseOver={this.mouseOver} 
        onMouseOut={this.setDefault} onMouseDown={this.mouseDown} onMouseUp={this.setDefault}>
                {this.props.text}
            </Link>)
    }

}
export default Button;