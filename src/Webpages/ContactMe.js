import Background from "../Components/Background"
import React, { useCallback } from 'react'
import Grid from "../Components/Grid/Grid.js"
import Row from "../Components/Grid/Row.js"
import Column from "../Components/Grid/Column"
import Label from "../Components/Grid/Label.js"
import TextInputBox from "../Components/UserInput/TextInputBox.js"
import TextAreaBox from "../Components/UserInput/TextAreaBox.js"
import Button from "../Components/UserInput/Button"
import sendEmail from "../Utils/Email.js"
import ErrorMessage from "../Components/UserInput/ErrorMessage"

class ContactMe extends React.Component{
  constructor(props) {
    super(props)
    this.email = sendEmail
    this.state = {
      labelWidth: 200,
      msgBoxHeight:100,
      
      
    }
    this.form = {
      email:undefined,
      subject:undefined,
      message:undefined,
      filledMessage: false,
      filledEmail: false,
      filledSubject: false,
    }
  }

  getSubject = (input) => {
    this.form.subject = input
 
  }
  getContactEmail = (input) => {
    this.form.email = input
  } 
  getMessage = (input) => {
    this.form.message = input


  }
  shouldComponentUpdate(nextState){
    if (nextState.form!== this.form) {
      console.log(this.form)
      return true;
    } else {
      return false;
    }
  } 
  validateElements() {

      this.form.filledEmail= this.state.email !== undefined;
 
   
      this.form.filledMessage= this.state.message !== undefined;


      this.form.filledSubject=this.state.subject !== undefined;
      
  }
  submitForm = () => { 
    console.log(this.form.email !== undefined)
    this.validateElements() 
    console.log(this.form)
 
    
    this.email(this.state.email, this.state.subject, this.state.message)
    
    document.getElementById("contact-me-form").reset()
    this.resetElements()
  }
  resetElements = () => {
    this.setState({ email:undefined,
    subject:undefined,
    message:undefined})
  }
  render(){
    
    
    return (
        <div>
            <Background image="./background.jpg"></Background>
            <form id="contact-me-form">
              <Grid padding={20}>  
                <Row key="row0">
                  <Column size={1} maxWidth={this.state.labelWidth}><Label name="Contact Email"></Label></Column>
                  <Column size={1} ><TextInputBox name="Contact Email" parentCallback = {this.getContactEmail.bind(this)} required={true} errorMsg = {"Invalid email"}></TextInputBox></Column>
                </Row>        
                <Row key="row1" paddingTop={20}>
                  <Column size={1} maxWidth={this.state.labelWidth}><Label name="Subject" ></Label></Column>
                  <Column size={1}><TextInputBox name="Subject" parentCallback = {this.getSubject.bind(this)} required={true}></TextInputBox></Column>
                </Row>
                
                <Row key="row2" paddingTop={20}>
                  <Column size={1} maxWidth={this.state.labelWidth}><Label name="Message"></Label></Column>
                  <Column size={1} height={this.state.msgBoxHeight}><TextAreaBox name="Message" parentCallback = {this.getMessage.bind(this)} required={true}></TextAreaBox></Column>
                </Row>
                <Row key="row3" paddingTop={20}>
                  <Column size={1} maxWidth={this.state.labelWidth}><Button text="Submit" onClick={() => {this.submitForm()}}></Button></Column>
                </Row>
          
              </Grid>
            </form>
        </div>
    )
  }
}
export default ContactMe