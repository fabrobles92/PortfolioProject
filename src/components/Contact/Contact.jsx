import { useState, useEffect, forwardRef } from 'react';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Container from '../Container/Container'
import { Formik, Form } from 'formik';
import H2 from '../H2/H2'
import Option from './Option';
import Input from './Form/Input';
import Button from '../Button/Button';
import './Contact.css'

const contactOptions = [
    {icon : <PhoneIphoneIcon sx={{fontSize: "2.5rem"}}/>, contact: '+506 88588289', className: 'Option BorderRight'},
    {icon : <EmailIcon sx={{fontSize: "2.5rem"}}/>, contact: 'fabrobles92@gmail.com', className: 'Option'},
    {icon : <LocationOnIcon sx={{fontSize: "2.5rem"}}/>, contact: 'Costa Rica, Heredia', className: 'Option BorderLeft'},
]

const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validate = (values) => {
  const errors = {}
  
  if(!values.name){
    errors.name = 'Required'
  }else if(!isNaN(values.name)){
    errors.name = 'Only letters'
  }

  if(!values.email){
    errors.email = 'Required'
  }else if(!re.test(values.email)){
    errors.email = 'Invalid Email'
  }

  if(!values.message){
    errors.message = 'Required'
  }

  return errors
}

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Contact() {
  const [state, setState] = useState(null)

  useEffect(() => {
    const time = setTimeout(()=>{
      setState(null)
    }, 5000)
    return () => clearTimeout(time)
  }, [state])

  const handleSubmit = async (values, {resetForm}) => {
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({title: 'foo', body: 'bar', userId: 1,})
      }
      )
      if(!response.ok){
        throw new Error(response.status.toString());
      }
      const data = await response.json()
      setState(true)
      resetForm()
      console.log('Response:', data)
    }catch(Exception){
      console.log(Exception)
      setState(false)
    }
      
  }

  const messageEmail = () => {
    switch (state) {
      case false:
        return(
          <Snackbar open={true} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
            <Alert severity='error' onClose={handleClose} sx={{ width: '100%' }}>
              There was an error sending your message, pls try again.
            </Alert>
        </Snackbar>
        )
      case true:
        return(
          <Snackbar open={true} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              Email has been sent successfully.
            </Alert>
        </Snackbar>
        )
      default:
        return
    }
  }

  const handleClose = (event, reason) => {
    console.log(reason)
    if (reason === 'clickaway') {
      return;
    }

    setState(null);
  };

  console.log({state})
  return (
    <Container>
        <div className='LayoutContact'>
            <H2 style={{color: 'orange'}}>Contact Me</H2>
            <div className='ContactOptions'>
                {contactOptions.map((option) => (
                <Option key={option.contact} classes={option.className} icon={option.icon} contact={option.contact}/>          
                ))}            
            </div>
            <div className='ContactFormLayout'>
              <Formik
              initialValues={{name: '', email: '', message: ''}}
              onSubmit={handleSubmit}
              validate={validate}
              >
                <Form>
                    <Input name='name' label='Name'/>
                    <Input name='email' label='Email'/>
                    <Input name='message' label='Message' type={'textarea'} cols={40} rows={7}/>
                    <Button type="submit">
                      Send Email
                      <SendIcon sx={{fontSize: "2.5rem", marginLeft: "10px"}}/>
                    </Button>
                </Form>
              </Formik>
              {messageEmail()}
            </div>            
        </div>
    </Container>
  )
}

export default Contact