import React from "react";

import { Link } from "react-router-dom";

import { FormatButtonContext } from "./ButtonGroup";



class LinkButton extends React.Component{
    static contextType = FormatButtonContext;
    constructor(props){
        
        super(props);
        this.state = {
            width: 0
        }        
        this.link =  "/" + props.link;

        
    }
    mouseOver(e) {
        e.currentTarget.style.borderBottom = "4px solid white"        
    }
    mouseDown(e) {
        e.currentTarget.style.borderBottom= "4px solid #800850"        
    }
    setDefault(e) {
        e.currentTarget.style.borderBottom = "4px solid black"        
    }
    render() {
       
        return (
        
        <Link to={this.link} style = {this.context.buttonstyle} className="button" id = {this.props.id} 
        onMouseEnter={this.mouseOver} onMouseLeave={this.setDefault} onMouseDown={this.mouseDown} onMouseUp={this.setDefault}>
                {this.props.text}
            </Link>
            )
            
    }

}
export default LinkButton;

//