import React from 'react';
import axios from 'axios';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';

function SignUp2() {

    const signUp=async()=>{
        event.preventDefault()
        let email=document.getElementById("signUpEmail").value
        let password=document.getElementById("signUpPassword").value
        console.log(email, password)
        let myResponse=await axios.post('signUp/',{
          'email':email,
          'password':password
        })
        if(myResponse.data['signup']==true){
            window.location.href="/"
            console.log('signed up success')
        }
        else{
            alert("incorrect input")
            window.location.reload()
        }
    }

    return (
      <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>
  
        <MDBRow>
  
          <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
  
            <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
              Sign up here! <br />
              
            </h1>
  
            
  
          </MDBCol>
  
          <MDBCol md='6' className='position-relative'>
  
            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
  
            <MDBCard className='my-5 bg-glass'>
              <MDBCardBody className='p-5'>
  
                
  
                <MDBInput wrapperClass='mb-4' label='Email' id='signUpEmail' type='email'/>
                <MDBInput wrapperClass='mb-4' label='Password' id='signUpPassword' type='password'/>
  
                
                <br/>
                <MDBBtn className='w-100 mb-4' size='md' onClick={signUp}>sign up</MDBBtn>
  
                <div className="text-center">
  
                  
  
                </div>

                <div>
                  <p className="mb-0">Go back to <a href="/" class="text-white-50 fw-bold">Log In</a></p>
  
                </div>
  
              </MDBCardBody>
            </MDBCard>
  
          </MDBCol>
  
        </MDBRow>
  
      </MDBContainer>
    );
  }
  

export default SignUp2;