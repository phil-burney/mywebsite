import Background from "../Components/Background"
import React from 'react'
import Grid from "../Components/Grid/Grid.js"
import Row from "../Components/Grid/Row.js"
import Column from "../Components/Grid/Column"
import Label from "../Components/Grid/Label.js"
import TextInputBox from "../Components/UserInput/TextInputBox.js"
import TextAreaBox from "../Components/UserInput/TextAreaBox.js"
import Button from "../Components/UserInput/Button"
import sendEmail from "../Utils/Email.js"


class ContactMe extends React.Component{
  constructor(props) {
    super(props)
    this.email = sendEmail
    this.state = {
      labelWidth: 200,
      msgBoxHeight:100,
      filledMessage: undefined,
      filledSubject: undefined,
      filledEmail: undefined,
    }
    this.errorStyle = {
      color: "red"
    }
 
  }

  getSubject = (input) => {
    this.setState({subject: input})
    if(input === ""){
      this.setState({filledSubject: false})
    } else {
      this.setState({filledSubject: true})
    }
 
  }
  getContactEmail = (input) => {
    this.setState({email: input})
    if(input === ""){
      this.setState({filledEmail: false})
    } else {
      this.setState({filledEmail: true})
    }
  } 
  getMessage = (input) => {
    this.setState({message: input})
    if(input == ""){
      this.setState({filledMessage: false})
    } else {
      this.setState({filledMessage: true})
    }


  }
  
  validateElements() {
    console.log(this.state.email)
    console.log(this.state.subject)
    console.log(this.state.message)

      
  }
  submitForm = () => { 
    
    this.email(this.state.email, this.state.subject, this.state.message)
    alert("Your message has been submitted!")
    document.getElementById("contact-me-form").reset()
    this.resetElements()
  }
  resetElements = () => {
    this.setState({ email:undefined,
    subject:undefined,
    message:undefined, 
    filledMessage: undefined,
    filledSubject: undefined,
    filledEmail: undefined})
  }
  render(){

    
    let errorForEmail = this.state.filledEmail || this.state.filledEmail === undefined ? " " : "Email must be filled"
    let errorForSubject = this.state.filledSubject || this.state.filledSubject === undefined? " " : "Subject must be filled"
    let errorForMessage = this.state.filledMessage || this.state.filledMessage === undefined? " " : "Message must be filled"
    let buttonActive = this.state.filledEmail && this.state.filledMessage && this.state.filledSubject

    
    return (
        <div>
            <Background image="./background.jpg"></Background>
            <form id="contact-me-form">
              <Grid padding={20}>  
                <Row key="row0">
                  <Column size={1} maxWidth={this.state.labelWidth}><Label name="Contact Email"></Label></Column>
                  <Column size={1} ><TextInputBox name="Contact Email" parentCallback = {this.getContactEmail.bind(this)} required={true} errorMsg = {"Invalid email"}></TextInputBox></Column>

                </Row>
                <Row key="errorRow0" height={20}>
                  <Column size={1} maxWidth={this.state.labelWidth}></Column>
                  <Column size={1} color = {this.errorStyle.color}>{errorForEmail}</Column>
                </Row>


                <Row key="row1" paddingTop={20}>
                  <Column size={1} maxWidth={this.state.labelWidth}><Label name="Subject" ></Label></Column>
                  <Column size={1}><TextInputBox name="Subject" parentCallback = {this.getSubject.bind(this)} required={true}></TextInputBox></Column>

                </Row>
                <Row key="errorRow1" height={20}>
                  <Column size={1} maxWidth={this.state.labelWidth}></Column>
                  <Column size={1} color = {this.errorStyle.color}>{errorForSubject}</Column>
                </Row>
                
                <Row key="row2" paddingTop={20}>
                  <Column size={1} maxWidth={this.state.labelWidth}><Label name="Message"></Label></Column>
                  <Column size={1} height={this.state.msgBoxHeight}><TextAreaBox name="Message" parentCallback = {this.getMessage.bind(this)} required={true}></TextAreaBox></Column>
                </Row>
                <Row key="errorRow2" height={20}>
                  <Column size={1} maxWidth={this.state.labelWidth}></Column>
                  <Column size={1} color = {this.errorStyle.color}>{errorForMessage}</Column>
                </Row>

                <Row></Row>
                
                <Row key="row3" paddingTop={20}>
                  <Column size={1} maxWidth={this.state.labelWidth}><Button active = {buttonActive} text="Submit" onClick={() => {this.submitForm()}}></Button></Column>
                </Row>

              </Grid>
            </form>
        </div>
    )
  }
}
export default ContactMe