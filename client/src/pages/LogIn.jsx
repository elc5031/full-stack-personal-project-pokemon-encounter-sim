import React from 'react';
import axios from 'axios';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function LogIn() {

    const signIn=async()=>{
        event.preventDefault()
        let email=document.getElementById("signInEmail").value
        let password=document.getElementById("signInPassword").value
        console.log(email, password + "logged in")
        let myResponse=await axios.post('signIn/',{
          'email':email,
          'password':password
        })
        console.log(myResponse.data)
        if (myResponse.data["signIn"]==true){
          window.location.href="#/SimStart"
        }
        else{
            alert("incorrect input")
            window.location.reload()
        }
    }

    return (
      <MDBContainer fluid>
  
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
  
            <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
              <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
  
                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-white-50 mb-5">Please enter your login and password!</p>
  
                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email Address' id='signInEmail' type='email' size="lg"/>
                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='signInPassword' type='password' size="lg"/>
  
                <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
                <MDBBtn outline className='mx-2 px-5' color='white' size='lg' onClick={signIn}>
                  Login
                </MDBBtn>  
                
  
                <div>
                  <p className="mb-0">Don't have an account? <a href="#/signUp2" class="text-white-50 fw-bold">Sign Up</a></p>
  
                </div>
              </MDBCardBody>
            </MDBCard>
  
          </MDBCol>
        </MDBRow>
  
      </MDBContainer>
    );
  }

export default LogIn