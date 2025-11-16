import React, { useState } from 'react';
import "./ForgetPass.css";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBCardImage
} from 'mdb-react-ui-kit';
import { useNavigate, Link } from 'react-router-dom';
import imagepass from '../Components/images/imagepass.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function ForgotPass() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    
    <MDBContainer fluid className="p-3 h-100"> 
      <MDBRow className="d-flex justify-content-center align-items-center h-100"> 
        
       
        <MDBCol md='6' lg='5' className='mb-4 mb-md-0'> 
          <MDBCard>
            <MDBCardBody className="p-4">
              <h3 className="mb-4">Reset Password</h3>
              {!submitted ? (
                <>
                  <form onSubmit={handleSubmit}>
                    <MDBInput
                      wrapperClass='mb-3'
                      label='Enter your email'
                      type='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <MDBBtn className="mb-4 w-100" type="submit">
                      Send Reset Link
                    </MDBBtn>
                  </form>
                  <div className="d-flex justify-content-between">
                    <Link to="/">Back to Login</Link>
                    <Link to="/register">Register</Link>
                  </div>
                </>
              ) : (
                <div>
                  <p>Please check your email for instructions to reset your password.</p>
                  <MDBBtn className="w-100" onClick={() => navigate('/login')}>
                    Back to Login
                  </MDBBtn>
                </div>
              )}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        
       
        <MDBCol md='6' lg='5' className="d-flex align-items-center justify-content-center h-100"> 
          
          <div className="p-3">
             <MDBCardImage src={imagepass} alt="Forgot password illustration" style={{ width: '100%', maxWidth: '400px', height: 'auto' }} />
          </div>
        </MDBCol>

      </MDBRow>
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

export default ForgotPass;