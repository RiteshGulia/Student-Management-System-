import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import signupImage from '../Components/images/2120416.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './RegistrationForm.css';
import React, { useState } from 'react';
import axios from 'axios';

function Registration() {
       const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.id]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2) {
            alert('Passwords do not match');
            return;
        }

        try {
            const config = { headers: { 'Content-Type': 'application/json' } };
            const body = JSON.stringify({ name, email, password });
            
            
            const res = await axios.post('http://localhost:5000/api/users/register', body, config);
            
            alert(res.data.msg || 'Registration successful!');
            
        } catch (err) {
            alert(err.response?.data?.msg || 'Registration failed'); 
            console.error(err);
        }
    };
  return (
 
    <MDBContainer className="p-3 h-100">
      <MDBCard className='text-black md-card-style d-flex align-items-center' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow className='d-flex align-items-center h-100'>
            <MDBCol col='12' md='6' className='order-2 order-md-1 d-flex flex-column align-items-center justify-content-center'>

              <form onSubmit={onSubmit}>
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <div className="d-flex flex-row align-items-center mb-4 w-100">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Your Name' id='name' type='text' className='w-100' value={name} onChange={onChange} required/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4 w-100">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Your Email' id='email' type='email' value={email} onChange={onChange} required/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4 w-100">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' id='password' type='password' value={password} onChange={onChange} minLength={6} required/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4 w-100">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput label='Repeat your password' id='password2' type='password' value={password2} onChange={onChange} minLength={6} required/>
              </div>

              <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Agree with ours terms and policy' required />
              </div>

              <MDBBtn className='mb-3' size='lg'>Register</MDBBtn>

              
              <p className="small fw-bold mt-2 pt-1 mb-2">Already have an account? <Link className="link-danger" to="/">Sign in</Link></p>
              </form>
            </MDBCol>
            <MDBCol col='12' md='6' className='order-1 order-md-2 d-flex align-items-center justify-content-center'>
              <MDBCardImage src = {signupImage} className = "img-fluid" alt = "image" />
            </MDBCol>
            
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      
      
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary mt-auto">
          
        <div className="text-white mb-3 mb-md-0">
          Made by Ritesh Gulia
        </div>

        <div>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
            <FontAwesomeIcon icon={faFacebookF} size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <FontAwesomeIcon icon={faTwitter} size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <FontAwesomeIcon icon={faGoogle} size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <FontAwesomeIcon icon={faLinkedinIn} size="md"/>
          </MDBBtn>

        </div>

      </div>

    </MDBContainer>
  );
}

export default Registration;