

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { signIn, signUp } from '../../actions/userActions';

function SignUpModal() {
  const dispatch = useDispatch()

  const [firstName, setFirstName]= useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false)
  const [password, setPassword] = useState('')
  const [ confirmPass, setConfrimPass] = useState('')
  const [show, setShow] = useState(false);


  const signUpHandler = async (e)=>{
    e.preventDefault()
    if(password !==confirmPass){
      alert('Passwords do not match')
    } 
    await dispatch(signUp(firstName,lastName,email.toLowerCase(),password, isAdmin, ))
    dispatch(signIn(email,password))

  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Sign Up
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={signUpHandler}>
         <Form.Control type='text' onChange={(e)=>setFirstName(e.target.value)} value ={firstName} placeholder='First name' />
         <Form.Control type='text' onChange={(e)=>setLastName(e.target.value)} value={lastName} placeholder='Surname'/>
         <Form.Control type='email' onChange={(e)=>setEmail(e.target.value)} value ={email} placeholder='email'/>
         <Form.Control type='password' onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='password'/>
         <Form.Control type='password' onChange={(e)=>setConfrimPass(e.target.value)} value={confirmPass} placeholder='confirm password'/>

     
      <Modal.Footer>
      <Button variant="success" type="submit">
        Submit
      </Button>
        </Modal.Footer>
     
          </Form>
        </Modal.Body>
    
      </Modal>
    </>
  );
}

// render(<SignUpModal />);
export default SignUpModal
