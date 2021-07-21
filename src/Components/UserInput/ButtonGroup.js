import React from "react";
import useScreenWidth from "../../Hooks/useScreenWidth";
import WidthSensitive from "../../Utils/WidthSensitiveCollapse";
import Grid from "../Grid/Grid";
import Row from "../Grid/Row";

class ButtonGroup extends React.Component{
    constructor(props){
        super(props);
        this.style = {
          padding: this.props.padding,
          backgroundColor: this.props.color
    
        }
      }
    
    render(){

        return (
        
          <Grid color= {this.props.color}>
              <Row>
                <WidthSensitive>
              {this.props.children}
              </WidthSensitive> 
              </Row>
          </Grid>
        
        )}

}
export default ButtonGroup;