import React from 'react'

export default class SideBar extends React.Component{
    constructor(props) {
        super(props)
        this.style = {
            padding: this.props.padding,
            width: 100,
            backgroundColor: this.props.color,
            float:"left",
            minHeight: "100vh",
    
          }
        
     
    }

    render() {
        return(<div id = "sidebar" style = {this.style}>
            {this.props.children}
        </div>)
    }
}