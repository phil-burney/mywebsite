
import emailjs from 'emailjs-com';

export default function sendEmail(replyAt, subject, text){
  emailjs.init("user_xhA5EG3fRbjyoadc84Wao");
  let templateParams = {
    userSubject: subject,
    userEmail: replyAt,
    message: text

  }
  console.log(templateParams)
  // emailjs.send("gmail", "template_bcs1yfp", templateParams, "user_xhA5EG3fRbjyoadc84Wao")
  //   .then(function(response){
  //     console.log('Success!', response.status, response.text)
  //   }, function (error){
  //     console.log('Failure', error)
  //   })

  // templateParams = {
  //   userSubject: undefined,
  //   userEmail: undefined,
  //   message: undefined

  // }

 
}