import Background from "../Components/Background"
import React from 'react'
import Grid from "../Components/Grid/Grid.js"
import Row from "../Components/Grid/Row.js"
import Column from "../Components/Grid/Column"
import Label from "../Components/Grid/Label.js"
import TextInputBox from "../Components/UserInput/TextInputBox.js"
import TextAreaBox from "../Components/UserInput/TextAreaBox.js"

function ContactMe() {

  let labelWidth = 100;
  let msgBoxHeight= 200;

  return (
      <div>
          <Background image="./background.jpg"></Background>
          <Grid padding={20} > 
          <Row key="row1">
            <Column size={1} maxWidth={labelWidth}><Label name="Subject"></Label></Column>
            <Column size={1} ><TextInputBox name="Subject"></TextInputBox></Column>
          </Row>
          <Row key="row2" paddingTop={20}>
            <Column size={1} maxWidth={labelWidth} ><Label name="Message"></Label></Column>
            <Column size={1} height={msgBoxHeight}><TextAreaBox name="Message"></TextAreaBox></Column>
          </Row>
          
          
          </Grid>
      </div>
  )
}
export default ContactMe